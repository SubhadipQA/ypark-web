"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".hero-item");
          items.forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #FFFFFF 0%, #EEF4FF 100%)",
        overflow: "hidden",
      }}
    >
      <div
        className="section-wrap section-pad section-pad-hero"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Two-column grid */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* LEFT — content */}
          <div>
            {/* Headline */}
            <h1
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-1.5px",
                color: "#111827",
                marginBottom: "1.5rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Parking in India,
              <br />
              <span style={{ color: "#0063FF" }}>finally organized.</span>
            </h1>

            {/* Subtext */}
            <p
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
                color: "#4B5563",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "520px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              YPark connects parking zone owners with daily drivers
              through one organized platform. Owners manage visits,
              passes, staff and revenue. Drivers find and book parking
              near them.
            </p>

            {/* CTAs */}
            <div
              className="hero-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.875rem",
              }}
            >
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                <svg
                  width="16" height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3.18 23.76c.33.18.7.19 1.04.03l13.2-7.62-2.8-2.8-11.44 10.39zM.5 1.08C.18 1.43 0 1.96 0 2.64v18.72c0 .68.18 1.21.5 1.56l.08.08 10.49-10.49v-.24L.58 1z" />
                  <path d="M14.64 15.6l-3.5-3.5 3.5-3.5 3.95 2.28c1.13.65 1.13 1.72 0 2.37l-3.95 2.35z" />
                  <path d="M3.18.24L14.64 7.9l-2.8 2.8L1.22.32C.87.14.5.16.18.48L3.18.24z" />
                </svg>
                Download on Play Store
              </a>

              <Link
                href="/partners"
                className="btn-secondary"
                style={{ fontSize: "0.9rem", padding: "0.875rem 1.5rem" }}
              >
                List Your Parking Area
              </Link>
            </div>
          </div>

          {/* RIGHT — app image */}
          <div
            className="hero-item hero-image"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
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
                src="/YparkImage.webp"
                alt="YPark app preview"
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
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 767px) {
          .hero-image { display: none !important; }
        }
      `}</style>
    </section>
  );
}
