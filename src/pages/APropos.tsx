import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Target, 
  BookOpen, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Pédagogie",
    description: "J'explique tout en termes simples. Pas de jargon SEO incompréhensible.",
  },
  {
    icon: Target,
    title: "Spécialisation",
    description: "Je me concentre uniquement sur Lovable pour maîtriser parfaitement ses spécificités.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatisme",
    description: "Des solutions concrètes et actionnables, pas des recommandations vagues.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "J'adore voir mes clients réussir et atteindre leurs objectifs de visibilité.",
  },
];

const APropos = () => {
  return (
    <>
      <Helmet>
        <title>À propos - Spécialiste SEO pour sites Lovable</title>
        <meta 
          name="description" 
          content="Découvrez mon approche pédagogique du SEO, spécialisée pour les sites créés avec Lovable. Sans jargon, avec des résultats concrets." 
        />
        <link rel="canonical" href="https://seo-lovable.fr/a-propos" />
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    À propos
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Je rends vos sites Lovable{" "}
                    <span className="gradient-text">visibles</span>
                  </h1>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    Passionné par le SEO et fan de Lovable, j'ai décidé de me spécialiser 
                    dans l'optimisation des sites créés avec cette plateforme incroyable.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Après avoir aidé des dizaines de créateurs à sortir de l'invisibilité, 
                    j'ai constaté que les mêmes problèmes revenaient systématiquement. 
                    J'ai donc créé des offres adaptées pour résoudre ces problèmes 
                    efficacement et à prix accessible.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="aspect-square rounded-2xl gradient-primary p-1">
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl font-bold text-primary-foreground">SL</span>
                        </div>
                        <h3 className="font-bold text-xl mb-2">SEO Lovable</h3>
                        <p className="text-muted-foreground text-sm">
                          Spécialiste SEO dédié à la communauté Lovable
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Pourquoi cette spécialisation ?
              </h2>
              
              <div className="bg-card rounded-xl border border-border p-8 space-y-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Lovable est un outil extraordinaire</strong> qui permet de créer 
                  des sites web magnifiques en quelques minutes. Mais j'ai remarqué un problème récurrent : 
                  la plupart de ces sites restent invisibles sur Google.
                </p>
                
                <p className="text-muted-foreground">
                  Ce n'est pas la faute de Lovable — c'est simplement que le SEO demande une attention 
                  particulière que l'IA ne peut pas encore gérer automatiquement. Des détails comme 
                  les meta descriptions, la structure des titres, ou l'optimisation des images font 
                  toute la différence.
                </p>
                
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Ma mission</strong> : combler ce fossé en proposant des services 
                  SEO accessibles, sans jargon technique, et parfaitement adaptés aux spécificités 
                  des sites Lovable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Mes valeurs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ce qui guide mon travail au quotidien.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-card transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose me */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Pourquoi me faire confiance ?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Spécialisation exclusive sur Lovable — je connais chaque particularité",
                  "Approche pédagogique — vous comprendrez ce que je fais et pourquoi",
                  "Prix transparents — pas de surprises, pas de frais cachés",
                  "Résultats mesurables — je vous montre l'évolution de vos positions",
                  "Réactivité — réponse garantie sous 24h",
                  "Sans engagement — vous êtes libre à tout moment",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à travailler ensemble ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Commençons par un audit gratuit de votre site. Je vous explique 
                exactement ce qu'il faut améliorer.
              </p>
              <Button asChild size="lg" className="gradient-primary border-0">
                <Link to="/audit" className="flex items-center gap-2">
                  Demander mon audit gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default APropos;
