import type { Metadata } from "next";
import Image from "next/image";
import { getMenuItems, getMenuByCategory, type MenuItem } from "../lib/menu";
import MenuCategoryNav from "../components/MenuCategoryNav";

export const metadata: Metadata = {
  title: "The Menu — Brew & Co",
  description:
    "Espresso drinks, cold brew, fresh pastries, and sandwiches. Everything made in-house or sourced from people we know.",
};

function Badge({ badge }: { badge: string }) {
  if (!badge) return null;

  const styles: Record<string, React.CSSProperties> = {
    "House Favourite": {
      background: "var(--color-roast)",
      color: "var(--color-caramel)",
    },
    Popular: {
      background: "var(--color-mist)",
      color: "var(--color-bark)",
    },
    Seasonal: {
      background: "var(--color-amber)",
      color: "var(--color-parchment)",
    },
  };

  const style = styles[badge] ?? { background: "var(--color-mist)", color: "var(--color-bark)" };

  return (
    <span
      style={{
        ...style,
        display: "inline-block",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-11)",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "0.2em 0.6em",
        borderRadius: "var(--radius-pill)",
      }}
    >
      {badge}
    </span>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article
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
            alignItems: "flex-start",
            justifyContent: "space-between",
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
              lineHeight: 1.2,
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
        {item.badge && (
          <div style={{ marginBottom: "0.6rem" }}>
            <Badge badge={item.badge} />
          </div>
        )}
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
  );
}

export default function MenuPage() {
  const items = getMenuItems();
  const categories = getMenuByCategory(items);

  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "var(--color-bark)",
          paddingBlock: "4rem 3rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "var(--color-parchment)",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            The Menu
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-16)",
              color: "var(--color-ash)",
              maxWidth: "55ch",
            }}
          >
            Everything made in-house or sourced from people we know. Pastries baked
            fresh each morning.
          </p>
        </div>
      </section>

      {/* Category tab bar */}
      <MenuCategoryNav categories={categories} />

      {/* Category sections */}
      {categories.map((cat) => (
        <section
          key={cat.slug}
          id={cat.slug}
          style={{
            paddingBlock: "4rem",
            scrollMarginTop: "120px",
          }}
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
                marginBottom: "2.5rem",
                borderBottom: "1px solid var(--color-border)",
                paddingBottom: "1rem",
              }}
            >
              {cat.name}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {cat.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
