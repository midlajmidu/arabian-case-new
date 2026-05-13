import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-furniture.jpg";
import { ArrowRight, Sofa, Home as HomeIcon, Factory, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arabian Cases & Furniture — Premium Custom Interiors UAE" },
      { name: "description", content: "Premium cases and custom furniture solutions crafted in the UAE. Bespoke interiors, modern manufacturing, Gulf quality standards." },
      { property: "og:title", content: "Arabian Cases & Furniture" },
      { property: "og:description", content: "Premium cases and custom furniture solutions crafted in the UAE." },
    ],
  }),
  component: Index,
});

function Index() {
  const navItems = ["Home", "Products", "Portfolio", "About", "Contact"];
  const stats = [
    { icon: Sofa, label: "Custom Furniture" },
    { icon: HomeIcon, label: "Interior Solutions" },
    { icon: Factory, label: "Modern Manufacturing" },
    { icon: BadgeCheck, label: "UAE Quality Standards" },
  ];
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white flex flex-col">
      {/* Floating background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-brand-navy/5 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-brand-gray/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-navy/5 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 px-6 lg:px-16 py-5 flex items-center justify-between">
        <img src={logo} alt="Arabian Cases & Furniture" className="h-20 w-auto" />
        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`text-sm tracking-wide transition-colors duration-300 hover:text-brand-navy relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-navy after:transition-all after:duration-300 hover:after:w-full ${
                i === 0 ? "text-brand-navy font-medium" : "text-brand-dark-gray"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
          Get Quote <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex-1 px-6 lg:px-16 grid lg:grid-cols-2 gap-10 items-center min-h-0">
        <div className="space-y-7 animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-dark-gray">
            <span className="h-px w-8 bg-brand-navy" /> Crafted in the UAE
          </span>
          <h1 className="font-display text-5xl xl:text-6xl leading-[1.05] text-brand-navy">
            Premium Cases &<br />
            <span className="italic font-medium">Custom Furniture</span> Solutions
          </h1>
          <p className="text-base text-brand-dark-gray max-w-lg leading-relaxed">
            Bespoke craftsmanship meets modern design. We deliver tailored interiors,
            custom cabinetry, and refined furniture for distinguished spaces across the Gulf.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="group inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-7 py-3.5 text-sm font-medium shadow-lg shadow-brand-navy/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-navy/30 text-brand-navy px-7 py-3.5 text-sm font-medium hover:bg-brand-navy hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative h-full max-h-[68vh] hidden lg:block animate-in fade-in slide-in-from-right-4 duration-700">
          <div className="absolute inset-6 rounded-[2rem] bg-brand-navy/10" />
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-navy/20 -translate-y-2 translate-x-2">
            <img src={hero} alt="Premium custom furniture interior" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 via-transparent to-transparent" />
          </div>
          {/* Floating glass card */}
          <div className="absolute bottom-6 left-0 backdrop-blur-md bg-white/70 border border-white/60 rounded-2xl px-5 py-4 shadow-xl shadow-brand-navy/10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-dark-gray">New Studio</p>
            <p className="font-display text-2xl text-brand-navy">Just Launched</p>
            <p className="text-xs text-brand-dark-gray">crafting bespoke interiors</p>
          </div>
        </div>
      </main>

      {/* Stats row */}
      <footer className="relative z-10 px-6 lg:px-16 pb-6 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-brand-gray/30 bg-white/60 backdrop-blur-sm px-6 py-4 shadow-sm">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-brand-dark-gray">{label}</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
