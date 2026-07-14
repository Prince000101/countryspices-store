import journalData from "../data/journalData";
import JournalCard from "../components/JournalCard";
import FeaturedArticle from "../components/FeaturedArticle";
import { Leaf } from "lucide-react";
import SEO from "../components/SEO";

function Journal() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-14 lg:px-24 py-12 sm:py-16 transition-colors duration-500">
      <SEO
        title="Journal"
        description="Stories from the hills of Meghalaya — harvest updates, spice guides, recipes, and the culture behind our ingredients."
        url="/journal"
      />
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Leaf size={16} className="text-terracotta" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-fraunces text-forest dark:text-cream">CountrySpices Journal</h1>
        <p className="text-earth dark:text-cream/60 font-dm mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Stories from the hills of Meghalaya — harvest updates, spice guides, recipes, and the culture behind our ingredients.
        </p>
      </div>
      <FeaturedArticle />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {journalData.map((article) => (
          <JournalCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Journal;
