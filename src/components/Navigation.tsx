import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, GraduationCap, Briefcase, FolderOpen, Code, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "apropos", label: "À propos", icon: User },
    { id: "formations", label: "Formations", icon: GraduationCap },
    { id: "experience", label: "Expérience", icon: Briefcase },
    { id: "projets", label: "Projets", icon: FolderOpen },
    { id: "competences", label: "Compétences", icon: Code },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  const scrollToSection = (id: string) => {
    if (id === "accueil") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("accueil");
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
        <div className="card-gradient px-6 py-3 rounded-full shadow-card backdrop-blur-md border border-white/10">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full transition-smooth hover:bg-primary/20 ${
                    isActive 
                      ? "bg-primary/20 text-primary shadow-glow" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 rounded-full card-gradient shadow-card flex items-center justify-center"
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-20 right-6 left-6 card-gradient rounded-2xl shadow-card p-6">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full justify-start px-4 py-3 rounded-xl transition-smooth ${
                      isActive 
                        ? "bg-primary/20 text-primary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Logo/Brand */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="ghost"
          onClick={() => scrollToSection("accueil")}
          className="font-bold text-xl font-poppins hover:text-primary transition-smooth"
        >
          <span className="text-gradient">O</span>mar
        </Button>
      </div>
    </>
  );
};

export default Navigation;