import Link from "next/link";

export default function PartnersAppDownload() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #EBF1FF 0%, #F5F8FF 50%, #EEF3FF 100%)",
        borderTop: "1px solid #D6E4FF",
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
          opacity: 0.18,
        }}
      />

      <div className="section-wrap section-pad">
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
          maxWidth: "560px",
          margin: "0 auto",
        }}>
          <span className="section-label">Get Started</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A" }}>
            Download YPark.
            <br />
            Your zone live in 24 hours.
          </h2>
          <p style={{
            fontSize: "0.95rem",
            color: "#2C4A6E",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Free to register. No hardware needed.
            Works on any Android phone.
          </p>

          {/* Play Store */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.875rem",
              padding: "0.875rem 1.75rem",
              background: "#E8F4FD",
              border: "1px solid #E8F4FD",
              borderRadius: "0.875rem",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.18 23.76c.33.18.7.19 1.04.03l13.2-7.62-2.8-2.8-11.44 10.39z" fill="#EA4335" />
              <path d="M.5 1.08C.18 1.43 0 1.96 0 2.64v18.72c0 .68.18 1.21.5 1.56l.08.08 10.49-10.49v-.24L.58 1z" fill="#4285F4" />
              <path d="M14.64 15.6l-3.5-3.5 3.5-3.5 3.95 2.28c1.13.65 1.13 1.72 0 2.37l-3.95 2.35z" fill="#FBBC05" />
              <path d="M3.18.24L14.64 7.9l-2.8 2.8L1.22.32C.87.14.5.16.18.48L3.18.24z" fill="#34A853" />
            </svg>
            <div>
              <div style={{
                fontSize: "0.62rem",
                color: "#506A84",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: "0.2rem",
              }}>
                GET IT ON
              </div>
              <div style={{
                fontSize: "1rem",
                fontWeight: 800,
                color: "#0D1B2A",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1,
                letterSpacing: "-0.3px",
              }}>
                Google Play
              </div>
            </div>
          </a>

          {/* iOS note */}
          <p style={{
            fontSize: "0.75rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            iOS arriving soon.{" "}
            <Link
              href="/find-parking"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
            >
              Get notified when it launches →
            </Link>
          </p>

          {/* Divider */}
          <div style={{
            width: "100%",
            height: "1px",
            background: "#D6E4FF",
          }} />

          {/* Company credit */}
          <p style={{
            fontSize: "0.78rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            A product of{" "}
            <a
              href="https://prothomai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
            >
              Prothom Analytica India Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
