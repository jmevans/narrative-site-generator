"use client";

import { FadeIn } from "./FadeIn";
import { site } from "../content/site";

export function HowIOperate() {
  return (
    <section id="how-i-operate" style={{ padding: "128px 0", background: "#1e2130" }}>
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
            Philosophy
          </p>
          <h2
            className="font-heading"
            style={{
              color: "#f2ede6",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              marginBottom: 80,
            }}
          >
            {site.howIOperate.heading}
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {site.howIOperate.principles.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.1}>
              <div
                className="principle-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, alignItems: "start" }}
              >
                <p
                  className="font-body"
                  style={{
                    color: "#e8722a",
                    fontSize: 12,
                    fontFamily: "monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.number}
                </p>
                <div>
                  <h3
                    className="font-heading"
                    style={{ color: "#f2ede6", fontSize: 24, fontWeight: 600, marginBottom: 12 }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-body"
                    style={{ color: "#9a9aaa", fontSize: 18, lineHeight: 1.7, maxWidth: 600 }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .principle-grid { grid-template-columns: 80px 1fr !important; }
        }

        @media (min-width: 1200px) {
          .principle-grid { grid-template-columns: 120px minmax(0, 760px) !important; }
        }
      `}</style>
    </section>
  );
}
