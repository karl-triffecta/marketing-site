import type { ComponentChildren } from "preact";
import IconPlus from "./icon/IconPlus.tsx";

interface AccordionProps {
  title: string;
  children: ComponentChildren;
}

export default function Accordion({ title, children }: AccordionProps) {
  return (
    <details class="group max-h-36 overflow-hidden transition-all duration-500 ease-in-out open:max-h-[1000px]">
      <summary class="flex cursor-pointer list-none items-center justify-between">
        <h3 class="text-xl">{title}</h3>
        <span class="transition-transform duration-300 group-open:rotate-45">
          <IconPlus strokeColor={"#000000"} />
        </span>
      </summary>

      <div class="px-1 pt-6 pb-4">{children}</div>
    </details>
  );
}
