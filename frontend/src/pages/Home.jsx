import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowRight,
  Heart,
  Leaf,
  Sun,
  Sprout,
  Mountain,
  Star,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Newsletter from "../components/Newsletter";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";
import SEO from "../components/SEO";

export default function Home() {
  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
        setLoading(false);
      } catch {
        toast.error("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const features = [
    {
      icon: <Leaf size={28} />,
      title: "100% Organic",
      desc: "Every spice is grown without chemicals or pesticides. Pure, natural, and safe for your family.",
    },
    {
      icon: <Sprout size={28} />,
      title: "Direct from Farmers",
      desc: "We work directly with tribal farmers in Meghalaya, ensuring fair prices and the freshest harvest.",
    },
    {
      icon: <Sun size={28} />,
      title: "Sun-Dried & Raw",
      desc: "Our spices are naturally sun-dried to preserve essential oils and flavors. No artificial processing.",
    },
    {
      icon: <Mountain size={28} />,
      title: "From Meghalaya",
      desc: "Sourced from the pristine hills and forests of Northeast India, where nature is still untouched.",
    },
  ];

  const taglineWords = [
    "EST. 2005",
    "100% ORGANIC",
    "SUN-DRIED",
    "TRIBAL FARMERS",
  ];

  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CountrySpices",
    "url": "https://countryspices.in",
    "logo": "/uploads/04.jpg",
    "description": "Organic spices from Meghalaya, Northeast India. Sun-dried, chemical-free.",
    "foundingDate": "2005",
    "address": { "@type": "PostalAddress", "addressLocality": "Shillong", "addressRegion": "Meghalaya", "addressCountry": "IN" },
    "contactPoint": { "@type": "ContactPoint", "email": "prince@creatordev.in", "contactType": "customer service" }
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Home"
        description="Authentic organic spices from the lush hills of Meghalaya. Sun-dried, chemical-free, and sourced directly from tribal farmers."
        url="/"
        ld={organizationLD}
      />
      {/* =========================================
                    HERO SECTION
      ========================================= */}
      <section className="relative min-h-[90svh] md:min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-14 lg:px-24 overflow-hidden pt-20 md:pt-0 bg-gradient-to-br from-forest via-forest-dark to-moss">

        {/* Floating leaf particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-leaf-gold/20 animate-leaf-fall"
              style={{
                left: `${15 + i * 15}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${10 + i * 2}s`,
                fontSize: `${16 + i * 4}px`,
              }}
            >
              &#127811;
            </div>
          ))}
        </div>

        {/* Accent shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-leaf-gold/10 rotate-45 hidden lg:block" />
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-terracotta/10 rotate-12 hidden lg:block" />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-leaf-gold/5 rotate-45 hidden lg:block" />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-xl text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="h-px w-12 bg-leaf-gold" />
            <p className="text-xs uppercase tracking-[4px] text-leaf-gold font-dm font-medium">
              Meghalaya, Northeast India
            </p>
          </div>

          <h1 className="mb-6 sm:mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-serif">
            <span className="text-cream">From the Hills</span>
            <br />
            <span className="text-leaf-gold italic">to Your Kitchen</span>
          </h1>

          <p className="mb-8 sm:mb-10 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed text-cream/70 font-dm">
            Authentic organic spices from the lush hills of Meghalaya. Sun-dried,
            chemical-free, and sourced directly from tribal farmers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link to="/products" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-base text-cream font-dm font-medium shadow-lg shadow-terracotta/30 transition hover:bg-terracotta-light"
              >
                Shop Spices
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/about" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-full border-2 border-cream/20 px-8 py-4 text-base text-cream font-dm font-medium transition hover:border-leaf-gold hover:text-leaf-gold"
              >
                Our Story
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT - FLOATING PRODUCT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 hidden lg:block shrink-0 mt-12 md:mt-0"
        >
          <div className="relative">
            <div className="w-full max-w-[480px] aspect-[12/10] rounded-[32px] overflow-hidden shadow-2xl border-2 border-leaf-gold/20">
              <img
                src="/uploads/03.jpg"
                alt="Meghalaya organic spices - CountrySpices collection"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-leaf-gold/15 animate-float-slow" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-terracotta/20" />
            <div className="absolute -bottom-6 -right-2 bg-terracotta text-cream px-6 py-3 rounded-full shadow-xl">
              <p className="font-serif text-lg font-semibold tracking-wide leading-none">Since 2005</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM TAGLINE BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-6 md:bottom-10 left-0 right-0 px-4 sm:px-6 md:px-14 lg:px-24"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] text-cream/40 font-dm font-medium overflow-x-auto pb-1 no-scrollbar">
            {taglineWords.map((word, i) => (
              <span key={word} className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                {word}
                {i < taglineWords.length - 1 && (
                  <span className="w-1.5 h-1.5 bg-leaf-gold/40 rotate-45" />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
                  PRODUCTS SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-cream dark:bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-0 text-center sm:text-left"
          >
            <div>
              <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-terracotta font-dm font-medium">
                Our Collection
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal dark:text-cream">
                Flavors of Meghalaya
              </h2>
            </div>

            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-forest dark:text-leaf-gold font-dm font-medium transition-all hover:gap-4"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-forest border-t-transparent" />
            </div>
          ) : (
            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  onClick={() => navigate(`/products/${product._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[24px] bg-cream-light dark:bg-charcoal-light mb-4 border border-forest/10 dark:border-leaf-gold/10 transition-all duration-300 group-hover:border-forest/30 group-hover:shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product._id, product);
                        toast.success(
                          isInWishlist(product._id)
                            ? "Removed from Wishlist"
                            : "Added to Wishlist"
                        );
                      }}
                      className="absolute right-3 top-3 z-20 rounded-full bg-cream/90 dark:bg-charcoal/80 p-2.5 shadow-md backdrop-blur-sm transition hover:bg-cream hover:scale-110"
                    >
                      <Heart
                        size={14}
                        className={`transition ${
                          isInWishlist(product._id)
                            ? "fill-terracotta text-terracotta"
                            : "text-forest dark:text-cream"
                        }`}
                      />
                    </button>

                    <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-all duration-500 group-hover:opacity-100 max-sm:hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const existing = cart.find((i) => i._id === product._id);
                          addToCart(product);
                          toast.success(
                            existing
                              ? `${product.name} quantity increased`
                              : `${product.name} added to cart`
                          );
                        }}
                        className="flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm text-cream font-dm font-medium shadow-xl transition hover:scale-105 hover:bg-forest-dark"
                      >
                        <ShoppingCart size={14} />
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="px-1">
                    <p className="mb-1 text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-terracotta font-dm font-medium">
                      {product.category || "Organic Spices"}
                    </p>
                    <h3 className="text-lg sm:text-xl font-serif mb-1 dark:text-cream leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < Math.round(product.rating) ? "fill-leaf-gold text-leaf-gold" : "text-sand/40"}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-sage/50 dark:text-cream/40 font-dm">
                        ({product.numReviews})
                      </span>
                    </div>
                    <p className="text-lg font-dm font-bold text-forest dark:text-leaf-gold mt-1">
                      ₹{product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-10 sm:mt-12 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-forest font-dm font-medium transition-all hover:gap-4"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
                  STORY SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-moss text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-leaf-gold" />
                <p className="text-xs uppercase tracking-[4px] text-leaf-gold font-dm font-medium">
                  Our Roots
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight">
                From the Hills
                <br />
                of <span className="text-leaf-gold">Meghalaya</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-cream/70 font-dm mb-4">
                Founded in 2005 in the lush hills of Meghalaya, CountrySpices was born
                out of a love for the forgotten flavors of Northeast India. What began
                as a small initiative with local Khasi farmers has grown into a mission
                to bring authentic organic spices to every Indian kitchen.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-cream/70 font-dm mb-8">
                We work directly with tribal farmers across the Khasi, Jaintia, and Garo
                hills, ensuring fair prices, sustainable farming, and the purest spices
                nature can offer.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-sm font-dm font-medium text-cream transition hover:bg-terracotta-light"
                >
                  Read Our Full Story
                  <ChevronRight size={18} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[28px] overflow-hidden border-2 border-leaf-gold/20">
                <img
                  src="/uploads/06.jpg"
                  alt="Meghalaya hills - CountrySpices origin"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-terracotta text-cream px-6 py-4 rounded-full shadow-2xl">
                <p className="font-serif text-3xl font-bold leading-none">20+</p>
                <p className="font-dm text-xs uppercase tracking-wider text-cream/80">Years of Trust</p>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-leaf-gold/20 rounded-full rotate-12 hidden sm:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
                  FEATURES SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-cream-light dark:bg-charcoal-light/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-terracotta font-dm font-medium">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal dark:text-cream">
              The CountrySpices Promise
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-[24px] bg-white dark:bg-charcoal p-6 sm:p-8 shadow-sm border border-forest/10 dark:border-leaf-gold/10 transition-all duration-300 hover:shadow-lg hover:border-forest/20"
              >
                <div className="mb-5 sm:mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-cream transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-serif text-charcoal dark:text-cream">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-sage dark:text-cream/60 font-dm text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
                  TESTIMONIALS
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-forest dark:bg-moss">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-leaf-gold font-dm font-medium">
              What People Say
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream">
              Loved Across India
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              { name: "Priya S.", location: "Delhi", text: "The Shillong Garam Masala changed my cooking completely. The aroma is unlike anything I've found in regular stores." },
              { name: "Arjun M.", location: "Bangalore", text: "Wild Forest Honey is pure gold. You can taste the difference when something is truly raw and unprocessed." },
              { name: "Meera K.", location: "Kolkata", text: "I love that this brand supports tribal farmers. The Naga Chili Flakes are incredibly flavorful and fresh." },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-[24px] bg-cream/5 backdrop-blur-sm p-6 sm:p-8 border border-cream/10"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-leaf-gold text-leaf-gold" />
                  ))}
                </div>
                <p className="text-cream/80 font-dm text-sm sm:text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-cream font-dm font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-cream/40 font-dm text-xs">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
