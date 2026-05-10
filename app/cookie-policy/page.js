import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for YPark. Learn what cookies we use, why we use them, and how you can manage them.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <Navbar />
      <LegalHero title="Cookie Policy" lastUpdated="May 2026" />
      <LegalBody>
        <LegalSection title="Overview">
          <LegalP>
            This Cookie Policy explains how YPark and Prothom Analytica
            India Pvt. Ltd. use cookies and similar technologies on
            ypark.in and related services.
          </LegalP>
          <LegalP>
            It describes what these technologies are, why we use them,
            and the choices you have for controlling them.
          </LegalP>
        </LegalSection>

        <LegalSection title="What Are Cookies">
          <LegalP>
            Cookies are small text files stored on your device when you
            visit a website. They help websites remember your actions,
            preferences, session state, and other technical information.
          </LegalP>
          <LegalP>
            Similar technologies may include local storage, pixels, and
            analytics identifiers that serve related purposes.
          </LegalP>
        </LegalSection>

        <LegalSection title="Types of Cookies We Use">
          <LegalList
            items={[
              "Essential cookies — required for core site functionality, security, and page delivery",
              "Preference cookies — used to remember settings such as language or interface choices",
              "Analytics cookies — used to understand traffic, feature usage, and performance trends",
              "Marketing or campaign cookies — may be used in the future to measure campaign effectiveness",
            ]}
          />
        </LegalSection>

        <LegalSection title="How We Use Cookies">
          <LegalList
            items={[
              "To keep the website functioning reliably and securely",
              "To remember user choices and improve usability",
              "To measure how visitors use pages and features",
              "To identify technical issues and improve performance",
              "To understand interest in our product and launch pages",
            ]}
          />
        </LegalSection>

        <LegalSection title="Third-Party Cookies">
          <LegalP>
            Some cookies may be set by trusted third-party services such
            as analytics, embedded content providers, or infrastructure
            tools that help us operate and improve YPark.
          </LegalP>
          <LegalP>
            These third parties may process information according to
            their own privacy and cookie policies.
          </LegalP>
        </LegalSection>

        <LegalSection title="How to Control Cookies">
          <LegalP>
            You can manage or delete cookies through your browser
            settings. Most browsers allow you to block cookies, clear
            stored cookies, or receive alerts before a cookie is set.
          </LegalP>
          <LegalP>
            Blocking some cookies may affect how parts of the website
            function, especially essential features.
          </LegalP>
        </LegalSection>

        <LegalSection title="Updates to This Policy">
          <LegalP>
            We may update this Cookie Policy from time to time to reflect
            product changes, legal requirements, or operational needs.
            The latest revision date is shown at the top of this page.
          </LegalP>
        </LegalSection>

        <LegalSection title="Contact">
          <LegalList
            items={[
              "Email: info@prothomai.com",
              "Company: Prothom Analytica India Pvt. Ltd.",
              "Website: prothomai.com",
            ]}
          />
        </LegalSection>
      </LegalBody>
      <Footer />
    </main>
  );
}

function LegalHero({ title, lastUpdated }) {
  return (
    <section
      style={{
        background: "#0D1B2A",
        paddingTop: "7rem",
        paddingBottom: "2.75rem",
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
          opacity: 0.4,
        }}
      />

      <div className="section-wrap" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
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
            width="12"
            height="12"
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
          <span
            style={{
              fontSize: "0.75rem",
              color: "#8BA8C8",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            {title}
          </span>
        </div>

        <span className="section-label">Legal</span>

        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1px",
            color: "#E8F4FD",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "1rem",
          }}
        >
          {title}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              color: "#506A84",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Last updated: {lastUpdated}
          </span>
          <div
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "9999px",
              background: "#2C4A6E",
            }}
          />
          <span
            style={{
              fontSize: "0.78rem",
              color: "#506A84",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Prothom Analytica India Pvt. Ltd.
          </span>
        </div>
      </div>
    </section>
  );
}

function LegalBody({ children }) {
  return (
    <section
      style={{
        background: "#EBF1FF",
        padding: "4rem 0 6rem",
        borderBottom: "1px solid #DCE6F2",
      }}
    >
      <div className="section-wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="legal-grid"
        >
          <div style={{ maxWidth: "680px" }}>{children}</div>

          <div
            style={{
              position: "sticky",
              top: "5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                background: "rgb(244, 249, 255)",
                border: "1px solid rgb(226, 235, 246)",
                borderRadius: "1.25rem",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  color: "#6B829C",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Legal Documents
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                ].map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "#26415E",
                      textDecoration: "none",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.5rem",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.2s ease",
                      display: "block",
                    }}
                  >
                    {doc.label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid rgb(226, 235, 246)",
                borderRadius: "1.25rem",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#132236",
                  marginBottom: "0.375rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Questions about this policy?
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#5F7894",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: "0.875rem",
                  lineHeight: 1.6,
                }}
              >
                We respond within 24 hours.
              </div>
              <a
                href="mailto:info@prothomai.com"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#1565C0",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                info@prothomai.com →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .legal-grid {
            grid-template-columns: 1fr 240px !important;
          }
        }
      `}</style>
    </section>
  );
}

function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#132236",
          marginBottom: "1rem",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid #D6E3F1",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function LegalP({ children }) {
  return (
    <p
      style={{
        fontSize: "0.875rem",
        color: "#4D6783",
        lineHeight: 1.85,
        marginBottom: "0.875rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {children}
    </p>
  );
}

function LegalList({ items }) {
  return (
    <ul
      style={{
        margin: "0 0 1rem 0",
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.625rem",
            fontSize: "0.875rem",
            color: "#4D6783",
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.7,
          }}
        >
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "9999px",
              background: "#1565C0",
              flexShrink: 0,
              marginTop: "0.45rem",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}