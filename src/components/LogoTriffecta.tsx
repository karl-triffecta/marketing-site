import IconTriffecta from "./IconTriffecta.js";

/*
Sizes
  1 = smaller, without subtext
  2 = larger, with subtext

*/
export default function LogoTriffecta({
  size = 1,
  strokeColor = "var(--color-accent)",
}) {
  let largeTextSize = "27px",
    smallTextSize = "20px",
    showSmallText = false,
    iconSize = "50px",
    iconLeft = "-17px",
    iconTop = "-2px";

  if (size > 1) {
    largeTextSize = "55px";
    iconSize = "100px";
    iconLeft = "-33.5px";
    iconTop = "-4px";
    showSmallText = true;
  }

  return (
    <div class="flex flex-col">
      <div class="pointer-events-none flex flex-col items-start">
        <div class="relative">
          <div class={`absolute`} style={{ left: iconLeft, top: iconTop }}>
            <IconTriffecta size={iconSize} strokeColor={strokeColor} />
          </div>
          <div class="relative">
            <span style={{ "font-size": largeTextSize }}>Triffecta</span>
          </div>
        </div>
        {showSmallText && (
          <div class="relative top-[-25px] right-[2.5px] flex h-[0] w-full justify-end font-semibold">
            <span style={{ "font-size": smallTextSize }}>Retail Media</span>
          </div>
        )}
      </div>
    </div>
  );
}
