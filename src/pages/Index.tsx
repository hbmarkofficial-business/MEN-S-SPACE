import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Braunschweig | MEN'S SPACE</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop MEN'S SPACE in Braunschweig für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Braunschweig"
        />
        <link rel="canonical" href="https://mens-space-braunschweig.de" />

        {/* Open Graph */}
        <meta property="og:title" content="MEN'S SPACE | Premium Barbershop Braunschweig" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Braunschweig."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mens-space-braunschweig.de" />
        <meta property="og:image" content="https://mens-space-braunschweig.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MEN'S SPACE | Premium Barbershop Braunschweig" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://mens-space-braunschweig.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "MEN'S SPACE",
            "image": "https://mens-space-braunschweig.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ritterbrunnen 1",
              "addressLocality": "Braunschweig",
              "postalCode": "38100",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.2639",
              "longitude": "10.5272"
            },
            "url": "https://mens-space-braunschweig.de",
            "telephone": "+49 531 61499544",
            "openingHours": "Mo-Sa 10:00-20:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/mensspacebraunschweig",
              "https://www.instagram.com/mensspacebraunschweig"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

