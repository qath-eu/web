"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { animate } from "framer-motion/dom/mini";

export default function PageEntrance({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    // The server-rendered page stays visible without JavaScript or animation support.
    if (!root.current || typeof window.matchMedia !== "function" ||
        typeof Element.prototype.animate !== "function") return;

    const preference = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!preference.matches) return;

    const elements = Array.from(root.current.querySelectorAll<HTMLElement>("[data-entrance]"));
    const animations: ReturnType<typeof animate>[] = [];
    let disposed = false;
    let restoreScrolling: (() => void) | undefined;

    const restore = () => {
      restoreScrolling?.();
      animations.forEach((animation) => animation.cancel());
      elements.forEach((element) => {
        element.style.removeProperty("opacity");
        element.style.removeProperty("transform");
      });
    };
    const onPreferenceChange = () => {
      if (!preference.matches) {
        disposed = true;
        restore();
      }
    };

    // Older Safari uses the legacy MediaQueryList listener API.
    if (preference.addEventListener) preference.addEventListener("change", onPreferenceChange);
    else preference.addListener(onPreferenceChange);

    void import("framer-motion/dom/mini").then(async ({ animate }) => {
      if (disposed || !preference.matches) return;
      // Only lock scrolling while animations run; preserve existing inline styles.
      const scrollStyles = [document.documentElement, document.body].map((element) => ({
        element,
        overflow: element.style.getPropertyValue("overflow"),
        priority: element.style.getPropertyPriority("overflow"),
      }));
      restoreScrolling = () => {
        scrollStyles.forEach(({ element, overflow, priority }) => {
          if (overflow) element.style.setProperty("overflow", overflow, priority);
          else element.style.removeProperty("overflow");
        });
        restoreScrolling = undefined;
      };
      scrollStyles.forEach(({ element }) => element.style.setProperty("overflow", "hidden"));

      elements.forEach((element) => {
        animations.push(animate(element, {
          opacity: [0, 1],
          transform: ["translateY(36px)", "translateY(0px)"],
        }, {
          duration: 1.1,
          delay: Number(element.dataset.entrance) || 0,
          ease: [0.16, 1, 0.3, 1],
        }));
      });
      await Promise.all(animations);
      restoreScrolling?.();
    }).catch(restore);

    return () => {
      disposed = true;
      restore();
      if (preference.removeEventListener) preference.removeEventListener("change", onPreferenceChange);
      else preference.removeListener(onPreferenceChange);
    };
  }, []);

  return (
    <main ref={root} className="hero relative flex items-center justify-center px-5 py-24">
      {children}
    </main>
  );
}
