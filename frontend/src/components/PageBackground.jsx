import { useLocation } from "react-router-dom";

const pageConfigs = {
  "/": {
    blobs: [
      { size: "w-48 h-48", pos: "-top-12 left-[15%]", color: "bg-forest/6", delay: "0s", duration: "14s" },
      { size: "w-32 h-32", pos: "top-[40%] -right-10", color: "bg-terracotta/6", delay: "-5s", duration: "12s" },
    ],
    leaves: true,
  },
  products: {
    blobs: [
      { size: "w-40 h-40", pos: "-top-8 -left-8", color: "bg-forest/6", delay: "0s", duration: "15s" },
      { size: "w-28 h-28", pos: "bottom-[15%] right-[10%]", color: "bg-terracotta/5", delay: "-3s", duration: "10s" },
    ],
    leaves: false,
  },
  about: {
    blobs: [
      { size: "w-52 h-52", pos: "-top-16 left-[20%]", color: "bg-forest/5", delay: "0s", duration: "16s" },
      { size: "w-36 h-36", pos: "bottom-[10%] right-[5%]", color: "bg-terracotta/4", delay: "-6s", duration: "13s" },
    ],
    leaves: true,
  },
  contact: {
    blobs: [
      { size: "w-36 h-36", pos: "top-[20%] -left-8", color: "bg-forest/6", delay: "0s", duration: "11s" },
      { size: "w-24 h-24", pos: "top-[60%] -right-6", color: "bg-terracotta/5", delay: "-4s", duration: "14s" },
    ],
    leaves: false,
  },
  cart: {
    blobs: [
      { size: "w-32 h-32", pos: "top-[15%] right-[10%]", color: "bg-terracotta/5", delay: "0s", duration: "12s" },
    ],
    leaves: false,
  },
  Wishlist: {
    blobs: [
      { size: "w-36 h-36", pos: "top-[10%] -left-6", color: "bg-forest/6", delay: "0s", duration: "13s" },
      { size: "w-28 h-28", pos: "bottom-[20%] right-[8%]", color: "bg-terracotta/4", delay: "-5s", duration: "11s" },
    ],
    leaves: false,
  },
  checkout: {
    blobs: [
      { size: "w-28 h-28", pos: "-top-6 left-[40%]", color: "bg-forest/5", delay: "0s", duration: "14s" },
    ],
    leaves: false,
  },
  "order-success": {
    blobs: [
      { size: "w-32 h-32", pos: "top-[30%] -right-8", color: "bg-forest/6", delay: "0s", duration: "12s" },
    ],
    leaves: false,
  },
  journal: {
    blobs: [
      { size: "w-40 h-40", pos: "-top-10 -right-10", color: "bg-forest/5", delay: "0s", duration: "15s" },
      { size: "w-28 h-28", pos: "bottom-[12%] left-[5%]", color: "bg-terracotta/4", delay: "-4s", duration: "11s" },
    ],
    leaves: true,
  },
  "track-order": {
    blobs: [
      { size: "w-28 h-28", pos: "top-[20%] left-[10%]", color: "bg-terracotta/5", delay: "0s", duration: "13s" },
    ],
    leaves: false,
  },
  auth: {
    blobs: [
      { size: "w-32 h-32", pos: "top-[8%] right-[15%]", color: "bg-forest/5", delay: "0s", duration: "14s" },
    ],
    leaves: false,
  },
  "product-detail": {
    blobs: [
      { size: "w-36 h-36", pos: "top-[12%] -left-8", color: "bg-forest/5", delay: "0s", duration: "13s" },
    ],
    leaves: false,
  },
  default: {
    blobs: [
      { size: "w-24 h-24", pos: "top-[20%] right-[5%]", color: "bg-forest/4", delay: "0s", duration: "12s" },
    ],
    leaves: false,
  },
};

function getConfig(path) {
  if (path === "/") return pageConfigs["/"];
  if (path.startsWith("/products/")) return pageConfigs["product-detail"];
  if (path.startsWith("/products")) return pageConfigs.products;
  if (path.startsWith("/about")) return pageConfigs.about;
  if (path.startsWith("/contact")) return pageConfigs.contact;
  if (path.startsWith("/cart")) return pageConfigs.cart;
  if (path.startsWith("/Wishlist")) return pageConfigs.Wishlist;
  if (path.startsWith("/checkout")) return pageConfigs.checkout;
  if (path.startsWith("/order-success")) return pageConfigs["order-success"];
  if (path.startsWith("/journal")) return pageConfigs.journal;
  if (path.startsWith("/track-order")) return pageConfigs["track-order"];
  if (path.startsWith("/login") || path.startsWith("/register")) return pageConfigs.auth;
  return pageConfigs.default;
}

export default function PageBackground() {
  const location = useLocation();
  const config = getConfig(location.pathname);

  const leafPositions = [
    { left: "10%", top: "15%", delay: "0s", duration: "7s", size: "text-2xl" },
    { left: "70%", top: "25%", delay: "2s", duration: "9s", size: "text-xl" },
    { left: "40%", top: "60%", delay: "4s", duration: "8s", size: "text-3xl" },
    { left: "85%", top: "70%", delay: "1s", duration: "10s", size: "text-xl" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {config.blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute ${blob.pos} ${blob.size} rounded-full ${blob.color} dark:opacity-40 animate-blob-morph`}
          style={{ animationDelay: blob.delay, animationDuration: blob.duration }}
        />
      ))}
      {config.leaves && leafPositions.map((leaf, i) => (
        <div
          key={`leaf-${i}`}
          className="absolute text-forest/8 dark:text-cream/5 animate-leaf-drift"
          style={{
            left: leaf.left,
            top: leaf.top,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            fontSize: leaf.size === "text-2xl" ? "1.5rem" : leaf.size === "text-xl" ? "1.25rem" : "1.875rem",
          }}
        >
          &#127811;
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/10 dark:to-night-forest/10" />
    </div>
  );
}
