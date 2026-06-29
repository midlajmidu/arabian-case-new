import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  /** Target element id or CSS selector to scroll to. Defaults to the next sibling section. */
  targetSelector?: string;
  /** Label shown vertically. Defaults to "Scroll". */
  label?: string;
  /** Additional classes for the root element. */
  className?: string;
  /** Disable automatic hiding on scroll */
  disableHide?: boolean;
}

export function ScrollIndicator({
  targetSelector,
  label = "Scroll",
  className,
  disableHide = false,
}: ScrollIndicatorProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(true);

  /* Hide once user has scrolled past ~120px */
  useEffect(() => {
    if (disableHide) {
      setVisible(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY < 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [disableHide]);

  function handleClick() {
    if (targetSelector) {
      document.querySelector(targetSelector)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    /* Default: scroll down one viewport height */
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }

  return (
    <button
      ref={ref}
      onClick={handleClick}
      aria-label="Scroll down"
      className={cn(
        "group flex flex-col items-center gap-2 cursor-pointer border-none bg-transparent px-8  outline-none animate-bounce",
        "transition-opacity duration-500 ease-out",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
    >
      {/* Vertical label */}
      <span
        className={cn(
          "text-[10px] font-semibold tracking-[0.22em] uppercase",
          "text-brand-gold group-hover:text-white",
          "transition-colors duration-300",
          "[writing-mode:vertical-lr] rotate-180 select-none"
        )}
      >
        {label}
      </span>

      {/* Animated line with gold fill */}
      <span
        className="relative h-10 w-px overflow-hidden"
        style={{ backgroundColor: "rgba(238, 192, 85, 0.25)" }}
      >
        <span
          className={cn(
            "absolute inset-x-0 top-[-100%] h-full",
            "animate-line-drop"
          )}
          style={{ backgroundColor: "rgb(238, 192, 85)" }}
        />
      </span>
    </button>
  );
}
