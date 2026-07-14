import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Mountain } from "lucide-react";
import SEO from "../components/SEO";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <SEO
        title="Order Confirmed"
        description="Your order has been placed successfully with CountrySpices. Organic spices from Meghalaya on their way to you."
        url="/order-success"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-forest/10">
          <CheckCircle size={40} className="text-forest" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-fraunces text-forest dark:text-cream mb-2">Order Placed!</h1>
        <p className="text-sm sm:text-base text-earth dark:text-cream/60 font-dm mt-3 sm:mt-4">
          Thank you for shopping with CountrySpices. Your spices are on their way from the hills of Meghalaya.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="rounded-full bg-terracotta px-6 py-3 text-sm font-dm font-medium text-cream hover:bg-terracotta-light transition-all"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-dm text-forest dark:text-cream/60 hover:text-forest dark:hover:text-cream transition"
          >
            <Mountain size={16} /> Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
