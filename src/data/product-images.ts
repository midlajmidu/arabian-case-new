/**
 * Maps each catalog product slug (category/product) to portfolio images.
 *
 * Image matching rules:
 *   1. Images from output_images (type: "product") are prioritised.
 *   2. Images from Website picture 2 (type: "project") supplement.
 *   3. Matching is by keyword overlap between the image ID and the product slug.
 *
 * The exported helper `getProductImages` returns { card, gallery } where:
 *   - card   = the best single image for a sub-product card
 *   - gallery = all matching images for the product detail page
 */

import portfolioItems from "@/data/portfolio-items.json";

interface PortfolioImage {
  id: string;
  category: string;
  categoryLabel: string;
  large: string;
  thumb: string;
  type: "product" | "project";
}

const allImages = portfolioItems as PortfolioImage[];

/* ─── Keyword-based mapping ──────────────────────────────────────────
 *
 * Each key is "<categorySlug>/<productSlug>" from catalog.ts.
 * Each value is an array of keyword groups — an image matches if ALL
 * keywords in any single group appear in the image ID.
 *
 * Images are sorted: product type first, then project type.
 * ──────────────────────────────────────────────────────────────────── */

const productKeywords: Record<string, string[][]> = {
  // ── Flight Cases ──────────────────────────────────────────────────
  "flight-cases/rack-cases": [["rack-case"], ["rackcase"]],
  "flight-cases/cable-trunks": [["cable-trunk"]],
  "flight-cases/audio-equipment-cases": [
    ["speaker-case"],
    ["speakercase"],
    ["mixer-case"],
    ["mixer-case-3"],
  ],
  "flight-cases/utility-covers": [
    ["utility-case"],
    ["utility-box"],
    ["custom-covers"],
  ],
  "flight-cases/tv-screen-cases": [["screen-case"]],
  "flight-cases/dj-tables": [["keyboard-case"]],

  // ── Foam Inserts ──────────────────────────────────────────────────
  "foam-inserts/tool-control": [["tool-box"], ["toolbox"]],
  "foam-inserts/custom-foam-inserts": [["foam-insert"]],
  "foam-inserts/foam-sheets": [["foam-insert"]],
  "foam-inserts/foam-blocks": [["foam-insert"]],

  // ── Hard Cases ────────────────────────────────────────────────────
  "hard-cases/pelican-cases": [["pelican"]],

  // ── Shipping Crates ───────────────────────────────────────────────
  "shipping-crates/heavy-duty-wooden-crates": [["wooden-crate"], ["wooden-craated"]],
  "shipping-crates/custom-wooden-pallets": [["wooden-crate"], ["wooden-craated"]],
  "shipping-crates/custom-wooden-boxes": [["wooden-crate"], ["wooden-craated"]],

  // ── Custom Bags ───────────────────────────────────────────────────
  "custom-bags/equipment-bags": [["equipment-tools-bag"], ["equipment"]],
  "custom-bags/custom-covers": [["custom-covers"]],
  "custom-bags/belt-pouches": [["belt-pouch"]],
  "custom-bags/medical-bags": [["medical-bag"]],

  // ── Exhibition ────────────────────────────────────────────────────
  "exhibition/shell-scheme-stand": [["exhibition-stand"], ["exhibitionstand"]],
  "exhibition/premium-exhibition-stand": [
    ["premium-exhibition"],
    ["premuim-exhibition"],
  ],
  "exhibition/outdoor-kiosk": [
    ["outdoor-kiosk"],
    ["outdoor-kioxk"],
    ["outdoor-kisok"],
    ["outdoorkiosk"],
  ],
  "exhibition/event-photo-ops": [
    ["event-photo"],
    ["eventphoto"],
    ["photobs"],
  ],

  // ── Furniture ─────────────────────────────────────────────────────
  "furniture/sofa-makers": [["sofa"]],
  "furniture/wooden-tables": [["furniture"]],
  "furniture/office-furniture": [["furniture"]],
  "furniture/school-furniture": [["furniture"]],
  "furniture/premium-furniture": [["furniture"], ["sofa"]],
  "furniture/custom-display-units": [
    ["display-stand"],
    ["custom-display"],
  ],

  // ── Utility Covers ────────────────────────────────────────────────
  "utility-covers/machinery-covers": [
    ["utility-case"],
    ["utility-box"],
    ["custom-covers"],
  ],
  "utility-covers/generator-covers": [
    ["utility-case"],
    ["custom-covers"],
  ],
  "utility-covers/equipment-covers": [
    ["utility-case"],
    ["utility-box"],
    ["custom-covers"],
  ],
  "utility-covers/outdoor-covers": [
    ["utility-case"],
    ["custom-covers"],
  ],
};

function matchImage(imageId: string, keywordGroups: string[][]): boolean {
  const id = imageId.toLowerCase();
  return keywordGroups.some((group) =>
    group.every((kw) => id.includes(kw.toLowerCase())),
  );
}

/**
 * Get all matching portfolio images for a given product, sorted with
 * product-type (transparent PNGs) first, then project-type (photos).
 */
function getMatchingImages(
  categorySlug: string,
  productSlug: string,
): PortfolioImage[] {
  const key = `${categorySlug}/${productSlug}`;
  const kwGroups = productKeywords[key];
  if (!kwGroups) return [];

  const matches = allImages.filter((img) => matchImage(img.id, kwGroups));

  // Sort: product images first, then project images
  matches.sort((a, b) => {
    if (a.type === "product" && b.type !== "product") return -1;
    if (a.type !== "product" && b.type === "product") return 1;
    return 0;
  });

  // Prioritize utility-case1 for flight-cases/utility-covers
  if (key === "flight-cases/utility-covers") {
    const targetIdx = matches.findIndex((m) => m.id === "utility-case1");
    if (targetIdx > -1) {
      const [targetItem] = matches.splice(targetIdx, 1);
      matches.unshift(targetItem);
    }
  }

  return matches;
}

export interface ProductImageSet {
  /** Best single image for the sub-product card (prefers product type) */
  card: { large: string; thumb: string; type: "product" | "project" } | null;
  /** All matching images for the product detail gallery */
  gallery: { large: string; thumb: string; type: "product" | "project" }[];
}

export function getProductImages(
  categorySlug: string,
  productSlug: string,
): ProductImageSet {
  const matches = getMatchingImages(categorySlug, productSlug);
  return {
    card: matches.length > 0
      ? { large: matches[0].large, thumb: matches[0].thumb, type: matches[0].type }
      : null,
    gallery: matches.map((m) => ({
      large: m.large,
      thumb: m.thumb,
      type: m.type,
    })),
  };
}
