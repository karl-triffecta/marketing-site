// https://www.svgrepo.com/svg/506172/cross
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
        d="M19 5L4.99998 19M5.00001 5L19 19"
        stroke={strokeColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
