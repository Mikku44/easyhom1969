import seoData from "~/const/JSON-LD.json";

const SEO = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData) }}
    />
  );
};

export default SEO;