export default function YAdminWhatItDoes() {
  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: "All-Zone Command Dashboard",
      items: [
        "Real-time zone status at a glance",
        "Occupancy, revenue & staff visibility",
        "Single screen for all zones",
        "No account switching needed",
      ],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      title: "City-Level Revenue Analytics",
      items: [
        "Daily, weekly & monthly roll-ups",
        "Break down by city or zone type",
        "Individual location tracking",
        "Trend analysis across all zones",
      ],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Bulk Staff Management",
      items: [
        "Add & assign staff across all zones",
        "Per-zone permission settings",
        "Full collection history per staff",
        "Remove & reassign anytime",
      ],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      ),
      title: "Zone Performance Comparison",
      items: [
        "Side-by-side zone comparison",
        "Revenue & visit metrics",
        "Pass adoption tracking",
        "Identify top & low performers",
      ],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      title: "Approval Workflows",
      items: [
        "Control zone & staff approvals",
        "Multi-level approval chains",
        "Pass approval management",
        "Audit trail for all actions",
      ],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: "Custom Reporting",
      items: [
        "Reports by zone, city or date",
        "Per-staff collection reports",
        "Export for audits & boards",
        "Reconciliation ready",
      ],
    },
  ];

  return (
    <section
      id="features"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #D6E4FF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-wrap section-pad">

        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">What YAdmin Does</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A", maxWidth: "36rem" }}>
            YPark runs your zone.
            <br />
            YAdmin runs your business.
          </h2>
          <p className="section-sub" style={{ marginTop: "1rem", color: "#2C4A6E" }}>
            YPark is the ground-level operating system for a single zone.
            YAdmin sits above it — giving you the full picture across
            every zone you manage.
          </p>
        </div>

        {/* Comparison strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
          className="compare-grid"
        >
          {/* YPark */}
          <div style={{
            background: "#F5F8FF",
            border: "1px solid #D6E4FF",
            borderLeft: "4px solid #1565C0",
            borderRadius: "1rem",
            padding: "1.5rem",
          }}>
            <div style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              color: "#1565C0",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "0.625rem",
            }}>
              YPark — Single Zone
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["One parking area", "One owner account", "Staff for that zone", "That zone's revenue"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "9999px", background: "#1565C0", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.82rem", color: "#2C4A6E", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#00BCD4",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              <div style={{ width: "32px", height: "1px", background: "#D6E4FF" }} />
              Scale up
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* YAdmin */}
          <div style={{
            background: "#E8FAFE",
            border: "1px solid #B2EBF2",
            borderLeft: "4px solid #00BCD4",
            borderRadius: "1rem",
            padding: "1.5rem",
          }}>
            <div style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              color: "#00BCD4",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "0.625rem",
            }}>
              YAdmin — All Zones
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Unlimited zones, one account", "All owners under one org", "All staff across all zones", "Total revenue across all zones"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "9999px", background: "#00BCD4", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.82rem", color: "#2C4A6E", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards - Bento Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }} className="yadmin-features-grid">
          {features.map((f, i) => (
            <div
              key={f.title}
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
                {f.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#0D1B2A",
                marginBottom: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {f.title}
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
                {f.items.map((item, j) => (
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
        @media (min-width: 768px) {
          .compare-grid {
            grid-template-columns: 1fr auto 1fr !important;
            align-items: center !important;
          }
        }

        @media (max-width: 768px) {
          .yadmin-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 1024px) {
          .yadmin-features-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
