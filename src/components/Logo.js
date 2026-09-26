import Link from "next/link";

export default function Logo({ light = false }) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="Nevixs Technology home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="presentation">
          <path d="M8 23V9l10 10V9h6v14L14 13v10H8Z" fill="currentColor" />
          <path d="M22 7h3v3h-3z" fill="var(--teal)" />
        </svg>
      </span>
      <span className="brand-name">Nevixs<small>TECHNOLOGY</small></span>
    </Link>
  );
}
