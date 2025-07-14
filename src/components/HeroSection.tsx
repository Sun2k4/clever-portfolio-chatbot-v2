import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-section-gradient" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Avatar/Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-hero-gradient p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold text-primary">
              P
            </div>
          </div>
        </div>

        {/* Main content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-hero-gradient bg-clip-text text-transparent">
            Developer
          </span>
          <br />
          <span className="text-foreground">& Creator</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Tôi tạo ra những trải nghiệm web đẹp và tương tác, 
          chuyên về React, TypeScript và thiết kế UI/UX hiện đại.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-hero-gradient hover:shadow-glow transition-all duration-300"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Xem Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Liên hệ
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in">
          <Button variant="ghost" size="sm" className="hover:text-primary hover:shadow-glow">
            <Github size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary hover:shadow-glow">
            <Linkedin size={20} />
          </Button>
          <Button variant="ghost" size="sm" className="hover:text-primary hover:shadow-glow">
            <Mail size={20} />
          </Button>
        </div>

        {/* Scroll indicator */}
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="animate-bounce hover:text-primary"
        >
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
}