import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for YPark. Read our terms before using our services.",
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <LegalHero
        title="Terms of Service"
        lastUpdated="May 2025"
      />
      <LegalBody>

        <LegalSection title="Agreement to Terms">
          <LegalP>
            By accessing or using YPark at ypark.in or our mobile
            applications, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use our services.
          </LegalP>
          <LegalP>
            We reserve the right to update these terms at any time.
            Continued use of our services after changes constitutes
            acceptance.
          </LegalP>
        </LegalSection>

        <LegalSection title="Description of Services">
          <LegalP>
            YPark is a parking marketplace platform operated by
            Prothom Analytica India Pvt. Ltd. Our services include:
          </LegalP>
          <LegalList items={[
            "YPark vendor platform — for parking zone owners and ground staff to manage operations",
            "YPark customer platform — for vehicle owners to find and book parking (coming soon)",
            "Web interface at ypark.in",
            "Mobile applications available on Android",
          ]} />
        </LegalSection>

        <LegalSection title="User Accounts">
          <LegalP>
            To use certain features you must create an account.
            You are responsible for:
          </LegalP>
          <LegalList items={[
            "Providing accurate and complete information during registration",
            "Maintaining the security of your account credentials",
            "All activity that occurs under your account",
            "Notifying us immediately of any unauthorized use",
          ]} />
        </LegalSection>

        <LegalSection title="Parking Owner Terms">
          <LegalP>
            If you register as a parking zone owner you additionally agree to:
          </LegalP>
          <LegalList items={[
            "Provide accurate information about your parking zones including location and documentation",
            "Ensure you have the legal right to operate the parking zone you list",
            "Comply with all applicable local, state and national laws",
            "Allow YPark to verify your zone documentation before approval",
            "Pay the applicable platform service charges on transactions processed through YPark",
            "Not engage in fraudulent transactions or misrepresentation",
          ]} />
        </LegalSection>

        <LegalSection title="Prohibited Activities">
          <LegalP>
            You may not use our services to:
          </LegalP>
          <LegalList items={[
            "Violate any applicable laws or regulations",
            "Provide false or misleading information",
            "Impersonate any person or entity",
            "Engage in fraudulent transactions",
            "Attempt to gain unauthorized access to our systems",
            "Use our services for any unlawful purpose",
          ]} />
        </LegalSection>

        <LegalSection title="Payments and Fees">
          <LegalP>
            YPark charges a platform service fee on transactions
            processed through the platform. The applicable fee is
            communicated during zone registration and may be updated
            with notice.
          </LegalP>
          <LegalP>
            All payments are processed through third-party gateways.
            We are not responsible for errors arising from payment
            gateway services.
          </LegalP>
        </LegalSection>

        <LegalSection title="Intellectual Property">
          <LegalP>
            All content, design, code and materials on ypark.in and
            our applications are the property of Prothom Analytica
            India Pvt. Ltd. or our licensors. You may not reproduce,
            distribute or create derivative works without our explicit
            written permission.
          </LegalP>
        </LegalSection>

        <LegalSection title="Limitation of Liability">
          <LegalP>
            To the maximum extent permitted by law, Prothom Analytica
            India Pvt. Ltd. shall not be liable for any indirect,
            incidental or consequential damages arising from your use
            of our services.
          </LegalP>
          <LegalP>
            We do not guarantee uninterrupted or error-free service.
            We are not responsible for losses arising from technical
            failures or events beyond our control.
          </LegalP>
        </LegalSection>

        <LegalSection title="Governing Law">
          <LegalP>
            These Terms of Service are governed by the laws of India.
            Any disputes shall be subject to the exclusive jurisdiction
            of the courts of India.
          </LegalP>
        </LegalSection>

        <LegalSection title="Contact">
          <LegalList items={[
            "Email: info@prothomai.com",
            "Company: Prothom Analytica India Pvt. Ltd.",
            "Website: prothomai.com",
          ]} />
        </LegalSection>

      </LegalBody>
      <Footer />
    </main>
  );
}

// ─────────────────────────────────────────
// SHARED LAYOUT — copy exact same functions
// from privacy/page.js below here
// ─────────────────────────────────────────

function LegalHero({ title, lastUpdated }) {
  return (
    <section style={{
      background: "#0D1B2A",
      paddingTop: "7rem",
      paddingBottom: "2.75rem",
      borderBottom: "1px solid #1A3048",
      position: "relative",
      overflow: "hidden",
    }}>
      <div
        className="dot-pattern"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />
      <div
        className="section-wrap"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2rem",
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
            {title}
          </span>
        </div>

        <span className="section-label">Legal</span>

        <h1 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-1px",
          color: "#E8F4FD",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "1rem",
        }}>
          {title}
        </h1>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}>
          <span style={{
            fontSize: "0.78rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Last updated: {lastUpdated}
          </span>
          <div style={{
            width: "3px", height: "3px",
            borderRadius: "9999px",
            background: "#2C4A6E",
          }} />
          <span style={{
            fontSize: "0.78rem",
            color: "#506A84",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Prothom Analytica India Pvt. Ltd.
          </span>
        </div>
      </div>
    </section>
  );
}

function LegalBody({ children }) {
  return (
    <section style={{
      background: "#EBF1FF",
      padding: "4rem 0 6rem",
      borderBottom: "1px solid #DCE6F2",
    }}>
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
          <div style={{ maxWidth: "680px" }}>
            {children}
          </div>
          <div style={{
            position: "sticky",
            top: "5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            <div style={{
              background: "rgb(244, 249, 255)",
              border: "1px solid rgb(226, 235, 246)",
              borderRadius: "1.25rem",
              padding: "1.5rem",
            }}>
              <div style={{
                fontSize: "0.62rem",
                fontWeight: 700,
                color: "#6B829C",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Legal Documents
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}>
                {[
                  { label: "Privacy Policy",   href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Cookie Policy",    href: "/cookie-policy" },
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
            <div style={{
              background: "#FFFFFF",
              border: "1px solid rgb(226, 235, 246)",
              borderRadius: "1.25rem",
              padding: "1.5rem",
            }}>
              <div style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#132236",
                marginBottom: "0.375rem",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                Questions about this policy?
              </div>
              <div style={{
                fontSize: "0.75rem",
                color: "#5F7894",
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: "0.875rem",
                lineHeight: 1.6,
              }}>
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
      <h2 style={{
        fontSize: "1.05rem",
        fontWeight: 700,
        color: "#132236",
        marginBottom: "1rem",
        paddingBottom: "0.75rem",
        borderBottom: "1px solid #D6E3F1",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function LegalP({ children }) {
  return (
    <p style={{
      fontSize: "0.875rem",
      color: "#4D6783",
      lineHeight: 1.85,
      marginBottom: "0.875rem",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {children}
    </p>
  );
}

function LegalList({ items }) {
  return (
    <ul style={{
      margin: "0 0 1rem 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    }}>
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
          <div style={{
            width: "5px",
            height: "5px",
            borderRadius: "9999px",
            background: "#1565C0",
            flexShrink: 0,
            marginTop: "0.45rem",
          }} />
          {item}
        </li>
      ))}
    </ul>
  );
}