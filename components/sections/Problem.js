"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Paper registers everywhere",
    desc: "Entry, exit and collections tracked in notebooks. No history. No proof. No audit trail.",
    color: "#F57F17",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Owner has zero visibility",
    desc: "No idea how much was collected today. No idea which staff collected what. Revenue is a guess.",
    color: "#C0392B",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Staff accountability is zero",
    desc: "No way to track who handled which vehicle. Cash goes missing. No one is accountable.",
    color: "#C0392B",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Monthly passes in notebooks",
    desc: "Pass holders tracked manually. Staff forgets who has a pass. Customers pay twice.",
    color: "#F57F17",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Drivers circle for 20 minutes",
    desc: "No way to know where parking is available. No information. No booking. Pure luck.",
    color: "#F57F17",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Revenue leaks every day",
    desc: "No reconciliation. No settlement tracking. Money counted at day end — always wrong.",
    color: "#C0392B",
  },
];

const stats = [
  { value: "₹800Cr+", label: "Untracked parking revenue annually in India", color: "#C0392B" },
  { value: "90%",     label: "Parking zones still running on paper registers", color: "#F57F17" },
  { value: "20 min",  label: "Average time lost finding parking in Indian metros", color: "#C0392B" },
  { value: "0",       label: "Organized parking marketplace in India today", color: "#F57F17" },
];

export default function Problem() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
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
    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });
    return () => cardObserver.disconnect();
  }, []);

  return (
    <section
      id="problem"
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
          opacity: 0.5,
        }}
      />

      <div className="section-wrap section-pad">

        {/* ── Header ── */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">The Problem</span>
          <h2 className="section-heading">
            Parking in Indian cities
            <br />
            is still running on paper.
          </h2>
          <p className="section-sub">
            From the owner who cannot track daily revenue to the
            driver who wastes 20 minutes searching — both sides
            face the same root cause. Nobody organized the system.
          </p>
        </div>

        {/* ── Problem Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "3.5rem",
          }}
        >
          {problems.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{
                background: "#132236",
                border: "1px solid #1A3048",
                borderRadius: "1rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1E3A5F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1A3048";
              }}
            >
              {/* Icon */}
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${p.color}12`,
                border: `1px solid ${p.color}25`,
                color: p.color,
                flexShrink: 0,
              }}>
                {p.icon}
              </div>

              {/* Text */}
              <div>
                <div style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#E8F4FD",
                  marginBottom: "0.375rem",
                  lineHeight: 1.3,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {p.title}
                </div>
                <div style={{
                  fontSize: "0.82rem",
                  color: "#8BA8C8",
                  lineHeight: 1.7,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stat strip ── */}
        <div
          style={{
            background: "#132236",
            border: "1px solid #1A3048",
            borderRadius: "1.25rem",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top accent */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "2px",
            background: "#C0392B",
          }} />

          {stats.map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: s.color,
                letterSpacing: "-1px",
                marginBottom: "0.375rem",
                lineHeight: 1,
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: "0.78rem",
                color: "#8BA8C8",
                lineHeight: 1.6,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bridge ── */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{
            fontSize: "1rem",
            color: "#8BA8C8",
            maxWidth: "440px",
            lineHeight: 1.75,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            This is exactly the gap YPark was built to close.
          </p>
          <a
            href="#parking-types"
            className="btn-ghost"
            aria-label="See how YPark solves this"
          >
            See how we solve this
            <svg
              width="14" height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}