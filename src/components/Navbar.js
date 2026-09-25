"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Work", "/portfolio"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nevixs-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", dark);
    localStorage.setItem("nevixs-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Nevixs Technology home">
          <span className="brand-mark">N</span>
          <span>Nevixs<small>TECHNOLOGY</small></span>
        </Link>
        <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} className={pathname === href ? "active" : ""} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link className="button button-dark nav-cta" href="/contact">Let&apos;s talk <ArrowUpRight size={15} /></Link>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
