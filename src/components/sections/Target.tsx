import { Users, Briefcase, Lightbulb, Rocket } from "lucide-react";

const targets = [
  {
    icon: Lightbulb,
    title: "Créateurs de projets personnels",
    description: "Vous avez créé un portfolio, un blog ou un side-project avec Lovable.",
  },
  {
    icon: Briefcase,
    title: "Freelances & indépendants",
    description: "Vous voulez attirer des clients via votre site vitrine Lovable.",
  },
  {
    icon: Rocket,
    title: "Startups early-stage",
    description: "Vous avez lancé un MVP avec Lovable et voulez du trafic organique.",
  },
  {
    icon: Users,
    title: "Agences & consultants",
    description: "Vous créez des sites clients avec Lovable et voulez les optimiser.",
  },
];

export function Target() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À qui s'adresse ce service ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez débutant ou expérimenté, si votre site est sur Lovable, 
            je peux vous aider à le rendre visible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-accent/50 hover:bg-accent transition-colors group"
            >
              <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <target.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{target.title}</h3>
              <p className="text-muted-foreground text-sm">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
