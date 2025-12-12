import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const FloatingAuditButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    message: "",
    prenom: "",
    email: "",
    url: "",
  });

  const [errors, setErrors] = useState({
    message: false,
    prenom: false,
    email: false,
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      message: !formData.message.trim(),
      prenom: !formData.prenom.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    const subject = encodeURIComponent("Demande audit SEO – site Lovable");
    const body = encodeURIComponent(
      `Prénom: ${formData.prenom}\n` +
      `Email: ${formData.email}\n` +
      `URL du site: ${formData.url || "Non renseigné"}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:remiletarologue@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsOpen(false);
      toast({
        title: "Merci !",
        description: "Votre message a bien été envoyé. Réponse sous 24h.",
      });
      
      // Reset form after closing
      setTimeout(() => {
        setFormData({ message: "", prenom: "", email: "", url: "" });
        setIsSubmitted(false);
      }, 300);
    }, 500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Demander un audit SEO"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium text-sm">Audit SEO</span>
      </button>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-left">
            <DialogTitle className="text-xl font-bold text-foreground">
              Audit SEO rapide – réponse sous 24h
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2">
              Une seule question. Je vous réponds personnellement.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Quel est le principal problème de visibilité de votre site aujourd'hui ?
                <span className="text-destructive ml-1">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Ex : site Lovable invisible sur Google, pas de leads, pages non indexées…"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`min-h-[100px] resize-none ${errors.message ? "border-destructive" : ""}`}
                aria-required="true"
                aria-invalid={errors.message}
              />
              {errors.message && (
                <p className="text-sm text-destructive">Ce champ est requis</p>
              )}
            </div>

            {/* Prénom */}
            <div className="space-y-2">
              <Label htmlFor="prenom" className="text-sm font-medium">
                Prénom
                <span className="text-destructive ml-1">*</span>
              </Label>
              <Input
                id="prenom"
                type="text"
                value={formData.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
                className={errors.prenom ? "border-destructive" : ""}
                aria-required="true"
                aria-invalid={errors.prenom}
              />
              {errors.prenom && (
                <p className="text-sm text-destructive">Ce champ est requis</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
                <span className="text-destructive ml-1">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
                aria-required="true"
                aria-invalid={errors.email}
              />
              {errors.email && (
                <p className="text-sm text-destructive">Email invalide</p>
              )}
            </div>

            {/* URL */}
            <div className="space-y-2">
              <Label htmlFor="url" className="text-sm font-medium">
                URL du site (optionnel)
              </Label>
              <Input
                id="url"
                type="url"
                placeholder="https://..."
                value={formData.url}
                onChange={(e) => handleChange("url", e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                "Envoi en cours..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma question
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingAuditButton;
