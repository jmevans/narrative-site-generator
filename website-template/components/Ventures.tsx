"use client";

import { FadeIn } from "./FadeIn";
import { site } from "../content/site";

export function Ventures() {
  return (
    <section id="ventures" style={{ padding: "128px 0", background: "#1e2130" }}>
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
            Ventures
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
            {site.ventures.heading}
          </h2>
        </FadeIn>

        <div
          className="ventures-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}
        >
          {site.ventures.cards.map((card, i) => (
            <FadeIn key={card.name} delay={i * 0.1}>
              <div
                style={{
                  background: "#16181f",
                  borderRadius: 2,
                  padding: 40,
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "border-color 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(232,114,42,0.3)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 24,
                    gap: 16,
                  }}
                >
                  <h3
                    className="font-heading"
                    style={{ color: "#f2ede6", fontSize: 24, fontWeight: 600 }}
                  >
                    {card.name}
                  </h3>
                  <span
                    className="font-body"
                    style={{
                      color: "#9a9aaa",
                      fontSize: 12,
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "4px 12px",
                      borderRadius: 100,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {card.status}
                  </span>
                </div>

                <p
                  className="font-body"
                  style={{
                    color: "#9a9aaa",
                    fontSize: 16,
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 24,
                  }}
                >
                  {card.description}
                </p>

                {card.cta && (
                  <a
                    href={card.cta.href}
                    className="font-body"
                    style={{
                      color: "#e8722a",
                      fontSize: 14,
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "color 0.2s",
                      alignSelf: "flex-start",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#f2ede6")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#e8722a")
                    }
                  >
                    {card.cta.label}
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .ventures-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (min-width: 1200px) {
          .ventures-grid { gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
