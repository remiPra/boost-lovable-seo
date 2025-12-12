import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  FileSearch, 
  FileX, 
  Image, 
  Link2Off, 
  Clock, 
  Code, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const problems = [
  {
    icon: FileSearch,
    title: "Absence de meta descriptions",
    problem: "Google ne comprend pas le sujet de vos pages",
    impact: "Vos pages n'apparaissent pas dans les résultats de recherche pertinents, ou avec un extrait peu attrayant.",
    solution: "J'écris des meta descriptions optimisées pour chaque page, avec les bons mots-clés et un appel à l'action.",
  },
  {
    icon: FileX,
    title: "Balises H1/H2 mal structurées",
    problem: "La hiérarchie de votre contenu est confuse",
    impact: "Google ne peut pas identifier le sujet principal de chaque page ni sa structure logique.",
    solution: "Je restructure vos titres avec une hiérarchie claire : un seul H1 par page, des H2 pour les sections principales.",
  },
  {
    icon: Image,
    title: "Images sans attributs alt",
    problem: "Vos images sont invisibles pour Google",
    impact: "Vous perdez du trafic via Google Images et l'accessibilité de votre site est compromise.",
    solution: "J'ajoute des descriptions alt pertinentes à toutes vos images, avec vos mots-clés cibles.",
  },
  {
    icon: Link2Off,
    title: "Aucun maillage interne",
    problem: "Vos pages ne sont pas connectées entre elles",
    impact: "Google ne peut pas découvrir et indexer toutes vos pages. Votre autorité SEO est dispersée.",
    solution: "Je crée un maillage interne stratégique qui guide les visiteurs et Google vers vos pages importantes.",
  },
  {
    icon: Clock,
    title: "Temps de chargement lent",
    problem: "Votre site met trop de temps à s'afficher",
    impact: "Les visiteurs partent avant de voir votre contenu. Google pénalise les sites lents.",
    solution: "J'optimise les images, le code et les ressources pour un chargement rapide sur mobile et desktop.",
  },
  {
    icon: Code,
    title: "HTML non sémantique",
    problem: "Le code n'utilise pas les bonnes balises",
    impact: "Google a du mal à comprendre la structure de votre contenu et son importance.",
    solution: "J'utilise les balises HTML5 sémantiques (header, main, article, section, nav) correctement.",
  },
  {
    icon: Globe,
    title: "Pas de sitemap ni robots.txt",
    problem: "Google ne sait pas quelles pages indexer",
    impact: "Certaines pages importantes sont ignorées, d'autres non souhaitées sont indexées.",
    solution: "Je configure un sitemap XML et un robots.txt pour guider les robots d'indexation.",
  },
];

const ProblemesSeo = () => {
  return (
    <>
      <Helmet>
        <title>7 Problèmes SEO des sites Lovable - Solutions concrètes</title>
        <meta 
          name="description" 
          content="Découvrez les 7 problèmes SEO les plus fréquents sur les sites Lovable et comment les corriger pour améliorer votre visibilité sur Google." 
        />
        <link rel="canonical" href="https://seo-lovable.fr/problemes-seo" />
      </Helmet>
      
      <Layout>
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4" />
                Diagnostic complet
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Les 7 problèmes SEO qui rendent votre site{" "}
                <span className="gradient-text">invisible</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Lovable crée de beaux sites en quelques clics, mais le SEO demande 
                une attention particulière. Voici ce que je corrige sur 90% des sites que j'audite.
              </p>
            </div>
          </div>
        </section>

        {/* Problems list */}
        <section className="py-12 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 md:p-8 hover:shadow-card transition-shadow"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <problem.icon className="w-7 h-7 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-muted-foreground">
                          #{index + 1}
                        </span>
                        <h2 className="text-xl font-bold">{problem.title}</h2>
                      </div>
                      
                      <div className="space-y-4 mt-4">
                        <div>
                          <p className="text-sm font-medium text-destructive mb-1">Le problème</p>
                          <p className="text-muted-foreground">{problem.problem}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-1">L'impact</p>
                          <p className="text-muted-foreground">{problem.impact}</p>
                        </div>
                        <div className="bg-accent/50 rounded-lg p-4">
                          <p className="text-sm font-medium text-primary mb-1 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Ma solution
                          </p>
                          <p className="text-foreground">{problem.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="max-w-2xl mx-auto text-center mt-16">
              <h3 className="text-2xl font-bold mb-4">
                Votre site a ces problèmes ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Demandez un audit gratuit pour savoir exactement ce qu'il faut corriger sur votre site.
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

export default ProblemesSeo;
