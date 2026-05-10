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
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
      style={{
        background: "#132236",
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

        {/* ── Header ── */}
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

          {/* Summary card */}
          <div style={{
            background: "#0D1B2A",
            border: "1px solid #1A3048",
            borderRadius: "1rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
          }}>
            <div style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#506A84",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              4 steps to go live
            </div>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#506A84",
                  flexShrink: 0,
                  width: "20px",
                }}>
                  {step.number}
                </div>
                <div style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#8BA8C8",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Steps ── */}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            top: "20px",
            left: "19px",
            width: "2px",
            height: "calc(100% - 40px)",
            background: "#1A3048",
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
                background: "#0D1B2A",
                border: "1px solid #1A3048",
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
                  color: "#77A7DF",
                }}>
                  {i + 1}
                </span>
              </div>

              {/* Content card */}
              <div style={{
                background: "#0D1B2A",
                border: "1px solid #1A3048",
                borderRadius: "1rem",
                padding: "1.5rem",
                flex: 1,
                transition: "border-color 0.2s ease",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1E3A5F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1A3048";
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
                    color: "#506A84",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.08em",
                  }}>
                    STEP {step.number}
                  </span>
                  <div style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "9999px",
                    background: "#506A84",
                  }} />
                  <span style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#506A84",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    {step.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#E8F4FD",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {step.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize: "0.85rem",
                  color: "#8BA8C8",
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

        {/* ── Bottom CTA ── */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "#0D1B2A",
            border: "1px solid #1A3048",
            borderRadius: "1.25rem",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#E8F4FD",
              marginBottom: "0.375rem",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Ready to get started?
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#8BA8C8",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              No setup fee. No hardware. Just download and start.
            </div>
          </div>
          <div style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download App
            </a>
            <Link
              href="/partners"
              className="btn-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hiw-header {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}