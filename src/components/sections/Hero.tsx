import { Link } from "react-router-dom";
import { ArrowRight, Search, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6 animate-fade-in">
            <Search className="w-4 h-4" />
            Spécialiste SEO pour Lovable
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-delay-1">
            Votre site Lovable est{" "}
            <span className="gradient-text">invisible</span> sur Google ?
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-delay-2">
            90% des sites créés avec Lovable ne sont pas optimisés pour le SEO. 
            Je vous aide à corriger ça et à attirer vos premiers visiteurs organiques.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
            <Button asChild size="lg" className="gradient-primary border-0 shadow-soft hover:opacity-90 transition-opacity text-base">
              <Link to="/audit" className="flex items-center gap-2">
                Demander un audit gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link to="/offres">
                Voir les offres
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>+150% de trafic en moyenne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
