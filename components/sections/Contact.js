"use client";

import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "sales@prothomai.com",
    href: "mailto:sales@prothomai.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 92424 04198",
    href: "tel:+919242404198",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Kolkata, West Bengal, India",
    href: "https://maps.google.com/?q=Kolkata,West+Bengal,India",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Prothom Analytica",
    href: "https://www.linkedin.com/in/prothom-ai-3432b6408/",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const INITIAL = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL);
    } catch {
      setErrMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="section-v-pad"
      style={{ background: "#F4F4F4" }}
    >
      <div className="section-wrap">
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">Get in Touch</span>
          <h2
            className="section-heading"
            style={{ marginTop: "0.25rem", maxWidth: "480px" }}
          >
            Tell us what you are<br />trying to fix.
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#4B5563",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              If you run parking operations, manage public or private sites,
              explore urban mobility problems, or want to work with us on real
              operational systems, write to us. We read every serious message.
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {contactLinks.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1.1rem 0",
                    borderBottom:
                      i < contactLinks.length - 1
                        ? "1px solid #E2E8F0"
                        : "none",
                    textDecoration: "none",
                    transition: "padding-left 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.paddingLeft = "0.5rem")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.paddingLeft = "0")
                  }
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(0, 99, 255, 0.07)",
                      border: "1px solid rgba(0, 99, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0063FF",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#9CA3AF",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "#111827",
                        lineHeight: 1.4,
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time badge */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1rem 1.25rem",
                background: "rgba(0, 99, 255, 0.05)",
                borderRadius: "0.75rem",
                border: "1px solid rgba(0, 99, 255, 0.15)",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#22C55E",
                  flexShrink: 0,
                  marginTop: "4px",
                  boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                }}
              />
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#0063FF",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  fontFamily: "'DM Sans', sans-serif",
                  margin: 0,
                }}
              >
                We usually reply within <strong>1-2 business days.</strong>
                <br />
                Kolkata, India. IST (UTC +5:30).
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "1.25rem",
                  padding: "3rem 2rem",
                  textAlign: "center",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "0.5rem",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Message sent!
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#4B5563",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.6,
                  }}
                >
                  We&apos;ll get back to you within 1-2 business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#0063FF",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                }}
              >
                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={labelStyle}>
                      Name <span style={{ color: "#0063FF" }}>*</span>
                    </label>
                    <input
                      name="name"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="input"
                      style={{ marginTop: "0.4rem" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Email <span style={{ color: "#0063FF" }}>*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="input"
                      style={{ marginTop: "0.4rem" }}
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={labelStyle}>
                      Phone <span style={{ color: "#0063FF" }}>*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="input"
                      style={{ marginTop: "0.4rem" }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input
                      name="subject"
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={handleChange}
                      className="input"
                      style={{ marginTop: "0.4rem" }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>
                    Message <span style={{ color: "#0063FF" }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us what you have in mind..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="textarea"
                    style={{ marginTop: "0.4rem" }}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#C0392B",
                      fontFamily: "'DM Sans', sans-serif",
                      margin: 0,
                    }}
                  >
                    {errMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "loading"}
                  style={{
                    justifyContent: "center",
                    width: "100%",
                    padding: "0.875rem",
                    fontSize: "0.9rem",
                    opacity: status === "loading" ? 0.7 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span
                        className="spinner"
                        style={{ borderTopColor: "white" }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "#9CA3AF",
                    textAlign: "center",
                    lineHeight: 1.5,
                    fontFamily: "'DM Sans', sans-serif",
                    margin: 0,
                  }}
                >
                  Your message is stored securely and only used to respond to you.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        .contact-grid {
          grid-template-columns: 1fr 1.4fr;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "#111827",
  letterSpacing: "0.02em",
  fontFamily: "'DM Sans', sans-serif",
};
