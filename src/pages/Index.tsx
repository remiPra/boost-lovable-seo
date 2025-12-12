import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Target } from "@/components/sections/Target";
import { Method } from "@/components/sections/Method";
import { OffersPreview } from "@/components/sections/OffersPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "fr" }}>
        {/* =========================
      SEO FONDAMENTAL
  ========================== */}
        <title>SEO pour sites Lovable | Audit gratuit & visibilité Google</title>

        <meta
          name="description"
          content="Votre site Lovable est invisible sur Google ? Audit SEO gratuit, optimisation complète et accompagnement humain pour transformer votre site Lovable en source de clients."
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <link rel="canonical" href="https://seo-lovable.fr/" />

        {/* =========================
      RESPONSIVE & UX
  ========================== */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />

        {/* =========================
      BRANDING
  ========================== */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* =========================
      OPEN GRAPH (IA + SOCIAL)
  ========================== */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="SEO Lovable" />
        <meta property="og:url" content="https://seo-lovable.fr/" />

        <meta property="og:title" content="SEO pour sites Lovable – Audit gratuit & visibilité Google" />

        <meta
          property="og:description"
          content="Audit SEO gratuit et optimisation complète pour sites créés avec Lovable. Gagnez en visibilité Google et attirez vos premiers clients."
        />

        <meta property="og:image" content="https://seo-lovable.fr/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* =========================
      TWITTER / X
  ========================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO pour sites Lovable" />
        <meta
          name="twitter:description"
          content="Audit SEO gratuit pour sites Lovable. Optimisation Google, AEO et visibilité durable."
        />
        <meta name="twitter:image" content="https://seo-lovable.fr/og-image.jpg" />

        {/* =========================
      PERFORMANCE
  ========================== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* =========================
      DONNÉES STRUCTURÉES – AEO
  ========================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "SEO pour sites Lovable",
            url: "https://seo-lovable.fr/",
            logo: "https://seo-lovable.fr/logo.png",
            description:
              "Audit SEO et optimisation de sites créés avec Lovable pour améliorer la visibilité sur Google et les moteurs IA.",
            areaServed: {
              "@type": "Country",
              name: "France",
            },
            serviceType: "SEO Lovable",
            provider: {
              "@type": "Person",
              name: "Rémi",
            },
          })}
        </script>
      </Helmet>

      <Layout>
        <Hero />
        <Problems />
        <Target />
        <Method />
        <OffersPreview />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
