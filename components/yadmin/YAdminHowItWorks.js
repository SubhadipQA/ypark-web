export default function YAdminHowItWorks() {
  const steps = [
    {
      number: "01",
      tag: "Contact",
      title: "Request a demo",
      desc: "Reach out via the contact form on prothomai.com. Tell us how many zones you manage, which cities, and what you currently use. We respond within 24 hours.",
    },
    {
      number: "02",
      tag: "Onboarding",
      title: "Guided onboarding call",
      desc: "Our team walks you through the platform. We understand your structure — zone types, staff hierarchy, reporting needs — and configure YAdmin to match.",
    },
    {
      number: "03",
      tag: "Migration",
      title: "Your zones go live",
      desc: "We migrate your existing zones or set up new ones. Staff gets their logins. Your zones start tracking from day one — no disruption to daily operations.",
    },
    {
      number: "04",
      tag: "Operations",
      title: "Manage from one dashboard",
      desc: "See every zone live. Revenue rolls up automatically. Staff reports per zone. Monthly reports ready to export. You're in full control.",
    },
  ];

  return (
    <section
      id="how-it-works"
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
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A" }}>
            From contact to live
            <br />
            in one week.
          </h2>
          <p className="section-sub" style={{ margin: "1rem auto 0", textAlign: "center", color: "#2C4A6E" }}>
            YAdmin is not self-serve. Every operator gets a guided
            setup so you go live correctly the first time.
          </p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
            background: "#FFFFFF",
            border: "1px solid #D6E4FF",
            borderRadius: "1.25rem",
            overflow: "hidden",
            marginBottom: "3rem",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                padding: "2rem 1.5rem",
                borderRight: "1px solid #E5EEFA",
                cursor: "default",
              }}
              className="yadmin-step-item"
            >
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#00BCD4",
                letterSpacing: "0.1em",
                marginBottom: "0.875rem",
              }}>
                {step.number}
              </div>
              <div style={{
                display: "inline-block",
                fontSize: "0.6rem",
                fontWeight: 700,
                color: "#6B829C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {step.tag}
              </div>
              <h3 style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#0D1B2A",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: "0.78rem",
                color: "#2C4A6E",
                lineHeight: 1.7,
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://prothomai.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              fontSize: "0.9rem",
            }}
          >
            Request a Demo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .yadmin-step-item {
            border-right: none !important;
            border-bottom: 1px solid #E5EEFA !important;
          }
          .yadmin-step-item:last-child {
            border-bottom: none !important;
          }
        }
        @media (min-width: 768px) {
          .yadmin-step-item:last-child {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
