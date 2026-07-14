import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Mountain, ShoppingCart, Heart, LogOut, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hook/CartHook";
import useWishlistHook from "../hook/WishlistHook";
import useAuth from "../hook/AuthContextHook";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Journal", path: "/journal" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart = [] } = useCart() || {};
  const { wishlist: WishlistItems = [] } = useWishlistHook();
  const { user, logout } = useAuth() || {};
  const cartCount = cart.length;
  const WishlistCount = WishlistItems.length;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-forest/95 dark:bg-charcoal/95 border-b border-leaf-gold/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Mountain className="text-leaf-gold" size={28} strokeWidth={1.5} />
          </motion.div>
          <span className="text-2xl font-serif font-semibold text-cream tracking-tight">
            CountrySpices
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-dm font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-leaf-gold"
                      : "text-cream/70 hover:text-cream"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}

          {user ? (
            <>
              {user.isAdmin && (
                <motion.div whileHover={{ y: -2 }}>
                  <NavLink
                    to="/admin"
                    className="flex items-center gap-1.5 text-sm font-dm font-medium text-leaf-gold hover:text-leaf-gold transition-colors"
                  >
                    <Shield size={14} /> Admin
                  </NavLink>
                </motion.div>
              )}
              <motion.button
                whileHover={{ y: -2 }}
                onClick={logout}
                className="text-sm font-dm font-medium text-cream/60 hover:text-terracotta transition-colors"
              >
                Logout
              </motion.button>
            </>
          ) : (
            <motion.div whileHover={{ y: -2 }}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-sm font-dm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-leaf-gold" : "text-cream/70 hover:text-cream"
                  }`
                }
              >
                Login
              </NavLink>
            </motion.div>
          )}
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <Link to="/Wishlist" className="relative">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Heart className="text-cream" size={20} strokeWidth={1.5} />
              {WishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta text-cream text-[9px] font-dm font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {WishlistCount}
                </span>
              )}
            </motion.div>
          </Link>

          <Link to="/cart" className="relative">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <ShoppingCart className="text-cream" size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-leaf-gold text-charcoal text-[9px] font-dm font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.div>
          </Link>

          <div className="hidden md:block">
            <DarkModeToggle />
          </div>

          <button
            className="lg:hidden text-cream p-1 ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-forest dark:bg-charcoal border-t border-leaf-gold/10"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-serif ${
                        isActive ? "text-leaf-gold" : "text-cream/70"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {user ? (
                  <>
                    {user.isAdmin && (
                      <NavLink
                        to="/admin"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 text-lg font-serif text-leaf-gold"
                      >
                        <Shield size={20} /> Admin Panel
                      </NavLink>
                    )}
                    <button
                      onClick={() => { logout(); setMenuOpen(false); }}
                      className="flex items-center gap-2 text-lg font-serif text-terracotta text-left"
                    >
                      <LogOut size={20} /> Logout
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-serif ${isActive ? "text-leaf-gold" : "text-cream/70"}`
                    }
                  >
                    Login / Register
                  </NavLink>
                )}
              </div>

              <div className="flex items-center gap-6 border-t border-cream/10 pt-6">
                <Link to="/Wishlist" onClick={() => setMenuOpen(false)} className="relative">
                  <Heart className="text-cream" size={22} strokeWidth={1.5} />
                  {WishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-terracotta text-cream text-[9px] font-dm font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {WishlistCount}
                    </span>
                  )}
                </Link>
                <Link to="/cart" onClick={() => setMenuOpen(false)} className="relative">
                  <ShoppingCart className="text-cream" size={22} strokeWidth={1.5} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-leaf-gold text-charcoal text-[9px] font-dm font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <DarkModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
