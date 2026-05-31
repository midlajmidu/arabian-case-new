export const SITE = {
  name: "Arabian Cases & Furniture",
  shortName: "Arabian Cases",
  tagline: "Dubai Manufacturer of Custom Cases, Covers, Packaging & Furniture",
  description:
    "Dubai-based manufacturer of custom flight cases, rack cases, mixer & speaker cases, utility covers, foam inserts, shipping crates, custom bags, industrial packaging and bespoke furniture — built in-house for businesses across the UAE.",
  phone: "0585822700",
  phoneIntl: "+971585822700",
  whatsapp: "971585822700",
  email: "sales@arabiancases.com",
  address: {
    street: "26th A Street, Umm Ramool",
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    postal: "",
  },
};

export const waLink = (msg = "Hello, I'd like a quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;