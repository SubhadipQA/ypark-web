"use client";

import Link from "next/link";

const apps = [
  {
    badge: "Demand entry point",
    name: "YPARK",
    subtitle: "Customer App",
    accent: "#0063FF",
    description:
      "People travelling with a two-wheeler or four-wheeler can secure verified parking before they leave. No circling. No guesswork. Parking confirmed before the journey begins.",
    points: [
      "Advance booking before travel",
      "Verified parking locations",
      "Real-time availability",
    ],
    href: "/find-parking",
  },
  {
    badge: "Operational core",
    name: "YPARTNER",
    subtitle: "Owner & Staff App",
    accent: "#F57F17",
    description:
      "Parking owners and on-ground staff manage day-to-day operations from one place: entries, exits, payments, and revenue visibility across the site.",
    points: [
      "Entry & exit management",
      "Payment recording & tracking",
      "Transparent revenue tracking",
    ],
    href: "/partners",
  },
  {
    badge: "Oversight layer",
    name: "YADMIN",
    subtitle: "Multi-Zone Dashboard",
    accent: "#00BCD4",
    description:
      "For organizations managing multiple parking locations — government bodies, mall chains, corporates. One dashboard for revenue, occupancy, and compliance across every zone.",
    points: [
      "Consolidated revenue view",
      "Occupancy & peak analytics",
      "Multi-zone management",
    ],
    href: "/yadmin",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="section-v-pad"
      style={{
        background: "#FFFFFF",
      }}
    >
      <div className="section-wrap">
        {/* Header with CTAs */}
        <div 
          className="ecosystem-header"
          style={{ 
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "32rem" }}>
            <span className="section-label">The Ecosystem</span>
            <h2 className="section-heading">
              Built for every role in parking
            </h2>
            <p
              className="section-sub"
              style={{ margin: "1rem 0 0" }}
            >
              One platform, three dedicated apps — each designed for how you
              actually use parking.
            </p>
          </div>
          
          <div style={{ 
            display: "flex", 
            gap: "0.75rem",
            flexWrap: "wrap",
          }}>
            <Link
              href="/partners"
              className="btn-primary"
              style={{ fontSize: "0.85rem", padding: "0.625rem 1.25rem" }}
            >
              Partners
            </Link>
            <Link
              href="/yadmin"
              className="btn-secondary"
              style={{ fontSize: "0.85rem", padding: "0.625rem 1.25rem" }}
            >
              Operators
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {apps.map((app) => (
            <div
              key={app.name}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "1.25rem",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                boxShadow: "0 2px 16px rgba(0, 0, 0, 0.06)",
                transition: "box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 32px ${app.accent}20`;
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = app.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 16px rgba(0, 0, 0, 0.06)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#E2E8F0";
              }}
            >
              {/* Badge */}
              <span
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: `${app.accent}10`,
                  color: app.accent,
                  border: `1px solid ${app.accent}25`,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {app.badge}
              </span>

              {/* Name (Text-based, no logo) */}
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: app.accent,
                    letterSpacing: "-0.5px",
                    fontFamily: "'DM Sans', sans-serif",
                    margin: 0,
                  }}
                >
                  {app.name}
                </h3>
                <p
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#9CA3AF",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {app.subtitle}
                </p>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  fontFamily: "'DM Sans', sans-serif",
                  flex: 1,
                }}
              >
                {app.description}
              </p>

              {/* Bullet points */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {app.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      fontSize: "0.85rem",
                      color: "#374151",
                      fontFamily: "'DM Sans', sans-serif",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: app.accent,
                        flexShrink: 0,
                        marginTop: "0.45rem",
                      }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={app.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: app.accent,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "gap 0.2s ease",
                  marginTop: "0.25rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "0.625rem")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "0.375rem")}
              >
                Learn more
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
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ecosystem-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
