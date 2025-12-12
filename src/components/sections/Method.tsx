import { Search, FileText, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Audit complet",
    description: "J'analyse votre site en profondeur pour identifier tous les problèmes SEO.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Rapport clair",
    description: "Vous recevez un rapport détaillé sans jargon, avec des priorités claires.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Corrections",
    description: "Je corrige directement les problèmes ou vous guide pas à pas.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Résultats",
    description: "Votre site remonte dans Google et attire du trafic qualifié.",
  },
];

export function Method() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ma méthode en 4 étapes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une approche simple et efficace pour rendre votre site visible sur Google.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow">
                {/* Step number */}
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-bold">
                  {item.step}
                </div>
                
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-2">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
