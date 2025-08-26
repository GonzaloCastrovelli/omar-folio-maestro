import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educations = [
    {
      year: "2023",
      title: "Diplôme Technicien Spécialisé",
      institution: "Centre de Formation Professionnel Multidisciplinaire Sidi Moumen",
      location: "Casablanca",
      field: "Développement Digital - Option Full Stack",
      description: "Formation complète en développement web avec une spécialisation full stack, couvrant les technologies frontend et backend modernes."
    },
    {
      year: "2020", 
      title: "Baccalauréat Sciences Mathématiques B",
      institution: "Lycée Jaber Bnou Hayan",
      location: "Casablanca",
      field: "Sciences Mathématiques",
      description: "Formation scientifique solide avec une spécialisation en mathématiques, développant les compétences analytiques et logiques."
    }
  ];

  return (
    <section id="formations" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Mon <span className="text-gradient">parcours</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un parcours éducatif qui m'a permis de développer mes compétences techniques 
              et ma passion pour le développement web.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 transform lg:-translate-x-px" />

            <div className="space-y-12">
              {educations.map((edu, index) => (
                <div 
                  key={edu.title}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-glow transform lg:-translate-x-4 flex items-center justify-center z-10">
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ml-16 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                  }`}>
                    <Card className="card-gradient p-6 hover-lift shadow-card reveal">
                      {/* Year Badge */}
                      <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold font-poppins mb-2">{edu.title}</h3>
                      <div className="space-y-2 mb-4">
                        <p className="text-accent font-medium">{edu.field}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.institution}, {edu.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { label: "Années d'études", value: "5+" },
              { label: "Technologies maîtrisées", value: "10+" },
              { label: "Projets réalisés", value: "15+" },
              { label: "Certifications", value: "2" }
            ].map((stat, index) => (
              <Card 
                key={stat.label}
                className="card-gradient p-6 text-center hover-lift shadow-card reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;