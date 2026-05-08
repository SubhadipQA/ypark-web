"use client";

import { useState } from "react";
import Link from "next/link";
import { ownerFaqs, driverFaqs } from "@/lib/constants";

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#132236",
        border: "1px solid",
        borderColor: open ? "#1E3A5F" : "#1A3048",
        borderRadius: "0.875rem",
        overflow: "hidden",
        transition: "border-color 0.2s ease",
      }}
    >
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.25rem 1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{
          fontSize: "0.9rem",
          fontWeight: 600,
          color: "#E8F4FD",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.4,
          flex: 1,
        }}>
          {faq.q}
        </span>

        {/* Icon */}
        <div style={{
          width: "24px",
          height: "24px",
          borderRadius: "9999px",
          border: "1px solid #1A3048",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "border-color 0.2s ease, transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          borderColor: open ? "#1565C0" : "#1A3048",
        }}>
          <svg
            width="10" height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#77A7DF" : "#506A84"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div style={{
        maxHeight: open ? "300px" : "0",
        overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <div style={{
          padding: "0 1.5rem 1.25rem",
          borderTop: "1px solid #1A3048",
          paddingTop: "1rem",
        }}>
          <p style={{
            fontSize: "0.85rem",
            color: "#8BA8C8",
            lineHeight: 1.8,
            fontFamily: "'DM Sans', sans-serif",
            margin: 0,
          }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{
        background: "#0D1B2A",
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
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-heading">
            Questions we get asked.
          </h2>
          <p className="section-sub" style={{
            margin: "1rem auto 0",
            textAlign: "center",
          }}>
            Everything a parking owner needs to know
            before getting started with YPark.
          </p>
        </div>

        {/* ── Two column FAQ ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
          className="faq-grid"
        >
          {/* Owner FAQs */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              marginBottom: "1.5rem",
            }}>
              <div style={{
                width: "3px",
                height: "18px",
                borderRadius: "9999px",
                background: "#1565C0",
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                For Parking Owners
              </span>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}>
              {ownerFaqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>

          {/* Driver FAQs */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              marginBottom: "1.5rem",
            }}>
              <div style={{
                width: "3px",
                height: "18px",
                borderRadius: "9999px",
                background: "#506A84",
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#506A84",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                For Vehicle Owners
              </span>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.625rem",
            }}>
              {driverFaqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>

            {/* Notify me card below driver FAQs */}
            <div style={{
              marginTop: "1rem",
              background: "#132236",
              border: "1px solid #1A3048",
              borderRadius: "0.875rem",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}>
              <div>
                <div style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#E8F4FD",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: "0.2rem",
                }}>
                  Want to know when driver app launches?
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  color: "#506A84",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  Leave your number and we will notify you.
                </div>
              </div>
              <Link
                href="/find-parking"
                className="btn-secondary"
                style={{
                  fontSize: "0.8rem",
                  padding: "0.5rem 1rem",
                  whiteSpace: "nowrap",
                }}
              >
                Notify Me
              </Link>
            </div>
          </div>
        </div>

        {/* ── Still have questions ── */}
        <div
          style={{
            background: "#132236",
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
              Still have questions?
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "#8BA8C8",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              We respond to every message within 24 hours.
            </div>
          </div>
          <div style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}>
            <a
              href="mailto:info@prothomai.com"
              className="btn-primary"
              style={{
                fontSize: "0.85rem",
                padding: "0.625rem 1.25rem",
              }}
            >
              Email Us
            </a>
            <Link
              href="/partners"
              className="btn-secondary"
              style={{
                fontSize: "0.85rem",
                padding: "0.625rem 1.25rem",
              }}
            >
              List Your Zone
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .faq-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}