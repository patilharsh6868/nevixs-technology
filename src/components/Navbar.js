"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Logo from "@/components/Logo";

const links = [
  ["About", "/about"],
  ["ERP", "/erp"],
  ["Services", "/services"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark-mode"));
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    document.documentElement.classList.toggle("dark-mode", nextDark);
    setDark(nextDark);
    try {
      localStorage.setItem("nevixs-theme", nextDark ? "dark" : "light");
    } catch (error) {
      console.warn("Unable to save the Nevixs theme preference.", error);
    }
  }

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Logo />
        <nav className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>
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
