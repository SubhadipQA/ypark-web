"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Paper registers everywhere",
    desc: "Entry, exit and collections tracked in notebooks. No history. No proof. No audit trail.",
    accent: "#E67E22",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Owner has zero visibility",
    desc: "No idea how much was collected today. No idea which staff collected what. Revenue is a guess.",
    accent: "#C0392B",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Staff accountability is zero",
    desc: "No way to track who handled which vehicle. Cash goes missing. No one is accountable.",
    accent: "#C0392B",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Monthly passes in notebooks",
    desc: "Pass holders tracked manually. Staff forgets who has a pass. Customers end up paying twice.",
    accent: "#E67E22",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "Drivers circle for 20 minutes",
    desc: "No way to know where parking is available. No information. No booking. Pure luck.",
    accent: "#E67E22",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Revenue leaks every day",
    desc: "No reconciliation. No settlement tracking. Money counted at day end — always wrong.",
    accent: "#C0392B",
  },
];

export default function Problem() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.08 }
    );
    rowsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="problem"
      className="section-v-pad"
      style={{ background: "#F4F4F4" }}
    >
      <div className="section-wrap">
        <div
          className="problem-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >

          {/* LEFT — sticky heading */}
          <div style={{ position: "sticky", top: "6rem" }}>
            <span className="section-label">The Problem</span>
            <h2
              className="section-heading"
              style={{ marginTop: "0.25rem", marginBottom: "1.25rem" }}
            >
              Parking in Indian cities
              <br />
              is still running on paper.
            </h2>
            <p style={{
              fontSize: "0.9rem",
              color: "#4B5563",
              lineHeight: 1.8,
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "2rem",
            }}>
              From the owner who cannot track daily revenue to the driver
              who wastes 20 minutes searching — both sides face the same
              root cause. Nobody organized the system.
            </p>
            <a
              href="#how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#0063FF",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: "gap 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "0.625rem")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "0.375rem")}
            >
              See how we solve this
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* RIGHT — problem rows */}
          <div>
            {problems.map((p, i) => (
              <div
                key={i}
                ref={(el) => (rowsRef.current[i] = el)}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.375rem 0",
                  borderBottom: i < problems.length - 1 ? "1px solid #F3F4F6" : "none",
                  opacity: 0,
                  transform: "translateY(14px)",
                  transition: `opacity 0.4s ease ${i * 55}ms, transform 0.4s ease ${i * 55}ms`,
                  alignItems: "flex-start",
                }}
              >
                {/* Accent bar + icon */}
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", flexShrink: 0 }}>
                  <div style={{
                    width: "3px",
                    background: p.accent,
                    borderRadius: "2px",
                    alignSelf: "stretch",
                    minHeight: "48px",
                    flexShrink: 0,
                  }} />
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: `${p.accent}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: p.accent,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}>
                    {p.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <div style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "0.3rem",
                    lineHeight: 1.35,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {p.title}
                  </div>
                  <div style={{
                    fontSize: "0.82rem",
                    color: "#6B7280",
                    lineHeight: 1.7,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .problem-layout > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
