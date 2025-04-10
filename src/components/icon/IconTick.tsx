// https://www.svgrepo.com/svg/520990/tick
export default function IconCross({ size = "40px", strokeColor = "#FFFFFF" }) {
  return (
    <svg
      width={size}
      height={size}
      stroke={strokeColor}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 12.5L10.167 17L19.5 8"
        stroke={strokeColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
