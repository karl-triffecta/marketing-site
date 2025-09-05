export default function IconTriffecta({
  size = "100px",
  strokeColor = "var(--color-accent)",
  strokeWidth = "1.2",
  transform = "rotate(180)",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={strokeColor}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="miter"
    >
      <g transform="rotate(180, 12, 12)">
        <polygon points="12 3 2.5 21 21.5 21 12 3"></polygon>
      </g>
    </svg>
  );
}
