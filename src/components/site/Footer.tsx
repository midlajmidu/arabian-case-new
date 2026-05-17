import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/90">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt={SITE.name} className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">{SITE.description}</p>
        </div>
        <div>
          <h3 className="font-display text-lg mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="text-white/70 hover:text-white transition"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-white/70 hover:text-white">About Us</Link></li>
            <li><Link to="/portfolio" className="text-white/70 hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
            <li><Link to="/privacy-policy" className="text-white/70 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="text-white/70 hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{SITE.address.street}, {SITE.address.city}, {SITE.address.country}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Manufactured in the United Arab Emirates.</p>
        </div>
      </div>
    </footer>
  );
}