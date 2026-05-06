"use client";

import { FadeIn } from "./FadeIn";
import { site } from "../content/site";

export function WhatIBuild() {
  return (
    <section id="what-i-build" style={{ padding: "128px 0", background: "#1e2130" }}>
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
            What I build
          </p>
          <h2
            className="font-heading"
            style={{ color: "#f2ede6", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, marginBottom: 24 }}
          >
            {site.whatIBuild.heading}
          </h2>
          <p
            className="font-body"
            style={{
              color: "#9a9aaa",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: 64,
            }}
          >
            {site.whatIBuild.descriptor}
          </p>
        </FadeIn>

        <div className="capability-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, marginBottom: 48 }}>
          {site.whatIBuild.capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.1}>
              <div
                style={{
                  background: "#16181f",
                  borderRadius: 2,
                  padding: 32,
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "border-color 0.2s",
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
                    width: 32,
                    height: 2,
                    background: "#e8722a",
                    marginBottom: 24,
                  }}
                />
                <h3
                  className="font-heading"
                  style={{ color: "#f2ede6", fontSize: 20, fontWeight: 600, marginBottom: 16 }}
                >
                  {cap.title}
                </h3>
                <p
                  className="font-body"
                  style={{ color: "#9a9aaa", fontSize: 14, lineHeight: 1.7 }}
                >
                  {cap.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <a
            href={site.whatIBuild.cta.href}
            className="font-body"
            style={{
              color: "#e8722a",
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f2ede6")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#e8722a")}
          >
            {site.whatIBuild.cta.label} →
          </a>
        </FadeIn>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .capability-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }

        @media (min-width: 1200px) {
          .capability-grid { gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
