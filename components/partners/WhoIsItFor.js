export default function WhoIsItFor() {
  const types = [
    {
      icon: "🛣️",
      title: "Roadside Operators",
      desc: "You manage a government authorized street-side parking area. You need to track daily collections, manage monthly pass holders and account for staff.",
      color: "#F57F17",
    },
    {
      icon: "🏢",
      title: "Private Lot Owners",
      desc: "You own or manage a private compound, basement or enclosed parking space. You want to go fully digital — passes, staff control and reports.",
      color: "#1565C0",
    },
    {
      icon: "🏠",
      title: "Building & Society Managers",
      desc: "You manage visitor parking for a residential society or commercial building. You want organized records and monthly passes for residents.",
      color: "#00BCD4",
    },
    {
      icon: "🙏",
      title: "Institutions & Venues",
      desc: "You manage parking for a hospital, temple, mall or event venue. High daily volume. You need real-time visibility and digital collections.",
      color: "#4CAF50",
    },
  ];

  return (
    <section
      id="who-is-it-for"
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
          <span className="section-label">Who Is It For</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A" }}>
            If you manage parking in India,
            <br />
            YPark is for you.
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}>
          {types.map((type, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #D6E4FF",
                borderTop: `2px solid ${type.color}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                transition: "border-color 0.2s ease",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "1.75rem" }}>{type.icon}</div>
              <div>
                <div style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#0D1B2A",
                  marginBottom: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {type.title}
                </div>
                <div style={{
                  fontSize: "0.82rem",
                  color: "#2C4A6E",
                  lineHeight: 1.7,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {type.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
