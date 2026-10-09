"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  ["Vision", "#vision"],
  ["Products", "#products"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Shavo home">
          <Image className="brand-icon" src="/images/logo.png" alt="" width={32} height={32} priority />
          shavo<span className="wordmark-dot">.</span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </div>
        <a className="nav-contact" href="mailto:hello@shavo.ch">Start a conversation <Arrow /></a>
        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span /> <span />
        </button>
      </nav>
      {isOpen && (
        <div className="mobile-menu shell">
          {links.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setIsOpen(false)}>{label}</a>
          ))}
          <a href="mailto:hello@shavo.ch" onClick={() => setIsOpen(false)}>Start a conversation</a>
        </div>
      )}
    </header>
  );
}

export function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M2 8h11M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>;
}
