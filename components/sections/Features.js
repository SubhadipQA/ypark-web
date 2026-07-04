"use client";

import Link from "next/link";

const features = [
  {
    eyebrow: "Operations",
    title: "Entry to exit, fully tracked.",
    description:
      "Log every vehicle in seconds, calculate duration automatically, and keep a clean digital record instead of paper registers.",
    points: ["One-tap vehicle entry", "Auto duration and pricing", "Daily visit history"],
    accent: "#0063FF",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    href: "/partners",
    cta: "See owner flow",
    isHero: true,
  },
  {
    eyebrow: "Control",
    title: "Staff, payments, and passes.",
    description:
      "Give staff controlled access, track collections, and manage monthly passes without confusion.",
    points: ["Role-based access", "Cash & UPI tracking", "Pass management"],
    accent: "#F57F17",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    href: "/partners",
    cta: "Learn more",
  },
  {
    eyebrow: "Scale",
    title: "Multi-zone dashboard.",
    description:
      "City-level visibility across zones, staff, collections, and performance metrics.",
    points: ["Revenue overview", "Zone comparison", "Team oversight"],
    accent: "#00BCD4",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    href: "/yadmin",
    cta: "View YAdmin",
  },
  {
    eyebrow: "Discovery",
    title: "Driver-facing discovery.",
    description:
      "Help drivers find parking faster as the consumer layer expands across cities.",
    points: ["Real-time availability", "City rollout ready", "Booking direction"],
    accent: "#2E7D32",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    ),
    href: "/find-parking",
    cta: "See what's coming",
  },
  {
    eyebrow: "Insights",
    title: "Data-driven decisions.",
    description:
      "Revenue trends, peak hours, and occupancy analytics to optimize your parking business.",
    points: ["Daily reports", "Peak hour analysis", "Revenue trends"],
    accent: "#7C3AED",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M18 17V9"/>
        <path d="M13 17V5"/>
        <path d="M8 17v-3"/>
      </svg>
    ),
    href: "/partners",
    cta: "View analytics",
  },
];

export default function Features() {
  const heroFeature = features[0];
  const smallFeatures = features.slice(1);

  return (
    <section
      id="features"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
        borderTop: "1px solid #E2E8F0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,99,255,0.03) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div className="section-wrap section-pad" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">Features</span>
          <h2 className="section-heading" style={{ maxWidth: "32rem" }}>
            The full parking stack, not just one tool.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="features-bento">
          {/* Hero Card - Large */}
          <div
            className="bento-hero"
            style={{
              background: "linear-gradient(135deg, #0063FF 0%, #0B05C7 100%)",
              borderRadius: "1.25rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "320px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}
            <div style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute",
              bottom: "-60px",
              left: "-60px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
                color: "#FFFFFF",
              }}>
                {heroFeature.icon}
              </div>

              <span style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {heroFeature.eyebrow}
              </span>

              <h3 style={{
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
                margin: "0.5rem 0 0.875rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {heroFeature.title}
              </h3>

              <p style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                maxWidth: "380px",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {heroFeature.description}
              </p>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.25rem",
              }}>
                {heroFeature.points.map((point) => (
                  <span
                    key={point}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.375rem 0.75rem",
                      borderRadius: "9999px",
                      background: "rgba(255,255,255,0.15)",
                      color: "#FFFFFF",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {point}
                  </span>
                ))}
              </div>

              <Link
                href={heroFeature.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "0.75rem",
                  background: "#FFFFFF",
                  color: "#0063FF",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {heroFeature.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Small Cards */}
          {smallFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bento-small"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = feature.accent;
                e.currentTarget.style.boxShadow = `0 8px 32px \${feature.accent}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: `\${feature.accent}10`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                color: feature.accent,
              }}>
                {feature.icon}
              </div>

              <span style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: feature.accent,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {feature.eyebrow}
              </span>

              <h3 style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.25,
                margin: "0.375rem 0 0.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {feature.title}
              </h3>

              <p style={{
                color: "#6B7280",
                fontSize: "0.85rem",
                lineHeight: 1.65,
                flex: 1,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {feature.description}
              </p>

              <Link
                href={feature.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  marginTop: "1rem",
                  color: feature.accent,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "gap 0.2s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.gap = "0.625rem"}
                onMouseLeave={(e) => e.currentTarget.style.gap = "0.375rem"}
              >
                {feature.cta}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .features-bento {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto auto;
          }
          .bento-hero {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
          }
        }

        @media (min-width: 1024px) {
          .features-bento {
            grid-template-columns: 1.2fr 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 1.25rem;
          }
          .bento-hero {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
          }
        }
      `}</style>
    </section>
  );
}
