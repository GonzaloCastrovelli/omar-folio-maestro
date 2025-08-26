import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Moovwin.com",
      description: "Plateforme de recrutement complète (type Indeed) permettant aux recruteurs et candidats de se connecter efficacement. Interface moderne avec système de matching avancé.",
      url: "https://moovwin.com",
      technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS", "Plugins Custom"],
      category: "Plateforme Web",
      status: "En ligne",
      highlights: [
        "Système de matching recruteur/candidat",
        "Interface utilisateur intuitive", 
        "Gestion complète des profils",
        "Notifications en temps réel"
      ]
    },
    {
      title: "Easyspace.tython.org", 
      description: "Site de vente et location de maisons avec catalogue interactif, système de recherche avancée et interface d'administration complète pour la gestion des biens immobiliers.",
      url: "https://easyspace.tython.org",
      technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS"],
      category: "E-commerce Immobilier",
      status: "En ligne",
      highlights: [
        "Catalogue de biens immobiliers",
        "Recherche géolocalisée",
        "Système de réservation",
        "Interface d'administration"
      ]
    },
    {
      title: "Tybot.ma",
      description: "Projet collaboratif de création de chatbots intelligents. Contribution principale sur le développement frontend avec React.js et implémentation d'une interface moderne.",
      url: "https://tybot.ma", 
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"],
      category: "SaaS / IA",
      status: "En ligne",
      highlights: [
        "Interface React moderne",
        "Intégration API chatbot",
        "Design responsive",
        "Développement collaboratif"
      ]
    }
  ];

  return (
    <section id="projets" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Mes <span className="text-gradient">projets</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations, des projets personnels aux 
              collaborations professionnelles, chacun représentant un défi technique unique.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="card-gradient p-8 hover-lift shadow-card reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Project Info */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {project.category}
                        </Badge>
                        <Badge 
                          className={`${
                            project.status === "En ligne" 
                              ? "bg-accent/20 text-accent border-accent/30" 
                              : "bg-muted/20 text-muted-foreground border-muted/30"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold font-poppins mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3">Points clés :</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline"
                            className="border-primary/30 hover:bg-primary/10 transition-smooth text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        className="hero-gradient hover:shadow-glow transition-smooth"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Voir le site
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/10"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Détails
                      </Button>
                    </div>
                  </div>

                  {/* Project Visual/Stats */}
                  <div className="space-y-4">
                    <Card className="bg-muted/10 p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Projet en ligne</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Accessible publiquement et pleinement fonctionnel
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.url, '_blank')}
                        className="w-full"
                      >
                        Visiter
                      </Button>
                    </Card>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-muted/10 p-4 text-center">
                        <div className="text-2xl font-bold text-gradient mb-1">
                          {project.technologies.length}
                        </div>
                        <div className="text-muted-foreground text-xs">Technologies</div>
                      </Card>
                      <Card className="bg-muted/10 p-4 text-center">
                        <div className="text-2xl font-bold text-gradient mb-1">
                          {project.highlights.length}
                        </div>
                        <div className="text-muted-foreground text-xs">Fonctionnalités</div>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 reveal">
            <Card className="card-gradient p-8 max-w-2xl mx-auto hover-lift shadow-card">
              <h3 className="text-xl font-bold mb-4">Intéressé par mon travail ?</h3>
              <p className="text-muted-foreground mb-6">
                Ces projets ne représentent qu'un aperçu de mes compétences. 
                Discutons de votre prochain projet ensemble !
              </p>
              <Button 
                className="hero-gradient hover:shadow-glow transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Démarrer un projet
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;