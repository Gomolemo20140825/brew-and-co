"use client";

import { useEffect, useRef, useState } from "react";

export interface ReservationModalProps {
  open: boolean;
  onClose: () => void;
}

const TIME_SLOTS: string[] = [];
for (let h = 8; h <= 20; h++) {
  TIME_SLOTS.push(`${h === 12 ? 12 : h > 12 ? h - 12 : h}:00 ${h < 12 ? "am" : "pm"}`);
  if (h < 20) {
    TIME_SLOTS.push(`${h === 12 ? 12 : h > 12 ? h - 12 : h}:30 ${h < 12 ? "am" : "pm"}`);
  }
}

export default function ReservationModal({ open, onClose }: ReservationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setErrors({});
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!date) errs.date = "Please choose a date.";
    if (!time) errs.time = "Please choose a time.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.625rem 0.75rem",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-16)",
    color: "var(--color-fg)",
    background: "var(--color-bg)",
    border: "1.5px solid var(--color-mist)",
    borderRadius: "var(--radius-md)",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-11)",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--color-fg-muted)",
    marginBottom: "0.375rem",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: "var(--z-modal)" as unknown as number,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(26,14,8,0.75)",
          backdropFilter: "blur(4px)",
        }}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Reserve a table"
        style={{
          position: "relative",
          background: "var(--color-bg-alt)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-lg)",
          padding: "2rem",
          width: "100%",
          maxWidth: "480px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close reservation form"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-fg-muted)",
            fontSize: "1.5rem",
            lineHeight: 1,
            padding: "0.25rem",
          }}
        >
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-48)",
                fontWeight: 300,
                color: "var(--color-brand)",
                marginBottom: "1rem",
              }}
            >
              &
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-28)",
                fontWeight: 400,
                color: "var(--color-fg)",
                marginBottom: "0.75rem",
              }}
            >
              We&apos;ll see you then.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-16)",
                color: "var(--color-fg-muted)",
                marginBottom: "1.5rem",
              }}
            >
              {name}, we have your table for {partySize} on {date} at {time}.
            </p>
            <button
              onClick={onClose}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "var(--color-parchment)",
                background: "var(--color-brand)",
                border: "none",
                borderRadius: "var(--radius-md)",
                padding: "0.625rem 1.5rem",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-28)",
                fontWeight: 400,
                color: "var(--color-fg)",
                marginBottom: "0.25rem",
              }}
            >
              Reserve a Table
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-13)",
                color: "var(--color-fg-muted)",
                marginBottom: "1.5rem",
              }}
            >
              96 Bedford Ave, Brooklyn
            </p>

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label htmlFor="res-name" style={labelStyle}>Name</label>
                <input
                  ref={firstFieldRef}
                  id="res-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? "var(--color-amber)" : "var(--color-mist)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-amber)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "var(--color-amber)" : "var(--color-mist)")}
                />
                {errors.name && (
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-11)", color: "var(--color-amber)", marginTop: "0.25rem", display: "block" }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="res-party" style={labelStyle}>Party size</label>
                <select
                  id="res-party"
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label htmlFor="res-date" style={labelStyle}>Date</label>
                  <input
                    id="res-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    style={{
                      ...inputStyle,
                      borderColor: errors.date ? "var(--color-amber)" : "var(--color-mist)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-amber)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.date ? "var(--color-amber)" : "var(--color-mist)")}
                  />
                  {errors.date && (
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-11)", color: "var(--color-amber)", marginTop: "0.25rem", display: "block" }}>
                      {errors.date}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="res-time" style={labelStyle}>Time</label>
                  <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-13)",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "var(--color-parchment)",
                  background: "var(--color-brand)",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1.5rem",
                  cursor: "pointer",
                  marginTop: "0.25rem",
                }}
              >
                Confirm reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
