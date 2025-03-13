export default function IconTriffecta({
  size = "100px",
  strokeColor = "var(--color-primary)",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={strokeColor}
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="miter"
      transform="rotate(180)"
    >
      <polygon points="12 3 2.5 21 21.5 21 12 3"></polygon>
    </svg>
  );
}
