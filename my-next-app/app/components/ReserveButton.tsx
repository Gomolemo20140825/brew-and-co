"use client";

import { useState } from "react";
import ReservationModal from "./ReservationModal";

export interface ReserveButtonProps {
  label?: string;
  variant?: "primary" | "dark";
  className?: string;
}

export default function ReserveButton({
  label = "Reserve a Table",
  variant = "primary",
}: ReserveButtonProps) {
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-13)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          color: isDark ? "var(--color-bark)" : "var(--color-parchment)",
          background: isDark ? "var(--color-caramel)" : "var(--color-brand)",
          border: "none",
          borderRadius: "var(--radius-md)",
          padding: "0.625rem 1.25rem",
          cursor: "pointer",
          whiteSpace: "nowrap" as const,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isDark
            ? "var(--color-amber)"
            : "var(--color-bark)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = isDark
            ? "var(--color-caramel)"
            : "var(--color-brand)";
        }}
      >
        {label}
      </button>
      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
