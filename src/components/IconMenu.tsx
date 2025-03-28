// https://www.svgrepo.com/svg/506800/burger-menu
export default function IconMenu({ size = "40px", strokeColor = "#FFFFFF" }) {
  return (
    <svg
      width={size}
      height={size}
      stroke={strokeColor}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 18L20 18" stroke-width="2" stroke-linecap="round" />
      <path d="M4 12L20 12" stroke-width="2" stroke-linecap="round" />
      <path d="M4 6L20 6" stroke-width="2" stroke-linecap="round" />
    </svg>
  );
}
