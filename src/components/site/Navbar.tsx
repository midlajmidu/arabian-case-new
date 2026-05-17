import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

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
          <WhatsAppButton label="WhatsApp" />
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
            <div className="pt-3">
              <WhatsAppButton className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}