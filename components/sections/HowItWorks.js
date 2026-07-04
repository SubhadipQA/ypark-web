"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Register & add your parking area",
    desc: "Download YPark from Play Store. Register with your phone number. Add your parking area — name, location, type and capacity for two-wheelers and four-wheelers separately.",
    tag: "Setup",
  },
  {
    number: "02",
    title: "Configure your zone settings",
    desc: "Set your hourly rate, enable monthly passes, choose accepted payment modes — cash, UPI or both. For private parking, enable advance booking if needed.",
    tag: "Configure",
  },
  {
    number: "03",
    title: "Add your ground staff",
    desc: "Invite your entry and exit operators. They get their own login. You control exactly what they can see. Staff sees only their own collections — never your full revenue.",
    tag: "Team",
  },
  {
    number: "04",
    title: "Manage daily operations",
    desc: "Staff logs every vehicle entry in one tap. Duration and charges calculated automatically on exit. Monthly pass holders detected automatically — no manual checking.",
    tag: "Operations",
  },
];

export default function HowItWorks() {
  const stepsRef = useRef([]);

  useEffect(() => {
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    stepsRef.current.forEach((step) => {
      if (step) stepObserver.observe(step);
    });
    return () => stepObserver.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      className="section-v-pad"
      style={{ background: "#FFFFFF", borderTop: "1px solid #F3F4F6" }}
    >
      <div className="section-wrap">

        {/* Header + summary card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "2.5rem",
            alignItems: "end",
          }}
          className="hiw-header"
        >
          <div>
            <span className="section-label">How It Works</span>
            <h2 className="section-heading">
              Your zone live
              <br />
              in 24 hours.
            </h2>
            <p className="section-sub">
              No technical knowledge needed.
              No hardware to install. Just your
              phone and your parking area.
            </p>
          </div>

          {/* Summary card — desktop only */}
          <div className="hiw-summary" style={{
            background: "#F9FAFB",
            border: "1px solid #E2E8F0",
            borderRadius: "1rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
          }}>
            <div style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#9CA3AF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              4 steps to go live
            </div>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#9CA3AF",
                  flexShrink: 0,
                  width: "20px",
                }}>
                  {step.number}
                </div>
                <div style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#374151",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps timeline */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            top: "20px",
            left: "19px",
            width: "2px",
            height: "calc(100% - 40px)",
            background: "#E2E8F0",
          }} />

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepsRef.current[i] = el)}
              style={{
                display: "flex",
                gap: "1.5rem",
                paddingBottom: i < steps.length - 1 ? "2.5rem" : "0",
                opacity: 0,
                transform: "translateX(-20px)",
                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
              }}
            >
              {/* Number circle */}
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                background: "#EEF4FF",
                border: "1px solid rgba(0,99,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                zIndex: 1,
                position: "relative",
              }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "#0063FF",
                }}>
                  {i + 1}
                </span>
              </div>

              {/* Content card */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  flex: 1,
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,99,255,0.3)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,99,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                }}
              >
                {/* Tag + step */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "0.625rem",
                }}>
                  <span style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#9CA3AF",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.08em",
                  }}>
                    STEP {step.number}
                  </span>
                  <div style={{ width: "3px", height: "3px", borderRadius: "9999px", background: "#D1D5DB" }} />
                  <span style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#9CA3AF",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    {step.tag}
                  </span>
                </div>

                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: "0.85rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  fontFamily: "'DM Sans', sans-serif",
                  margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom links */}
        <div style={{
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: "1px solid #F3F4F6",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}>
          <Link
            href="/partners"
            className="btn-primary"
            style={{ fontSize: "0.875rem" }}
          >
            List Your Parking Area
          </Link>
          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.625rem 1.25rem",
              borderRadius: "0.625rem",
              border: "1.5px solid #0063FF",
              background: "#FFFFFF",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#0063FF",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0063FF";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
              e.currentTarget.style.color = "#0063FF";
            }}
          >
            Contact Us
          </Link>
        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hiw-header {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 1023px) {
          .hiw-summary { display: none !important; }
        }
      `}</style>
    </section>
  );
}
