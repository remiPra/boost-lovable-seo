import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Fondatrice, Studio Design",
    content: "Mon site Lovable était beau mais invisible. En 3 semaines après l'optimisation, j'ai eu mes premiers contacts via Google. Incroyable !",
    rating: 5,
  },
  {
    name: "Thomas D.",
    role: "Développeur freelance",
    content: "Explications claires, pas de jargon, et surtout des résultats concrets. Mon portfolio est passé de la page 10 à la page 1 pour mes mots-clés.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "CEO, StartupTech",
    content: "L'accompagnement mensuel nous permet de nous concentrer sur notre produit pendant que notre visibilité grandit. Rapport qualité-prix excellent.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce qu'en disent mes clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des créateurs Lovable comme vous qui ont vu leur trafic décoller.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-card transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
