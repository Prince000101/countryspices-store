import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mountain, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";
import { useTheme } from "../../context/ThemeContext";
import useAuth from "../../hook/AuthContextHook";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Welcome to CountrySpices Admin!");
      navigate("/admin");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? "bg-charcoal-dark" : "bg-cream"}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Mountain className="text-forest dark:text-forest-light" size={28} strokeWidth={1.5} />
          </div>
          <span className="block text-2xl font-fraunces font-semibold text-forest dark:text-cream">CountrySpices</span>
          <p className="mt-2 text-xs font-dm text-earth/50 dark:text-cream/40">Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-charcoal-light p-8 rounded-[24px] shadow-sm border border-sand/20 dark:border-forest-light/20">
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
                placeholder="prince@creatordev.in"
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
                placeholder="Admin password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-terracotta py-3 text-sm font-dm font-medium text-cream hover:bg-terracotta-light transition-all"
          >
            Sign In to Admin
          </button>
        </form>
      </motion.div>
    </div>
  );
}
