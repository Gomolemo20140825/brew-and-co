import CheckerBand from "./CheckerBand";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <CheckerBand />
      <div
        style={{
          background: "var(--color-bark)",
          color: "var(--color-parchment)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
            paddingBlock: "3rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Wordmark + address */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-22)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "var(--color-parchment)",
                marginBottom: "1rem",
              }}
            >
              Brew &amp; Co
            </div>
            <address
              style={{
                fontStyle: "normal",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                lineHeight: 1.7,
                color: "var(--color-ash)",
              }}
            >
              96 Bedford Ave
              <br />
              Brooklyn, NY 11211
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-11)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-ash)",
                marginBottom: "1rem",
              }}
            >
              Hours
            </h3>
            <dl
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                lineHeight: 1.8,
                color: "var(--color-parchment)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "180px" }}>
                <dt>Mon – Fri</dt>
                <dd>7am – 6pm</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "180px" }}>
                <dt>Sat – Sun</dt>
                <dd>8am – 7pm</dd>
              </div>
            </dl>
          </div>

          {/* Tagline */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-22)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-caramel)",
                lineHeight: 1.4,
                maxWidth: "22ch",
              }}
            >
              Your story.
              <br />
              One cup at a time.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(93,46,24,0.4)",
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
            paddingBlock: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-11)",
              color: "var(--color-ash)",
            }}
          >
            © 2024 Brew &amp; Co
          </span>
          <Link
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-11)",
              color: "var(--color-ash)",
              textDecoration: "none",
            }}
          >
            Photography via Pexels
          </Link>
        </div>
      </div>
    </footer>
  );
}
