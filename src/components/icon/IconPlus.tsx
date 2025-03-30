// https://www.svgrepo.com/svg/532997/plus-large
export default function IconPlus({ size = "40px", strokeColor = "#FFFFFF" }) {
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
        stroke={strokeColor}
        d="M4 12H20M12 4V20"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
