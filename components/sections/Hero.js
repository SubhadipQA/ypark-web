"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef(null);

  const handleScrollToProblem = () => {
    const problemSection = document.getElementById("problem");

    if (!problemSection) {
      return;
    }

    problemSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".hero-item");
          items.forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        background: "#0D1B2A",
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
          opacity: 0.6,
        }}
      />

      {/* Subtle top fade */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "400px",
        background: "linear-gradient(180deg, #0F2136 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div
        className="section-wrap section-pad section-pad-hero"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* ── Two column grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >

          {/* ── LEFT — Main content ── */}
          <div>

            {/* Status badge */}
            <div
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                marginBottom: "1.75rem",
              }}
            >
              <span className="badge badge-live">
                <span style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: "#4CAF50",
                  display: "inline-block",
                  flexShrink: 0,
                }} />
                Now live in 6 cities across India
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
                color: "#E8F4FD",
                marginBottom: "1.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Parking in India,
              <br />
              finally organized.
            </h1>

            {/* Subtext */}
            <p
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
                color: "#8BA8C8",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "520px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              YPark connects parking zone owners with daily drivers
              through one organized platform. Owners manage visits,
              passes, staff and revenue. Drivers find and book parking
              near them.
            </p>

            {/* CTAs */}
            <div
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.875rem",
                marginBottom: "2.25rem",
              }}
            >
              {/* Primary — Download */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                <svg
                  width="16" height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.18 23.76c.33.18.7.19 1.04.03l13.2-7.62-2.8-2.8-11.44 10.39zM.5 1.08C.18 1.43 0 1.96 0 2.64v18.72c0 .68.18 1.21.5 1.56l.08.08 10.49-10.49v-.24L.58 1z" />
                  <path d="M14.64 15.6l-3.5-3.5 3.5-3.5 3.95 2.28c1.13.65 1.13 1.72 0 2.37l-3.95 2.35z" />
                  <path d="M3.18.24L14.64 7.9l-2.8 2.8L1.22.32C.87.14.5.16.18.48L3.18.24z" />
                </svg>
                Download on Play Store
              </a>

              {/* Secondary — Partners */}
              <Link
                href="/partners"
                className="btn-secondary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                List Your Parking Area
              </Link>
            </div>

            {/* Two sides */}
            <div
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
                maxWidth: "480px",
              }}
            >
              {[
                {
                  icon: "🏢",
                  label: "For Parking Owners",
                  sub: "Manage your zone digitally",
                  badge: "Operational",
                  badgeClass: "badge-green",
                  href: "/partners",
                  isExternal: false,
                },
                {
                  icon: "🚗",
                  label: "For Drivers",
                  sub: "Find parking near you",
                  badge: "Arriving",
                  badgeClass: "badge-orange",
                  href: "/find-parking",
                  isExternal: false,
                },
              ].map((side) => (
                <Link
                  key={side.label}
                  href={side.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    padding: "1rem",
                    background: "#132236",
                    border: "1px solid #1A3048",
                    borderRadius: "0.875rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1E3A5F"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1A3048"}
                >
                  <span style={{ fontSize: "1.25rem" }}>{side.icon}</span>
                  <div>
                    <div style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#E8F4FD",
                      marginBottom: "0.2rem",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {side.label}
                    </div>
                    <div style={{
                      fontSize: "0.7rem",
                      color: "#506A84",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {side.sub}
                    </div>
                  </div>
                  <span className={`badge ${side.badgeClass}`}>
                    {side.badge}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Dashboard card ── */}
          <div
            className="hero-item"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "560px",
                aspectRatio: "10 / 9",
              }}
            >
                <Image
                  src="/YparkImage.png"
                  alt="YPark app preview"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ objectFit: "contain" }}
                />
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "2.25rem",
          opacity: 0,
          animation: "fadeIn 0.5s ease 1s both",
        }}>
          <span style={{
            fontSize: "0.62rem",
            color: "#506A84",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Scroll
          </span>
          <button
            type="button"
            aria-label="Scroll to next section"
            onClick={handleScrollToProblem}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingTop: "6px",
              width: "40px",
              height: "54px",
              borderRadius: "12px",
              border: "1.5px solid #1A3048",
              background: "transparent",
              cursor: "pointer",
              transition: "border-color 0.2s ease",
              position: "relative",
              zIndex: 2,
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#1565C0"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1A3048"}
          >
            <div style={{
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              background: "#506A84",
            }} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}