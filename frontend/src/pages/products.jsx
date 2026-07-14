import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Search, Filter, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";
import SEO from "../components/SEO";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

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

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  const itemListLD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "CountrySpices Organic Spices",
    "description": "Handpicked organic spices from the hills of Meghalaya",
    "numberOfItems": filtered.length,
    "itemListElement": filtered.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://countryspices.in/products/${p._id}`,
      "name": p.name
    }))
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-14 lg:px-24 py-12 sm:py-16 transition-colors duration-500">
      <SEO
        title="Organic Spices"
        description="Shop our collection of handpicked organic spices from Meghalaya. Sun-dried, chemical-free, sourced directly from tribal farmers."
        url="/products"
        ld={itemListLD}
      />
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Leaf size={16} className="text-terracotta" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-fraunces text-forest dark:text-cream">
          CountrySpices Collection
        </h1>
        <p className="text-earth dark:text-cream/60 font-dm mt-3 text-sm sm:text-base max-w-lg mx-auto">
          Handpicked organic spices from the hills of Meghalaya
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-earth/30" />
          <input
            type="text"
            placeholder="Search spices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-sand/30 dark:border-forest-light/30 bg-white dark:bg-charcoal-light pl-10 pr-4 py-3 text-sm font-dm text-earth dark:text-cream outline-none focus:border-forest transition"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Filter size={14} className="text-earth/40" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-dm font-medium transition-all ${
                category === cat
                  ? "bg-forest text-cream"
                  : "bg-sand/20 text-earth/60 hover:bg-sand/40 dark:bg-forest-light/20 dark:text-cream/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="py-20 text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-forest border-t-transparent" />
        </div>
      ) : (
        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {filtered.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(`/products/${product._id}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-sand/30 dark:bg-forest-light/15 mb-3 sm:mb-4">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product._id, product);
                    toast.success(isInWishlist(product._id) ? "Removed from Wishlist" : "Added to Wishlist");
                  }}
                  className="absolute right-3 top-3 z-20 rounded-full bg-cream/80 dark:bg-charcoal-light/80 p-2 shadow-md backdrop-blur-sm transition hover:scale-110"
                >
                  <Heart size={14} className={isInWishlist(product._id) ? "fill-red-500 text-red-500" : "text-forest"} />
                </button>
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-all duration-500 group-hover:opacity-100 max-sm:hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                      toast.success(`${product.name} added to cart`);
                    }}
                    className="flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-xs text-cream font-dm font-medium shadow-xl transition hover:scale-105"
                  >
                    <ShoppingCart size={14} />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="px-0 sm:px-1">
                <p className="mb-0.5 text-[10px] sm:text-xs uppercase tracking-[2px] text-earth/50 font-dm">
                  {product.category}
                </p>
                <h3 className="text-sm sm:text-base font-fraunces dark:text-cream leading-tight">{product.name}</h3>
                <p className="text-sm font-dm font-medium text-forest dark:text-forest-light mt-0.5">₹{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <p className="text-center text-earth/40 dark:text-cream/30 font-dm mt-12 text-sm">No spices found matching your search.</p>
      )}
    </div>
  );
}
