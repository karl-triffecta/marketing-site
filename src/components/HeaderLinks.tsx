export default function HeaderLinks({ mobileNav = false }) {
  return (
    <nav
      className={`relative ${mobileNav ? "w-full space-y-4 bg-white text-center" : ""}`}
      style={mobileNav ? { width: "calc(100% + 40px)", left: "-20px" } : {}}
    >
      <ul className={mobileNav ? "" : "flex justify-center space-x-8"}>
        <li
          className={
            mobileNav ? "border-t-1 border-b-1 border-[#CCCCCC] py-4" : ""
          }
        >
          <a href="/latest" class="hover:underline">
            Latest
          </a>
        </li>
        <li
          className={
            mobileNav ? "border-t-1 border-b-1 border-[#CCCCCC] py-4" : ""
          }
        >
          <a href="/team" class="hover:underline">
            Meet the Team
          </a>
        </li>
        <li className={mobileNav ? "border-b-1 border-[#CCCCCC] py-4" : ""}>
          <a href="/contact" class="hover:underline">
            Contact Us
          </a>
        </li>
        <li className={mobileNav ? "border-b-1 border-[#CCCCCC] py-4" : ""}>
          <a href="https://portal.triffecta.com/" class="hover:underline">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}
