import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mountain, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import useAuth from "../hook/AuthContextHook";
import SEO from "../components/SEO";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Welcome back to CountrySpices!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
      <SEO
        title="Login"
        description="Sign in to your CountrySpices account. Access your orders, wishlist, and more."
        url="/login"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <Mountain className="text-forest dark:text-forest-light" size={24} strokeWidth={1.5} />
            <span className="text-xl font-fraunces font-semibold text-forest dark:text-cream">CountrySpices</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-fraunces text-forest dark:text-cream">Welcome back</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-charcoal-light p-6 sm:p-8 rounded-[24px] shadow-sm border border-sand/20 dark:border-forest-light/20">
          <div>
            <label className="block text-xs font-dm font-medium text-earth dark:text-cream/60 mb-1.5">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-earth/30" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-sand/30 dark:border-forest-light/30 bg-cream/50 dark:bg-charcoal pl-10 pr-4 py-3 text-sm font-dm text-earth dark:text-cream outline-none focus:border-forest transition"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-dm font-medium text-earth dark:text-cream/60 mb-1.5">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-earth/30" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-sand/30 dark:border-forest-light/30 bg-cream/50 dark:bg-charcoal pl-10 pr-4 py-3 text-sm font-dm text-earth dark:text-cream outline-none focus:border-forest transition"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-terracotta py-3 text-sm font-dm font-medium text-cream hover:bg-terracotta-light transition-all"
          >
            Sign In
          </button>

          <p className="text-center text-xs font-dm text-earth/60 dark:text-cream/40">
            New to CountrySpices?{" "}
            <Link to="/register" className="text-terracotta hover:underline font-medium">
              Create an account
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
