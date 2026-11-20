"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { appUrl } from "@/lib/site";

const links = [
  ["Business OS", "/erp"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Insights", "/blog"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("navigation-toggle")?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Logo priority />
        <nav id="main-navigation" className={`nav-links${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <a className="nav-app-link" href={appUrl}>Open app <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
        <div className="nav-actions">
          <a className="button button-dark nav-cta" href={appUrl}>Open app <ArrowUpRight size={15} /></a>
          <button id="navigation-toggle" className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="main-navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
    </header>
  );
}
