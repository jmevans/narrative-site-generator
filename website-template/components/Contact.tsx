"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { site } from "../content/site";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1e2130",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#f2ede6",
    padding: "12px 16px",
    borderRadius: 4,
    fontSize: 14,
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#9a9aaa",
    fontSize: 12,
    marginBottom: 6,
    fontFamily: "var(--font-inter), system-ui, sans-serif",
  };

  return (
    <section id="contact" style={{ padding: "128px 0", background: "#16181f" }}>
      <div className="section-container">
        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 64 }}
        >
          {/* Left — heading and links */}
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
                Get in touch
              </p>
              <h2
                className="font-heading"
                style={{
                  color: "#f2ede6",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 700,
                  marginBottom: 24,
                }}
              >
                {site.contact.heading}
              </h2>
              <p
                className="font-body"
                style={{
                  color: "#9a9aaa",
                  fontSize: 18,
                  lineHeight: 1.7,
                  marginBottom: 40,
                  maxWidth: 440,
                }}
              >
                {site.contact.subLine}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <a
                  href={`mailto:${site.contact.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#9a9aaa",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f2ede6")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#9a9aaa")
                  }
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 4,
                      background: "#1e2130",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#e8722a",
                      fontSize: 12,
                      fontFamily: "monospace",
                      transition: "background 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    @
                  </span>
                  <span className="font-body" style={{ fontSize: 14 }}>
                    {site.contact.email}
                  </span>
                </a>

                <a
                  href={site.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#9a9aaa",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f2ede6")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#9a9aaa")
                  }
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 4,
                      background: "#1e2130",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#e8722a",
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    in
                  </span>
                  <span className="font-body" style={{ fontSize: 14 }}>
                    LinkedIn
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label htmlFor="contact-name" style={labelStyle}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "#e8722a")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={labelStyle}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "#e8722a")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={labelStyle}>
                  What are you working on?
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or challenge..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "#e8722a")
                  }
                  onBlur={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <button
                type="submit"
                className="font-body"
                style={{
                  width: "100%",
                  background: "#e8722a",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 14,
                  padding: "16px",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#cf5f1a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#e8722a")
                }
              >
                {site.contact.formCta}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>

      {/* Footer */}
      <div
        className="section-container"
        style={{
          margin: "96px auto 0",
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p
          className="font-body"
          style={{ color: "#9a9aaa", fontSize: 12 }}
        >
          © {new Date().getFullYear()} Jon-Michael Evans. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }

        @media (min-width: 1200px) {
          .contact-grid { gap: 96px !important; }
        }
      `}</style>
    </section>
  );
}
