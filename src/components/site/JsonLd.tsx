export function jsonLdScript(obj: unknown) {
  return { type: "application/ld+json" as const, children: JSON.stringify(obj) };
}