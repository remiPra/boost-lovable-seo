import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/problemes-seo", label: "Problèmes SEO" },
  { href: "/offres", label: "Offres" },
  { href: "/audit", label: "Audit gratuit" },
  { href: "/a-propos", label: "À propos" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Search className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">
            SEO <span className="gradient-text">Lovable</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="gradient-primary border-0 shadow-soft hover:opacity-90 transition-opacity">
            <Link to="/audit" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Audit gratuit
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="gradient-primary border-0 mt-2">
              <Link to="/audit" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4" />
                Audit gratuit
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
