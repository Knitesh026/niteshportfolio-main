
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  variant?: "default" | "hacking";
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
  tags,
  variant = "default"
}) => {
  return (
    <div 
      className={cn(
        "rounded-2xl overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-1 group",
        "border border-border/40 hover:border-primary/20 hover:shadow-lg",
        variant === "default" 
          ? "bg-card dark:bg-card/60 backdrop-blur-sm" 
          : "bg-primary/5 dark:bg-primary/10 backdrop-blur-sm"
      )}
    >
      <div className="p-6 flex flex-col h-full">
        <div 
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
            "transition-all duration-300 group-hover:scale-110",
            variant === "default" 
              ? "bg-primary/10 text-primary" 
              : "bg-secondary dark:bg-secondary/20 text-primary"
          )}
        >
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/80 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={cn(
                "px-2 py-1 text-xs rounded-md",
                variant === "default" 
                  ? "bg-secondary/50 dark:bg-secondary/20 text-foreground/80" 
                  : "bg-primary/10 dark:bg-primary/20 text-foreground/80"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
