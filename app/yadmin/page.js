import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "YAdmin — Multi-Zone Parking Management",
  description:
    "YAdmin by YPark is built for parking companies, government bodies and multi-zone operators. One dashboard to manage every zone, every city, every rupee.",
};

export default function YAdminPage() {
  return (
    <main>
      <Navbar />
      <YAdminHero />
      <WhoIsItFor />
      <WhatItDoes />
      <HowItWorks />
      <RequestDemo />
      <FAQ />
      <Footer />
    </main>
  );
}

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────
function YAdminHero() {
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

      <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>

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
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2C4A6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
          <span style={{
            fontSize: "0.75rem",
            color: "#8BA8C8",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
          }}>
            YAdmin
          </span>
        </div>

        {/* Hero grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="yadmin-hero-grid"
        >
          {/* Left — content */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: "1.75rem" }}>
              <Image
                src="/YadminWhite.png"
                alt="YAdmin"
                width={160}
                height={48}
                style={{ objectFit: "contain", height: "auto" }}
              />
            </div>

            {/* Badge */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "#00BCD4",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.35rem 0.875rem",
                borderRadius: "9999px",
                background: "rgba(0,188,212,0.08)",
                border: "1px solid rgba(0,188,212,0.2)",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                <span style={{
                  width: "5px", height: "5px",
                  borderRadius: "9999px",
                  background: "#00BCD4",
                  display: "inline-block",
                }} />
                Multi-Zone Platform
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
              color: "#E8F4FD",
              marginBottom: "1.5rem",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              One dashboard.
              <br />
              Every zone.
              <br />
              Total control.
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
              color: "#8BA8C8",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "500px",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              YAdmin is built for parking companies, municipal bodies, and
              anyone managing multiple zones across a city. See everything,
              control everything — from one place.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              marginBottom: "3rem",
            }}>
              <a
                href="https://prothomai.com/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="yadmin-primary-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "0.75rem",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#0D1B2A",
                  background: "#00BCD4",
                  border: "1px solid #00BCD4",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "opacity 0.2s ease",
                }}
              >
                Request a Demo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="yadmin-secondary-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "0.75rem",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#8BA8C8",
                  background: "transparent",
                  border: "1px solid #1A3048",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Three quick facts */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.75rem",
            }}>
              {[
                { value: "Unlimited", label: "zones per account" },
                { value: "Real-time", label: "city-level dashboard" },
                { value: "Guided",    label: "onboarding included" },
              ].map((fact) => (
                <div key={fact.label}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#00BCD4",
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
                src="/YadminImage.png"
                alt="YAdmin hero preview"
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
          .yadmin-hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        .yadmin-primary-cta:hover {
          opacity: 0.88;
        }

        .yadmin-secondary-cta:hover {
          border-color: #1565C0;
          color: #E8F4FD;
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────
// WHO IS IT FOR
// ─────────────────────────────────────────
function WhoIsItFor() {
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
          <span className="section-label" style={{ color: "#00BCD4" }}>Who It&apos;s For</span>
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

// ─────────────────────────────────────────
// WHAT IT DOES — YPark vs YAdmin
// ─────────────────────────────────────────
function WhatItDoes() {
  const features = [
    {
      icon: "📊",
      title: "All-Zone Command Dashboard",
      desc: "See every zone's real-time status — occupancy, revenue, active staff — from a single screen. No switching between accounts.",
      color: "#00BCD4",
    },
    {
      icon: "📈",
      title: "City-Level Revenue Analytics",
      desc: "Roll up daily, weekly and monthly revenue across all zones. Break it down by city, zone type, or individual location.",
      color: "#1565C0",
    },
    {
      icon: "👥",
      title: "Bulk Staff Management",
      desc: "Add, assign and remove staff across all zones from one place. Set permissions per zone. View every staff member's collection history.",
      color: "#4CAF50",
    },
    {
      icon: "🔍",
      title: "Zone Performance Comparison",
      desc: "See which zones are performing and which aren't. Compare revenue, visits, and pass adoption side by side.",
      color: "#F57F17",
    },
    {
      icon: "✅",
      title: "Approval Workflows",
      desc: "Control how new zones, staff and passes are approved. Multi-level approval for organizations that need it.",
      color: "#9C27B0",
    },
    {
      icon: "📋",
      title: "Custom Reporting",
      desc: "Generate reports by zone, city, date range or staff member. Export for audits, reconciliation, or board presentations.",
      color: "#77A7DF",
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
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4 }} />

      <div className="section-wrap section-pad">

        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">What YAdmin Does</span>
          <h2 className="section-heading" style={{ maxWidth: "36rem" }}>
            YPark runs your zone.
            <br />
            YAdmin runs your business.
          </h2>
          <p className="section-sub" style={{ marginTop: "1rem" }}>
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
            background: "#132236",
            border: "1px solid #1A3048",
            borderLeft: "4px solid #1565C0",
            borderRadius: "1rem",
            padding: "1.5rem",
          }}>
            <div style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              color: "#506A84",
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
                  <span style={{ fontSize: "0.82rem", color: "#8BA8C8", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
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
              <div style={{ width: "32px", height: "1px", background: "#1A3048" }} />
              Scale up
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* YAdmin */}
          <div style={{
            background: "#132236",
            border: "1px solid rgba(0,188,212,0.25)",
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
                  <span style={{ fontSize: "0.82rem", color: "#8BA8C8", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
        }}>
          {features.map((f) => (
            <div
              key={f.title}
              className="yadmin-feature-card"
              style={{
                background: "#132236",
                border: "1px solid #1A3048",
                borderTop: `2px solid ${f.color}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                transition: "border-color 0.2s ease",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.875rem", lineHeight: 1 }}>{f.icon}</div>
              <div style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#E8F4FD",
                marginBottom: "0.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {f.title}
              </div>
              <div style={{
                fontSize: "0.8rem",
                color: "#8BA8C8",
                lineHeight: 1.7,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {f.desc}
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

        .yadmin-feature-card:hover {
          border-color: #1E3A5F;
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
        background: "#132236",
        borderTop: "1px solid #1A3048",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.35 }} />

      <div className="section-wrap section-pad">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-heading">
            From contact to live
            <br />
            in one week.
          </h2>
          <p className="section-sub" style={{ margin: "1rem auto 0", textAlign: "center" }}>
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
            background: "#0D1B2A",
            border: "1px solid #1A3048",
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
                borderRight: "1px solid #1A3048",
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
                color: "#506A84",
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
                color: "#E8F4FD",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: "0.78rem",
                color: "#8BA8C8",
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
            className="yadmin-primary-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#0D1B2A",
              background: "#00BCD4",
              border: "1px solid #00BCD4",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              transition: "opacity 0.2s ease",
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
            border-bottom: 1px solid #1A3048 !important;
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

        .yadmin-primary-cta:hover {
          opacity: 0.88;
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────
// REQUEST DEMO CTA
// ─────────────────────────────────────────
function RequestDemo() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #EBF1FF 0%, #F5F8FF 50%, #EEF3FF 100%)",
        borderTop: "1px solid #D6E4FF",
        position: "relative",
      }}
    >
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

          {/* YAdmin logo — black version on light bg */}
          <Image
            src="/YadminBlack.png"
            alt="YAdmin"
            width={140}
            height={42}
            style={{ objectFit: "contain", height: "auto" }}
          />

          <h2 style={{
            fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            color: "#0D1B2A",
            fontFamily: "'DM Sans', sans-serif",
            margin: 0,
          }}>
            Ready to manage your
            <br />
            zones at scale?
          </h2>

          <p style={{
            fontSize: "1rem",
            color: "#2C4A6E",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
            margin: 0,
          }}>
            Talk to us. We will understand your setup and show you
            exactly how YAdmin fits your operation.
          </p>

          <a
            href="https://prothomai.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="yadmin-primary-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.25rem",
              borderRadius: "0.875rem",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#0D1B2A",
              background: "#00BCD4",
              border: "1px solid #00BCD4",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              transition: "opacity 0.2s ease",
              boxShadow: "0 4px 20px rgba(0,188,212,0.25)",
            }}
          >
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <p style={{
            fontSize: "0.78rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
            margin: 0,
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

      <style>{`
        .yadmin-primary-cta:hover {
          opacity: 0.88;
        }
      `}</style>
    </section>
  );
}