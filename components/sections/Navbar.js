"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import Image from "next/image";

function NavItem({ href, children, onClick, style, ...props }) {
  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={onClick} style={style} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} style={style} {...props}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled
            ? "rgba(13, 27, 42, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid #1A3048"
            : "1px solid transparent",
        }}
      >
        <div className="section-wrap">
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}>

            {/* ── Logo ── */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <Image
                src="/YparkWhite.png"
                alt="YPark Logo"
                width={120}
                height={120}
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav
              className="show-desktop"
              style={{ gap: "2rem" }}
            >
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#8BA8C8",
                    textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#E8F4FD"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#8BA8C8"}
                >
                  {link.label}
                </NavItem>
              ))}
            </nav>

            {/* ── Desktop CTAs ── */}
            <div
              className="show-desktop"
              style={{ alignItems: "center", gap: "0.75rem" }}
            >
              <Link
                href="/partners"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.5rem 1.125rem",
                  borderRadius: "0.625rem",
                  border: "1px solid #1A3048",
                  background: "transparent",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#8BA8C8",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1565C0";
                  e.currentTarget.style.color = "#E8F4FD";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1A3048";
                  e.currentTarget.style.color = "#8BA8C8";
                }}
              >
                For Partners
              </Link>

              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "0.5rem 1.125rem", fontSize: "0.82rem" }}
              >
                Download App
                <svg
                  width="14" height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 16V8M8 12l4 4 4-4" />
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                </svg>
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              type="button"
              className="show-mobile"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span style={{
                display: "block",
                width: "22px", height: "2px",
                background: "#E8F4FD",
                borderRadius: "2px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "none",
              }} />
              <span style={{
                display: "block",
                width: "22px", height: "2px",
                background: "#E8F4FD",
                borderRadius: "2px",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block",
                width: "22px", height: "2px",
                background: "#E8F4FD",
                borderRadius: "2px",
                transition: "transform 0.3s ease",
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "#0D1B2A",
          display: "flex",
          flexDirection: "column",
          padding: "5.5rem 1.5rem 2rem",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        {/* Nav links */}
        <nav style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          flex: 1,
        }}>
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#E8F4FD",
                textDecoration: "none",
                padding: "1rem 0",
                borderBottom: "1px solid #1A3048",
                fontFamily: "'DM Sans', sans-serif",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#77A7DF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#E8F4FD"}
            >
              {link.label}
            </NavItem>
          ))}
        </nav>

        {/* Mobile CTAs */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          marginTop: "2rem",
        }}>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{
              justifyContent: "center",
              fontSize: "1rem",
              padding: "0.875rem",
            }}
          >
            Download App
          </a>
          <Link
            href="/partners"
            className="btn-secondary"
            onClick={() => setMenuOpen(false)}
            style={{
              justifyContent: "center",
              fontSize: "1rem",
              padding: "0.875rem",
            }}
          >
            For Partners
          </Link>
          <Link
            href="/find-parking"
            onClick={() => setMenuOpen(false)}
            style={{
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#506A84",
              textDecoration: "none",
              padding: "0.5rem",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#8BA8C8"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#506A84"}
          >
            Find Parking →
          </Link>
        </div>

        {/* Bottom credit */}
        <div style={{
          marginTop: "1.5rem",
          paddingTop: "1.25rem",
          borderTop: "1px solid #1A3048",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span style={{
            fontSize: "0.72rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            A product of Prothom Analytica India
          </span>
          <a
            href="https://prothomai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.72rem",
              color: "#506A84",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#8BA8C8"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#506A84"}
          >
            prothomai.com →
          </a>
        </div>
      </div>
    </>
  );
}