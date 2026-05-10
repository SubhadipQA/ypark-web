import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "For Parking Owners — List Your Zone",
  description:
    "List your government authorized or private parking area on YPark. Manage walk-ins, monthly passes, staff and revenue from one app. Free to register.",
};

export default function PartnersPage() {
  return (
    <main>
      <Navbar />
      <PartnersHero />
      <WhoIsItFor />
      <ParkingTypes />
      <HowItWorks />
      <Features />
      <AppDownload />
      <FAQ />
      <Footer />
    </main>
  );
}

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────
function PartnersHero() {
  return (
    <section
      style={{
        background: "#0D1B2A",
        paddingTop: "7rem",
        paddingBottom: "3.5rem",
        borderBottom: "1px solid #1A3048",
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
          opacity: 0.5,
        }}
      />

      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Breadcrumb */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2.5rem",
        }}>
          <Link
            href="/"
            style={{
              fontSize: "0.75rem",
              color: "#506A84",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              transition: "color 0.2s ease",
            }}
          >
            YPark
          </Link>
          <svg
            width="12" height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C4A6E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span style={{
            fontSize: "0.75rem",
            color: "#8BA8C8",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
          }}>
            For Partners
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="partners-hero-grid"
        >
          {/* Left */}
          <div>
            <span className="section-label">For Parking Owners</span>
            <h1 style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: "#E8F4FD",
              marginBottom: "1.5rem",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              List your parking area.
              <br />
              Run it digitally.
            </h1>
            <p style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#8BA8C8",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "500px",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Whether you operate a government authorized street bay
              or a private compound — YPark gives you one app to
              manage visits, passes, staff and revenue.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              marginBottom: "3rem",
            }}>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                Download on Play Store
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                See How It Works
              </a>
            </div>

            {/* Three quick facts */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}>
              {[
                { value: "Free",     label: "to register" },
                { value: "24 hrs",   label: "to go live" },
                { value: "No",       label: "hardware needed" },
              ].map((fact) => (
                <div key={fact.label}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#E8F4FD",
                    letterSpacing: "-0.5px",
                    lineHeight: 1,
                    marginBottom: "0.2rem",
                  }}>
                    {fact.value}
                  </div>
                  <div style={{
                    fontSize: "0.72rem",
                    color: "#506A84",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                  }}>
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "560px",
                aspectRatio: "10 / 9",
              }}
            >
              <Image
                src="/partner-hero.png"
                alt="YPark partner app preview"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .partners-hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────
// WHO IS IT FOR
// ─────────────────────────────────────────
function WhoIsItFor() {
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

// ─────────────────────────────────────────
// PARKING TYPES
// ─────────────────────────────────────────
function ParkingTypes() {
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
        background: "#0D1B2A",
        borderTop: "1px solid #1A3048",
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
          <h2 className="section-heading">
            Two types of parking areas.
            <br />
            One app for both.
          </h2>
          <p className="section-sub" style={{
            margin: "1rem auto 0",
            textAlign: "center",
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
            background: "#132236",
            border: "1px solid #1A3048",
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
                    color: "#E8F4FD",
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
                  color: "#8BA8C8",
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
                        ? "1px solid rgba(26,48,72,0.5)"
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
                      color: f.supported ? "#8BA8C8" : "#506A84",
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
                color: "#8BA8C8",
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
            background: "#132236",
            border: "1px solid #1A3048",
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
                    color: "#E8F4FD",
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
                    color: "#77A7DF",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.04em",
                  }}>
                    OFF-ROAD
                  </span>
                </div>
                <p style={{
                  fontSize: "0.82rem",
                  color: "#8BA8C8",
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
                        ? "1px solid rgba(26,48,72,0.5)"
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
                      color: f.supported ? "#8BA8C8" : "#506A84",
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
                color: "#8BA8C8",
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

// ─────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────
function HowItWorks() {
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

// ─────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────
function Features() {
  const groups = [
    {
      title: "Zone Management",
      color: "#1565C0",
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
      color: "#00BCD4",
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
      color: "#4CAF50",
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
      color: "#F57F17",
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
      color: "#77A7DF",
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
      color: "#9C27B0",
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
        background: "#0D1B2A",
        borderTop: "1px solid #1A3048",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-wrap section-pad">
        <div style={{
          textAlign: "center",
          marginBottom: "3.5rem",
        }}>
          <span className="section-label">Features</span>
          <h2 className="section-heading">
            Everything your zone needs.
          </h2>
          <p className="section-sub" style={{
            margin: "1rem auto 0",
            textAlign: "center",
          }}>
            Built specifically for Indian parking zone operators.
            Every feature exists because a real owner needed it.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
        }}>
          {groups.map((group, i) => (
            <div
              key={i}
              style={{
                background: "#132236",
                border: "1px solid #1A3048",
                borderTop: `2px solid ${group.color}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                transition: "border-color 0.2s ease",
                cursor: "default",
              }}
            >
              <div style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#E8F4FD",
                marginBottom: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {group.title}
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}>
                {group.items.map((item, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                    }}
                  >
                    <div style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "9999px",
                      background: group.color,
                      flexShrink: 0,
                      marginTop: "0.45rem",
                    }} />
                    <span style={{
                      fontSize: "0.8rem",
                      color: "#8BA8C8",
                      fontFamily: "'DM Sans', sans-serif",
                      lineHeight: 1.5,
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// APP DOWNLOAD
// ─────────────────────────────────────────
function AppDownload() {
  return (
    <section
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
          maxWidth: "560px",
          margin: "0 auto",
        }}>
          <span className="section-label">Get Started</span>
          <h2 className="section-heading" style={{ color: "#0D1B2A" }}>
            Download YPark.
            <br />
            Your zone live in 24 hours.
          </h2>
          <p style={{
            fontSize: "0.95rem",
            color: "#2C4A6E",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Free to register. No hardware needed.
            Works on any Android phone.
          </p>

          {/* Play Store */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.875rem",
              padding: "0.875rem 1.75rem",
              background: "#E8F4FD",
              border: "1px solid #E8F4FD",
              borderRadius: "0.875rem",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.18 23.76c.33.18.7.19 1.04.03l13.2-7.62-2.8-2.8-11.44 10.39z" fill="#EA4335" />
              <path d="M.5 1.08C.18 1.43 0 1.96 0 2.64v18.72c0 .68.18 1.21.5 1.56l.08.08 10.49-10.49v-.24L.58 1z" fill="#4285F4" />
              <path d="M14.64 15.6l-3.5-3.5 3.5-3.5 3.95 2.28c1.13.65 1.13 1.72 0 2.37l-3.95 2.35z" fill="#FBBC05" />
              <path d="M3.18.24L14.64 7.9l-2.8 2.8L1.22.32C.87.14.5.16.18.48L3.18.24z" fill="#34A853" />
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

          {/* iOS note */}
          <p style={{
            fontSize: "0.75rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            iOS arriving soon.{" "}
            <Link
              href="/find-parking"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
            >
              Get notified when it launches →
            </Link>
          </p>

          {/* Divider */}
          <div style={{
            width: "100%",
            height: "1px",
            background: "#D6E4FF",
          }} />

          {/* Company credit */}
          <p style={{
            fontSize: "0.78rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            A product of{" "}
            <a
              href="https://prothomai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
            >
              Prothom Analytica India Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}