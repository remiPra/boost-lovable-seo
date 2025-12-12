import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    name: "SEO Essentiel",
    price: "79€",
    description: "Optimisation de base pour démarrer",
    features: [
      "Audit SEO complet",
      "Meta tags optimisés",
      "Correction balises H1/H2",
      "Rapport PDF détaillé",
    ],
    popular: false,
  },
  {
    name: "SEO Pro",
    price: "149€",
    description: "Pack complet pour performer",
    features: [
      "Tout SEO Essentiel +",
      "Optimisation images",
      "Maillage interne",
      "FAQ structurée (AEO)",
      "Suivi 30 jours",
    ],
    popular: true,
  },
  {
    name: "Croissance SEO",
    price: "99€",
    suffix: "/mois",
    description: "Accompagnement continu",
    features: [
      "Optimisations mensuelles",
      "Suivi des positions",
      "Nouvelles pages optimisées",
      "Support prioritaire",
    ],
    popular: false,
  },
];

export function OffersPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Des offres adaptées à vos besoins
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Que vous ayez besoin d'une optimisation ponctuelle ou d'un accompagnement continu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative bg-card p-6 rounded-xl border ${
                offer.popular 
                  ? "border-primary shadow-card scale-105 z-10" 
                  : "border-border hover:shadow-card"
              } transition-all`}
            >
              {offer.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Populaire
                </div>
              )}

              <h3 className="font-bold text-xl mb-2">{offer.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{offer.price}</span>
                {offer.suffix && (
                  <span className="text-muted-foreground">{offer.suffix}</span>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {offer.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className={`w-full ${offer.popular ? "gradient-primary border-0" : ""}`}
                variant={offer.popular ? "default" : "outline"}
              >
                <Link to="/offres">
                  En savoir plus
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="ghost" className="group">
            <Link to="/offres" className="flex items-center gap-2">
              Voir toutes les offres en détail
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
