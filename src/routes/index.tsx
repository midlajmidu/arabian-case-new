import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero-flightcase.jpg";
import { ArrowRight, Package, Layers, Truck, Briefcase, LayoutPanelTop, Sofa, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arabian Cases & Furniture — Premium Flight Cases & Industrial Solutions UAE" },
      { name: "description", content: "Specialized in flight cases, foam inserts, shipping crates, custom bags, exhibition solutions and furniture manufacturing across the UAE." },
      { property: "og:title", content: "Arabian Cases & Furniture" },
      { property: "og:description", content: "Premium flight cases & custom industrial manufacturing in the UAE." },
    ],
  }),
  component: Index,
});

function Index() {
  const navItems = ["Home", "Products", "Portfolio", "About", "Contact"];
  const services = [
    { icon: Package, label: "Flight Cases" },
    { icon: Layers, label: "Foam Inserts" },
    { icon: Truck, label: "Shipping Crates" },
    { icon: Briefcase, label: "Custom Bags" },
    { icon: LayoutPanelTop, label: "Exhibition" },
    { icon: Sofa, label: "Furniture" },
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
      <header className="relative z-10 px-6 lg:px-16 py-4 flex items-center justify-between">
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
        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-brand-navy">
            <ShieldCheck className="h-3.5 w-3.5" /> Custom Manufacturing • UAE Quality Standards
          </span>
          <h1 className="font-display text-5xl xl:text-6xl leading-[1.05] text-brand-navy">
            Premium Flight Cases &<br />
            <span className="italic font-medium">Custom Industrial</span> Solutions
          </h1>
          <p className="text-base text-brand-dark-gray max-w-lg leading-relaxed">
            Specialized in high-quality flight cases, foam inserts, shipping crates, custom bags,
            exhibition solutions and furniture manufacturing for modern businesses across the UAE.
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <button className="group inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-7 py-3.5 text-sm font-medium shadow-lg shadow-brand-navy/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              View Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-navy/30 text-brand-navy px-7 py-3.5 text-sm font-medium hover:bg-brand-navy hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative h-full max-h-[64vh] hidden lg:block animate-in fade-in slide-in-from-right-4 duration-700">
          <div className="absolute inset-6 rounded-[2rem] bg-brand-navy/10" />
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-navy/30 -translate-y-2 translate-x-2">
            <img src={hero} alt="Premium flight case manufacturing" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 via-transparent to-transparent" />
          </div>
          {/* Floating supporting visuals */}
          <div className="absolute -top-3 -left-3 backdrop-blur-md bg-white/85 border border-white/70 rounded-2xl px-4 py-3 shadow-xl shadow-brand-navy/10 flex items-center gap-2.5 hover:-translate-y-0.5 transition">
            <div className="h-9 w-9 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center"><Layers className="h-4 w-4" /></div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-brand-dark-gray">Precision</p>
              <p className="text-xs font-medium text-brand-navy">Foam Inserts</p>
            </div>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 backdrop-blur-md bg-white/85 border border-white/70 rounded-2xl px-4 py-3 shadow-xl shadow-brand-navy/10 flex items-center gap-2.5 hover:-translate-y-0.5 transition">
            <div className="h-9 w-9 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center"><Truck className="h-4 w-4" /></div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-brand-dark-gray">Export Ready</p>
              <p className="text-xs font-medium text-brand-navy">Shipping Crates</p>
            </div>
          </div>
          <div className="absolute bottom-2 left-2 backdrop-blur-md bg-white/85 border border-white/70 rounded-2xl px-4 py-3 shadow-xl shadow-brand-navy/10 flex items-center gap-2.5 hover:-translate-y-0.5 transition">
            <div className="h-9 w-9 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center"><LayoutPanelTop className="h-4 w-4" /></div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-brand-dark-gray">Brand Stage</p>
              <p className="text-xs font-medium text-brand-navy">Exhibition</p>
            </div>
          </div>
        </div>
      </main>

      {/* Services row */}
      <footer className="relative z-10 px-6 lg:px-16 pb-5 pt-3">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 rounded-2xl border border-brand-gray/30 bg-white/60 backdrop-blur-sm px-4 py-3 shadow-sm">
          {services.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center gap-1.5 px-2 py-1.5 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white group-hover:-translate-y-0.5">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-brand-dark-gray text-center">{label}</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
