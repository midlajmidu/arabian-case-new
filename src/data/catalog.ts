import flightCasesImg from "@/assets/hero-flight-cases.jpg";
import foamImg from "@/assets/hero-foam-inserts.jpg";
import cratesImg from "@/assets/hero-shipping-crates.jpg";
import bagsImg from "@/assets/hero-custom-bags.jpg";
import exhibitionImg from "@/assets/hero-exhibition.jpg";
import furnitureImg from "@/assets/hero-furniture-premium.jpg";

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  industries: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  imageAlt: string;
}

export interface Category {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  imageName: string;
  features: string[];
  applications: string[];
  industries: string[];
  faqs: { q: string; a: string }[];
  products: Product[];
}

const baseFaqs = (label: string, location = "UAE") => [
  {
    q: `Do you manufacture custom ${label.toLowerCase()} in the ${location}?`,
    a: `Yes. Every unit is designed and manufactured in-house in our Dubai facility to your exact specifications, application and brand requirements.`,
  },
  {
    q: `What is the typical lead time for ${label.toLowerCase()}?`,
    a: `Standard production runs are 1–3 weeks depending on size, finish and quantity. Express timelines are available for events and broadcast deadlines.`,
  },
  {
    q: `Do you deliver across the UAE?`,
    a: `Yes — we deliver across all seven emirates and offer on-site installation where required.`,
  },
  {
    q: `Can you brand the products with our logo?`,
    a: `Absolutely. We offer screen printing, laser etching, vinyl wraps and full custom finishes for corporate, broadcast and event branding.`,
  },
  {
    q: `What materials and certifications do you use?`,
    a: `We use premium birch plywood, Penn Elcom hardware, high-quality furniture wood, aluminium extrusion, ABS, industrial-grade polyethylene foam and ISPM-15 certified timber for export crates.`,
  },
  {
    q: `How do I request a quote?`,
    a: `Send your specifications, equipment dimensions or photos via our contact form or WhatsApp. You'll receive a detailed quotation within 24 hours.`,
  },
];

const mkProduct = (
  slug: string,
  title: string,
  tagline: string,
  description: string,
  features: string[],
  applications: string[],
  industries: string[],
  imageAlt: string,
): Product => ({
  slug,
  title,
  tagline,
  description,
  features,
  applications,
  industries,
  specs: [
    { label: "Construction", value: "9mm marine plywood + aluminium extrusion" },
    { label: "Hardware", value: "Heavy-duty butterfly latches & ball corners" },
    { label: "Foam Lining", value: "Polyethylene / PU custom-cut interior" },
    { label: "Finish", value: "ABS laminate, powder-coated steel" },
    { label: "Customisation", value: "Sizing, branding, colour, internal layout" },
    { label: "Origin", value: "Manufactured in Dubai, UAE" },
  ],
  faqs: baseFaqs(title),
  imageAlt,
});

export const categories: Category[] = [
  {
    slug: "flight-cases",
    title: "Flight Cases",
    short: "Flight Cases",
    tagline: "Custom Flight Cases Built for Protection",
    description:
      "Custom-manufactured flight cases, rack cases and audio equipment cases — built in our Dubai facility for professional equipment, broadcasting, events and touring use across the UAE.",
    image: flightCasesImg,
    imageAlt: "Premium custom flight cases manufactured in UAE",
    imageName: "flight-cases-uae",
    features: [
      "9mm reinforced plywood shell",
      "Aircraft-grade aluminium extrusion",
      "Heavy-duty butterfly latches",
      "Ball corners & recessed handles",
      "Custom foam interiors",
      "Brandable laminate finishes",
    ],
    applications: [
      "Broadcast & live events",
      "AV & sound equipment transport",
      "Aviation & military gear",
      "Medical & lab equipment",
      "Touring & exhibition",
    ],
    industries: ["Broadcasting", "Aviation", "Events", "Medical", "Oil & Gas"],
    faqs: baseFaqs("Flight Cases"),
    products: [
      mkProduct(
        "rack-cases",
        "Rack Cases",
        "19-inch shock-mounted rack cases for AV, broadcast and server gear",
        "Custom 19\" rack cases built with shock-mount frames, removable lids and full ventilation for professional audio, video, broadcast and IT equipment.",
        ["Shock-mount rack rails", "4U–24U capacity", "Removable front & rear lids", "Cable pass-through", "Ventilated panels"],
        ["Live audio touring", "Broadcast OB vans", "Server transport", "DJ booth"],
        ["Broadcasting", "Events", "Corporate"],
        "19-inch shock-mounted rack flight case",
      ),
      mkProduct(
        "cable-trunks",
        "Cable Trunks",
        "Heavy-duty cable trunks with wheels for tour & event logistics",
        "Robust trunks engineered for the storage and transport of cables, accessories and stage hardware between venues.",
        ["Heavy-duty castor wheels", "Reinforced lid", "Internal dividers", "Stackable design", "Drop-down handles"],
        ["Touring", "Stage rigging", "Exhibition logistics"],
        ["Events", "Broadcasting"],
        "Wheeled cable trunk flight case",
      ),
      mkProduct(
        "audio-equipment-cases",
        "Audio Equipment Cases",
        "Custom flight cases for mixers, speakers, keyboards, PA consoles, audio racks and line array systems.",
        "Custom-fit flight cases for audio mixers, PA speakers, line arrays and monitors — doghouse mixer lids, foam padding, recessed handles and reinforced corners for safe transport.",
        ["Mixer doghouse lids", "Speaker-specific fit", "Foam padding", "Recessed handles", "Stackable corners", "Optional wheels"],
        ["FOH mixing", "Concert touring", "Studio transport", "Event rental"],
        ["Events", "Broadcasting"],
        "Audio equipment flight case for mixers and speakers",
      ),
      mkProduct(
        "utility-covers",
        "Utility Covers",
        "Protective covers for machinery, generators and equipment",
        "Heavy-duty weatherproof utility covers tailored to your equipment — built from UV and dust resistant fabrics with reinforced stitching.",
        ["Weatherproof fabric", "Tailored fit", "Reinforced seams", "UV & dust resistant", "Branded panels"],
        ["Machinery", "Generators", "Outdoor equipment"],
        ["Construction", "Manufacturing", "Events"],
        "Custom utility cover for machinery",
      ),
      mkProduct(
        "tv-screen-cases",
        "TV / Screen Cases",
        "LED, LCD and OLED screen transport cases up to 98\"",
        "Padded screen cases with edge guards and locking lids — engineered to protect displays during exhibition, broadcast and corporate event logistics.",
        ["Custom screen size", "Edge guards", "Foam interior", "Twist locks", "Wheels for >55\""],
        ["Exhibition displays", "Digital signage", "Broadcast monitors"],
        ["Events", "Corporate", "Broadcasting"],
        "LED screen transport flight case",
      ),
      mkProduct(
        "dj-tables",
        "DJ Tables",
        "Foldable DJ booths and CDJ cases for clubs, events and tours",
        "Convertible DJ workstations — case opens into a fully branded DJ booth with cable management and laptop tray.",
        ["Fold-out booth", "Branded front panel", "Cable management", "Laptop tray", "Aluminium frame"],
        ["Nightclubs", "Festivals", "Mobile DJ"],
        ["Events"],
        "Foldable DJ table flight case",
      ),
    ],
  },
  {
    slug: "foam-inserts",
    title: "Foam Inserts",
    short: "Foam Inserts",
    tagline: "Custom Foam Inserts for Secure Transport",
    description:
      "Precision CNC and laser-cut foam inserts for cases, drawers and toolboxes — manufactured to your equipment dimensions for secure transport and tool control.",
    image: foamImg,
    imageAlt: "Custom CNC foam inserts UAE",
    imageName: "custom-foam-inserts-uae",
    features: [
      "CNC & laser cutting",
      "PE, PU & XLPE foams",
      "Two-tone shadow boards",
      "Anti-static foam options",
      "Up to 200mm depth",
      "5S compliant layouts",
    ],
    applications: ["Tool control", "Equipment cases", "Medical kits", "Drawer organisation"],
    industries: ["Aviation", "Oil & Gas", "Medical", "Defence", "Manufacturing"],
    faqs: baseFaqs("Foam Inserts"),
    products: [
      mkProduct("tool-control", "Tool Control", "Two-tone shadow board foam for 5S tool organisation",
        "Aviation-grade tool control foam with high-contrast base layer for instant tool inventory.",
        ["Two-tone construction", "Laser-engraved labels", "Anti-FOD design", "Drawer or wall mount"],
        ["MRO hangars", "Workshops", "Field service"],
        ["Aviation", "Oil & Gas", "Manufacturing"],
        "Two-tone tool control foam insert"),
      mkProduct("custom-foam-inserts", "Custom Foam Inserts", "Equipment-specific foam cavities for any case",
        "Send us your equipment dimensions or the gear itself — we'll design and cut a precision foam insert that holds it perfectly.",
        ["Equipment-specific fit", "Pluck or CNC", "Multi-layer cavities", "Branded labelling"],
        ["Camera kits", "Medical equipment", "Surveying gear"],
        ["Broadcasting", "Medical", "Aviation"],
        "Custom equipment foam insert"),
      mkProduct("foam-sheets", "Foam Sheets", "Polyethylene, PU and crosslinked foam sheets to size",
        "Bulk foam sheets in any density, colour and thickness — supplied cut-to-size for packaging, lining and protection.",
        ["PE, PU, XLPE, EVA", "Anti-static options", "Up to 2m wide", "Bonded laminations"],
        ["Packaging lines", "Case lining", "Insulation"],
        ["Manufacturing", "Logistics"],
        "Cut-to-size foam sheet"),
      mkProduct("foam-blocks", "Foam Blocks", "High-density foam blocks for heavy equipment protection",
        "Dense foam blocks for cradling heavy machinery, generators and shock-sensitive industrial equipment.",
        ["High density", "Custom block dimensions", "Vibration damping", "Load-bearing"],
        ["Heavy machinery", "Generators", "Industrial transport"],
        ["Oil & Gas", "Manufacturing", "Logistics"],
        "High-density foam block"),
    ],
  },
  {
    slug: "hard-cases",
    title: "Hard Cases",
    short: "Hard Cases",
    tagline: "Waterproof Hard Cases Built for the Field",
    description:
      "Pelican-style injection-moulded hard cases with custom foam — built for defence, medical and field-deployment use.",
    image: flightCasesImg,
    imageAlt: "Waterproof Pelican-style hard cases UAE",
    imageName: "hard-cases-uae",
    features: ["IP67 waterproof", "Crushproof shell", "Pressure equalisation valve", "Custom foam interiors", "Pad-lockable hasps", "Stackable"],
    applications: ["Defence", "Medical kits", "Camera & drone transport", "Field surveying"],
    industries: ["Aviation", "Defence", "Medical", "Broadcasting"],
    faqs: baseFaqs("Hard Cases"),
    products: [
      mkProduct("pelican-cases", "Pelican Cases", "IP67 waterproof Pelican-style cases with custom foam",
        "Authorised supply and full custom-foam fit-out of Pelican and Pelican-style protective cases for any equipment.",
        ["IP67 rated", "Custom CNC foam", "Pick-n-pluck option", "Branded lid plates"],
        ["Camera & lens kits", "Medical defibrillators", "Tactical gear"],
        ["Defence", "Medical", "Broadcasting"],
        "Pelican hard case with custom foam"),
    ],
  },
  {
    slug: "shipping-crates",
    title: "Shipping Crates",
    short: "Shipping Crates",
    tagline: "Premium Packaging & Shipping Crates",
    description:
      "ISPM-15 compliant wooden crates, pallets and custom boxes — manufactured in Dubai for safe road, sea and air freight.",
    image: cratesImg,
    imageAlt: "Heavy-duty wooden shipping crates Dubai",
    imageName: "shipping-crates-dubai",
    features: ["ISPM-15 certified", "Steel banding", "Heat-treated timber", "On-site crating", "Custom dimensions", "Export documentation"],
    applications: ["Sea freight", "Air freight", "Project cargo", "Oil & gas equipment"],
    industries: ["Logistics", "Oil & Gas", "Construction", "Manufacturing"],
    faqs: baseFaqs("Shipping Crates"),
    products: [
      mkProduct("heavy-duty-wooden-crates", "Heavy Duty Wooden Crates", "Reinforced export crates for oversized cargo",
        "Heavy-duty plywood and pine crates engineered for sea and air freight of industrial equipment.",
        ["ISPM-15 stamp", "Steel corner brackets", "Forklift skids", "Internal blocking & bracing"],
        ["Generator transport", "Oil & gas modules", "Industrial machinery"],
        ["Oil & Gas", "Logistics", "Construction"],
        "Heavy-duty wooden export crate"),
      mkProduct("custom-wooden-pallets", "Custom Wooden Pallets", "Bespoke pallets for any load size",
        "Custom-sized heat-treated wooden pallets — 4-way entry, reinforced stringers and any size required for your operation.",
        ["Heat-treated timber", "4-way forklift entry", "Custom dimensions", "Branded with your logo"],
        ["Warehousing", "Export shipping", "Production lines"],
        ["Logistics", "Manufacturing"],
        "Custom heat-treated wooden pallet"),
      mkProduct("custom-wooden-boxes", "Custom Wooden Boxes", "Bespoke wooden packaging for fragile or oversize items",
        "Tailored wooden boxes with internal foam or bracing for fragile, valuable or oversized shipments.",
        ["Custom inside dimensions", "Foam-lined option", "Lift-off or hinged lid", "Branded stencilling"],
        ["Art & antiques", "Equipment shipping", "Spare parts"],
        ["Logistics", "Manufacturing"],
        "Custom wooden shipping box"),
    ],
  },
  {
    slug: "custom-bags",
    title: "Custom Bags & Covers",
    short: "Custom Bags",
    tagline: "Custom Equipment Bags & Pouches",
    description:
      "Heavy-duty bags, dust covers and tool pouches manufactured from ballistic nylon and reinforced canvas — branded for your team.",
    image: bagsImg,
    imageAlt: "Custom equipment bags UAE",
    imageName: "custom-equipment-bags-uae",
    features: ["1680D ballistic nylon", "Reinforced stitching", "Brandable panels", "Padded interiors", "Heavy-duty zips", "Custom sizing"],
    applications: ["Equipment transport", "Tool carrying", "Medical response", "Belt-mounted tools"],
    industries: ["Medical", "Defence", "Oil & Gas", "Events"],
    faqs: baseFaqs("Custom Bags"),
    products: [
      mkProduct("equipment-bags", "Equipment Bags", "Padded transport bags for AV, sports & technical gear",
        "Custom-shaped padded bags built for safe transport of equipment that doesn't need a hard case.",
        ["Padded walls", "Custom dividers", "Heavy-duty handles", "Shoulder strap"],
        ["AV gear", "Sports equipment", "Technical kits"],
        ["Events", "Broadcasting"],
        "Padded equipment transport bag"),
      mkProduct("custom-covers", "Custom Covers", "Dust, weather and transport covers for machinery",
        "Tailored protective covers for generators, machinery and exhibition assets — indoor or outdoor grade.",
        ["Weatherproof fabric", "Tailored fit", "Velcro or zip closure", "Branded panels"],
        ["Machinery", "Generators", "Outdoor displays"],
        ["Oil & Gas", "Construction", "Events"],
        "Custom weatherproof equipment cover"),
      mkProduct("belt-pouches", "Belt Pouches", "Belt-mounted tool and accessory pouches",
        "Field-grade belt pouches for technicians, engineers and field service teams.",
        ["Reinforced belt loop", "Multiple pockets", "MOLLE option", "Branded"],
        ["Field service", "Technicians", "Security teams"],
        ["Oil & Gas", "Defence"],
        "Heavy-duty belt-mounted tool pouch"),
      mkProduct("medical-bags", "Medical Bags", "Emergency response and clinical equipment bags",
        "Compartmentalised medical bags with custom inserts for first response, paramedic and clinical use.",
        ["Modular dividers", "Wipe-clean lining", "ID windows", "Reflective panels"],
        ["First response", "Paramedics", "Clinics"],
        ["Medical"],
        "Modular medical response bag"),
    ],
  },
  {
    slug: "exhibition",
    title: "Exhibition Stands",
    short: "Exhibition",
    tagline: "Custom Exhibition Stands & Event Builds",
    description:
      "Shell scheme upgrades, custom-built exhibition stands, outdoor kiosks and event photo ops engineered for the UAE event circuit.",
    image: exhibitionImg,
    imageAlt: "Premium exhibition stand builders UAE",
    imageName: "exhibition-stands-uae",
    features: ["Custom design & build", "Backlit branding", "Modular reusable systems", "On-site installation", "Lighting & AV integration", "Storage & breakdown"],
    applications: ["Trade shows", "Brand activations", "Outdoor events", "Pop-up retail"],
    industries: ["Events", "Corporate", "Retail"],
    faqs: baseFaqs("Exhibition Stands"),
    products: [
      mkProduct("shell-scheme-stand", "Shell Scheme Stand", "Branded shell scheme upgrades for trade fairs",
        "Quick-turnaround branded shell scheme upgrades — flooring, walls, lighting and graphics installed before showtime.",
        ["Printed wall graphics", "Vinyl flooring", "Branded fascia", "Furniture pack"],
        ["GITEX", "Arab Health", "ADIPEC"],
        ["Events", "Corporate"],
        "Branded shell scheme exhibition stand"),
      mkProduct("premium-exhibition-stand", "Premium Exhibition Stand", "Bespoke custom-built exhibition stands",
        "Fully custom-designed exhibition stands with backlit branding, meeting areas and integrated AV.",
        ["Custom 3D design", "Backlit lightboxes", "Meeting rooms", "AV & screens", "Storage rooms"],
        ["Flagship trade shows", "Product launches"],
        ["Events", "Corporate"],
        "Premium custom-built exhibition stand"),
      mkProduct("outdoor-kiosk", "Outdoor Kiosk", "Weatherproof outdoor kiosks and pop-up booths",
        "Outdoor-rated kiosks for mall activations, festivals and brand promotions.",
        ["Weatherproof shell", "Lighting", "Counter & storage", "Lockable"],
        ["Mall activations", "Festivals", "Sampling campaigns"],
        ["Events", "Retail"],
        "Outdoor branded kiosk"),
      mkProduct("event-photo-ops", "Event Photo Ops", "Branded photo walls, step & repeat backdrops",
        "Photo backdrops, 3D letters and selfie installations for events, weddings and brand activations.",
        ["Step & repeat", "3D logo letters", "Selfie installations", "Backlit options"],
        ["Red carpets", "Weddings", "Activations"],
        ["Events"],
        "Branded event photo backdrop"),
    ],
  },
  {
    slug: "furniture",
    title: "Furniture",
    short: "Furniture",
    tagline: "Custom Furniture Fabrication",
    description:
      "Bespoke furniture fabrication for offices, schools, hotels and homes — designed, manufactured and installed across the UAE.",
    image: furnitureImg,
    imageAlt: "Custom office furniture Dubai UAE",
    imageName: "office-furniture-dubai",
    features: ["Bespoke design", "Solid wood & veneer", "Powder-coated steel", "Upholstery in-house", "On-site installation", "Volume pricing"],
    applications: ["Corporate offices", "Schools & universities", "Hotels", "Retail fit-out", "Residential"],
    industries: ["Corporate", "Education", "Hospitality", "Retail"],
    faqs: baseFaqs("Furniture"),
    products: [
      mkProduct("sofa-makers", "Sofa Makers", "Custom-upholstered sofas for offices, lounges and homes",
        "In-house upholstery and custom-built sofas — your fabric, your dimensions, your design.",
        ["Custom dimensions", "Premium foam fill", "Choice of fabrics & leather", "Hardwood frame"],
        ["Office lounges", "Hotel lobbies", "Residential"],
        ["Corporate", "Hospitality"],
        "Custom-upholstered sofa"),
      mkProduct("wooden-tables", "Wooden Tables", "Solid wood meeting, dining and conference tables",
        "Hand-finished solid wood tables for boardrooms, dining and hospitality use.",
        ["Solid wood top", "Steel or wood base", "Cable management", "Up to 6m length"],
        ["Boardrooms", "Restaurants", "Banquet halls"],
        ["Corporate", "Hospitality"],
        "Solid wood conference table"),
      mkProduct("office-furniture", "Office Furniture", "Executive desks, workstations and storage",
        "Complete office furniture packages — executive desks, open-plan workstations, storage and meeting room furniture.",
        ["Executive desks", "Workstations", "Storage cabinets", "Meeting tables"],
        ["Corporate HQ", "Co-working", "Government"],
        ["Corporate"],
        "Executive office furniture set"),
      mkProduct("school-furniture", "School Furniture", "Durable desks, chairs and storage for classrooms",
        "Hard-wearing school and university furniture engineered for daily use and easy maintenance.",
        ["Student desks", "Stackable chairs", "Teacher desks", "Storage lockers"],
        ["Schools", "Universities", "Training centres"],
        ["Education"],
        "Durable school classroom furniture"),
      mkProduct("premium-furniture", "Premium Furniture", "High-end custom furniture for hospitality & residential",
        "Bespoke premium furniture for hotels, villas and flagship retail — designed alongside your interior designer.",
        ["Designer-led builds", "Premium materials", "Veneer, marble, brass", "White-glove install"],
        ["Five-star hotels", "Villas", "Flagship retail"],
        ["Hospitality", "Retail"],
        "Premium bespoke furniture piece"),
      mkProduct("custom-display-units", "Custom Display Units", "Retail display, shelving and merchandising units",
        "POP and retail display units that elevate brands in malls, showrooms and pop-ups.",
        ["Retail-grade finish", "Modular shelving", "Integrated lighting", "Branded panels"],
        ["Mall retail", "Showrooms", "Pop-ups"],
        ["Retail"],
        "Custom retail display unit"),
    ],
  },
];

export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);
export const getProduct = (
  catSlug: string,
  prodSlug: string,
): { category: Category; product: Product } | undefined => {
  const cat = getCategory(catSlug);
  if (!cat) return undefined;
  const product = cat.products.find((p) => p.slug === prodSlug);
  if (!product) return undefined;
  return { category: cat, product };
};