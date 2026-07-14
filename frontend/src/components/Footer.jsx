import { Link } from "react-router-dom";
import { Mountain, Mail, Globe, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-moss text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 lg:px-24 py-14 sm:py-20">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-6 flex items-center gap-2.5">
              <Mountain className="text-leaf-gold" size={22} strokeWidth={1.5} />
              <span className="text-xl sm:text-2xl font-serif font-semibold text-cream">
                CountrySpices
              </span>
            </div>
            <p className="text-sm font-dm leading-relaxed text-cream/50 max-w-xs">
              Organic spices from the hills of Meghalaya. Sun-dried, chemical-free, and sourced directly from tribal farmers since 2005.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-4">
              <a href="#" className="text-cream/30 hover:text-leaf-gold transition-colors">
                <Globe size={18} />
              </a>
              <a href="mailto:prince@creatordev.in" className="text-cream/30 hover:text-leaf-gold transition-colors">
                <Mail size={18} />
              </a>
              <span className="text-cream/30 hover:text-leaf-gold transition-colors cursor-default">
                <MapPin size={18} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] text-leaf-gold font-dm font-medium">
              Explore
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { name: "Shop", path: "/products" },
                { name: "Our Story", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-dm text-cream/60 hover:text-cream transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] text-leaf-gold font-dm font-medium">
              Categories
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Whole Spices", "Ground Masalas", "Herbal Teas", "Value Packs"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-xs sm:text-sm font-dm text-cream/60 hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] text-leaf-gold font-dm font-medium">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-dm text-cream/60">
                Laitumkhrah, Shillong<br />
                Meghalaya 793003, India
              </p>
              <p className="text-xs sm:text-sm font-dm text-cream/60">
                prince@creatordev.in
              </p>
              <p className="text-xs sm:text-sm font-dm text-cream/60">
                Mon - Sat: 9AM - 6PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs font-dm text-cream/30">
            &copy; 2026 CountrySpices. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-dm text-cream/30 uppercase tracking-widest">
            <span>Est. 2005</span>
            <span className="w-1 h-1 rounded-full bg-leaf-gold/40" />
            <span>Organic</span>
            <span className="w-1 h-1 rounded-full bg-leaf-gold/40" />
            <span>Sun-Dried</span>
          </div>
          <p className="text-[10px] sm:text-xs font-dm text-cream/20">
            Crafted with &#10084; by <span className="text-leaf-gold/60 font-semibold">Prince | Creator Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
