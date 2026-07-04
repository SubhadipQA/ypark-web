import Image from "next/image";
import Link from "next/link";

export default function PartnersHero() {
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

      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 1 }}
      >
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
          <svg
            width="12" height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#506A84"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span style={{
            fontSize: "0.75rem",
            color: "#0D1B2A",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
          }}>
            For Partners
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="partners-hero-grid"
        >
          {/* Left */}
          <div>
            <span className="section-label">For Parking Owners</span>
            <h1 style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: "#0D1B2A",
              marginBottom: "1.5rem",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              List your parking area.
              <br />
              Run it digitally.
            </h1>
            <p style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#2C4A6E",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "500px",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Whether you operate a government authorized street bay
              or a private compound — YPark gives you one app to
              manage visits, passes, staff and revenue.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              marginBottom: "3rem",
            }}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                Download on Play Store
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                See How It Works
              </a>
            </div>

            {/* Three quick facts */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}>
              {[
                { value: "Free",     label: "to register" },
                { value: "24 hrs",   label: "to go live" },
                { value: "No",       label: "hardware needed" },
              ].map((fact) => (
                <div key={fact.label}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1.25rem",
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
            className="partners-hero-image"
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
                src="/YPartnerImage2.webp"
                alt="YPark partner app preview"
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
          .partners-hero-image {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .partners-hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
