import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Globe,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (remplacer par vraie logique d'envoi)
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "omar.cherkaoui@email.com",
      href: "mailto:omar.cherkaoui@email.com",
      description: "Réponse sous 24h"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 6 XX XX XX XX",
      href: "tel:+212600000000",
      description: "Lun-Ven 9h-18h"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Casablanca, Maroc",
      href: "#",
      description: "Disponible en remote"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@omarcherkaoui"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      username: "Omar Cherkaoui"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "#",
      username: "omarcherkaoui.dev"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
              Restons en <span className="text-gradient">contact</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une idée de projet ? Une opportunité à discuter ? 
              N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal">
              <Card className="card-gradient p-8 hover-lift shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-poppins">Envoyez-moi un message</h3>
                    <p className="text-muted-foreground">Je vous répondrai rapidement</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="bg-muted/10 border-muted/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="bg-muted/10 border-muted/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Sujet de votre message"
                      required
                      className="bg-muted/10 border-muted/30 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Votre message..."
                      required
                      rows={5}
                      className="bg-muted/10 border-muted/30 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hero-gradient hover:shadow-glow transition-smooth text-lg py-6"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="reveal">
                <Card className="card-gradient p-8 hover-lift shadow-card">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Informations de contact</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <div key={info.label} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{info.label}</h4>
                            <a 
                              href={info.href}
                              className="text-primary hover:text-accent transition-smooth block mb-1"
                            >
                              {info.value}
                            </a>
                            <p className="text-muted-foreground text-sm">{info.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>

              {/* Social Links */}
              <div className="reveal">
                <Card className="card-gradient p-8 hover-lift shadow-card">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Réseaux sociaux</h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-lg bg-muted/10 hover:bg-primary/10 transition-smooth group"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-smooth">
                              {social.label}
                            </h4>
                            <p className="text-muted-foreground text-sm">{social.username}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </Card>
              </div>

              {/* Availability Status */}
              <div className="reveal">
                <Card className="card-gradient p-6 text-center hover-lift shadow-card">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 bg-accent rounded-full animate-pulse" />
                  </div>
                  <h3 className="font-bold mb-2">Disponible pour nouveaux projets</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ouvert aux opportunités freelance et CDI
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      Remote OK
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Full Stack
                    </Badge>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;