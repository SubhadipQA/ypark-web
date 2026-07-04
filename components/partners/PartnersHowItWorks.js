export default function PartnersHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Download & register",
      desc: "Download YPark from Play Store. Register with your phone number. Select parking owner during setup.",
      tag: "Setup",
    },
    {
      number: "02",
      title: "Add your parking area",
      desc: "Add your zone name, location, type and capacity — two-wheeler and four-wheeler separately. Submit documents for verification. Approved within 24 hours.",
      tag: "Zone",
    },
    {
      number: "03",
      title: "Add your staff",
      desc: "Invite ground staff via phone number. Assign to your zone. Set exactly what they can see — staff never sees your full revenue.",
      tag: "Team",
    },
    {
      number: "04",
      title: "Go live and manage",
      desc: "Staff logs every vehicle in one tap. Duration and charges auto-calculated. Monthly passes auto-detected. You see everything in real time.",
      tag: "Operations",
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
        <div style={{
          textAlign: "center",
          marginBottom: "3.5rem",
        }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A" }}>
            Four steps to go live.
          </h2>
          <p className="section-sub" style={{
            margin: "1rem auto 0",
            textAlign: "center",
            color: "#2C4A6E",
          }}>
            No technical knowledge needed.
            No hardware to install.
          </p>
        </div>

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
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                padding: "2rem 1.5rem",
                borderRight: "1px solid #E5EEFA",
                borderBottom: "none",
                transition: "background 0.2s ease",
                cursor: "default",
                position: "relative",
              }}
              className="step-item"
            >
              {/* Number */}
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#00BCD4",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}>
                {step.number}
              </div>

              {/* Tag */}
              <div style={{
                display: "inline-block",
                fontSize: "0.6rem",
                fontWeight: 700,
                color: "#6B829C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.625rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {step.tag}
              </div>

              {/* Title */}
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

              {/* Desc */}
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
          <div style={{
          textAlign: "center",
        }}>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              fontSize: "0.9rem",
              padding: "0.875rem 2rem",
            }}
          >
            Download YPark - It&apos;s Free
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .step-item {
            border-right: none !important;
            border-bottom: 1px solid #E5EEFA !important;
          }
          .step-item:last-child {
            border-bottom: none !important;
          }
        }
        @media (min-width: 768px) {
          .step-item:last-child {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
