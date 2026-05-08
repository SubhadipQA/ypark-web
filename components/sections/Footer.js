"use client";

import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "How It Works",   href: "/#how-it-works",   external: false },
    { label: "Parking Types",  href: "/#parking-types",  external: false },
    { label: "For Partners",   href: "/partners",         external: false },
    { label: "Find Parking",   href: "/find-parking",    external: false },
    { label: "Download App",   href: "https://play.google.com/store", external: true },
  ],
  Company: [
    { label: "Prothom Analytica", href: "https://prothomai.com", external: true },
    { label: "About",             href: "https://prothomai.com/about", external: true },
    { label: "Insights",          href: "https://prothomai.com/insights", external: true },
    { label: "Contact",           href: "https://prothomai.com/#contact", external: true },
  ],
  Legal: [
    { label: "Privacy Policy",  href: "/privacy",  external: false },
    { label: "Terms of Service", href: "/terms",   external: false },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/prothom-analytica-india",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ypark.in",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@ypark",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState("idle");
  const [subError, setSubError] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setSubError("Please enter your email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubError("Please enter a valid email.");
      return;
    }
    setSubStatus("loading");
    setSubError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubError(data.error || "Something went wrong.");
        setSubStatus("idle");
        return;
      }
      setSubStatus("success");
      setEmail("");
    } catch {
      setSubError("Something went wrong. Please try again.");
      setSubStatus("idle");
    }
  };

  return (
    <footer
      style={{
        background: "#0A1628",
        borderTop: "1px solid #1A3048",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern */}
      <div
        className="dot-pattern"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.3,
        }}
      />

      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 1 }}
      >

        {/* ── Top ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            padding: "4rem 0 3rem",
            borderBottom: "1px solid #1A3048",
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "#1565C0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                color: "white",
                flexShrink: 0,
              }}>
                Y
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: "17px",
                color: "#E8F4FD",
                letterSpacing: "-0.5px",
              }}>
                Park
              </span>
            </Link>

            <p style={{
              fontSize: "0.82rem",
              color: "#506A84",
              lineHeight: 1.75,
              maxWidth: "260px",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "1.5rem",
            }}>
              India&apos;s organized parking marketplace.
              Connecting owners and drivers through
              one platform.
            </p>

            {/* Socials */}
            <div style={{
              display: "flex",
              gap: "0.5rem",
            }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid #1A3048",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#506A84",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#1565C0";
                    e.currentTarget.style.color = "#77A7DF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1A3048";
                    e.currentTarget.style.color = "#506A84";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#00BCD4",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.625rem",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Stay Updated
            </div>
            <div style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "#E8F4FD",
              marginBottom: "0.375rem",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Get updates from YPark.
            </div>
            <div style={{
              fontSize: "0.8rem",
              color: "#506A84",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "1.25rem",
              lineHeight: 1.6,
            }}>
              New cities, new features, app launch.
              No spam. Ever.
            </div>

            {subStatus === "success" ? (
              <div style={{
                padding: "0.875rem 1rem",
                borderRadius: "0.75rem",
                background: "rgba(46,125,50,0.08)",
                border: "1px solid rgba(46,125,50,0.2)",
                fontSize: "0.82rem",
                color: "#4CAF50",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
              }}>
                ✓ Subscribed. We will be in touch.
              </div>
            ) : (
              <>
                <div style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setSubError("");
                    }}
                    placeholder="your@email.com"
                    className="input"
                    style={{ flex: 1, minWidth: "160px" }}
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={subStatus === "loading"}
                    className="btn-primary"
                    style={{
                      opacity: subStatus === "loading" ? 0.7 : 1,
                      cursor: subStatus === "loading"
                        ? "not-allowed"
                        : "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {subStatus === "loading" ? (
                      <span className="spinner" />
                    ) : "Subscribe"}
                  </button>
                </div>
                {subError && (
                  <div style={{
                    fontSize: "0.75rem",
                    color: "#C0392B",
                    marginTop: "0.5rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {subError}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* ── Links ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "2rem",
            padding: "3rem 0",
            borderBottom: "1px solid #1A3048",
          }}
        >
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {group}
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
              }}>
                {links.map((link) => (
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.82rem",
                        color: "#8BA8C8",
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#E8F4FD"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#8BA8C8"}
                    >
                      {link.label}
                      <svg
                        width="9" height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{
                        fontSize: "0.82rem",
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

        {/* ── Bottom ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          padding: "1.5rem 0",
        }}>
          {/* Copyright */}
          <div style={{
            fontSize: "0.72rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.6,
          }}>
            © {new Date().getFullYear()} YPark.
            A product of{" "}
            <a
              href="https://prothomai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#506A84",
                textDecoration: "none",
                transition: "color 0.2s ease",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#77A7DF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#506A84"}
            >
              Prothom Analytica India Pvt. Ltd.
            </a>
          </div>

          {/* Legal links */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
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
                {item.label}
              </Link>
            ))}
          </div>

          {/* Made in India */}
          <div style={{
            fontSize: "0.72rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}>
            Made with
            <span style={{ color: "#C0392B" }}> ♥ </span>
            in India
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}