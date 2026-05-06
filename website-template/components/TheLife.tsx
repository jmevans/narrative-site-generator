"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { site } from "../content/site";

export function TheLife() {
  return (
    <section id="the-life" style={{ padding: "128px 0", background: "#16181f" }}>
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
            Beyond work
          </p>
          <h2
            className="font-heading"
            style={{
              color: "#f2ede6",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            {site.theLife.heading}
          </h2>
          <p
            className="font-body"
            style={{
              color: "#9a9aaa",
              fontSize: 20,
              fontStyle: "italic",
              marginBottom: 64,
              maxWidth: 480,
            }}
          >
            {site.theLife.intro}
          </p>
        </FadeIn>

        {/* Adventure grid */}
        <div
          className="adventure-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 64 }}
        >
          {site.theLife.adventures.map((activity, i) => (
            <FadeIn key={activity.label} delay={i * 0.07}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1/1",
                  background: "#1e2130",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  textAlign: "center",
                  padding: 16,
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(232,114,42,0.3)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)")
                }
              >
                <Image
                  src={activity.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "saturate(0.95) contrast(1.08)",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(13,15,21,0.82) 0%, rgba(13,15,21,0.16) 58%, rgba(13,15,21,0.02) 100%)",
                  }}
                />
                <p
                  className="font-body"
                  style={{
                    position: "relative",
                    color: "#f2ede6",
                    fontSize: 13,
                    fontWeight: 600,
                    textShadow: "0 1px 12px rgba(0,0,0,0.8)",
                  }}
                >
                  {activity.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Callouts */}
        <div
          className="callout-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 64 }}
        >
          {site.theLife.callouts.map((callout, i) => (
            <FadeIn key={callout.label} delay={i * 0.1}>
              <div
                style={{
                  background: "#1e2130",
                  borderRadius: 2,
                  padding: 32,
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <p
                  className="font-body"
                  style={{ color: "#f2ede6", fontWeight: 600, marginBottom: 8, fontSize: 15 }}
                >
                  {callout.label}
                </p>
                <p
                  className="font-body"
                  style={{ color: "#9a9aaa", fontSize: 14, lineHeight: 1.7 }}
                >
                  {callout.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p
            className="font-heading"
            style={{
              color: "#f2ede6",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontStyle: "italic",
              maxWidth: 600,
            }}
          >
            &ldquo;{site.theLife.closing}&rdquo;
          </p>
        </FadeIn>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .adventure-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .callout-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (min-width: 1200px) {
          .adventure-grid { gap: 16px !important; }
          .callout-grid { gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
