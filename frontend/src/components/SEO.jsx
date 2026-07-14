import { Helmet } from "react-helmet-async";

const BRAND = "CountrySpices";
const DOMAIN = "countryspices.in";
const OG_IMAGE = "/uploads/04.jpg";

export default function SEO({
  title,
  description = "Organic spices from Meghalaya, Northeast India. Sun-dried, chemical-free, sourced directly from tribal farmers.",
  keywords = "organic spices, Meghalaya, Northeast India, sun-dried, tribal farmers, CountrySpices",
  url,
  image,
  type = "website",
  ld,
}) {
  const fullTitle = title ? `${title} | ${BRAND}` : BRAND;
  const ogImage = image || OG_IMAGE;
  const canonicalUrl = url ? `https://${DOMAIN}${url}` : `https://${DOMAIN}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {ld && (
        <script type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      )}
    </Helmet>
  );
}
