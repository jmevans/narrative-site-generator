"use client";

import { useState, useEffect } from "react";
import { site } from "../content/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(22,24,31,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <div
        className="nav-inner"
        style={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <a
          href="#"
          className="font-heading"
          style={{ color: "#f2ede6", fontSize: 18, fontWeight: 600, textDecoration: "none" }}
        >
          {site.nav.name}
        </a>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {site.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body"
              style={{
                color: "#9a9aaa",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f2ede6")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9a9aaa")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.nav.cta.href}
            className="font-body"
            style={{
              background: "#e8722a",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              padding: "8px 16px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#cf5f1a")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8722a")}
          >
            {site.nav.cta.label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 2,
              background: "#f2ede6",
              transition: "transform 0.2s",
              transform: open ? "rotate(45deg) translate(0, 8px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 20,
              height: 2,
              background: "#f2ede6",
              transition: "opacity 0.2s",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 20,
              height: 2,
              background: "#f2ede6",
              transition: "transform 0.2s",
              transform: open ? "rotate(-45deg) translate(0, -8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#1e2130",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {site.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body"
              style={{ color: "#f2ede6", fontSize: 18, textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.nav.cta.href}
            className="font-body"
            style={{
              background: "#e8722a",
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              padding: "12px 16px",
              borderRadius: 4,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
            }}
            onClick={() => setOpen(false)}
          >
            {site.nav.cta.label}
          </a>
        </div>
      )}

      <style>{`
        .nav-inner {
          max-width: none;
          padding: 0 clamp(28px, 8vw, 168px);
        }

        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-inner { padding: 0 24px; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
