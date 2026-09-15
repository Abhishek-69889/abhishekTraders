import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* Basic */}
      <title>Abhishek Traders | Building Material Supplier in Unnao & Kanpur | Cement, Sariya, Ret, Gitti</title>
      <meta name="description" content="Abhishek Traders - 15+ years trusted building material supplier in Unnao & Kanpur. Best rate for Ultratech, ACC Cement, Tata Tiscon Sariya, Morang, Gitti. Same day delivery. Call +91 9984740025" />
      <meta name="keywords" content="abhishek traders unnao, building material unnao, cement supplier unnao, sariya supplier kanpur, ultratech cement unnao, acc cement unnao, tata tiscon unnao, ret gitti unnao, construction material kanpur, morang supplier, construction material lucknow, best maurang shop unnao , building material shop near me" />
      <meta name="author" content="Abhishek Traders" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://abhishek-traders-eta.vercel.app/" />

      {/* Local SEO */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Unnao" />
      <meta name="geo.position" content="26.590471;80.741738" />
      <meta name="ICBM" content="26.590471, 80.741738" />

      {/* Hindi SEO */}
      <meta name="description" content="उन्नाव में सीमेंट, सरिया, मोरंग, गिट्टी के लिए सबसे भरोसेमंद नाम - अभिषेक ट्रेडर्स। 15 साल से 500+ घरों की नींव में हमारा योगदान। आज का रेट जानने के लिए कॉल करें 9984740025" />

      {/* Open Graph - for WhatsApp / Facebook share */}
      <meta property="og:title" content="Abhishek Traders - Trusted Building Material Supplier Since 2011" />
      <meta property="og:description" content="500+ Homes Built. 100% Genuine Cement, Sariya, Ret, Gitti. Same day delivery in Unnao & Kanpur. Get rate on WhatsApp in 10 mins." />
      {/* <meta property="og:image" content="https://abhishektraders.com/og-image.jpg" /> */}
      <meta property="og:url" content="https://abhishek-traders-eta.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abhishek Traders | Building Material in Unnao" />
      <meta name="twitter:description" content="Best rate for Cement, Sariya, Ret, Gitti. Call 9984740025" />
      {/* <meta name="twitter:image" content="https://abhishektraders.com/og-image.jpg" /> */}

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#f97316" />
    </Helmet>

    
  );
};

<script type="application/ld+json">
{`
{
  // "@context": "https://schema.org",
  "@type": "BuildingMaterialsStore",
  "name": "Abhishek Traders",
  "name": "अभिषेक ट्रेडर्स",
  "alternateName": "Abhishek Traders Unnao",
  "description": "उन्नाव में सीमेंट, सरिया, रेत, गिट्टी सप्लायर",
  "keywords": "सीमेंट सप्लायर उन्नाव, सरिया सप्लायर उन्नाव, बिल्डिंग मटेरियल उन्नाव"
  // "image": "https://abhishektraders.com/logo.png",
  "description": "15+ years trusted building material supplier in Unnao - Cement, Sariya, Ret, Gitti with same day delivery.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kantha",
    "addressLocality": "Unnao",
    "addressRegion": "UP",
    "postalCode": "209859",
    "addressCountry": "IN"
  },
 "geo": {
  "@type": "GeoCoordinates",
  "latitude": "26.5904710",
  "longitude": "80.7417380"
}
  "url": "https://abhishek-traders-eta.vercel.app/",
  "telephone": "+919984740025",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
`}
</script>



export default SEO;