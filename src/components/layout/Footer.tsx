import { Link } from "react-router-dom";
import { Search, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <Search className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-background">
                SEO Lovable
              </span>
            </Link>
            <p className="text-background/70 max-w-md mb-6">
              Spécialiste SEO dédié aux sites créés avec Lovable. 
              Rendez votre site visible sur Google sans jargon technique.
            </p>
            <a 
              href="mailto:contact@seo-lovable.fr" 
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@seo-lovable.fr
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/problemes-seo" className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Problèmes SEO
                </Link>
              </li>
              <li>
                <Link to="/offres" className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Offres
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/audit" className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Audit gratuit
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  À propos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} SEO Lovable. Tous droits réservés.
          </p>
          <p className="text-background/50 text-sm">
            Fait avec ❤️ pour la communauté Lovable
          </p>
        </div>
      </div>
    </footer>
  );
}
