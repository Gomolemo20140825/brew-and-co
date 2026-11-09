export default function CheckerBand() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: "10px",
        backgroundImage:
          "conic-gradient(var(--color-mahogany) 90deg, var(--color-parchment) 90deg 180deg, var(--color-mahogany) 180deg 270deg, var(--color-parchment) 270deg)",
        backgroundSize: "10px 10px",
        flexShrink: 0,
      }}
    />
  );
}
