import { AlertTriangle, FileX, Link2Off, Image, Clock, Code, FileSearch } from "lucide-react";

const problems = [
  {
    icon: FileSearch,
    title: "Pas de meta descriptions",
    description: "Google ne sait pas de quoi parle votre page, il l'ignore.",
  },
  {
    icon: FileX,
    title: "Balises H1/H2 mal structurées",
    description: "La hiérarchie de votre contenu est illisible pour les moteurs.",
  },
  {
    icon: Image,
    title: "Images sans attributs alt",
    description: "Vos images sont invisibles pour Google et l'accessibilité.",
  },
  {
    icon: Link2Off,
    title: "Aucun maillage interne",
    description: "Google ne peut pas naviguer et indexer toutes vos pages.",
  },
  {
    icon: Clock,
    title: "Temps de chargement lent",
    description: "Un site lent = moins de visiteurs et un mauvais classement.",
  },
  {
    icon: Code,
    title: "HTML non sémantique",
    description: "Le code généré n'utilise pas les bonnes balises SEO.",
  },
];

export function Problems() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Problème fréquent
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi votre site Lovable est invisible ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lovable crée de beaux sites rapidement, mais le SEO n'est pas automatique. 
            Voici les erreurs les plus courantes que je corrige.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
