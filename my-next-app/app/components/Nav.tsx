"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReservationModal from "./ReservationModal";

const NAV_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: "var(--z-nav)" as unknown as number,
          background: "var(--color-bark)",
          borderBottom: "1px solid rgba(93,46,24,0.4)",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            paddingInline: "max(2rem, env(safe-area-inset-left, 0px))",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-18)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "var(--color-parchment)",
              textDecoration: "none",
              marginRight: "auto",
              flexShrink: 0,
            }}
          >
            Brew &amp; Co
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-11)",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color:
                    pathname === link.href
                      ? "var(--color-caramel)"
                      : "var(--color-ash)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setModalOpen(true)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-11)",
                fontWeight: 500,
                letterSpacing: "0.08em",
                color: "var(--color-parchment)",
                background: "var(--color-mahogany)",
                border: "none",
                borderRadius: "var(--radius-md)",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                transition: "background 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--color-roast)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--color-mahogany)")
              }
            >
              Reserve a Table
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            className="flex md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-parchment)",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "transform 0.2s",
                transform: drawerOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                opacity: drawerOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1.5px",
                background: "currentColor",
                transition: "transform 0.2s",
                transform: drawerOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        {drawerOpen && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: 0,
              right: 0,
              background: "var(--color-bark)",
              borderTop: "1px solid rgba(93,46,24,0.4)",
              padding: "1.5rem max(2rem, env(safe-area-inset-left, 0px))",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-16)",
                  fontWeight: 400,
                  color:
                    pathname === link.href
                      ? "var(--color-caramel)"
                      : "var(--color-parchment)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setDrawerOpen(false);
                setModalOpen(true);
              }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--color-parchment)",
                background: "var(--color-mahogany)",
                border: "none",
                borderRadius: "var(--radius-md)",
                padding: "0.625rem 1.25rem",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              Reserve a Table
            </button>
          </div>
        )}
      </nav>

      <ReservationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
