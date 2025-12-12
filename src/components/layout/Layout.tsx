import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import FloatingAuditButton from "@/components/FloatingAuditButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <FloatingAuditButton />
    </div>
  );
}
