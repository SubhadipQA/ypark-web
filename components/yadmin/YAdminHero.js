import Image from "next/image";
import Link from "next/link";

export default function YAdminHero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #EBF1FF 0%, #F5F8FF 50%, #EEF3FF 100%)",
        paddingTop: "7rem",
        paddingBottom: "3.5rem",
        borderBottom: "1px solid #D6E4FF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="dot-pattern"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>

        {/* Breadcrumb */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}>
          <Link
            href="/"
            style={{
              fontSize: "0.75rem",
              color: "#2C4A6E",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
          >
            YPark
          </Link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#506A84" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span style={{
            fontSize: "0.75rem",
            color: "#0D1B2A",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
          }}>
            YAdmin
          </span>
        </div>

        {/* Hero grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="yadmin-hero-grid"
        >
          {/* Left — content */}
          <div>
            {/* Badge */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#00BCD4",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.35rem 0.875rem",
                borderRadius: "9999px",
                background: "rgba(0,188,212,0.08)",
                border: "1px solid rgba(0,188,212,0.2)",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                <span style={{
                  width: "5px", height: "5px",
                  borderRadius: "9999px",
                  background: "#00BCD4",
                  display: "inline-block",
                }} />
                Multi-Zone Platform
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: "#0D1B2A",
              marginBottom: "1.5rem",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              One dashboard.
              <br />
              Every zone.
              <br />
              Total control.
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#2C4A6E",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "500px",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              YAdmin is built for parking companies, municipal bodies, and
              anyone managing multiple zones across a city. See everything,
              control everything — from one place.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              marginBottom: "3rem",
            }}>
              <a
                href="https://prothomai.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.875rem 1.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Request a Demo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary"
                style={{
                  fontSize: "0.9rem",
                  padding: "0.875rem 1.75rem",
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Three quick facts */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.75rem",
            }}>
              {[
                { value: "Unlimited", label: "zones per account" },
                { value: "Real-time", label: "city-level dashboard" },
                { value: "Guided",    label: "onboarding included" },
              ].map((fact) => (
                <div key={fact.label}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#0D1B2A",
                    letterSpacing: "-0.5px",
                    lineHeight: 1,
                    marginBottom: "0.2rem",
                  }}>
                    {fact.value}
                  </div>
                  <div style={{
                    fontSize: "0.72rem",
                    color: "#2C4A6E",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}>
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div
            className="yadmin-hero-image"
            style={{
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
                src="/YAdminImage.webp"
                alt="YAdmin hero preview"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .yadmin-hero-image {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .yadmin-hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
