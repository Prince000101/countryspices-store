import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Sun, Sprout, Mountain, Heart, Star } from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const timeline = [
    {
      year: "2005",
      title: "The Beginning",
      desc: "Ruth Mawphlang starts working with Khasi tribal farmers in Meghalaya, connecting them to urban markets for their organic spices.",
    },
    {
      year: "2010",
      title: "CountrySpices is Born",
      desc: "The brand is officially launched in Shillong with five signature products. Word spreads through local markets and word of mouth.",
    },
    {
      year: "2016",
      title: "Pan-India Reach",
      desc: "CountrySpices goes online, bringing Meghalayan spices to kitchens across India. Partnerships with Jaintia and Garo hill farmers expand the range.",
    },
    {
      year: "2021",
      title: "Organic Certification",
      desc: "All products receive organic certification. The brand becomes a pioneer in promoting Northeast Indian spices nationally.",
    },
    {
      year: "2026",
      title: "Today",
      desc: "CountrySpices serves thousands of customers across India and internationally. Still organic. Still sun-dried. Still supporting tribal farmers.",
    },
  ];

  const values = [
    {
      icon: <Leaf size={28} />,
      title: "100% Organic",
      desc: "Every spice we sell is grown without synthetic pesticides or fertilizers. Pure, natural, and certified organic.",
    },
    {
      icon: <Sprout size={28} />,
      title: "Community-First",
      desc: "We pay fair prices directly to tribal farmers in Meghalaya, supporting their families and preserving traditional farming methods.",
    },
    {
      icon: <Sun size={28} />,
      title: "Sun-Dried & Raw",
      desc: "Our spices are naturally sun-dried to preserve essential oils and natural flavors. No artificial processing or additives.",
    },
    {
      icon: <Mountain size={28} />,
      title: "Sustainable & Ethical",
      desc: "We believe in sustainable sourcing that respects the land and the people who cultivate it. Every purchase supports this mission.",
    },
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
    <div className="min-h-screen transition-colors duration-500">
      <SEO
        title="Our Story"
        description="Learn about CountrySpices — our journey from the hills of Meghalaya to kitchens across India. Organic, sun-dried spices sourced directly from tribal farmers."
        url="/about"
        ld={organizationLD}
      />
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-20 gap-10 sm:gap-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="h-px w-12 bg-terracotta" />
            <p className="text-xs uppercase tracking-[4px] text-terracotta font-dm font-medium">
              Our Story
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal dark:text-cream mb-6 leading-tight">
            Nature's Best,
            <br />
            <span className="text-forest italic">From Meghalaya</span>
          </h1>
          <p className="text-sm sm:text-base text-sage dark:text-cream/70 font-dm mb-4 leading-relaxed">
            At CountrySpices, we bring the forgotten flavors of Northeast India to your
            kitchen. Every spice is organic, sun-dried, and sourced directly from tribal
            farmers who have cultivated these lands for generations.
          </p>
          <p className="text-sm sm:text-base text-sage dark:text-cream/70 font-dm mb-8 leading-relaxed">
            Our mission is simple: make the incredible biodiversity of Meghalaya's spice
            heritage accessible to every Indian home, while ensuring the farmers who grow
            these spices are fairly compensated.
          </p>
          <Link
            to="/products"
            className="inline-block rounded-full bg-forest px-8 py-4 text-sm text-cream font-dm font-medium shadow-lg shadow-forest/20 hover:bg-forest-dark transition-all hover:scale-105"
          >
            Explore Our Spices
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="shrink-0 w-full md:w-auto"
        >
          <div className="w-full max-w-[500px] mx-auto h-[350px] sm:h-[450px] md:h-[550px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl bg-gradient-to-br from-forest/20 to-leaf-gold/10">
            <img
              src="/uploads/06.jpg"
              alt="Meghalaya hills - CountrySpices origin"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <div className="border-t border-forest/10 mx-4 sm:mx-6 md:mx-14 lg:mx-24 mb-16" />

      {/* TIMELINE */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-moss text-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="mb-3 text-xs uppercase tracking-[4px] text-leaf-gold font-dm font-medium">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream">
              Two Decades of <span className="text-leaf-gold italic">Trust</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-leaf-gold/20 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-terracotta rounded-full -translate-x-1/2 mt-1 z-10 border-2 border-moss" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-3xl sm:text-4xl font-serif text-leaf-gold font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-serif mt-2 mb-2 text-cream">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/60 font-dm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEGHALAYA CONNECTION */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-cream dark:bg-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[24px] overflow-hidden shadow-xl border-2 border-forest/10"
          >
            <img
              src="/uploads/03.jpg"
              alt="Spice markets - CountrySpices origin"
              className="w-full h-[350px] sm:h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-forest" />
              <p className="text-xs uppercase tracking-[4px] text-forest font-dm font-medium">
                Our Roots
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 text-charcoal dark:text-cream">
              Born in <span className="text-forest italic">Meghalaya</span>
            </h2>
            <p className="text-base leading-relaxed text-sage dark:text-cream/70 font-dm mb-4">
              Meghalaya, the "Abode of Clouds," is one of India's most biodiverse regions.
              Its misty hills, rich soil, and abundant rainfall create the perfect conditions
              for growing exceptional spices.
            </p>
            <p className="text-base leading-relaxed text-sage dark:text-cream/70 font-dm mb-4">
              For centuries, the Khasi, Jaintia, and Garo tribal communities have cultivated
              spices using traditional organic methods. CountrySpices was founded to bring
              these incredible flavors to the rest of India.
            </p>
            <p className="text-base leading-relaxed text-sage dark:text-cream/70 font-dm">
              From the wild pepper vines of Jaintia Hills to the turmeric fields of Garo Hills,
              every CountrySpices product carries the essence of Meghalaya's pristine landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-cream-light dark:bg-charcoal-light/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-terracotta font-dm font-medium">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal dark:text-cream">
              What We <span className="text-forest italic">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-[24px] bg-white dark:bg-charcoal p-6 sm:p-8 shadow-sm border border-forest/10 dark:border-leaf-gold/10 hover:shadow-lg hover:border-forest/20 transition-all duration-300"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/5 text-forest">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 text-charcoal dark:text-cream">
                  {item.title}
                </h3>
                <p className="text-sage dark:text-cream/60 font-dm text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER CREDIT */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-12 bg-forest">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="text-leaf-gold" size={16} />
            <p className="text-xs uppercase tracking-[3px] text-cream/50 font-dm font-medium">
              Crafted With Passion
            </p>
            <Star className="text-leaf-gold" size={16} />
          </div>
          <p className="text-sm font-dm text-cream/40">
            Built by <span className="text-leaf-gold/80 font-semibold">Prince</span> | <span className="text-terracotta/80 font-semibold">Creator Dev</span>
          </p>
        </div>
      </section>
    </div>
  );
}
