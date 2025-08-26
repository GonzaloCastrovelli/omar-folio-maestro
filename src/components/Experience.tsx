import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Trophy } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "TYTHON",
    position: "Développeur Full Stack - Stagiaire",
    period: "Mars 2024 - Août 2024",
    location: "Casablanca, Maroc",
    duration: "6 mois",
    description: "Stage de fin d'études en développement full stack au sein d'une équipe dynamique, avec participation active à des projets innovants et apprentissage des bonnes pratiques du développement professionnel.",
    achievements: [
      "Développement d'applications web complètes avec React et PHP",
      "Collaboration en équipe sur des projets clients variés", 
      "Mise en place de bonnes pratiques de développement",
      "Participation à la conception et l'architecture de solutions",
      "Optimisation des performances et de l'expérience utilisateur"
    ],
    technologies: [
      "React.js", "TypeScript", "JavaScript", "PHP", "MySQL", 
      "HTML5", "CSS3", "Tailwind CSS", "Git", "WordPress"
    ]
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Mon <span className="text-gradient">expérience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une expérience enrichissante qui m'a permis de mettre en pratique mes compétences 
              dans un environnement professionnel stimulant.
            </p>
          </div>

          {/* Experience Card */}
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent opacity-30" />
            
            <div className="relative pl-16">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-glow transform -translate-x-4 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </div>

              <Card className="card-gradient p-8 hover-lift shadow-card reveal">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      {experience.period}
                    </Badge>
                    <Badge className="bg-accent/20 text-accent border-accent/30 px-3 py-1">
                      {experience.duration}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold font-poppins mb-2">{experience.position}</h3>
                  <div className="text-xl text-primary font-semibold mb-2">{experience.company}</div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <Trophy className="w-5 h-5 text-accent" />
                    Réalisations principales
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/10 transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 reveal">
            <Card className="card-gradient p-8 hover-lift shadow-card max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Prêt pour de nouveaux défis</h3>
              <p className="text-muted-foreground mb-6">
                Fort de cette expérience enrichissante, je suis maintenant prêt à contribuer 
                à des projets ambitieux et à continuer mon développement professionnel.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                  Disponible pour opportunités
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2">
                  Remote friendly
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;