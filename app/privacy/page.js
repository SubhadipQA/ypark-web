import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for YPark. Learn how we collect, use and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <LegalHero
        title="Privacy Policy"
        lastUpdated="July 2026"
      />
      <LegalBody>

        <LegalSection title="Overview">
          <LegalP>
            Your privacy matters to Prothom Analytica India Pvt. Ltd.
            (the &quot;Company&quot;, &quot;we&quot;, &quot;Y-Park&quot;,
            &quot;us&quot; or &quot;our&quot;).
          </LegalP>
          <LegalP>
            This Privacy Policy (&quot;Policy&quot;) describes the policies
            and procedures on the collection, use, processing, storage,
            retrieval, disclosure, transfer and protection of your information,
            including personal information and sensitive personal data or
            information (&quot;Information&quot;), that Y-Park may receive
            through your online access, interaction or use of the Y-Park
            mobile applications (&quot;Y-Park App&quot;) or our website
            (collectively referred to as the &quot;Y-Park Platform&quot;)
            or through your offline interaction with us including through
            mails, phones, in person, etc., or while availing our Services.
          </LegalP>
          <LegalP>
            The terms &quot;you&quot; and &quot;your&quot; refer to a Y-Partner,
            a Customer, a Vendor Partner or any other user of the Y-Park Platform
            and/or availing the Services.
          </LegalP>
          <LegalP>
            The term &quot;Services&quot; refers to any services offered by
            Y-Park in accordance with the terms and conditions applicable to
            you (and available on the Y-Park Platform) whether on the Y-Park
            Platform or otherwise.
          </LegalP>
          <LegalP>
            Please read this Policy before using the Y-Park Platform or
            submitting any Information to Y-Park. This Policy is a part of
            and incorporated within, and is to be read along with, the terms
            and conditions applicable to the users of the Y-Park App available
            on the Y-Park Platform.
          </LegalP>
        </LegalSection>

        <LegalSection title="User Acceptance">
          <LegalP>
            By accessing or using the Y-Park Platform or the Services, you
            agree and consent to this Policy, along with any amendments made
            by the Company at its sole discretion and posted on the Y-Park
            Platform from time to time.
          </LegalP>
          <LegalP>
            Any collection, processing, retrieval, transfer, use, storage,
            disclosure and protection of your Information will be in accordance
            with this Policy and applicable laws including but not limited to
            Information Technology Act, 2000, and the rules framed thereunder
            (&quot;Applicable Laws&quot;). If you do not agree with the Policy,
            please do not use or access the Y-Park Platform.
          </LegalP>
          <LegalP>
            You hereby represent to Y-Park that:
          </LegalP>
          <LegalList items={[
            "The Information you provide to Y-Park from time to time, is and will be authentic, correct, current and updated and you have all the rights, permissions and consents as may be required to provide such Information to Y-Park.",
            "Your providing of the Information as well as Y-Park's consequent storage, collection, usage, transfer, access, or processing of such Information will not be in violation of any agreement, Applicable Laws, charter documents, judgments, orders and decrees.",
            "If you disclose to us any Information relating to other people, you represent that you have the authority to do so and to permit us to use such Information in accordance with this Policy.",
          ]} />
        </LegalSection>

        <LegalSection title="Information We Collect">
          <LegalP>
            We collect the following types of information depending on
            how you interact with our services:
          </LegalP>
          <LegalList items={[
            "Name, email address and phone number when you register",
            "Business information — parking zone name, address and documents for owner registration",
            "Vehicle information — registration number and vehicle type for parking sessions",
            "Payment information — we do not store card details, payments are processed by third-party gateways",
            "Device information and usage data including IP address and browser type",
            "Location data when you use location features, with your permission",
            "Messages sent through our contact form or email",
          ]} />
        </LegalSection>

        <LegalSection title="How We Use Your Information">
          <LegalList items={[
            "To provide, operate and improve Y-Park",
            "To process registrations, parking sessions and payments",
            "To send service-related communications such as confirmations and receipts",
            "To send updates if you have subscribed — unsubscribe anytime",
            "To respond to your enquiries and support requests",
            "To verify zone ownership and comply with regulatory requirements",
            "To analyse usage and improve our product",
            "To comply with legal obligations",
          ]} />
        </LegalSection>

        <LegalSection title="Data Storage and Security">
          <LegalP>
            Your data is stored on secure servers with industry-standard
            security measures including encryption in transit and at rest.
          </LegalP>
          <LegalP>
            We retain your personal data for as long as necessary to
            provide our services. You may request deletion of your
            account at any time by contacting us at{" "}
            <a
              href="mailto:info@prothomai.com"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              info@prothomai.com
            </a>.
          </LegalP>
        </LegalSection>

        <LegalSection title="Sharing Your Information">
          <LegalP>
            We do not sell your personal information. We may share
            your information only with:
          </LegalP>
          <LegalList items={[
            "Payment gateway providers — to process transactions securely",
            "Cloud infrastructure providers — to host and operate our services",
            "Law enforcement — when required by law",
          ]} />
        </LegalSection>

        <LegalSection title="Your Rights">
          <LegalList items={[
            "Right to access — request a copy of data we hold about you",
            "Right to correction — request correction of inaccurate data",
            "Right to deletion — request deletion of your personal data",
            "Right to withdraw consent — unsubscribe from communications anytime",
          ]} />
          <LegalP>
            To exercise any of these rights contact us at{" "}
            <a
              href="mailto:info@prothomai.com"
              style={{
                color: "#1565C0",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              info@prothomai.com
            </a>.
            We will respond within 30 days.
          </LegalP>
        </LegalSection>

        <LegalSection title="Cookies">
          <LegalP>
            We use cookies to improve your experience. Essential cookies
            are required for the site to function. Analytics cookies help
            us understand how the site is used. You can control cookies
            through your browser settings.
          </LegalP>
        </LegalSection>

        <LegalSection title="Children&apos;s Privacy">
          <LegalP>
            Our services are not directed to individuals under 18.
            We do not knowingly collect personal information from children.
          </LegalP>
        </LegalSection>

        <LegalSection title="Changes to This Policy">
          <LegalP>
            We may update this policy from time to time. The date of
            the latest revision is shown at the top of this page.
            Continued use of our services after changes constitutes
            acceptance of the updated policy.
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
// SHARED LAYOUT COMPONENTS
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
        {/* Breadcrumb */}
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
            width: "3px",
            height: "3px",
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
          {/* Content */}
          <div style={{ maxWidth: "680px" }}>
            {children}
          </div>

          {/* Sidebar */}
          <div style={{
            position: "sticky",
            top: "5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            {/* Other legal docs */}
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

            {/* Contact */}
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