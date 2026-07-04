export default function ParkingTypes() {
  const onRoadFeatures = [
    { label: "Walk-in hourly tracking",       supported: true },
    { label: "Monthly & quarterly passes",    supported: true },
    { label: "Cash & UPI payments",           supported: true },
    { label: "Staff entry & exit logging",    supported: true },
    { label: "Real-time revenue dashboard",   supported: true },
    { label: "Free parking zone support",     supported: true },
    { label: "Advance space booking",         supported: false },
    { label: "Numbered space assignment",     supported: false },
  ];

  const offRoadFeatures = [
    { label: "Walk-in hourly tracking",       supported: true },
    { label: "Monthly & quarterly passes",    supported: true },
    { label: "Cash, UPI & card payments",     supported: true },
    { label: "Staff entry & exit logging",    supported: true },
    { label: "Real-time revenue dashboard",   supported: true },
    { label: "Free parking zone support",     supported: true },
    { label: "Advance space booking",         supported: true },
    { label: "Numbered space assignment",     supported: true },
  ];

  return (
    <section
      id="parking-types"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #D6E4FF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-wrap section-pad">
        <div style={{
          textAlign: "center",
          marginBottom: "3.5rem",
        }}>
          <span className="section-label">Parking Types</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A" }}>
            Two types of parking areas.
            <br />
            One app for both.
          </h2>
          <p className="section-sub" style={{
            margin: "1rem auto 0",
            textAlign: "center",
            color: "#2C4A6E",
          }}>
            YPark understands that a roadside street bay and a private
            compound work completely differently. Each gets the right
            features — automatically.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
          className="types-grid"
        >
          {/* Govt Authorized */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #D6E4FF",
            borderRadius: "1.25rem",
            overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{
              padding: "1.5rem 2rem",
              background: "rgba(245,127,23,0.06)",
              borderBottom: "1px solid rgba(245,127,23,0.12)",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(245,127,23,0.12)",
                border: "1px solid rgba(245,127,23,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                flexShrink: 0,
              }}>
                🛣️
              </div>
              <div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "0.375rem",
                  flexWrap: "wrap",
                }}>
                  <h3 style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#0D1B2A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    Government Authorized
                  </h3>
                  <span style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    padding: "0.2rem 0.625rem",
                    borderRadius: "9999px",
                    background: "rgba(245,127,23,0.12)",
                    border: "1px solid rgba(245,127,23,0.2)",
                    color: "#F57F17",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.04em",
                  }}>
                    ON-ROAD
                  </span>
                </div>
                <p style={{
                  fontSize: "0.82rem",
                  color: "#2C4A6E",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  Open roadside areas — government authorized street bays,
                  tourist spots and market frontage. No fixed spots.
                  Vehicles park anywhere in the zone.
                </p>
              </div>
            </div>

            {/* Features */}
            <div style={{ padding: "1.5rem 2rem" }}>
              <div style={{
                fontSize: "0.62rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                What you get
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}>
                {onRoadFeatures.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.375rem 0",
                      borderBottom: i < onRoadFeatures.length - 1
                        ? "1px solid #E5EEFA"
                        : "none",
                    }}
                  >
                    <div style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: f.supported
                        ? "rgba(76,175,80,0.1)"
                        : "rgba(192,57,43,0.08)",
                      border: f.supported
                        ? "1px solid rgba(76,175,80,0.2)"
                        : "1px solid rgba(192,57,43,0.15)",
                    }}>
                      {f.supported ? (
                        <svg
                          width="8" height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4CAF50"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          width="8" height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C0392B"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                    </div>
                    <span style={{
                      fontSize: "0.82rem",
                      color: f.supported ? "#2C4A6E" : "#506A84",
                      fontFamily: "'DM Sans', sans-serif",
                      opacity: f.supported ? 1 : 0.6,
                    }}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight */}
            <div style={{
              margin: "0 2rem 1.75rem",
              padding: "1rem 1.25rem",
              borderRadius: "0.75rem",
              background: "rgba(245,127,23,0.06)",
              border: "1px solid rgba(245,127,23,0.12)",
              borderLeft: "3px solid #F57F17",
              display: "flex",
              gap: "0.625rem",
            }}>
              <span style={{ fontSize: "0.875rem", flexShrink: 0 }}>💡</span>
              <p style={{
                fontSize: "0.78rem",
                color: "#2C4A6E",
                lineHeight: 1.65,
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Monthly pass holders get zone-wide access —
                they park anywhere in the zone for the month.
                No fixed spot needed.
              </p>
            </div>
          </div>

          {/* Private Parking */}
          <div style={{
            background: "#FFFFFF",
            border: "1px solid #D6E4FF",
            borderRadius: "1.25rem",
            overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{
              padding: "1.5rem 2rem",
              background: "rgba(21,101,192,0.06)",
              borderBottom: "1px solid rgba(21,101,192,0.12)",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "rgba(21,101,192,0.12)",
                border: "1px solid rgba(21,101,192,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                flexShrink: 0,
              }}>
                🏢
              </div>
              <div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "0.375rem",
                  flexWrap: "wrap",
                }}>
                  <h3 style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#0D1B2A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    Private Parking
                  </h3>
                  <span style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    padding: "0.2rem 0.625rem",
                    borderRadius: "9999px",
                    background: "rgba(21,101,192,0.12)",
                    border: "1px solid rgba(21,101,192,0.2)",
                    color: "#1565C0",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.04em",
                  }}>
                    OFF-ROAD
                  </span>
                </div>
                <p style={{
                  fontSize: "0.82rem",
                  color: "#2C4A6E",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  Enclosed or private spaces — building basements,
                  gated compounds and residential societies.
                  Can have numbered bays and advance booking.
                </p>
              </div>
            </div>

            {/* Features */}
            <div style={{ padding: "1.5rem 2rem" }}>
              <div style={{
                fontSize: "0.62rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                What you get
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}>
                {offRoadFeatures.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.375rem 0",
                      borderBottom: i < offRoadFeatures.length - 1
                        ? "1px solid #E5EEFA"
                        : "none",
                    }}
                  >
                    <div style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: f.supported
                        ? "rgba(76,175,80,0.1)"
                        : "rgba(192,57,43,0.08)",
                      border: f.supported
                        ? "1px solid rgba(76,175,80,0.2)"
                        : "1px solid rgba(192,57,43,0.15)",
                    }}>
                      {f.supported ? (
                        <svg
                          width="8" height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4CAF50"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          width="8" height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C0392B"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                    </div>
                    <span style={{
                      fontSize: "0.82rem",
                      color: f.supported ? "#2C4A6E" : "#506A84",
                      fontFamily: "'DM Sans', sans-serif",
                      opacity: f.supported ? 1 : 0.6,
                    }}>
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight */}
            <div style={{
              margin: "0 2rem 1.75rem",
              padding: "1rem 1.25rem",
              borderRadius: "0.75rem",
              background: "rgba(21,101,192,0.06)",
              border: "1px solid rgba(21,101,192,0.12)",
              borderLeft: "3px solid #1565C0",
              display: "flex",
              gap: "0.625rem",
            }}>
              <span style={{ fontSize: "0.875rem", flexShrink: 0 }}>💡</span>
              <p style={{
                fontSize: "0.78rem",
                color: "#2C4A6E",
                lineHeight: 1.65,
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Your staff assigns the parking space —
                not the customer. You stay in control
                of your zone at all times.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .types-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
