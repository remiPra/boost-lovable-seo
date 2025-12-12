import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center gradient-primary rounded-2xl p-10 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-primary-foreground text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Gratuit et sans engagement
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à rendre votre site visible ?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Demandez votre audit SEO gratuit et découvrez exactement ce qui empêche 
              votre site Lovable d'apparaître sur Google.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                <Link to="/audit" className="flex items-center gap-2">
                  Demander mon audit gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
