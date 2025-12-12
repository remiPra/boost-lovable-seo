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
      <Helmet>
        <title>SEO Lovable - Rendez votre site Lovable visible sur Google</title>
        <meta 
          name="description" 
          content="Spécialiste SEO pour sites Lovable. Audit gratuit, optimisation complète et accompagnement pour améliorer votre visibilité sur Google. Sans jargon technique." 
        />
        <link rel="canonical" href="https://seo-lovable.fr" />
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
