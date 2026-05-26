import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur-md">
      <div className="container-page flex h-[90px] items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Arabian Cases & Furniture home">
          <img src={logo} alt="Arabian Cases & Furniture" className="h-16 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-brand-navy font-semibold" }}
              inactiveProps={{ className: "text-brand-dark-gray" }}
              className="text-sm tracking-wide transition-colors hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-navy/15 transition hover:bg-brand-navy-hover hover:scale-[1.03] hover:shadow-lg"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-brand-navy"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-brand-dark-gray hover:text-brand-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}