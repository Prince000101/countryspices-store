import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "react-toastify";
import SEO from "../components/SEO";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:prince@creatordev.in?subject=${encodeURIComponent(subject || "Contact from CountrySpices")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${body}`)}`;
    toast.success("Opening your email client...");
    setName("");
    setEmail("");
    setSubject("");
    setBody("");
  };

  const localBusinessLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CountrySpices",
    "url": "https://countryspices.in",
    "description": "Organic spices from Meghalaya, Northeast India. Sun-dried, chemical-free.",
    "address": { "@type": "PostalAddress", "addressLocality": "Shillong", "addressRegion": "Meghalaya", "addressCountry": "IN" },
    "email": "prince@creatordev.in"
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-14 lg:px-24 py-12 sm:py-16 transition-colors duration-500 max-w-7xl mx-auto">
      <SEO
        title="Contact Us"
        description="Get in touch with CountrySpices. Questions about our organic spices, orders, or partnerships? We'd love to hear from you."
        url="/contact"
        ld={localBusinessLD}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 sm:mb-14"
      >
        <p className="mb-3 sm:mb-4 uppercase tracking-[4px] sm:tracking-[5px] text-[10px] sm:text-xs text-terracotta font-dm">Get in Touch</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-fraunces text-forest dark:text-cream">CountrySpices Support</h1>
        <p className="text-earth dark:text-cream/60 font-dm mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Have a question about our spices, orders, or partnerships? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          {[
            { icon: <Mail className="text-terracotta" size={20} />, title: "Email Address", desc: "prince@creatordev.in" },
            { icon: <Phone className="text-terracotta" size={20} />, title: "Phone", desc: "+91 XXXXX XXXXX" },
            { icon: <MapPin className="text-terracotta" size={20} />, title: "Location", desc: "Meghalaya, Northeast India" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-[20px] bg-white dark:bg-charcoal-light border border-sand/20 dark:border-forest-light/20"
            >
              <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <h3 className="font-fraunces text-base text-forest dark:text-cream">{item.title}</h3>
                <p className="text-sm font-dm text-earth/60 dark:text-cream/50">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="md:col-span-2 space-y-4 bg-white dark:bg-charcoal-light p-6 sm:p-8 rounded-[24px] border border-sand/20 dark:border-forest-light/20"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-dm font-medium text-earth dark:text-cream/60 mb-1.5">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-sand/30 dark:border-forest-light/30 bg-cream/50 dark:bg-charcoal px-4 py-3 text-sm font-dm text-earth dark:text-cream outline-none focus:border-forest transition"
              />
            </div>
            <div>
              <label className="block text-xs font-dm font-medium text-earth dark:text-cream/60 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-sand/30 dark:border-forest-light/30 bg-cream/50 dark:bg-charcoal px-4 py-3 text-sm font-dm text-earth dark:text-cream outline-none focus:border-forest transition"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-dm font-medium text-earth dark:text-cream/60 mb-1.5">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-xl border border-sand/30 dark:border-forest-light/30 bg-cream/50 dark:bg-charcoal px-4 py-3 text-sm font-dm text-earth dark:text-cream outline-none focus:border-forest transition"
              placeholder="How can we help?"
            />
          </div>
          <div>
            <label className="block text-xs font-dm font-medium text-earth dark:text-cream/60 mb-1.5">Message</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows={5}
              className="w-full rounded-xl border border-sand/30 dark:border-forest-light/30 bg-cream/50 dark:bg-charcoal px-4 py-3 text-sm font-dm text-earth dark:text-cream outline-none focus:border-forest transition resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3 text-sm font-dm font-medium text-cream hover:bg-terracotta-light transition-all"
          >
            <Send size={14} /> Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
