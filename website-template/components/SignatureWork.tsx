"use client";

import { FadeIn } from "./FadeIn";
import { site } from "../content/site";

export function SignatureWork() {
  return (
    <section id="signature-work" style={{ padding: "128px 0", background: "#16181f" }}>
      <div className="section-container">
        <FadeIn>
          <p
            className="font-body"
            style={{
              color: "#e8722a",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Selected work
          </p>
          <h2
            className="font-heading"
            style={{
              color: "#f2ede6",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              marginBottom: 64,
            }}
          >
            {site.signatureWork.heading}
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {site.signatureWork.items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="work-item-grid"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: 48,
                  paddingBottom: 48,
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 24,
                }}
              >
                <div>
                  <p
                    className="font-body"
                    style={{
                      color: "#e8722a",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {item.role}
                  </p>
                  <h3
                    className="font-heading"
                    style={{ color: "#f2ede6", fontSize: 22, fontWeight: 600, marginBottom: 8 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{ color: "#9a9aaa", fontSize: 14 }}
                  >
                    {item.context}
                  </p>
                </div>
                <div>
                  <p
                    className="font-body"
                    style={{ color: "#9a9aaa", fontSize: 14, lineHeight: 1.7 }}
                  >
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p
                    className="font-body"
                    style={{ color: "#f2ede6", fontSize: 14, lineHeight: 1.7, fontWeight: 500 }}
                  >
                    {item.outcome}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <a
              href={site.signatureWork.linkedInCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body"
              style={{
                color: "#9a9aaa",
                fontSize: 14,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#e8722a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9a9aaa")}
            >
              {site.signatureWork.linkedInCta.label}
            </a>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .work-item-grid { grid-template-columns: minmax(240px, 0.9fr) minmax(280px, 1.1fr) minmax(260px, 1fr) !important; }
        }

        @media (min-width: 1200px) {
          .work-item-grid { gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
