import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Rocket, 
  TrendingUp,
  Clock,
  FileText,
  MessageSquare
} from "lucide-react";

const offers = [
  {
    id: "essentiel",
    icon: Zap,
    name: "SEO Essentiel",
    price: "79€",
    tagline: "Optimisation de base pour démarrer",
    description: "Parfait pour un premier pas vers la visibilité. Je corrige les erreurs SEO fondamentales de votre site Lovable.",
    features: [
      "Audit SEO complet de votre site",
      "Optimisation des meta titles et descriptions",
      "Correction de la structure H1/H2/H3",
      "Vérification des balises canoniques",
      "Rapport PDF détaillé avec recommandations",
      "Livraison sous 5 jours ouvrés",
    ],
    ideal: "Sites personnels, portfolios, landing pages simples",
    popular: false,
  },
  {
    id: "pro",
    icon: Rocket,
    name: "SEO Pro",
    price: "149€",
    tagline: "Pack complet pour performer",
    description: "L'offre la plus populaire. Une optimisation complète pour maximiser votre visibilité et votre trafic organique.",
    features: [
      "Tout ce qui est inclus dans SEO Essentiel",
      "Optimisation de toutes les images (alt, compression)",
      "Création d'un maillage interne stratégique",
      "FAQ structurée pour l'AEO (Answer Engine Optimization)",
      "Configuration sitemap XML et robots.txt",
      "Suivi des résultats pendant 30 jours",
      "Support email prioritaire",
    ],
    ideal: "Sites vitrines, freelances, startups, e-commerce",
    popular: true,
  },
  {
    id: "croissance",
    icon: TrendingUp,
    name: "Croissance SEO",
    price: "99€",
    suffix: "/mois",
    tagline: "Accompagnement continu",
    description: "Pour ceux qui veulent une amélioration constante. Je m'occupe de votre SEO pendant que vous vous concentrez sur votre activité.",
    features: [
      "Optimisations SEO mensuelles",
      "Suivi des positions Google (10 mots-clés)",
      "Optimisation des nouvelles pages créées",
      "Rapport mensuel des performances",
      "Recommandations de contenu",
      "Support prioritaire par email et chat",
      "Sans engagement (résiliable à tout moment)",
    ],
    ideal: "Sites en croissance, blogs actifs, entreprises",
    popular: false,
  },
];

const faqs = [
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer: "Le SEO est un travail de moyen terme. Les premières améliorations sont visibles en 2-4 semaines, mais les résultats significatifs apparaissent généralement après 2-3 mois.",
  },
  {
    question: "Travaillez-vous uniquement sur les sites Lovable ?",
    answer: "Oui, je me spécialise exclusivement sur les sites créés avec Lovable. Cela me permet de connaître parfaitement les problématiques spécifiques à cette plateforme.",
  },
  {
    question: "Que se passe-t-il après l'optimisation ?",
    answer: "Vous recevez un rapport détaillé de tout ce qui a été fait. Pour les offres avec suivi, je continue à monitorer vos positions et à faire des ajustements.",
  },
  {
    question: "Puis-je passer d'une offre à l'autre ?",
    answer: "Absolument ! Vous pouvez commencer par SEO Essentiel et passer à SEO Pro ensuite, ou souscrire à Croissance SEO après une optimisation initiale.",
  },
];

const Offres = () => {
  return (
    <>
      <Helmet>
        <title>Offres SEO pour sites Lovable - À partir de 79€</title>
        <meta 
          name="description" 
          content="Découvrez nos offres SEO adaptées aux sites Lovable : optimisation de base à 79€, pack complet à 149€, ou accompagnement mensuel à 99€/mois." 
        />
        <link rel="canonical" href="https://seo-lovable.fr/offres" />
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Des offres <span className="gradient-text">adaptées</span> à vos besoins
              </h1>
              <p className="text-lg text-muted-foreground">
                Que vous ayez besoin d'une optimisation ponctuelle ou d'un accompagnement 
                continu, il y a une formule pour vous.
              </p>
            </div>
          </div>
        </section>

        {/* Offers */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className={`relative bg-card rounded-2xl border ${
                    offer.popular 
                      ? "border-primary shadow-card lg:scale-105 z-10" 
                      : "border-border hover:shadow-card"
                  } transition-all overflow-hidden`}
                >
                  {offer.popular && (
                    <div className="absolute top-0 left-0 right-0 gradient-primary py-2 text-center text-primary-foreground text-sm font-bold flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Le plus populaire
                    </div>
                  )}

                  <div className={`p-8 ${offer.popular ? "pt-14" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <offer.icon className="w-6 h-6 text-primary" />
                    </div>

                    <h2 className="text-2xl font-bold mb-1">{offer.name}</h2>
                    <p className="text-muted-foreground text-sm mb-4">{offer.tagline}</p>
                    
                    <div className="mb-4">
                      <span className="text-5xl font-extrabold">{offer.price}</span>
                      {offer.suffix && (
                        <span className="text-muted-foreground text-lg">{offer.suffix}</span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-6">
                      {offer.description}
                    </p>

                    <Button 
                      asChild 
                      className={`w-full mb-6 ${offer.popular ? "gradient-primary border-0" : ""}`}
                      variant={offer.popular ? "default" : "outline"}
                      size="lg"
                    >
                      <Link to="/audit" className="flex items-center justify-center gap-2">
                        Choisir cette offre
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>

                    <div className="space-y-3">
                      {offer.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <strong>Idéal pour :</strong> {offer.ideal}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Inclus dans toutes les offres
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Livraison rapide</h3>
                <p className="text-muted-foreground text-sm">
                  Vos optimisations sont livrées sous 5 jours ouvrés maximum.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Rapport détaillé</h3>
                <p className="text-muted-foreground text-sm">
                  Un rapport PDF clair avec toutes les actions réalisées.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Support réactif</h3>
                <p className="text-muted-foreground text-sm">
                  Réponse garantie sous 24h pour toutes vos questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Offres;
