import flightCasesImg from "@/assets/hero-flight-cases.webp";
import foamImg from "@/assets/hero-foam-inserts.webp";
import cratesImg from "@/assets/hero-shipping-crates.webp";
import bagsImg from "@/assets/hero-custom-bags.webp";
import exhibitionImg from "@/assets/hero-exhibition.webp";
import furnitureImg from "@/assets/hero-furniture-premium.png";
import hardCasesImg from "@/assets/hero-hard-cases.png";

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
      "Our custom flight cases are engineered to provide maximum protection for valuable equipment during transportation, storage, and daily operations. Manufactured in the UAE using premium materials, our flight cases are designed for durability, precision, and long service life across demanding industries including audio-visual, military, medical, industrial, and broadcasting.",
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
        "Secure rack flight cases for servers, amplifiers, networking and communication systems",
        "Our rack flight cases provide secure transportation and storage for servers, amplifiers, communication systems, networking equipment, and electronic devices. Available in multiple rack sizes with shock-mounted options for maximum equipment protection.",
        ["Shock-mount rack rails", "4U–24U capacity", "Removable front & rear lids", "Cable pass-through", "Ventilated panels"],
        ["Live audio touring", "Broadcast OB vans", "Server transport", "DJ booth"],
        ["Broadcasting", "Events", "Corporate"],
        "19-inch shock-mounted rack flight case",
      ),
      mkProduct(
        "cable-trunks",
        "Cable Trunks",
        "Heavy-duty cable trunks for power cables, lighting cables and accessories",
        "Heavy-duty cable trunks are designed for storing and transporting power cables, lighting cables, extension reels, and accessories. Built with reinforced construction and heavy-duty castors for easy mobility.",
        ["Heavy-duty castor wheels", "Reinforced lid", "Internal dividers", "Stackable design", "Drop-down handles"],
        ["Touring", "Stage rigging", "Exhibition logistics"],
        ["Events", "Broadcasting"],
        "Wheeled cable trunk flight case",
      ),
      mkProduct(
        "audio-equipment-cases",
        "Audio Equipment Flight Cases",
        "Custom flight cases for mixers, amplifiers, microphones, speakers, wireless systems and professional sound equipment",
        "Protect expensive audio equipment with custom-built flight cases designed for mixers, amplifiers, microphones, speakers, wireless systems, and professional sound equipment.",
        ["Mixer doghouse lids", "Speaker-specific fit", "Foam padding", "Recessed handles", "Stackable corners", "Optional wheels"],
        ["FOH mixing", "Concert touring", "Studio transport", "Event rental"],
        ["Events", "Broadcasting"],
        "Audio equipment flight case for mixers and speakers",
      ),
      mkProduct(
        "utility-flight-cases",
        "Utility Flight Cases",
        "Versatile flight cases for tools, instruments, and industrial equipment transport",
        "Versatile utility flight cases ideal for transporting tools, industrial equipment, instruments, exhibition materials, and sensitive devices. Custom sizes and foam interiors are available for any application.",
        ["Custom sizes available", "CNC-cut foam interiors", "Heavy-duty butterfly latches", "Ball corners & recessed handles", "Brandable laminate finish", "Stackable design"],
        ["Tool transport", "Industrial equipment", "Instruments & surveying gear", "Exhibition materials", "Sensitive devices"],
        ["Manufacturing", "Construction", "Oil & Gas", "Events"],
        "Utility flight case for tools and industrial equipment",
      ),
      mkProduct(
        "tv-screen-cases",
        "TV / Screen Flight Cases",
        "Flight cases for LED screens, LCD displays, monitors, touch panels and digital signage",
        "Our TV and display flight cases are designed to protect LED screens, LCD displays, monitors, touch panels, and digital signage during transport. Custom foam interiors ensure maximum protection against impact.",
        ["Custom screen size", "Edge guards", "Foam interior", "Twist locks", "Wheels for >55\""],
        ["Exhibition displays", "Digital signage", "Broadcast monitors"],
        ["Events", "Corporate", "Broadcasting"],
        "LED screen transport flight case",
      ),
      mkProduct(
        "dj-tables",
        "DJ Tables & Flight Cases",
        "Professional DJ workstation flight cases with integrated tables and cable management",
        "Professional DJ workstation flight cases combine protection with functionality, featuring integrated tables, cable management, and storage for mixers, controllers, and accessories.",
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
      "Our custom foam solutions provide precision protection for tools, instruments, electronics, medical devices, and sensitive equipment. Using CNC cutting technology, we manufacture high-quality foam inserts tailored to your exact requirements.",
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
      mkProduct("tool-control", "Tool Control Foam", "Custom tool control foam for 5S workplace management systems",
        "Increase workplace efficiency with custom tool control foam designed to organize and protect tools while supporting 5S workplace management systems.",
        ["Two-tone construction", "Laser-engraved labels", "Anti-FOD design", "Drawer or wall mount"],
        ["MRO hangars", "Workshops", "Field service"],
        ["Aviation", "Oil & Gas", "Manufacturing"],
        "Two-tone tool control foam insert"),
      mkProduct("custom-foam-inserts", "Custom Foam Inserts", "Precision CNC-cut foam inserts for any equipment",
        "Precision CNC-cut foam inserts are manufactured to fit any equipment, providing superior shock absorption and professional presentation.",
        ["Equipment-specific fit", "Pluck or CNC", "Multi-layer cavities", "Branded labelling"],
        ["Camera kits", "Medical equipment", "Surveying gear"],
        ["Broadcasting", "Medical", "Aviation"],
        "Custom equipment foam insert"),
      mkProduct("foam-sheets", "Foam Sheets", "High-quality foam sheets in various densities, colours and thicknesses",
        "We supply high-quality foam sheets in various densities, colours, and thicknesses suitable for packaging, insulation, cushioning, and manufacturing applications.",
        ["PE, PU, XLPE, EVA", "Anti-static options", "Up to 2m wide", "Bonded laminations"],
        ["Packaging lines", "Case lining", "Insulation"],
        ["Manufacturing", "Logistics"],
        "Cut-to-size foam sheet"),
      mkProduct("foam-blocks", "Foam Blocks", "Foam blocks for industrial machining, packaging and custom fabrication",
        "Foam blocks are available for industrial machining, packaging, manufacturing, and custom fabrication projects in multiple sizes and densities.",
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
      "Our hard protective cases provide exceptional impact, dust, and water resistance for transporting valuable equipment in harsh environments.",
    image: hardCasesImg,
    imageAlt: "Waterproof Pelican-style hard cases UAE",
    imageName: "hard-cases-uae",
    features: ["IP67 waterproof", "Crushproof shell", "Pressure equalisation valve", "Custom foam interiors", "Pad-lockable hasps", "Stackable"],
    applications: ["Defence", "Medical kits", "Camera & drone transport", "Field surveying"],
    industries: ["Aviation", "Defence", "Medical", "Broadcasting"],
    faqs: baseFaqs("Hard Cases"),
    products: [
      mkProduct("pelican-cases", "Pelican Cases", "Genuine Pelican™ Cases with lifetime durability and custom foam inserts",
        "We supply genuine Pelican™ Cases, renowned worldwide for their rugged construction, waterproof performance, and lifetime durability. Custom foam inserts can be manufactured to fit your equipment perfectly.",
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
      "Our reusable shipping crates are designed to protect heavy and sensitive equipment during domestic and international transportation. Built for strength and repeated use, they are ideal for industrial, military, aviation, and export applications.",
    image: cratesImg,
    imageAlt: "Heavy-duty wooden shipping crates Dubai",
    imageName: "shipping-crates-dubai",
    features: ["ISPM-15 certified", "Steel banding", "Heat-treated timber", "On-site crating", "Custom dimensions", "Export documentation"],
    applications: ["Sea freight", "Air freight", "Project cargo", "Oil & gas equipment"],
    industries: ["Logistics", "Oil & Gas", "Construction", "Manufacturing"],
    faqs: baseFaqs("Shipping Crates"),
    products: [
      mkProduct("heavy-duty-wooden-crates", "Heavy-Duty Reusable Shipping Crates", "Custom-built heavy-duty crates for repeated transportation of machinery and equipment",
        "Custom-built heavy-duty shipping crates are manufactured from durable materials for repeated transportation of machinery, equipment, and valuable assets.",
        ["ISPM-15 stamp", "Steel corner brackets", "Forklift skids", "Internal blocking & bracing"],
        ["Generator transport", "Oil & gas modules", "Industrial machinery"],
        ["Oil & Gas", "Logistics", "Construction"],
        "Heavy-duty wooden export crate"),
      mkProduct("custom-wooden-pallets", "Wooden Pallets", "High-quality wooden pallets in standard and custom sizes for warehousing, export and logistics",
        "We manufacture high-quality wooden pallets in standard and custom sizes suitable for warehousing, export, logistics, and industrial handling.",
        ["Heat-treated timber", "4-way forklift entry", "Custom dimensions", "Branded with your logo"],
        ["Warehousing", "Export shipping", "Production lines"],
        ["Logistics", "Manufacturing"],
        "Custom heat-treated wooden pallet"),
      mkProduct("custom-wooden-boxes", "Wooden Boxes", "Custom wooden boxes for machinery, equipment and export shipments",
        "Custom wooden boxes provide reliable protection for machinery, equipment, and export shipments. Manufactured to international shipping requirements.",
        ["Custom inside dimensions", "Foam-lined option", "Lift-off or hinged lid", "Branded stencilling"],
        ["Art & antiques", "Equipment shipping", "Spare parts"],
        ["Logistics", "Manufacturing"],
        "Custom wooden shipping box"),
    ],
  },
  {
    slug: "custom-bags",
    title: "Custom Bags",
    short: "Custom Bags",
    tagline: "Premium Custom Bags for Industrial, Commercial & Promotional Use",
    description:
      "We design and manufacture premium custom bags for industrial, commercial, medical, and promotional applications using durable, high-quality materials.",
    image: bagsImg,
    imageAlt: "Custom equipment bags UAE",
    imageName: "custom-equipment-bags-uae",
    features: ["1680D ballistic nylon", "Reinforced stitching", "Brandable panels", "Padded interiors", "Heavy-duty zips", "Custom sizing"],
    applications: ["Equipment transport", "Tool carrying", "Medical response", "Belt-mounted tools"],
    industries: ["Medical", "Defence", "Oil & Gas", "Events"],
    faqs: baseFaqs("Custom Bags"),
    products: [
      mkProduct("industrial-tool-bags", "Industrial Equipment & Tool Bags", "Heavy-duty bags for technicians, engineers and field professionals",
        "Heavy-duty industrial bags designed for technicians, engineers, and professionals requiring reliable storage and transport for tools and equipment. Built from durable materials with reinforced stitching and multiple compartments.",
        ["Heavy-duty fabric construction", "Multiple tool pockets", "Reinforced base", "Carry handles & shoulder strap", "Brandable panels", "Custom sizing"],
        ["Field technicians", "Engineers", "Workshop professionals", "Maintenance teams"],
        ["Oil & Gas", "Manufacturing", "Defence", "Events"],
        "Heavy-duty industrial tool bag for technicians"),
      mkProduct("hot-cool-bags", "Hot & Cool Bags", "Insulated bags for food delivery, catering and medical transport",
        "Insulated hot and cool bags that maintain temperature for food delivery, catering, pharmaceuticals, and medical transportation. Manufactured from high-quality thermal materials with durable outer shells.",
        ["Thermal insulation lining", "Temperature retention", "Food-safe interior", "Heavy-duty zips", "Custom branding", "Multiple size options"],
        ["Food delivery", "Catering services", "Pharmaceutical transport", "Medical temperature-sensitive items"],
        ["Medical", "Logistics", "Events"],
        "Insulated hot and cool delivery bag"),
      mkProduct("laptop-backpack-travel-bags", "Laptop Bags, Backpacks & Travel Bags", "Custom corporate laptop bags, backpacks and travel bags",
        "Our custom laptop bags, backpacks, and travel bags combine durability, comfort, and modern design, making them suitable for corporate branding, business travel, and everyday use. Available with custom logos and colour options.",
        ["Padded laptop compartment", "Ergonomic design", "Multiple pockets", "Custom branding", "Premium zips", "Luggage strap"],
        ["Corporate gifting", "Business travel", "Daily commuting", "Promotional campaigns"],
        ["Corporate", "Events"],
        "Custom corporate laptop bag and backpack"),
      mkProduct("eco-friendly-bags", "Eco-Friendly Bags", "Sustainable reusable bags for environmentally responsible businesses",
        "We manufacture sustainable eco-friendly bags using recyclable and reusable materials to support environmentally responsible businesses and promotional campaigns. Available in a range of sizes, colours, and custom prints.",
        ["Recyclable materials", "Reusable construction", "Custom branding & print", "Durable stitching", "Multiple size options", "Eco-certified materials"],
        ["Retail promotions", "Corporate sustainability campaigns", "Grocery & shopping", "Event giveaways"],
        ["Corporate", "Events", "Retail"],
        "Eco-friendly reusable promotional bag"),
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