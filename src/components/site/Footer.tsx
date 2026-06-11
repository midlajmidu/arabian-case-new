import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.webp";
import { SITE } from "@/lib/site";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/90">
      <div className="container-page py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <img src={logo} alt={SITE.name} className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{SITE.description}</p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/arabiancases/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-base mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-white/70 hover:text-white">About Us</Link></li>
            <li><Link to="/portfolio" className="text-white/70 hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
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
          <h3 className="font-display text-base mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-gold" />{SITE.address.street}, {SITE.address.city}, {SITE.address.country}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-gold" /><a href={`tel:${SITE.phoneIntl}`} className="hover:text-white">{SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-gold" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-white/50 flex flex-wrap justify-between gap-4">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}