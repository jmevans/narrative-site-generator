"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { site } from "../content/site";

export function Identity() {
  return (
    <section id="identity" style={{ padding: "128px 0", background: "#16181f" }}>
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="identity-grid"
        >
          <FadeIn direction="none">
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                background: "#1e2130",
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.05)",
                overflow: "hidden",
              }}
            >
              <Image
                src={site.identity.image.src}
                alt={site.identity.image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "saturate(0.92) contrast(1.04)",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(22,24,31,0.28), rgba(22,24,31,0.02) 45%)",
                }}
              />
            </div>
          </FadeIn>

          <div>
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
                {site.identity.heading}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ marginBottom: 40 }}>
                {site.identity.bio.map((para, i) => (
                  <p
                    key={i}
                    className="font-body"
                    style={{
                      color: "#9a9aaa",
                      fontSize: 18,
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote
                style={{
                  borderLeft: "2px solid #e8722a",
                  paddingLeft: 20,
                  marginBottom: 48,
                  margin: "0 0 48px 0",
                }}
              >
                <p
                  className="font-heading"
                  style={{ color: "#f2ede6", fontSize: 24, fontStyle: "italic" }}
                >
                  &ldquo;{site.identity.pullQuote}&rdquo;
                </p>
              </blockquote>
            </FadeIn>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {site.identity.pillars.map((pillar, i) => (
                <FadeIn key={pillar.label} delay={0.3 + i * 0.1}>
                  <div>
                    <p
                      className="font-body"
                      style={{ color: "#f2ede6", fontWeight: 600, marginBottom: 4, fontSize: 15 }}
                    >
                      {pillar.label}
                    </p>
                    <p
                      className="font-body"
                      style={{ color: "#9a9aaa", fontSize: 14, lineHeight: 1.6 }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .identity-grid { grid-template-columns: minmax(320px, 0.82fr) minmax(360px, 1fr) !important; }
        }

        @media (min-width: 1200px) {
          .identity-grid { gap: 96px !important; }
        }
      `}</style>
    </section>
  );
}
