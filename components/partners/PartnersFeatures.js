export default function PartnersFeatures() {
  const groups = [
    {
      title: "Zone Management",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      items: [
        "Govt Authorized & Private zone support",
        "Multi-zone dashboard",
        "Two-wheeler & four-wheeler capacity",
        "Free parking zone support",
        "Zone approval in 24 hours",
      ],
    },
    {
      title: "Daily Operations",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      items: [
        "One-tap vehicle entry logging",
        "Auto duration & charge calculation",
        "Walk-in and pre-booked flow",
        "Staff-controlled space assignment",
        "Vehicle number tracking",
      ],
    },
    {
      title: "Monthly Passes",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      items: [
        "Monthly & quarterly passes",
        "Auto pass detection on entry",
        "Works on both zone types",
        "Dedicated bay for private zones",
        "Expiry alerts & renewal",
      ],
    },
    {
      title: "Revenue & Reports",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      items: [
        "Real-time revenue dashboard",
        "Per-staff collection reports",
        "Settlement tracking",
        "Walk-in vs pass revenue split",
        "Daily & monthly reports",
      ],
    },
    {
      title: "Staff & Permissions",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      items: [
        "Granular staff permissions",
        "Staff sees only own collections",
        "Multi-zone staff assignment",
        "Full staffing history",
        "Remove & reassign anytime",
      ],
    },
    {
      title: "Payments",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      items: [
        "Cash & UPI supported",
        "Gateway-agnostic design",
        "Digital receipt generation",
        "Payout settlement tracking",
        "Card & online payments coming",
      ],
    },
  ];

  return (
    <section
      id="features"
      style={{
        background: "linear-gradient(135deg, #F5F8FF 0%, #EEF3FF 50%, #F8FAFF 100%)",
        borderTop: "1px solid #E5EEFA",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-wrap section-pad">
        <div style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}>
          <span className="section-label">Features</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A" }}>
            Everything your zone needs.
          </h2>
          <p className="section-sub" style={{
            margin: "1rem auto 0",
            textAlign: "center",
            color: "#2C4A6E",
          }}>
            Built specifically for Indian parking zone operators.
            Every feature exists because a real owner needed it.
          </p>
        </div>

        {/* 2x3 Grid - All cards same size */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }} className="features-grid-equal">
          {groups.map((group, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: "1rem",
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
                border: "1px solid #E5EEFA",
              }}
            >
              {/* Icon */}
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0063FF 0%, #0052D4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                marginBottom: "1rem",
              }}>
                {group.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#0D1B2A",
                marginBottom: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {group.title}
              </h3>

              {/* Bullet Points */}
              <ul style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}>
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "0.8rem",
                      color: "#506A84",
                      fontFamily: "'DM Sans', sans-serif",
                      lineHeight: 1.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{
                      color: "#0063FF",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Background Number */}
              <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "10px",
                fontSize: "7rem",
                fontWeight: 800,
                color: "rgba(0, 99, 255, 0.04)",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1,
                pointerEvents: "none",
              }}>
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid-equal {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 1024px) {
          .features-grid-equal {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
