import { cn } from "@/lib/utils";
import { Container } from "./Container";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  containerClassName,
  id,
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
}) {
  return (
    <As id={id} className={cn("py-20 md:py-24 lg:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </As>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] leading-tight text-brand-navy">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-brand-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}