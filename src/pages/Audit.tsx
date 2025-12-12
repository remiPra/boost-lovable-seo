import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Search, 
  CheckCircle, 
  Clock, 
  Shield, 
  FileText,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: Search,
    title: "Analyse complète",
    description: "Je passe en revue tous les aspects SEO de votre site Lovable.",
  },
  {
    icon: FileText,
    title: "Rapport clair",
    description: "Pas de jargon technique, juste des recommandations actionnables.",
  },
  {
    icon: Clock,
    title: "Réponse sous 24h",
    description: "Je vous réponds rapidement avec une première analyse.",
  },
  {
    icon: Shield,
    title: "Sans engagement",
    description: "L'audit est 100% gratuit, sans obligation d'achat.",
  },
];

const Audit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Demande envoyée !",
      description: "Je vous recontacte sous 24h avec votre audit gratuit.",
    });
    
    setFormData({ name: "", email: "", website: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Audit SEO Gratuit pour votre site Lovable</title>
        <meta 
          name="description" 
          content="Demandez votre audit SEO gratuit et découvrez ce qui empêche votre site Lovable d'être visible sur Google. Réponse sous 24h, sans engagement." 
        />
        <link rel="canonical" href="https://seo-lovable.fr/audit" />
      </Helmet>
      
      <Layout>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left column - Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  100% gratuit
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Demandez votre{" "}
                  <span className="gradient-text">audit SEO gratuit</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Découvrez exactement ce qui empêche votre site Lovable d'apparaître 
                  sur Google. Je vous envoie un rapport personnalisé sous 24h.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-xs">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/50 rounded-xl p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Ce que vous recevrez :
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Liste des problèmes SEO détectés sur votre site</li>
                    <li>• Priorités d'optimisation classées par impact</li>
                    <li>• Recommandations personnalisées et actionnables</li>
                    <li>• Estimation du temps nécessaire pour les corrections</li>
                  </ul>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                <h2 className="text-2xl font-bold mb-6">
                  Remplissez le formulaire
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Votre nom *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Votre email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jean@exemple.fr"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      URL de votre site Lovable *
                    </label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      required
                      placeholder="https://monsite.lovable.app"
                      value={formData.website}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Décrivez brièvement votre projet (optionnel)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Parlez-moi de votre site, vos objectifs, vos difficultés actuelles..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Demander mon audit gratuit
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Vos données sont confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Audit;
