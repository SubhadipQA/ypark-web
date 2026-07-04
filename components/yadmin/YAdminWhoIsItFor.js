export default function YAdminWhoIsItFor() {
  const audiences = [
    {
      icon: "🏢",
      title: "Private Parking Companies",
      desc: "You operate multiple parking compounds, basements or lots across a city or multiple cities. You need one view of everything — revenue, staff, occupancy — without logging in and out of separate accounts.",
      accent: "#1565C0",
      accentBg: "#EBF1FF",
      accentBorder: "#BDD2FF",
    },
    {
      icon: "🏛️",
      title: "Government & Municipal Bodies",
      desc: "You manage authorized street parking bays across multiple wards or zones of a city. You need oversight, audit trails, and revenue reporting that works for public accountability.",
      accent: "#00BCD4",
      accentBg: "#E8FAFE",
      accentBorder: "#B2EBF2",
    },
    {
      icon: "🤝",
      title: "Parking Management Firms",
      desc: "You are a third-party operator contracted to manage parking on behalf of building owners, institutions or civic bodies. You run the operations — YAdmin gives you the infrastructure.",
      accent: "#4CAF50",
      accentBg: "#F0FFF4",
      accentBorder: "#BBF7D0",
    },
  ];

  return (
    <section
      id="who-is-it-for"
      style={{
        background: "linear-gradient(135deg, #EBF1FF 0%, #F5F8FF 50%, #EEF3FF 100%)",
        borderTop: "1px solid #D6E4FF",
        position: "relative",
      }}
    >
      <div className="section-wrap section-pad">
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">Who It&apos;s For</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A", maxWidth: "36rem" }}>
            Built for operators who run at scale.
          </h2>
          <p className="section-sub" style={{ color: "#2C4A6E", marginTop: "1rem" }}>
            If a single parking app feels too small for what you manage,
            YAdmin was built for you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
          className="yadmin-audience-grid"
        >
          {audiences.map((a) => (
            <div
              key={a.title}
              className="yadmin-audience-card"
              style={{
                background: "#FFFFFF",
                border: `1px solid ${a.accentBorder}`,
                borderLeft: `4px solid ${a.accent}`,
                borderRadius: "1rem",
                padding: "1.75rem",
                boxShadow: "0 2px 12px rgba(21,101,192,0.06)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: a.accentBg,
                border: `1px solid ${a.accentBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                marginBottom: "1.25rem",
              }}>
                {a.icon}
              </div>
              <h3 style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#0D1B2A",
                marginBottom: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {a.title}
              </h3>
              <p style={{
                fontSize: "0.85rem",
                color: "#2C4A6E",
                lineHeight: 1.75,
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .yadmin-audience-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        .yadmin-audience-card:hover {
          box-shadow: 0 8px 32px rgba(21,101,192,0.12);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
