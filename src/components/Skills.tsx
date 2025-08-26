import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe,
  GitBranch,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "primary",
      skills: [
        { name: "React.js", level: "Avancé" },
        { name: "TypeScript", level: "Intermédiaire" },
        { name: "JavaScript", level: "Avancé" },
        { name: "HTML5/CSS3", level: "Expert" },
        { name: "Tailwind CSS", level: "Avancé" },
        { name: "Responsive Design", level: "Expert" }
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "accent",
      skills: [
        { name: "PHP", level: "Avancé" },
        { name: "MySQL", level: "Intermédiaire" },
        { name: "API REST", level: "Intermédiaire" },
        { name: "WordPress", level: "Expert" },
        { name: "Node.js", level: "Débutant" },
        { name: "Architecture MVC", level: "Intermédiaire" }
      ]
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "primary",
      skills: [
        { name: "UI/UX Design", level: "Intermédiaire" },
        { name: "Figma", level: "Intermédiaire" },
        { name: "Adobe XD", level: "Débutant" },
        { name: "Prototypage", level: "Intermédiaire" },
        { name: "Design System", level: "Intermédiaire" },
        { name: "Accessibilité", level: "Intermédiaire" }
      ]
    },
    {
      title: "Outils & Environnement",
      icon: GitBranch,
      color: "accent", 
      skills: [
        { name: "Git/GitHub", level: "Avancé" },
        { name: "VS Code", level: "Expert" },
        { name: "npm/Yarn", level: "Avancé" },
        { name: "Webpack/Vite", level: "Intermédiaire" },
        { name: "Linux/Windows", level: "Avancé" },
        { name: "Docker", level: "Débutant" }
      ]
    }
  ];

  const additionalSkills = [
    "Développement Full Stack",
    "Intégration API",
    "Bases de données",
    "Optimisation performance",
    "SEO technique",
    "Tests unitaires",
    "Déploiement web",
    "Maintenance applicative"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-accent/20 text-accent border-accent/30";
      case "Avancé": return "bg-primary/20 text-primary border-primary/30";
      case "Intermédiaire": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Débutant": return "bg-muted/20 text-muted-foreground border-muted/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getIconColor = (color: string) => {
    return color === "primary" ? "text-primary" : "text-accent";
  };

  return (
    <section id="competences" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Mes <span className="text-gradient">compétences</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un ensemble de compétences techniques et créatives acquises à travers 
              mes études, mon expérience professionnelle et mes projets personnels.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="card-gradient p-6 hover-lift shadow-card reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-${category.color}/20 flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${getIconColor(category.color)}`} />
                    </div>
                    <h3 className="text-xl font-bold font-poppins">{category.title}</h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-smooth"
                      >
                        <span className="font-medium">{skill.name}</span>
                        <Badge className={`${getLevelColor(skill.level)} text-xs`}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="reveal">
            <Card className="card-gradient p-8 hover-lift shadow-card">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-poppins mb-2">Compétences Transversales</h3>
                <p className="text-muted-foreground">
                  Autres domaines de compétence et soft skills
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {additionalSkills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 transition-smooth px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Skills Summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { label: "Langages", value: "8+", icon: Code },
              { label: "Frameworks", value: "6+", icon: Globe },
              { label: "Outils", value: "12+", icon: GitBranch },
              { label: "Années", value: "3+", icon: Zap }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label}
                  className="card-gradient p-6 text-center hover-lift shadow-card reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;