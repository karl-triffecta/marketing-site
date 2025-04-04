// https://www.svgrepo.com/svg/376087/incognito
export default function IconIncognito({ size = "25px", stroke = "#000000" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.371 1.072a1 1 0 00-1.32.612L2.28 7H1a1 1 0 000 2h14a1 1 0 100-2h-1.28l-1.77-5.316a1 1 0 00-1.32-.612L8 2.123 5.371 1.072zM11.613 7l-1.226-3.678-2.016.806a1 1 0 01-.742 0l-2.016-.806L4.387 7h7.226z"
        fill={stroke}
      />
      <path
        d="M2 11a1 1 0 100 2c.552 0 .98.475 1.244.959A2 2 0 005 15h.558a2 2 0 001.898-1.367l.105-.317a.463.463 0 01.878 0l.105.316A2 2 0 0010.441 15H11a2 2 0 001.755-1.041c.266-.484.693-.959 1.245-.959a1 1 0 100-2H2z"
        fill={stroke}
      />
    </svg>
  );
}
