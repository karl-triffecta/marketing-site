export default function IconPlus({
  size = "40px",
  strokeColor = "#F6BF6C",
  backgroundColor = "#DFDFD7",
  className = "",
}) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H48C52.4183 0 56 3.58172 56 8V48C56 52.4183 52.4183 56 48 56H8C3.58172 56 0 52.4183 0 48V8Z"
        fill="#DFDFD7"
        fill-opacity="0.3"
      ></path>
      <path
        d="M27.7222 42L14 16H41.4444L27.7222 42Z"
        stroke="#F6BF6C"
        stroke-width="3"
        stroke-linecap="round"
      ></path>
      <mask
        id="path-3-outside-1_427_264"
        maskUnits="userSpaceOnUse"
        x="23"
        y="19"
        width="21"
        height="24"
        fill="black"
      >
        <rect fill="white" x="23" y="19" width="21" height="24"></rect>
        <path d="M31.5936 42V24.06H24.3336V20.85H42.6936V24.06H35.4336V42H31.5936Z"></path>
      </mask>
      <path
        d="M31.5936 42V24.06H24.3336V20.85H42.6936V24.06H35.4336V42H31.5936Z"
        fill="#263238"
      ></path>
      <path
        d="M31.5936 42H30.5936V43H31.5936V42ZM31.5936 24.06H32.5936V23.06H31.5936V24.06ZM24.3336 24.06H23.3336V25.06H24.3336V24.06ZM24.3336 20.85V19.85H23.3336V20.85H24.3336ZM42.6936 20.85H43.6936V19.85H42.6936V20.85ZM42.6936 24.06V25.06H43.6936V24.06H42.6936ZM35.4336 24.06V23.06H34.4336V24.06H35.4336ZM35.4336 42V43H36.4336V42H35.4336ZM32.5936 42V24.06H30.5936V42H32.5936ZM31.5936 23.06H24.3336V25.06H31.5936V23.06ZM25.3336 24.06V20.85H23.3336V24.06H25.3336ZM24.3336 21.85H42.6936V19.85H24.3336V21.85ZM41.6936 20.85V24.06H43.6936V20.85H41.6936ZM42.6936 23.06H35.4336V25.06H42.6936V23.06ZM34.4336 24.06V42H36.4336V24.06H34.4336ZM35.4336 41H31.5936V43H35.4336V41Z"
        fill="#F6BF6C"
        mask="url(#path-3-outside-1_427_264)"
      ></path>
    </svg>
  );
}
