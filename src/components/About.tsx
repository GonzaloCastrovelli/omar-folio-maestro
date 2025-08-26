import { Card } from "@/components/ui/card";
import { Code, Database, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement Frontend",
      description: "React, TypeScript, JavaScript avec des interfaces modernes et responsives"
    },
    {
      icon: Database,
      title: "Développement Backend", 
      description: "PHP, bases de données, APIs REST et architecture serveur"
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Création d'expériences utilisateur intuitives et esthétiques"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation et bonnes pratiques pour des applications rapides"
    }
  ];

  return (
    <section id="apropos" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              À propos de <span className="text-gradient">moi</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 reveal">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionné par le développement web depuis mes études, j'ai acquis une expertise 
                complète en développement full stack. Mon parcours m'a mené de la conception 
                d'interfaces utilisateur modernes à l'architecture de solutions backend robustes.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diplômé en Développement Digital option Full Stack, j'ai eu l'opportunité de 
                mettre en pratique mes compétences lors de mon stage chez TYTHON, où j'ai 
                contribué à des projets innovants en équipe.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                J'aime créer des solutions qui allient performance technique et expérience 
                utilisateur exceptionnelle. Chaque projet est pour moi l'occasion d'apprendre 
                et de repousser les limites de ce qui est possible.
              </p>
            </div>

            <div className="space-y-4 reveal">
              <Card className="card-gradient p-6 hover-lift shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expertise technique</h3>
                    <p className="text-muted-foreground">Full Stack Development</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Maîtrise des technologies modernes pour créer des applications 
                  web complètes et performantes.
                </p>
              </Card>

              <Card className="card-gradient p-6 hover-lift shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Apprentissage continu</h3>
                    <p className="text-muted-foreground">Veille technologique</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Toujours à l'affût des dernières tendances et technologies 
                  pour rester à la pointe du développement web.
                </p>
              </Card>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={highlight.title}
                  className="card-gradient p-6 text-center hover-lift shadow-card reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;