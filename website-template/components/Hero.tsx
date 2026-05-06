"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "../content/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0 }}
      >
        <Image
          src={site.hero.image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
          style={{
            objectFit: "cover",
            filter: "saturate(0.95) contrast(1.05)",
          }}
        />
        <div
          className="hero-overlay"
          style={{ position: "absolute", inset: 0 }}
        />
      </div>

      <div
        className="hero-container"
        style={{
          position: "relative",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0.01 : 0.8, ease: "easeOut" }}
        >
          <p
            className="font-body"
            style={{
              color: "#9a9aaa",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            {site.hero.name}
          </p>

          <h1
            className="font-heading"
            style={{
              color: "#f2ede6",
              fontSize: "clamp(40px, 6vw, 78px)",
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 720,
              margin: "0 0 24px",
            }}
          >
            {site.hero.identityLine}
          </h1>

          <p
            className="font-body"
            style={{
              color: "#9a9aaa",
              fontSize: "clamp(16px, 1.7vw, 18px)",
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: 40,
            }}
          >
            {site.hero.subLine}
          </p>

          <a
            href={site.hero.cta.href}
            className="font-body"
            style={{
              display: "inline-block",
              background: "#e8722a",
              color: "#fff",
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 32px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#cf5f1a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#e8722a")}
          >
            {site.hero.cta.label}
          </a>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          padding: 104px 0 72px;
        }

        .hero-container {
          max-width: none;
          padding: 0 clamp(28px, 8vw, 168px);
        }

        .hero-image {
          object-position: 66% center;
        }

        .hero-overlay {
          background:
            linear-gradient(90deg, rgba(22,24,31,0.98) 0%, rgba(22,24,31,0.84) 41%, rgba(22,24,31,0.22) 100%),
            linear-gradient(to top, #16181f 0%, rgba(22,24,31,0.5) 46%, rgba(22,24,31,0.1) 100%);
        }

        @media (max-width: 767px) {
          .hero-section {
            align-items: flex-end !important;
            min-height: 100svh;
            padding: 112px 0 56px;
          }

          .hero-container {
            padding: 0 24px;
          }

          .hero-image {
            object-position: 68% center;
          }

          .hero-overlay {
            background:
              linear-gradient(to bottom, rgba(22,24,31,0.76) 0%, rgba(22,24,31,0.32) 34%, rgba(22,24,31,0.9) 76%, #16181f 100%),
              linear-gradient(90deg, rgba(22,24,31,0.96) 0%, rgba(22,24,31,0.7) 58%, rgba(22,24,31,0.34) 100%);
          }
        }
      `}</style>
    </section>
  );
}
