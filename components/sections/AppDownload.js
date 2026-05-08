"use client";

import Link from "next/link";

export default function AppDownload() {
  return (
    <section
      id="download"
      style={{
        background: "#0F2136",
        borderTop: "1px solid #1A3048",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern */}
      <div
        className="dot-pattern"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />

      <div className="section-wrap section-pad">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="download-grid"
        >

          {/* ── LEFT — Content ── */}
          <div>
            <span className="section-label">Download</span>
            <h2 className="section-heading">
              Get YPark.
              <br />
              Start organizing today.
            </h2>
            <p className="section-sub">
              Available on Android. Works on any phone.
              No special hardware needed.
            </p>

            {/* Play Store button */}
            <div style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "0.875rem 1.5rem",
                  background: "#E8F4FD",
                  border: "1px solid #E8F4FD",
                  borderRadius: "0.875rem",
                  textDecoration: "none",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#E8F4FD";
                  e.currentTarget.style.borderColor = "#E8F4FD";
                }}
              >
                {/* Play Store icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M3.18 23.76c.33.18.7.19 1.04.03l13.2-7.62-2.8-2.8-11.44 10.39z"
                    fill="#EA4335"
                  />
                  <path
                    d="M.5 1.08C.18 1.43 0 1.96 0 2.64v18.72c0 .68.18 1.21.5 1.56l.08.08 10.49-10.49v-.24L.58 1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M14.64 15.6l-3.5-3.5 3.5-3.5 3.95 2.28c1.13.65 1.13 1.72 0 2.37l-3.95 2.35z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M3.18.24L14.64 7.9l-2.8 2.8L1.22.32C.87.14.5.16.18.48L3.18.24z"
                    fill="#34A853"
                  />
                </svg>
                <div>
                  <div style={{
                    fontSize: "0.62rem",
                    color: "#506A84",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    lineHeight: 1,
                    marginBottom: "0.2rem",
                  }}>
                    GET IT ON
                  </div>
                  <div style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#0D1B2A",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1,
                    letterSpacing: "-0.3px",
                  }}>
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* iOS coming soon */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              padding: "0.625rem 1rem",
              background: "#132236",
              border: "1px solid #1A3048",
              borderRadius: "0.75rem",
            }}>
              <svg
                width="16" height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#506A84"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span style={{
                fontSize: "0.78rem",
                color: "#506A84",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}>
                iOS — arriving soon
              </span>
            </div>

            {/* Three quick facts */}
            <div style={{
              marginTop: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}>
              {[
                "Works on any Android phone — no special hardware",
                "Free to register your parking area",
                "Your zone live within 24 hours of approval",
              ].map((fact, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "9999px",
                    background: "rgba(21, 101, 192, 0.12)",
                    border: "1px solid rgba(21, 101, 192, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}>
                    <svg
                      width="8" height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#77A7DF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span style={{
                    fontSize: "0.875rem",
                    color: "#8BA8C8",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}>
                    {fact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — App preview card ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* For Parking Owners */}
            <div style={{
              background: "#132236",
              border: "1px solid #1A3048",
              borderLeft: "3px solid #1565C0",
              borderRadius: "1rem",
              padding: "1.5rem",
              transition: "border-color 0.2s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1E3A5F";
                e.currentTarget.style.borderLeftColor = "#1E88E5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1A3048";
                e.currentTarget.style.borderLeftColor = "#1565C0";
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}>
                  <span style={{ fontSize: "1.25rem" }}>🏢</span>
                  <div>
                    <div style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#E8F4FD",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      For Parking Owners
                    </div>
                    <div style={{
                      fontSize: "0.7rem",
                      color: "#506A84",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      Manage your zone digitally
                    </div>
                  </div>
                </div>
                <span className="badge badge-live">
                  <span style={{
                    width: "5px", height: "5px",
                    borderRadius: "9999px",
                    background: "#4CAF50",
                    display: "inline-block",
                  }} />
                  Operational
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "Manage visits, passes and staff",
                  "Real-time revenue dashboard",
                  "Cash and UPI collections",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                    }}
                  >
                    <div style={{
                      width: "4px", height: "4px",
                      borderRadius: "9999px",
                      background: "#506A84",
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: "0.8rem",
                      color: "#8BA8C8",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    fontSize: "0.82rem",
                    padding: "0.625rem 1.25rem",
                  }}
                >
                  Download YPark
                </a>
              </div>
            </div>

            {/* For Drivers */}
            <div style={{
              background: "#132236",
              border: "1px solid #1A3048",
              borderLeft: "3px solid #506A84",
              borderRadius: "1rem",
              padding: "1.5rem",
              opacity: 0.7,
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}>
                  <span style={{ fontSize: "1.25rem" }}>🚗</span>
                  <div>
                    <div style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "#E8F4FD",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      For Vehicle Owners
                    </div>
                    <div style={{
                      fontSize: "0.7rem",
                      color: "#506A84",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      Find and book parking
                    </div>
                  </div>
                </div>
                <span className="badge badge-orange">
                  Arriving
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "Find parking near your destination",
                  "Check real-time availability",
                  "Monthly pass for regular spots",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                    }}
                  >
                    <div style={{
                      width: "4px", height: "4px",
                      borderRadius: "9999px",
                      background: "#2C4A6E",
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: "0.8rem",
                      color: "#506A84",
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <Link
                  href="/find-parking"
                  className="btn-secondary"
                  style={{
                    fontSize: "0.82rem",
                    padding: "0.625rem 1.25rem",
                    opacity: 0.6,
                  }}
                >
                  Notify Me When Live
                </Link>
              </div>
            </div>

            {/* Company credit */}
            <div style={{
              padding: "1rem 1.25rem",
              background: "#0D1B2A",
              border: "1px solid #1A3048",
              borderRadius: "0.875rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}>
              <span style={{
                fontSize: "0.72rem",
                color: "#506A84",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                A product of Prothom Analytica India
              </span>
              <a
                href="https://prothomai.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#506A84",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#77A7DF"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#506A84"}
              >
                prothomai.com →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .download-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}