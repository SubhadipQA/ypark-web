import Link from "next/link";

const featureCards = [
  {
    eyebrow: "Operations",
    title: "Entry to exit, fully tracked.",
    description:
      "Log every vehicle in seconds, calculate duration automatically, and keep a clean digital record instead of paper registers.",
    points: ["One-tap vehicle entry", "Auto duration and pricing", "Daily visit history"],
    accent: "#1565C0",
    accentSoft: "#EBF1FF",
    accentBorder: "#BDD2FF",
    href: "/partners",
    cta: "See owner flow",
  },
  {
    eyebrow: "Control",
    title: "Staff, payments, and passes in one place.",
    description:
      "Give staff controlled access, track who collected what, and manage monthly pass customers without notebook-based confusion.",
    points: ["Role-based staff access", "Cash and UPI tracking", "Monthly pass handling"],
    accent: "#F57F17",
    accentSoft: "#FFF8EC",
    accentBorder: "#FFE0B2",
    href: "/partners",
    cta: "Explore parking types",
  },
  {
    eyebrow: "Scale",
    title: "Run multiple zones from one dashboard.",
    description:
      "YAdmin gives operators and government teams city-level visibility across zones, staff, collections, and performance.",
    points: ["All-zone revenue view", "Zone-by-zone comparison", "Centralized team oversight"],
    accent: "#00BCD4",
    accentSoft: "#E8FAFE",
    accentBorder: "#B2EBF2",
    href: "/yadmin",
    cta: "View YAdmin",
  },
  {
    eyebrow: "Discovery",
    title: "Built for the driver side too.",
    description:
      "YPark is not only a back-office tool. The platform is designed to help drivers discover parking faster as the consumer layer expands.",
    points: ["Driver-facing discovery", "City rollout ready", "Booking-ready product direction"],
    accent: "#2E7D32",
    accentSoft: "#EEF8F0",
    accentBorder: "#CBE7D1",
    href: "/find-parking",
    cta: "See what’s coming",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: "linear-gradient(180deg, #F5F8FF 0%, #EBF1FF 100%)",
        borderTop: "1px solid #D6E4FF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(0, 188, 212, 0.12), transparent 32%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-wrap section-pad" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            marginBottom: "2.25rem",
          }}
          className="home-features-header"
        >
          <div>
            <span className="section-label" style={{ color: "#00BCD4" }}>Features</span>
            <h2 className="section-heading" style={{ color: "#0D1B2A", maxWidth: "42rem" }}>
              The full parking stack,
              <br />
              not just one tool.
            </h2>
          </div>
        </div>

        <div
          className="home-features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
          }}
        >
          {featureCards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "#FFFFFF",
                border: `1px solid ${card.accentBorder}`,
                borderTop: `3px solid ${card.accent}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 8px 28px rgba(13, 27, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.875rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: card.accent,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {card.eyebrow}
                </span>
                <span
                  style={{
                    width: "28px",
                    height: "1px",
                    background: card.accentBorder,
                    display: "inline-block",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0D1B2A",
                  lineHeight: 1.2,
                  marginBottom: "0.625rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#506A84",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {card.description}
              </p>

              <div style={{ flex: 1 }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "grid",
                    gap: "0.625rem",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {card.points.map((point) => (
                    <li
                      key={point}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        color: "#2C4A6E",
                        fontSize: "0.84rem",
                        lineHeight: 1.6,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      <span
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "9999px",
                          background: card.accentSoft,
                          border: `1px solid ${card.accentBorder}`,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "0.08rem",
                        }}
                      >
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={card.accent}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <Link
                  href={card.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: card.accent,
                    fontSize: "0.86rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {card.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .home-features-header {
            grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) !important;
            align-items: end !important;
          }

          .home-features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}