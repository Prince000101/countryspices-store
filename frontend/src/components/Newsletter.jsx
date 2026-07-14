import { useState } from "react";
import { toast } from "react-toastify";
import { Mountain, Mail } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    const existing = JSON.parse(localStorage.getItem("countrySpicesNewsletter") || "[]");
    if (existing.includes(email)) {
      toast.info("Already subscribed!");
      return;
    }
    existing.push(email);
    localStorage.setItem("countrySpicesNewsletter", JSON.stringify(existing));
    toast.success("Welcome to the CountrySpices community!");
    setEmail("");
  };

  return (
    <section className="mx-4 sm:mx-6 my-16 sm:my-20 rounded-[24px] sm:rounded-[32px] bg-forest dark:bg-night-forest px-6 sm:px-10 py-14 sm:py-18 text-cream shadow-2xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-forest-light/20 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-forest-light/15 translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Mountain size={20} className="text-cream/60" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-fraunces font-semibold mb-4">
          Join the Spice Trail
        </h2>
        <p className="text-sm sm:text-lg text-cream/60 font-dm max-w-2xl mx-auto">
          Get harvest updates, recipes from Meghalaya, and exclusive offers
          delivered from the hills to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="relative w-full sm:w-96">
            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-earth/30" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-2xl border border-cream/15 bg-white/95 dark:bg-charcoal-light/95 pl-12 pr-5 py-4 text-earth dark:text-cream outline-none font-dm text-sm focus:border-terracotta transition-colors"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl bg-terracotta px-8 py-4 font-dm font-semibold text-cream text-sm transition hover:scale-105 hover:bg-terracotta-light shadow-lg shadow-terracotta/20"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
