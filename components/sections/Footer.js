"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "How It Works",  href: "/#how-it-works",  external: false },
    { label: "Features",      href: "/#features",      external: false },
    { label: "For Partners",  href: "/partners",       external: false },
    { label: "Find Parking",  href: "/find-parking",   external: false },
    { label: "For Operators", href: "/yadmin",         external: false },
  ],
  "Prothom Analytica": [
    { label: "What We See",   href: "https://prothomai.com/#what-we-see",   external: true },
    { label: "How We Think",  href: "https://prothomai.com/#how-we-think",  external: true },
    { label: "Who We Are",    href: "https://prothomai.com/#who-we-are",    external: true },
    { label: "What We Build", href: "https://prothomai.com/#what-we-build", external: true },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy",       external: false },
    { label: "Terms of Service", href: "/terms",         external: false },
    { label: "Cookie Policy",    href: "/cookie-policy", external: false },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A1628",
        borderTop: "1px solid #1A3048",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Main Grid - 4 Columns ── */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "3rem",
            padding: "3rem 0 2rem",
          }}
        >
          {/* Column 1: Brand + Download */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Image
                src="/ypark-white.png"
                alt="YPark Logo"
                width={172}
                height={172}
                style={{ objectFit: "contain", marginLeft: "-40px", marginTop: "-30px", marginBottom: "-50px" }}
              />
            </Link>

            <p style={{
              fontSize: "0.8rem",
              color: "#506A84",
              lineHeight: 1.7,
              maxWidth: "260px",
              fontFamily: "'DM Sans', sans-serif",
              margin: 0,
            }}>
              India&apos;s organized parking marketplace.
            </p>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                background: "#0063FF",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                width: "fit-content",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#0B05C7"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#0063FF"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.33.18.7.19 1.04.03l13.2-7.62-2.8-2.8-11.44 10.39zM.5 1.08C.18 1.43 0 1.96 0 2.64v18.72c0 .68.18 1.21.5 1.56l.08.08 10.49-10.49v-.24L.58 1z" />
                <path d="M14.64 15.6l-3.5-3.5 3.5-3.5 3.95 2.28c1.13.65 1.13 1.72 0 2.37l-3.95 2.35z" />
                <path d="M3.18.24L14.64 7.9l-2.8 2.8L1.22.32C.87.14.5.16.18.48L3.18.24z" />
              </svg>
              Download App
            </a>
          </div>

          {/* Columns 2-4: Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {group}
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}>
                {links.map((link) => (
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.8rem",
                        color: "#8BA8C8",
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#E8F4FD"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#8BA8C8"}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{
                        fontSize: "0.8rem",
                        color: "#8BA8C8",
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#E8F4FD"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#8BA8C8"}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1.25rem 0",
          borderTop: "1px solid #1A3048",
        }}>
          <div style={{
            fontSize: "0.7rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            © {new Date().getFullYear()} YPark. A product of{" "}
            <a
              href="https://prothomai.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#506A84",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#77A7DF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#506A84"}
            >
              Prothom Analytica India
            </a>
          </div>

          <div style={{
            fontSize: "0.7rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}>
            Made with <span style={{ color: "#C0392B" }}>♥</span> in India
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}