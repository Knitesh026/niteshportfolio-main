import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { ArrowDown, BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for a more dramatic effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Handle scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="section-container relative z-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className={cn(
          "max-w-2xl transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full backdrop-blur-sm border border-primary/20 animate-fade-in">
            <span className="text-sm font-medium">Frontend Developer & Ethical Hacker</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Hi, I'm <span className="text-primary">Nitesh Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in max-w-2xl" style={{ animationDelay: "400ms" }}>
            I craft beautiful, user-friendly interfaces and secure digital experiences with code and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button 
              size="lg" 
              className="rounded-full px-8 transition-all hover:shadow-lg hover:scale-105 bg-primary"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 transition-all hover:shadow-lg hover:bg-primary/10"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* User profile image - right side */}
        <div className={cn(
          "mt-12 md:mt-0 transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )} style={{ animationDelay: "300ms" }}>
          <div className="relative">
            {/* Background gradient circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-xl -z-10 animate-pulse-slow"></div>
            
            {/* User avatar with updated size from 72x72 to 64x64 */}
            <Avatar className="h-72 w-72 border-4 border-primary/20 shadow-xl animate-float mt-10">
              <AvatarImage 
                src="/images/Connect1.webp" 
                alt="Nitesh Kumar" 
                className="object-cover"
                loading="lazy" /* Added lazy loading */
              />
              <AvatarFallback className="text-6xl bg-muted">NK</AvatarFallback>
            </Avatar>
            
            {/* Verified badge */}
            <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 shadow-lg border-2 border-green-500 animate-scale">
              <BadgeCheck size={32} className="text-green-500" />
            </div>
          </div>
        </div>
        
        <div className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <div 
            className="animate-bounce p-2" 
            onClick={scrollToAbout}
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
