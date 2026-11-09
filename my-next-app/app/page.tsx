import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CheckerBand from "./components/CheckerBand";
import ReserveButton from "./components/ReserveButton";
import { getMenuItems } from "./lib/menu";
import { upcomingEvents } from "./lib/events";

export const metadata: Metadata = {
  title: "Brew & Co — Brooklyn's Neighbourhood Coffee Shop",
  description:
    "Specialty coffee, fresh pastries, and light lunches on Bedford Avenue, Brooklyn. Open daily.",
};

export default function Home() {
  const allItems = getMenuItems();
  const featured = allItems
    .filter((i) => i.badge === "Popular" || i.badge === "House Favourite")
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/hero-coffee-shop.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(26,14,8,0.68)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
            paddingBlock: "8rem 6rem",
          }}
        >
          {/* Ampersand watermark */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "max(2rem, env(safe-area-inset-right, 0px))",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(12rem, 30vw, 24rem)",
              fontWeight: 700,
              color: "var(--color-mahogany)",
              opacity: 0.4,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &amp;
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 12vw, 9rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "var(--color-parchment)",
              lineHeight: 0.95,
              marginBottom: "1.5rem",
              maxWidth: "12ch",
            }}
          >
            Brew{" "}
            <em style={{ color: "var(--color-caramel)", fontStyle: "italic" }}>
              &amp;
            </em>{" "}
            Co
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-22)",
              color: "var(--color-parchment)",
              opacity: 0.85,
              maxWidth: "40ch",
              marginBottom: "2.5rem",
              lineHeight: 1.5,
            }}
          >
            Your story. One cup at a time.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/menu"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--color-parchment)",
                background: "transparent",
                border: "1.5px solid rgba(237,229,216,0.5)",
                borderRadius: "var(--radius-md)",
                padding: "0.625rem 1.25rem",
                textDecoration: "none",
                transition: "border-color 0.15s, background 0.15s",
              }}
            >
              Explore the menu
            </Link>
            <ReserveButton label="Reserve a table" variant="dark" />
          </div>
        </div>
      </section>

      <CheckerBand />

      {/* Featured items */}
      <section style={{ paddingBlock: "5rem", background: "var(--color-bg)" }}>
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
              color: "var(--color-fg-muted)",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            From the counter
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-48)",
              fontWeight: 400,
              color: "var(--color-fg)",
              marginBottom: "2.5rem",
            }}
          >
            Favourite picks
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featured.map((item) => (
              <article
                key={item.name}
                style={{
                  background: "var(--color-bg-alt)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "4/3" }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-22)",
                        fontWeight: 400,
                        color: "var(--color-fg)",
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-22)",
                        fontWeight: 400,
                        color: "var(--color-brand)",
                        fontVariantNumeric: "tabular-nums",
                        flexShrink: 0,
                      }}
                    >
                      ${item.price}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-13)",
                      lineHeight: 1.65,
                      color: "var(--color-fg-muted)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link
              href="/menu"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--color-brand)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-brand)",
                paddingBottom: "2px",
              }}
            >
              See the full menu
            </Link>
          </div>
        </div>
      </section>

      <CheckerBand />

      {/* Events */}
      <section
        style={{ paddingBlock: "5rem", background: "var(--color-bg-alt)" }}
      >
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
            What&apos;s on this week
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-48)",
                      fontWeight: 300,
                      color: "var(--color-brand)",
                      lineHeight: 1,
                    }}
                  >
                    {event.date}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-11)",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-fg-muted)",
                      }}
                    >
                      {event.dayName}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "var(--text-13)",
                        color: "var(--color-fg-muted)",
                      }}
                    >
                      {event.time}
                    </div>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-22)",
                    fontWeight: 400,
                    color: "var(--color-fg)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {event.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-13)",
                    lineHeight: 1.65,
                    color: "var(--color-fg-muted)",
                    maxWidth: "38ch",
                  }}
                >
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve CTA */}
      <section
        style={{
          background: "var(--color-bark)",
          paddingBlock: "5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(10rem, 25vw, 20rem)",
              fontWeight: 700,
              color: "var(--color-mahogany)",
              opacity: 0.35,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &amp;
          </div>
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "var(--color-parchment)",
                marginBottom: "1rem",
              }}
            >
              Ready for your next cup?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-16)",
                color: "var(--color-ash)",
                marginBottom: "2rem",
              }}
            >
              96 Bedford Ave · Mon–Fri 7am–6pm · Sat–Sun 8am–7pm
            </p>
            <ReserveButton label="Reserve a table" variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
