import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import packageInfo from "../package.json";
import PageEntrance from "./page-entrance";

export default function SiteShell({ children }: { children: ReactNode }) {
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7);

  return (
    <PageEntrance>
      <div className="ambient-background" aria-hidden="true" />
      <header data-entrance="0" className="absolute inset-x-5 top-5 flex items-center justify-between">
        <Link
          href="/"
          aria-label="qath"
          className="flex items-center opacity-60 transition-opacity hover:opacity-100 focus:opacity-100"
        >
          <Image
            src="/qath.svg"
            alt="qath"
            width={64}
            height={26}
            priority
            className="h-auto w-12 sm:w-14"
          />
        </Link>

        <nav aria-label="Social links" className="flex items-center">
          <SocialLink href="https://github.com/qath-eu" label="GitHub">
            <GitHubIcon className="size-4.5" />
          </SocialLink>

          <SocialLink
            href="https://linkedin.com/company/qath-eu"
            label="LinkedIn"
          >
            <LinkedInIcon className="size-4.5" />
          </SocialLink>
        </nav>
      </header>

      {children}

      <footer data-entrance="0.76" className="absolute bottom-4 right-5 text-right sm:bottom-5">
        {commitSha ? (
          <a
            href={`https://github.com/qath-eu/web/commit/${process.env.VERCEL_GIT_COMMIT_SHA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-wide text-white/60 transition-colors hover:text-white focus:text-white"
          >
            build {commitSha}
          </a>
        ) : (
          <span className="font-mono text-[10px] tracking-wide text-white/60">
            {process.env.NODE_ENV === "production" ? `v${packageInfo.version}` : "development"}
          </span>
        )}
      </footer>
    </PageEntrance>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-8 items-center justify-center text-white opacity-60 transition-opacity hover:opacity-100 focus:opacity-100"
    >
      {children}
    </a>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.15v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}
