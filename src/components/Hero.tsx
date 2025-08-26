import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import omarPortrait from "@/assets/omar-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins">
                <span className="text-gradient">Omar</span>
                <br />
                <span className="text-foreground">Cherkaoui</span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Développeur <span className="text-gradient font-semibold">Full Stack</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Passionné par la création d'expériences web modernes et performantes. 
              Spécialisé en React, TypeScript, PHP et WordPress avec une approche créative 
              et technique pour chaque projet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="hero-gradient hover:shadow-glow transition-smooth text-lg px-8 py-6"
                onClick={() => scrollToSection('projets')}
              >
                Voir mes projets
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Me contacter
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="#" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 hover:shadow-glow transition-smooth"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 hover:shadow-glow transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 hover:shadow-glow transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={omarPortrait}
                alt="Omar Cherkaoui - Développeur Full Stack"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-card hover-scale"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('apropos')}
          >
            <span className="text-sm">Découvrir</span>
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;