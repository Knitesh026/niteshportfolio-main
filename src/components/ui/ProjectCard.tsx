import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  category: "frontend" | "hacking" | "all";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-2xl overflow-hidden border border-border/40 h-full transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <div 
          className="absolute inset-0 transition-transform duration-700"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="absolute top-4 right-4 z-10">
          <div 
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-full",
              category === "frontend" 
                ? "bg-blue-500/90 text-white" 
                : "bg-purple-500/90 text-white",
              "backdrop-blur-sm"
            )}
          >
            {category === "frontend" ? "Frontend" : "Hacking"}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/80 mb-4 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-md bg-secondary/50 dark:bg-secondary/20 text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5"
            >
              <Button 
                size="sm" 
                className="rounded-md flex items-center gap-1.5 transition-all"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </Button>
            </a>
          )}
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5"
            >
              <Button 
                size="sm" 
                variant="outline" 
                className="rounded-md flex items-center gap-1.5 transition-all"
              >
                <Github size={16} />
                <span>Code</span>
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
