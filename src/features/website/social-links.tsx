import { externalLinks } from "./site-content";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="Social media">
      <a href={externalLinks.instagramUrl} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
        <span className="sr-only">Pearl Island on Instagram (opens in a new tab)</span>
      </a>
      <a href={externalLinks.facebookUrl} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.2 21v-7.8h2.6l.4-3.1h-3V8.2c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.4-.1-2.5 0-4.1 1.5-4.1 4.3v2H8.3v3.1h2.6V21h3.3Z" />
        </svg>
        <span className="sr-only">Pearl Island on Facebook (opens in a new tab)</span>
      </a>
    </div>
  );
}
