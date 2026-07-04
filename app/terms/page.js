import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using the Y-Park platform and services.",
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <LegalHero
        title="Terms and Conditions"
        lastUpdated="July 2026"
      />
      <LegalBody>

        <LegalSection title="Electronic Record">
          <LegalP>
            This document is an electronic record in terms of Information
            Technology Act, 2000 and rules thereunder as applicable and the
            provisions pertaining to electronic records in various statutes
            as amended by the Information Technology Act, 2000.
          </LegalP>
        </LegalSection>

        <LegalSection title="About Y-Park">
          <LegalP>
            Prothom Analytica India Private Limited (&quot;Y-Park&quot; /
            &quot;Company&quot; / &quot;us&quot;, &quot;we&quot; or
            &quot;our&quot;) provides technology-based services and acts
            as an intermediary for facilitating: (i) on-demand Parking
            services by means of two-wheelers and four-wheelers and (ii)
            Parking space management by using Y-Partners.
          </LegalP>
          <LegalP>
            All the mentioned parking services are collectively referred
            to as &quot;Services&quot; and other support services (such as
            associated payment collection) as offered by Y-Park from time
            to time by means of the Company&apos;s website and the mobile
            application &quot;Y-Park&quot; (collectively, &quot;Platform&quot;).
          </LegalP>
          <LegalP>
            The Services are provided / offered by third party vehicle
            operators, service providers who wish to offer such Services
            through the Platform (&quot;Y-Partner(s)&quot; / &quot;you&quot;).
          </LegalP>
        </LegalSection>

        <LegalSection title="Clarification">
          <LegalP>
            In the State of West Bengal, Y-Park functions as a demand-generation
            platform, facilitating lead generation for Y-Partners who directly
            provide parking services to customers. Y-Park owns and operates a
            technology-driven Software-as-a-Service (&quot;SaaS Platform&quot;),
            which serves as a discovery and lead-generation platform for
            Y-Partners offering parking services on their own account, subject
            to the terms and conditions mutually agreed between the customers
            and the Y-Partners.
          </LegalP>
          <LegalP>
            The parking services are rendered directly by the Y-Partners to
            the customers, while Y-Park merely acts as a technology facilitator
            enabling transactions initiated through the Platform. Y-Park assumes
            no responsibility or liability for any deficiency, default, or
            failure in the services provided by the Y-Partners.
          </LegalP>
        </LegalSection>

        <LegalSection title="Agreement to Terms">
          <LegalP>
            On the basis of the representations and warranties provided by
            the Y-Partner, the Company has agreed to list the Parking Spaces
            on the Platform and to enable the Y-Partner to provide the Services
            through the Platform in accordance with the terms and conditions as
            hereinafter provided and any other policy or agreement or document
            made applicable / executed by you for the purpose of the provision
            of Services (collectively, &quot;T&Cs&quot;).
          </LegalP>
          <LegalP>
            These T&Cs will govern the relationship between you and the Company
            in the course of provision of the Services. By signing up or
            registering on the Platform and offering to provide one or more of
            the Services, you acknowledge that you have read and understood
            these T&Cs and agree to be bound by these T&Cs, without any
            limitation or qualification.
          </LegalP>
          <LegalP>
            If you do not agree with these T&Cs, please do not sign-up or
            register on the Platform or offer any Services.
          </LegalP>
          <LegalP>
            Use of and access to the Platform is offered to you upon the
            unconditional acceptance of all the terms, conditions and notices
            contained in these T&Cs and Privacy Policy (which is incorporated
            herein by reference), along with any amendments made by the Company
            at its sole discretion and posted on the Platform from time to time.
          </LegalP>
          <LegalP>
            These T&Cs expressly supersede prior agreements or arrangements
            with you.
          </LegalP>
        </LegalSection>

        <LegalSection title="I. General Covenants">
          <LegalP>
            As a Y-Partner, you agree to:
          </LegalP>
          <LegalList items={[
            "Provide accurate and complete information during registration and maintain updated records",
            "Ensure you have the legal right to operate the parking spaces you list on the Platform",
            "Comply with all applicable local, state and national laws and regulations",
            "Maintain the security of your account credentials and notify us immediately of unauthorized use",
            "Provide services in a professional manner consistent with industry standards",
            "Not engage in fraudulent transactions, misrepresentation, or any unlawful activities",
          ]} />
        </LegalSection>

        <LegalSection title="Services and Platform Usage">
          <LegalP>
            The Platform enables Y-Partners to:
          </LegalP>
          <LegalList items={[
            "List and manage parking spaces through the Y-Park Platform",
            "Receive bookings and manage parking sessions",
            "Process payments through integrated payment gateways",
            "Access reporting and analytics for their parking operations",
            "Communicate with customers through the Platform",
          ]} />
        </LegalSection>

        <LegalSection title="Payments and Fees">
          <LegalP>
            Y-Park charges a platform service fee on transactions processed
            through the Platform. The applicable fee structure is communicated
            during registration and may be updated with prior notice.
          </LegalP>
          <LegalP>
            All payments are processed through third-party payment gateways.
            Y-Park is not responsible for errors, delays, or issues arising
            from payment gateway services.
          </LegalP>
        </LegalSection>

        <LegalSection title="Intellectual Property">
          <LegalP>
            All content, design, code, trademarks, and materials on the Platform
            are the property of Prothom Analytica India Pvt. Ltd. or its licensors.
            You may not reproduce, distribute, modify, or create derivative works
            without explicit written permission from the Company.
          </LegalP>
        </LegalSection>

        <LegalSection title="Limitation of Liability">
          <LegalP>
            To the maximum extent permitted by law, Prothom Analytica India
            Pvt. Ltd. shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of the
            Platform or Services.
          </LegalP>
          <LegalP>
            We do not guarantee uninterrupted or error-free service. We are
            not responsible for losses arising from technical failures,
            service interruptions, or events beyond our reasonable control.
          </LegalP>
        </LegalSection>

        <LegalSection title="Termination">
          <LegalP>
            Either party may terminate this agreement with written notice.
            Y-Park reserves the right to suspend or terminate your access
            to the Platform immediately if you breach these T&Cs or engage
            in activities that may harm the Platform, other users, or the
            Company&apos;s reputation.
          </LegalP>
        </LegalSection>

        <LegalSection title="Governing Law and Jurisdiction">
          <LegalP>
            These Terms and Conditions are governed by the laws of India.
            Any disputes arising out of or in connection with these T&Cs
            shall be subject to the exclusive jurisdiction of the courts
            located in Kolkata, West Bengal, India.
          </LegalP>
        </LegalSection>

        <LegalSection title="Contact">
          <LegalList items={[
            "Email: sales@prothomai.com",
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
      background: "linear-gradient(180deg, #EBF1FF 0%, #F5F8FF 100%)",
      paddingTop: "7rem",
      paddingBottom: "2.75rem",
      borderBottom: "1px solid #D6E4FF",
      position: "relative",
      overflow: "hidden",
    }}>
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
            Y-Park
          </Link>
          <svg
            width="12" height="12"
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
          <span style={{
            fontSize: "0.75rem",
            color: "#2C4A6E",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
          }}>
            {title}
          </span>
        </div>

        <span className="section-label" style={{
          background: "linear-gradient(135deg, #0063FF 0%, #0052D4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>Legal</span>

        <h1 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-1px",
          color: "#0D1B2A",
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
            background: "#6B829C",
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
                href="mailto:sales@prothomai.com"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#1565C0",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s ease",
                }}
              >
                sales@prothomai.com →
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