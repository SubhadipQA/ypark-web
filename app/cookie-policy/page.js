import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Y-Park. Learn what cookies we use, why we use them, and how you can manage them.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <Navbar />
      <LegalHero title="Cookie Policy" lastUpdated="July 2026" />
      <LegalBody>
        <LegalSection title="Overview">
          <LegalP>
            This Cookie Policy (&quot;Policy&quot;) explains how Prothom
            Analytica India Pvt. Ltd. (&quot;Y-Park&quot;, &quot;Company&quot;,
            &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) uses cookies
            and similar tracking technologies when you access or use the
            Y-Park mobile applications (&quot;Y-Park App&quot;) or our
            website (collectively referred to as the &quot;Y-Park Platform&quot;).
          </LegalP>
          <LegalP>
            This Policy describes what these technologies are, why we use
            them, and your rights to control our use of them. Please read
            this Policy in conjunction with our Privacy Policy, which
            explains how we collect and process your personal information.
          </LegalP>
        </LegalSection>

        <LegalSection title="What Are Cookies">
          <LegalP>
            Cookies are small text files that are placed on your device
            (computer, smartphone, tablet) when you visit a website or
            use an application. They are widely used to make websites
            and applications work more efficiently, provide a better
            user experience, and to provide information to the owners
            of the site or application.
          </LegalP>
          <LegalP>
            Similar technologies may include local storage, session
            storage, pixels, beacons, tags, and device identifiers
            that serve related purposes for remembering your preferences
            and tracking usage patterns.
          </LegalP>
        </LegalSection>

        <LegalSection title="Types of Cookies We Use">
          <LegalP>
            We use the following categories of cookies on the Y-Park Platform:
          </LegalP>
          <LegalList
            items={[
              "Strictly Necessary Cookies - These cookies are essential for the Y-Park Platform to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as the Platform cannot function without them.",
              "Performance and Analytics Cookies - These cookies help us understand how visitors interact with the Y-Park Platform by collecting and reporting information anonymously. They help us improve the performance and usability of our services.",
              "Functional Cookies - These cookies enable the Y-Park Platform to provide enhanced functionality and personalization, such as remembering your preferences, language settings, and login information.",
              "Targeting and Advertising Cookies - These cookies may be set through our Platform by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.",
            ]}
          />
        </LegalSection>

        <LegalSection title="How We Use Cookies">
          <LegalP>
            We use cookies and similar technologies for the following purposes:
          </LegalP>
          <LegalList
            items={[
              "To authenticate users and prevent fraudulent use of user accounts",
              "To remember your preferences and settings",
              "To enable security features and detect malicious activity",
              "To analyze traffic patterns and measure the effectiveness of our services",
              "To improve the overall user experience on the Y-Park Platform",
              "To understand which features are most valuable to our users",
              "To comply with legal obligations and enforce our terms of service",
            ]}
          />
        </LegalSection>

        <LegalSection title="Third-Party Cookies">
          <LegalP>
            In addition to our own cookies, we may also use various
            third-party cookies to report usage statistics of the
            Y-Park Platform, deliver advertisements on and through
            the Platform, and to provide other services.
          </LegalP>
          <LegalP>
            These third parties may include analytics providers,
            payment processors, cloud infrastructure providers, and
            other service providers who help us operate and improve
            the Y-Park Platform. Each third party processes your
            information in accordance with their own privacy policies.
          </LegalP>
        </LegalSection>

        <LegalSection title="Your Cookie Choices">
          <LegalP>
            You have the right to decide whether to accept or reject
            cookies. You can exercise your cookie preferences by:
          </LegalP>
          <LegalList
            items={[
              "Browser Settings - Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, accept only certain cookies, or delete cookies when you close your browser.",
              "Mobile Device Settings - Your mobile device may allow you to control cookies and similar technologies through its settings menu.",
              "Opt-Out Links - Some third-party services provide direct opt-out mechanisms for their tracking technologies.",
            ]}
          />
          <LegalP>
            Please note that if you choose to block or delete cookies,
            some parts of the Y-Park Platform may not function properly,
            and your user experience may be affected.
          </LegalP>
        </LegalSection>

        <LegalSection title="Data Retention">
          <LegalP>
            The length of time cookies remain on your device depends
            on whether they are &quot;persistent&quot; or &quot;session&quot;
            cookies. Session cookies are temporary and are deleted when
            you close your browser. Persistent cookies remain on your
            device for a set period or until you delete them manually.
          </LegalP>
        </LegalSection>

        <LegalSection title="Updates to This Policy">
          <LegalP>
            We may update this Cookie Policy from time to time to reflect
            changes in technology, legislation, our business operations,
            or any other reason we determine to be necessary or appropriate.
            Any changes will be effective immediately upon posting of the
            revised Policy on the Y-Park Platform. The date at the top of
            this Policy indicates when it was last updated.
          </LegalP>
          <LegalP>
            We encourage you to review this Policy periodically to stay
            informed about our use of cookies and related technologies.
          </LegalP>
        </LegalSection>

        <LegalSection title="Contact Us">
          <LegalP>
            If you have any questions about our use of cookies or this
            Cookie Policy, please contact us at:
          </LegalP>
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
        background: "linear-gradient(180deg, #EBF1FF 0%, #F5F8FF 100%)",
        paddingTop: "7rem",
        paddingBottom: "2.75rem",
        borderBottom: "1px solid #D6E4FF",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
            Y-Park
          </Link>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B829C"
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
              color: "#2C4A6E",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
            }}
          >
            {title}
          </span>
        </div>

        <span className="section-label" style={{
          background: "linear-gradient(135deg, #0063FF 0%, #0052D4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Legal</span>

        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1px",
            color: "#0D1B2A",
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
              background: "#6B829C",
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