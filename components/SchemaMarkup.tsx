export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Pomo Build",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1924 Clarke St",
      "addressLocality": "Port Moody",
      "addressRegion": "BC",
      "postalCode": "V3H 1X9",
      "addressCountry": "CA"
    },
    "telephone": "+1-604-500-2003",
    "email": "contact@pomobuild.com",
    "url": "https://www.pomobuild.com", // Placeholder for your future domain
    // This line is new and very important for SEO
    "sameAs": "https://maps.app.goo.gl/kRkRN6CmWb7mMX7s6",
    "openingHours": "Mo-Sa 08:00-18:00",
    "areaServed": [
      "Coquitlam",
      "Port Moody",
      "Port Coquitlam",
      "Burnaby",
      "Vancouver",
      "North Vancouver",
      "West Vancouver",
      "Surrey",
      "Richmond",
      "New Westminster",
      "Maple Ridge",
      "Pitt Meadows",
      "Langley"
    ],
    "description": "Pomo Build offers high-quality renovation, construction, and handyman services for homeowners and businesses in Metro Vancouver.",
    "image": "https://www.pomobuild.com/logo.png" // Placeholder for your logo
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}