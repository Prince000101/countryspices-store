import { NavLink } from "react-router-dom";
import { Mountain, LayoutDashboard, Package, ShoppingCart, Users, Tag, Star, X } from "lucide-react";

const links = [
  { to: "/admin/dashboard", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
  { to: "/admin/products", icon: <Package size={18} />, label: "Products" },
  { to: "/admin/orders", icon: <ShoppingCart size={18} />, label: "Orders" },
  { to: "/admin/users", icon: <Users size={18} />, label: "Users" },
  { to: "/admin/coupons", icon: <Tag size={18} />, label: "Coupons" },
  { to: "/admin/reviews", icon: <Star size={18} />, label: "Reviews" },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-charcoal border-r border-sand/20 dark:border-forest-light/20 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand/20 dark:border-forest-light/20">
          <div className="flex items-center gap-2.5">
            <Mountain className="text-forest dark:text-forest-light" size={22} strokeWidth={1.5} />
            <span className="text-lg font-fraunces font-semibold text-forest dark:text-cream">CountrySpices</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-earth dark:text-cream/60">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-dm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-forest/10 text-forest dark:bg-forest-light/20 dark:text-cream"
                    : "text-earth/70 dark:text-cream/50 hover:bg-sand/30 dark:hover:bg-charcoal-light"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-6 py-4 border-t border-sand/20 dark:border-forest-light/20">
          <p className="text-[10px] font-dm text-earth/30 dark:text-cream/20 text-center">
            CountrySpices Admin Panel
          </p>
        </div>
      </aside>
    </>
  );
}
