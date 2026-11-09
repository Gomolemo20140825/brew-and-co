import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story — Brew & Co",
  description:
    "Marcus and Nadia Rivera opened Brew & Co on Bedford Avenue in 2019 — a coffee shop built on direct sourcing, scratch cooking, and the conviction that every neighbourhood deserves a room like this.",
};

const PHILOSOPHY = [
  {
    heading: "Source honestly",
    body: "We work directly with the families who grow our coffee. We visit the farms, we know the names, and we pay prices that make it worth their while. What you taste reflects that.",
  },
  {
    heading: "Make it from scratch",
    body: "The pastries are baked here each morning. The syrups are made in our kitchen. The salmon is cured in-house. If we can make it ourselves, we do.",
  },
  {
    heading: "This is your place",
    body: "We didn't open a coffee shop to sell coffee. We opened one because every neighbourhood needs a room where people can sit, stay, and feel like they belong.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-bark)",
          paddingBlock: "5rem 4rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-11)",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-ash)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Bedford Ave, Brooklyn — est. 2019
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 9vw, 6rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "var(--color-parchment)",
              lineHeight: 1.05,
              maxWidth: "14ch",
            }}
          >
            Our Story
          </h1>
        </div>
      </section>

      {/* Founders section */}
      <section style={{ paddingBlock: "5rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Text */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-48)",
                fontWeight: 400,
                color: "var(--color-fg)",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Marcus &amp; Nadia Rivera
            </h2>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-16)",
                lineHeight: 1.75,
                color: "var(--color-fg)",
                maxWidth: "60ch",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <p>
                Marcus grew up in Puerto Rico and moved to New York in his early
                twenties. He spent six years at a specialty roastery in Cobble
                Hill learning every step of the coffee supply chain — from
                green-bean sourcing to extraction. He still roasts every batch
                in-house, working directly with farming families in Ethiopia,
                Colombia, and Guatemala.
              </p>
              <p>
                Nadia grew up in Queens, studied hospitality at NYU, and spent
                her twenties running front-of-house at some of Brooklyn&apos;s
                best-loved restaurants. She runs the kitchen and writes the
                menu. She is also responsible for the almond croissant.
              </p>
              <p>
                They met in 2015 at a coffee shop on Bedford Avenue — both
                regulars, both pretending to work. When that shop closed in
                2017, they spent two years planning what to put in its place.
                Brew &amp; Co opened in October 2019 in a former bookshop.
                Their daughter Sofia can usually be found doing homework in the
                corner booth on weekday afternoons.
              </p>
            </div>
          </div>

          {/* Portrait images */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
              }}
            >
              <Image
                src="/about-barista-1.webp"
                alt="Marcus Rivera, co-founder"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                marginTop: "2rem",
              }}
            >
              <Image
                src="/about-barista-2.webp"
                alt="Nadia Rivera, co-founder"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section
        style={{
          background: "var(--color-bg-alt)",
          paddingBlock: "4rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
          }}
        >
          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-28)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-fg)",
              borderLeft: "3px solid var(--color-amber)",
              paddingLeft: "1.5rem",
              maxWidth: "50ch",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            &ldquo;The shop we were regulars at closed because the lease ran
            out. We wanted to build something the neighbourhood could actually
            keep.&rdquo;
            <footer
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                fontStyle: "normal",
                fontWeight: 500,
                color: "var(--color-fg-muted)",
                marginTop: "1rem",
              }}
            >
              — Marcus Rivera
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ paddingBlock: "5rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-48)",
              fontWeight: 400,
              color: "var(--color-fg)",
              marginBottom: "3rem",
            }}
          >
            What we believe
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "3rem",
            }}
          >
            {PHILOSOPHY.map((p) => (
              <div key={p.heading}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-28)",
                    fontWeight: 400,
                    color: "var(--color-brand)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {p.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-16)",
                    lineHeight: 1.75,
                    color: "var(--color-fg)",
                    maxWidth: "40ch",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed interior */}
      <div style={{ position: "relative", height: "50vh", minHeight: "320px" }}>
        <Image
          src="/about-hero.webp"
          alt="Brew & Co interior on Bedford Avenue"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(26,14,8,0.35)",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            padding: "max(2rem, env(safe-area-inset-left, 0px))",
            paddingBottom: "2.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-18)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-parchment)",
              opacity: 0.9,
            }}
          >
            96 Bedford Ave, Williamsburg
          </span>
        </div>
      </div>
    </>
  );
}
