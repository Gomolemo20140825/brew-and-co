"use client";

export interface CategoryLink {
  name: string;
  slug: string;
}

export default function MenuCategoryNav({ categories }: { categories: CategoryLink[] }) {
  return (
    <div
      style={{
        position: "sticky",
        top: "60px",
        zIndex: 100,
        background: "var(--color-bg-alt)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
          display: "flex",
          gap: "0",
          overflowX: "auto",
        }}
      >
        {categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-11)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-fg-muted)",
              textDecoration: "none",
              padding: "1rem 1.25rem",
              display: "block",
              whiteSpace: "nowrap",
              borderBottom: "2px solid transparent",
              transition: "color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-brand)";
              e.currentTarget.style.borderBottomColor = "var(--color-brand)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-fg-muted)";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            {cat.name}
          </a>
        ))}
      </div>
    </div>
  );
}
