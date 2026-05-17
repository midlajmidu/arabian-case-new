export const SITE = {
  name: "Arabian Cases & Furniture",
  shortName: "Arabian Cases",
  tagline: "Premium Industrial Manufacturing in the UAE",
  description:
    "Custom flight cases, foam inserts, shipping crates, bags, exhibition stands and furniture, manufactured in the UAE for broadcasting, events, aviation, oil & gas and corporate clients.",
  phone: "+971 50 000 0000",
  whatsapp: "971500000000",
  email: "info@arabiancases.ae",
  address: {
    street: "Industrial Area 1",
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    postal: "00000",
  },
};

export const waLink = (msg = "Hello, I'd like a quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;