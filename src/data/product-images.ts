/**
 * Maps product names to images dynamically from 'Website picture 2/today image'
 * using word-based similarity matching. Falls back to original keyword mapping
 * for existing products.
 */

import portfolioItems from "@/data/portfolio-items.json";
import { categories } from "@/data/catalog";

export interface ProductImage {
  large: string;
  thumb: string;
  type: "product" | "project";
}

export interface ProductImageSet {
  mainImage: ProductImage | null;
  galleryImages: ProductImage[];
}

export interface PortfolioItem {
  id: string;
  category: string;
  categoryLabel: string;
  large: string;
  thumb: string;
  type: "product" | "project";
  title: string;
}

// ── Dynamically load today's images ────────────────────────────────────
const todayImages = import.meta.glob(
  "/src/assets/product/**/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,heic,HEIC}",
  { eager: true, import: "default" }
) as Record<string, string>;

interface ScannedImage {
  path: string;
  url: string;
  filename: string;
  stem: string;
  baseName: string;
  isGallery: boolean;
}

const scannedImages: ScannedImage[] = Object.entries(todayImages).map(([path, url]) => {
  const filename = path.split("/").pop() || "";
  let stem = filename.replace(/\.[^/.]+$/, "");

  // Custom mapping for WhatsApp image to mixer case 2
  if (stem.startsWith("WhatsApp Image 2026-07-22")) {
    stem = "mixer case 2";
  }

  // Clean stem of gallery keywords
  const baseName = stem
    .toLowerCase()
    .replace(/\b(angle|side|view|perspective|2|second)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const isGallery = /\b(angle|side|view|perspective|2|second)\b/i.test(stem);

  return {
    path,
    url,
    filename,
    stem,
    baseName,
    isGallery
  };
});

// ── Word-based similarity matcher ──────────────────────────────────────
function getSimilarityScore(str1: string, str2: string): number {
  const getWords = (s: string) =>
    s.toLowerCase()
      .replace(/[^a-z0-9]/g, " ")
      .split(/\s+/)
      .filter(Boolean)
      .map(w => {
        if (w === "wodden") return "wooden";
        if (w === "pallet" || w === "pallets") return "pallet";
        if (w === "box" || w === "boxes") return "box";
        if (w === "crate" || w === "crates") return "crate";
        if (w === "sheet" || w === "sheets") return "sheet";
        if (w === "table" || w === "tables") return "table";
        if (w === "insert" || w === "inserts") return "insert";
        if (w === "cover" || w === "covers" || w === "case" || w === "cases") return "case";
        return w;
      });

  const w1 = getWords(str1);
  const w2 = getWords(str2);

  if (w1.length === 0 || w2.length === 0) return 0;

  // Custom synonym handling: if both contain "custom", "sheet" and "insert" match
  const hasCustom = w1.includes("custom") && w2.includes("custom");
  const normalizedW1 = w1.map(w => (w === "sheet" && hasCustom ? "insert" : w));
  const normalizedW2 = w2.map(w => (w === "sheet" && hasCustom ? "insert" : w));

  let matches = 0;
  for (const word of normalizedW1) {
    if (normalizedW2.includes(word)) {
      matches++;
    }
  }

  const union = new Set([...normalizedW1, ...normalizedW2]).size;
  return matches / union;
}

function getTodayMatch(productName: string): { main: ScannedImage; gallery: ScannedImage[] } | null {
  let bestScore = 0;
  let bestBaseName = "";

  for (const img of scannedImages) {
    const score = getSimilarityScore(productName, img.baseName);
    if (score > bestScore) {
      bestScore = score;
      bestBaseName = img.baseName;
    }
  }

  if (bestScore < 0.6) {
    return null;
  }

  const matches = scannedImages.filter(img => img.baseName === bestBaseName);
  const main = matches.find(img => !img.isGallery) || matches[0];
  const gallery = matches.filter(img => img !== main);

  return { main, gallery };
}

// ── Original Keyword-based mapping for fallback ───────────────────────
const productKeywords: Record<string, string[][]> = {
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
  "foam-inserts/tool-control": [["tool-box"], ["toolbox"]],
  "foam-inserts/custom-foam-inserts": [["foam-insert"]],
  "foam-inserts/foam-sheets": [["foam-insert"]],
  "foam-inserts/foam-blocks": [["foam-insert"]],
  "hard-cases/pelican-cases": [["pelican"]],
  "shipping-crates/heavy-duty-wooden-crates": [["wooden-crate"], ["wooden-craated"]],
  "shipping-crates/custom-wooden-pallets": [["wooden-crate"], ["wooden-craated"]],
  "shipping-crates/custom-wooden-boxes": [["wooden-crate"], ["wooden-craated"]],
  "custom-bags/equipment-bags": [["equipment-tools-bag"], ["equipment"]],
  "custom-bags/custom-covers": [["custom-covers"]],
  "custom-bags/belt-pouches": [["belt-pouch"]],
  "custom-bags/medical-bags": [["medical-bag"]],
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
  "furniture/sofa-makers": [["sofa"]],
  "furniture/wooden-tables": [["furniture"]],
  "furniture/office-furniture": [["furniture"]],
  "furniture/school-furniture": [["furniture"]],
  "furniture/premium-furniture": [["furniture"], ["sofa"]],
  "furniture/custom-display-units": [
    ["display-stand"],
    ["custom-display"],
  ],
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

const allImages = portfolioItems as {
  id: string;
  category: string;
  categoryLabel: string;
  large: string;
  thumb: string;
  type: "product" | "project";
}[];

function matchImage(imageId: string, keywordGroups: string[][]): boolean {
  const id = imageId.toLowerCase();
  return keywordGroups.some((group) =>
    group.every((kw) => id.includes(kw.toLowerCase())),
  );
}

function getMatchingImages(
  categorySlug: string,
  productSlug: string,
): typeof allImages {
  const key = `${categorySlug}/${productSlug}`;
  const kwGroups = productKeywords[key];
  if (!kwGroups) return [];

  const matches = allImages.filter((img) => matchImage(img.id, kwGroups));

  matches.sort((a, b) => {
    if (a.type === "product" && b.type !== "product") return -1;
    if (a.type !== "product" && b.type === "product") return 1;
    return 0;
  });

  if (key === "flight-cases/utility-covers") {
    const targetIdx = matches.findIndex((m) => m.id === "utility-case1");
    if (targetIdx > -1) {
      const [targetItem] = matches.splice(targetIdx, 1);
      matches.unshift(targetItem);
    }
  }

  return matches;
}

// ── Reusable dynamic image loader utility ─────────────────────────────
export function getProductImages(productName: string): ProductImageSet {
  // 1. Get fallback images first
  let fallbackMain: ProductImage | null = null;
  let fallbackGallery: ProductImage[] = [];

  for (const cat of categories) {
    const product = cat.products.find(
      (p) => p.title.toLowerCase() === productName.toLowerCase()
    );
    if (product) {
      const matches = getMatchingImages(cat.slug, product.slug);
      if (matches.length > 0) {
        fallbackMain = {
          large: matches[0].large,
          thumb: matches[0].thumb,
          type: matches[0].type,
        };
        fallbackGallery = matches.slice(1).map((m) => ({
          large: m.large,
          thumb: m.thumb,
          type: m.type,
        }));
      }
    }
  }

  // 2. Get today's match
  const todayMatch = getTodayMatch(productName);

  // 3. Apply custom logic for Audio Equipment Cases to merge mixer, speaker, and keyboard cases
  const isAudioEquipment =
    productName.toLowerCase() === "audio-equipment-cases" ||
    productName.toLowerCase() === "audio equipment cases" ||
    productName.toLowerCase() === "audio equipment flight cases";

  if (isAudioEquipment) {
    const audioImages = scannedImages.filter(img =>
      (img.stem.toLowerCase().includes("mixer case") ||
       img.stem.toLowerCase().includes("speaker case") ||
       img.stem.toLowerCase().includes("keyboard case") ||
       img.filename.toLowerCase().startsWith("whatsapp image")) &&
      !img.filename.toLowerCase().endsWith(".webp")
    );

    if (audioImages.length > 0) {
      const main = audioImages.find(img => img.stem.toLowerCase() === "mixer case") || audioImages[0];
      const gallery = audioImages.filter(img => img !== main);

      return {
        mainImage: {
          large: main.url,
          thumb: main.url,
          type: "product",
        },
        galleryImages: gallery.map(img => ({
          large: img.url,
          thumb: img.url,
          type: "product" as const,
        })),
      };
    }
  }

  // 4. Apply custom logic for DJ Tables to merge keyboard cases
  const isDJTables =
    productName.toLowerCase() === "dj-tables" ||
    productName.toLowerCase() === "dj tables" ||
    productName.toLowerCase() === "dj tables & flight cases";

  if (isDJTables) {
    const djImg = scannedImages.find(img => img.stem.toLowerCase() === "dj table");
    if (djImg) {
      return {
        mainImage: {
          large: djImg.url,
          thumb: djImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: djImg.url,
            thumb: djImg.url,
            type: "product",
          },
        ],
      };
    }
  }

  // 5. Apply custom logic for Rack Cases to display rack case 2, 3, 4, 5, 6
  const isRackCases =
    productName.toLowerCase() === "rack-cases" ||
    productName.toLowerCase() === "rack cases" ||
    productName.toLowerCase() === "rack flight cases";

  if (isRackCases) {
    const rackImages = scannedImages.filter(img =>
      img.stem.toLowerCase().startsWith("rack case")
    );
    rackImages.sort((a, b) => a.stem.localeCompare(b.stem));
    
    if (rackImages.length > 0) {
      const main = rackImages[0];
      const gallery = rackImages.slice(1);
      
      return {
        mainImage: {
          large: main.url,
          thumb: main.url,
          type: "product",
        },
        galleryImages: gallery.map(img => ({
          large: img.url,
          thumb: img.url,
          type: "product" as const,
        })),
      };
    }
  }

  // 6. Apply custom logic for Cable Trunks to set "Cable trunk.jpeg" as the first (main) image and product card image
  const isCableTrunks =
    productName.toLowerCase() === "cable-trunks" ||
    productName.toLowerCase() === "cable trunks" ||
    productName.toLowerCase() === "heavy-duty cable trunks" ||
    productName.toLowerCase() === "cable trunk";

  if (isCableTrunks) {
    const cableImages = scannedImages.filter(img =>
      img.stem.toLowerCase().includes("cable trunk")
    );
    
    if (cableImages.length > 0) {
      const main = cableImages.find(img => img.stem.toLowerCase() === "cable trunk") || cableImages[0];
      const otherScanned = cableImages.filter(img => img !== main);
      
      return {
        mainImage: {
          large: main.url,
          thumb: main.url,
          type: "product",
        },
        galleryImages: [
          ...otherScanned.map(img => ({
            large: img.url,
            thumb: img.url,
            type: "product" as const,
          })),
          ...fallbackGallery,
        ],
      };
    }
  }

  // 7. Apply custom logic for Utility Cases to display ONLY JPEG images (no webp) on product detail page and card
  const isUtilityCases =
    productName.toLowerCase() === "utility-flight-cases" ||
    productName.toLowerCase() === "utility flight cases" ||
    productName.toLowerCase() === "utility flight case" ||
    productName.toLowerCase() === "utility-cases" ||
    productName.toLowerCase() === "utility cases" ||
    productName.toLowerCase() === "utility-covers" ||
    productName.toLowerCase() === "utility covers";

  if (isUtilityCases) {
    const utilityImages = scannedImages.filter(img =>
      img.stem.toLowerCase().includes("utility case") &&
      !img.filename.toLowerCase().endsWith(".webp")
    );
    
    utilityImages.sort((a, b) => a.stem.localeCompare(b.stem));
    
    if (utilityImages.length > 0) {
      const main = utilityImages.find(img => img.stem.toLowerCase() === "utility case 1") || utilityImages[0];
      const gallery = utilityImages.filter(img => img !== main);
      
      return {
        mainImage: {
          large: main.url,
          thumb: main.url,
          type: "product",
        },
        galleryImages: gallery.map(img => ({
          large: img.url,
          thumb: img.url,
          type: "product" as const,
        })),
      };
    }
  }

  // 8. Apply custom logic for Heavy-Duty Reusable Shipping Crates
  const isHeavyDutyCrates =
    productName.toLowerCase().includes("heavy-duty") ||
    productName.toLowerCase().includes("heavy duty") ||
    productName.toLowerCase() === "heavy-duty-wooden-crates" ||
    productName.toLowerCase().includes("reusable shipping crates");

  if (isHeavyDutyCrates) {
    const crateImage = scannedImages.find(img => img.filename.toLowerCase() === "21_jpg.jpeg");
    if (crateImage) {
      return {
        mainImage: {
          large: crateImage.url,
          thumb: crateImage.url,
          type: "product",
        },
        galleryImages: [
          {
            large: crateImage.url,
            thumb: crateImage.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 9. Apply custom logic for Wooden Pallets
  const isWoodenPallets =
    productName.toLowerCase() === "wooden pallets" ||
    productName.toLowerCase() === "custom-wooden-pallets" ||
    productName.toLowerCase().includes("pallet");

  if (isWoodenPallets) {
    const palletImage = scannedImages.find(img => img.stem.toLowerCase().includes("wooden pallet"));
    if (palletImage) {
      return {
        mainImage: {
          large: palletImage.url,
          thumb: palletImage.url,
          type: "product",
        },
        galleryImages: [
          {
            large: palletImage.url,
            thumb: palletImage.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 10. Apply custom logic for Wooden Boxes
  const isWoodenBoxes =
    productName.toLowerCase() === "wooden boxes" ||
    productName.toLowerCase() === "custom-wooden-boxes" ||
    productName.toLowerCase().includes("wooden box");

  if (isWoodenBoxes) {
    const boxImage = scannedImages.find(img => img.stem.toLowerCase().includes("wooden box"));
    if (boxImage) {
      return {
        mainImage: {
          large: boxImage.url,
          thumb: boxImage.url,
          type: "product",
        },
        galleryImages: [
          {
            large: boxImage.url,
            thumb: boxImage.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 11. Custom logic for Industrial Equipment & Tool Bags
  const isIndustrialToolBags =
    productName.toLowerCase().includes("industrial equipment") ||
    productName.toLowerCase() === "industrial-tool-bags" ||
    productName.toLowerCase().includes("tool bag");

  if (isIndustrialToolBags) {
    const bagImage = scannedImages.find(img => img.stem.toLowerCase().includes("industrial tool bag"));
    if (bagImage) {
      return {
        mainImage: {
          large: bagImage.url,
          thumb: bagImage.url,
          type: "product",
        },
        galleryImages: [
          {
            large: bagImage.url,
            thumb: bagImage.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 12. Custom logic for Hot & Cool Bags
  const isHotCoolBags =
    productName.toLowerCase().includes("hot & cool") ||
    productName.toLowerCase() === "hot-cool-bags" ||
    productName.toLowerCase().includes("hot cool");

  if (isHotCoolBags) {
    const bagImage = scannedImages.find(img => img.stem.toLowerCase().includes("hot cool bag"));
    if (bagImage) {
      return {
        mainImage: {
          large: bagImage.url,
          thumb: bagImage.url,
          type: "product",
        },
        galleryImages: [
          {
            large: bagImage.url,
            thumb: bagImage.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 13. Custom logic for Laptop Bags, Backpacks & Travel Bags
  const isLaptopTravelBags =
    productName.toLowerCase().includes("laptop") ||
    productName.toLowerCase() === "laptop-backpack-travel-bags" ||
    productName.toLowerCase().includes("backpack");

  if (isLaptopTravelBags) {
    const bagImage = scannedImages.find(img => img.stem.toLowerCase().includes("laptop backpack travel bag"));
    if (bagImage) {
      return {
        mainImage: {
          large: bagImage.url,
          thumb: bagImage.url,
          type: "product",
        },
        galleryImages: [
          {
            large: bagImage.url,
            thumb: bagImage.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 14. Custom logic for Eco-Friendly Bags
  const isEcoFriendlyBags =
    productName.toLowerCase().includes("eco-friendly") ||
    productName.toLowerCase() === "eco-friendly-bags" ||
    productName.toLowerCase().includes("eco friendly");

  if (isEcoFriendlyBags) {
    const bagImage = scannedImages.find(img => img.stem.toLowerCase().includes("eco friendly bag"));
    if (bagImage) {
      return {
        mainImage: {
          large: bagImage.url,
          thumb: bagImage.url,
          type: "product",
        },
        galleryImages: [
          {
            large: bagImage.url,
            thumb: bagImage.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 15. Custom logic for Sofa Makers
  const isSofaMakers =
    productName.toLowerCase() === "sofa makers" ||
    productName.toLowerCase() === "sofa-makers" ||
    productName.toLowerCase().includes("sofa");

  if (isSofaMakers) {
    const sofaImg = scannedImages.find(img => img.stem.toLowerCase().includes("furniture sofa"));
    if (sofaImg) {
      return {
        mainImage: {
          large: sofaImg.url,
          thumb: sofaImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: sofaImg.url,
            thumb: sofaImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 16. Custom logic for Wooden Tables
  const isWoodenTables =
    productName.toLowerCase() === "wooden tables" ||
    productName.toLowerCase() === "wooden-tables" ||
    productName.toLowerCase().includes("wooden table");

  if (isWoodenTables) {
    const tableImg = scannedImages.find(img => img.stem.toLowerCase().includes("furniture wooden table"));
    if (tableImg) {
      return {
        mainImage: {
          large: tableImg.url,
          thumb: tableImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: tableImg.url,
            thumb: tableImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 17. Custom logic for Office Furniture
  const isOfficeFurniture =
    productName.toLowerCase() === "office furniture" ||
    productName.toLowerCase() === "office-furniture" ||
    productName.toLowerCase().includes("office furniture");

  if (isOfficeFurniture) {
    const officeImg = scannedImages.find(img => img.stem.toLowerCase().includes("furniture office desk"));
    if (officeImg) {
      return {
        mainImage: {
          large: officeImg.url,
          thumb: officeImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: officeImg.url,
            thumb: officeImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 18. Custom logic for School Furniture
  const isSchoolFurniture =
    productName.toLowerCase() === "school furniture" ||
    productName.toLowerCase() === "school-furniture" ||
    productName.toLowerCase().includes("school furniture");

  if (isSchoolFurniture) {
    const schoolImg = scannedImages.find(img => img.stem.toLowerCase().includes("furniture school desk"));
    if (schoolImg) {
      return {
        mainImage: {
          large: schoolImg.url,
          thumb: schoolImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: schoolImg.url,
            thumb: schoolImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 19. Custom logic for Premium Furniture
  const isPremiumFurniture =
    productName.toLowerCase() === "premium furniture" ||
    productName.toLowerCase() === "premium-furniture" ||
    productName.toLowerCase().includes("premium furniture");

  if (isPremiumFurniture) {
    const premiumImg = scannedImages.find(img => img.stem.toLowerCase().includes("furniture premium credenza"));
    if (premiumImg) {
      return {
        mainImage: {
          large: premiumImg.url,
          thumb: premiumImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: premiumImg.url,
            thumb: premiumImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 20. Custom logic for Custom Display Units
  const isCustomDisplayUnits =
    productName.toLowerCase() === "custom display units" ||
    productName.toLowerCase() === "custom-display-units" ||
    productName.toLowerCase().includes("custom display");

  if (isCustomDisplayUnits) {
    const displayImg = scannedImages.find(img => img.stem.toLowerCase().includes("furniture display unit"));
    if (displayImg) {
      return {
        mainImage: {
          large: displayImg.url,
          thumb: displayImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: displayImg.url,
            thumb: displayImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 21. Custom logic for Tool Control Foam
  const isToolControlFoam =
    productName.toLowerCase().includes("tool control") ||
    productName.toLowerCase() === "tool-control";

  if (isToolControlFoam) {
    const aiToolFoamImg = scannedImages.find(img => img.stem.toLowerCase() === "tool control foam");
    const aiToolCaseImg = scannedImages.find(img => img.stem.toLowerCase().includes("tool control case"));
    
    const mainImgUrl = aiToolFoamImg ? aiToolFoamImg.url : (aiToolCaseImg ? aiToolCaseImg.url : "/portfolio/large/tool-box1-rotated.webp");

    const gallery: ProductImage[] = [];

    if (aiToolCaseImg) {
      gallery.push({
        large: aiToolCaseImg.url,
        thumb: aiToolCaseImg.url,
        type: "product",
      });
    }

    gallery.push(
      {
        large: "/portfolio/large/tool-box1.webp",
        thumb: "/portfolio/thumbs/tool-box1.webp",
        type: "product",
      },
      {
        large: "/portfolio/large/tool-box.webp",
        thumb: "/portfolio/thumbs/tool-box.webp",
        type: "product",
      },
      {
        large: "/portfolio/large/toolbox-2.webp",
        thumb: "/portfolio/thumbs/toolbox-2.webp",
        type: "product",
      }
    );

    return {
      mainImage: {
        large: mainImgUrl,
        thumb: mainImgUrl,
        type: "product",
      },
      galleryImages: gallery,
    };
  }

  // 21b. Custom logic for Custom Foam Inserts
  const isCustomFoamInserts =
    productName.toLowerCase() === "custom foam inserts" ||
    productName.toLowerCase() === "custom-foam-inserts" ||
    (productName.toLowerCase().includes("custom foam") && !productName.toLowerCase().includes("tool"));

  if (isCustomFoamInserts) {
    const foamImages = scannedImages.filter(img =>
      img.stem.toLowerCase() === "foam insert" ||
      img.stem.toLowerCase() === "foam insert1" ||
      img.stem.toLowerCase() === "foam insert2"
    );

    foamImages.sort((a, b) => a.stem.localeCompare(b.stem));

    if (foamImages.length > 0) {
      const main = foamImages.find(img => img.stem.toLowerCase() === "foam insert") || foamImages[0];
      const gallery = foamImages.filter(img => img !== main);

      return {
        mainImage: {
          large: main.url,
          thumb: main.url,
          type: "product",
        },
        galleryImages: gallery.map(img => ({
          large: img.url,
          thumb: img.url,
          type: "product" as const,
        })),
      };
    }
  }

  // 21c. Custom logic for Foam Sheets
  const isFoamSheets =
    productName.toLowerCase() === "foam sheets" ||
    productName.toLowerCase() === "foam-sheets" ||
    productName.toLowerCase().includes("foam sheet");

  if (isFoamSheets) {
    const foamSheetImg = scannedImages.find(img => img.stem.toLowerCase().includes("foam sheets"));
    if (foamSheetImg) {
      return {
        mainImage: {
          large: foamSheetImg.url,
          thumb: foamSheetImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: foamSheetImg.url,
            thumb: foamSheetImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 21d. Custom logic for Foam Blocks
  const isFoamBlocks =
    productName.toLowerCase() === "foam blocks" ||
    productName.toLowerCase() === "foam-blocks" ||
    productName.toLowerCase().includes("foam block");

  if (isFoamBlocks) {
    const foamBlockImg = scannedImages.find(img => img.stem.toLowerCase().includes("foam blocks"));
    if (foamBlockImg) {
      return {
        mainImage: {
          large: foamBlockImg.url,
          thumb: foamBlockImg.url,
          type: "product",
        },
        galleryImages: [
          {
            large: foamBlockImg.url,
            thumb: foamBlockImg.url,
            type: "product",
          },
          ...fallbackGallery,
        ],
      };
    }
  }

  // 22. Custom logic for Shell Scheme Stand
  const isShellScheme =
    productName.toLowerCase().includes("shell scheme") ||
    productName.toLowerCase() === "shell-scheme-stand";

  if (isShellScheme) {
    return {
      mainImage: {
        large: "/portfolio/large/exhibition-stand.webp",
        thumb: "/portfolio/thumbs/exhibition-stand.webp",
        type: "product",
      },
      galleryImages: [
        {
          large: "/portfolio/large/exhibitionstand2.webp",
          thumb: "/portfolio/thumbs/exhibitionstand2.webp",
          type: "product",
        },
      ],
    };
  }

  // 23. Custom logic for Premium Exhibition Stand
  const isPremiumExhibition =
    productName.toLowerCase().includes("premium exhibition") ||
    productName.toLowerCase() === "premium-exhibition-stand";

  if (isPremiumExhibition) {
    return {
      mainImage: {
        large: "/portfolio/large/premium-exhibition-stand.webp",
        thumb: "/portfolio/thumbs/premium-exhibition-stand.webp",
        type: "product",
      },
      galleryImages: [
        {
          large: "/portfolio/large/premuim-exhibition-stand.webp",
          thumb: "/portfolio/thumbs/premuim-exhibition-stand.webp",
          type: "product",
        },
      ],
    };
  }

  // 24. Custom logic for Outdoor Kiosk
  const isOutdoorKiosk =
    productName.toLowerCase().includes("outdoor kiosk") ||
    productName.toLowerCase() === "outdoor-kiosk";

  if (isOutdoorKiosk) {
    return {
      mainImage: {
        large: "/portfolio/large/outdoor-kiosk.webp",
        thumb: "/portfolio/thumbs/outdoor-kiosk.webp",
        type: "product",
      },
      galleryImages: [
        {
          large: "/portfolio/large/outdoor-kiosk1.webp",
          thumb: "/portfolio/thumbs/outdoor-kiosk1.webp",
          type: "product",
        },
        {
          large: "/portfolio/large/outdoor-kiosk2.webp",
          thumb: "/portfolio/thumbs/outdoor-kiosk2.webp",
          type: "product",
        },
        {
          large: "/portfolio/large/outdoor-kiosk4.webp",
          thumb: "/portfolio/thumbs/outdoor-kiosk4.webp",
          type: "product",
        },
      ],
    };
  }

  // 25. Custom logic for Event Photo Ops
  const isEventPhotoOps =
    productName.toLowerCase().includes("photo ops") ||
    productName.toLowerCase().includes("event photo") ||
    productName.toLowerCase() === "event-photo-ops";

  if (isEventPhotoOps) {
    return {
      mainImage: {
        large: "/portfolio/large/event-photobs.webp",
        thumb: "/portfolio/thumbs/event-photobs.webp",
        type: "product",
      },
      galleryImages: [
        {
          large: "/portfolio/large/event-photobs1.webp",
          thumb: "/portfolio/thumbs/event-photobs1.webp",
          type: "product",
        },
        {
          large: "/portfolio/large/event-photobs2.webp",
          thumb: "/portfolio/thumbs/event-photobs2.webp",
          type: "product",
        },
        {
          large: "/portfolio/large/event-photobs5.webp",
          thumb: "/portfolio/thumbs/event-photobs5.webp",
          type: "product",
        },
      ],
    };
  }

  // 5. Standard match logic for other products
  if (todayMatch) {
    return {
      mainImage: {
        large: todayMatch.main.url,
        thumb: todayMatch.main.url,
        type: "product",
      },
      galleryImages: todayMatch.gallery.map((img) => ({
        large: img.url,
        thumb: img.url,
        type: "product",
      })),
    };
  }

  return {
    mainImage: fallbackMain,
    galleryImages: fallbackGallery,
  };
}

// ── Helper to format today's scanned images as PortfolioItems ─────────
export function getTodayPortfolioItems(): PortfolioItem[] {
  const getCategoryFromFilename = (filename: string): { category: string; categoryLabel: string } => {
    const lower = filename.toLowerCase();
    if (lower.includes("foam")) {
      return { category: "foam-inserts", categoryLabel: "Foam Inserts" };
    }
    if (lower.includes("pallet") || lower.includes("box") || lower.includes("crate") || lower.includes("21_jpg")) {
      return { category: "shipping-crates", categoryLabel: "Shipping Crates" };
    }
    if (lower.includes("bag") || lower.includes("pouch")) {
      return { category: "custom-bags", categoryLabel: "Custom Bags" };
    }
    if (lower.includes("furniture") || lower.includes("sofa") || lower.includes("table")) {
      return { category: "furniture", categoryLabel: "Furniture" };
    }
    if (lower.includes("utility")) {
      return { category: "utility-covers", categoryLabel: "Utility Covers" };
    }
    if (lower.includes("mixer") || lower.includes("speaker") || lower.includes("keyboard") || lower.includes("rack") || lower.includes("cable") || lower.includes("whatsapp image")) {
      if (lower.includes("mixer") || lower.includes("speaker") || lower.includes("whatsapp image")) {
        return { category: "audio-equipment-cases", categoryLabel: "Audio Equipment Cases" };
      }
      if (lower.includes("keyboard")) {
        return { category: "flight-cases", categoryLabel: "Flight Cases" };
      }
      return { category: "flight-cases", categoryLabel: "Flight Cases" };
    }
    return { category: "projects", categoryLabel: "Projects" };
  };

  return scannedImages.map((img) => {
    const { category, categoryLabel } = getCategoryFromFilename(img.filename);
    const id = img.stem.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return {
      id,
      category,
      categoryLabel,
      large: img.url,
      thumb: img.url,
      type: "product",
      title: img.stem,
    };
  });
}

