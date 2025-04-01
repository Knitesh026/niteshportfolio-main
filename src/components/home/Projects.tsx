import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "frontend" | "hacking";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Website development",
    description: "A modern, accessible web interface with advanced filtering and cart functionality",
    image: "/images/frontend-development.webp", // Updated to WebP
    tags: ["React", "Tailwind CSS", "Redux", "API Integration"],
    demoUrl: "https://preview--pagecraftweb.lovable.app/",
    repoUrl: "https://github.com/Knitesh026/pagecraftweb.git",
    category: "frontend" as ProjectCategory
  },
  {
    id: 2,
    title: "Android Security Scanner",
    description: "A tool for identifying common security vulnerabilities in Android applications",
    image: "/images/Android.jpeg", // Updated to WebP
    tags: ["Kotlin", "Android", "Cybersecurity", "Static Analysis"],
    demoUrl: "#",
    repoUrl: "#",
    category: "hacking" as ProjectCategory
  },
  {
    id: 3,
    title: "Business & Personal Portfolio",
    description: "A web app that helps professionals create stunning portfolio websites without coding",
    image: "/images/jk.png",
    tags: ["JavaScript", "Vue.js", "Firebase", "Templates"],
    demoUrl: "https://preview--niteshp01.lovable.app/",
    repoUrl: "https://github.com/Knitesh026/niteshp01.git",
    category: "frontend" as ProjectCategory
  },
  {
    id: 4,
    title: "Network Vulnerability Scanner",
    description: "An automated tool to detect security weaknesses in network infrastructures",
    image: "/images/Security.jpeg",
    tags: ["Python", "Network Security", "Automation", "Reporting"],
    demoUrl: "#",
    repoUrl: "#",
    category: "hacking" as ProjectCategory
  },
  {
    id: 5,
    title: "Personal & Commercial landing Page",
    description: "A comprehensive admin dashboard for SaaS applications with analytics and user management",
    image: "/images/DBM.png",
    tags: ["React", "Chart.js", "Node.js", "MongoDB"],
    demoUrl: "https://preview--downloadbuddydm.lovable.app/",
    repoUrl: "https://github.com/Knitesh026/downloadbuddydm.git",
    category: "frontend" as ProjectCategory
  },
  {
    id: 6,
    title: "Security Training Platform",
    description: "An interactive learning platform for cybersecurity education with practical exercises",
    image: "/images/Network.png",
    tags: ["React", "Express", "Docker", "CTF Challenges"],
    demoUrl: "#",
    repoUrl: "#",
    category: "hacking" as ProjectCategory
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = section.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Preload the largest contentful paint image
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/images/frontend-development.webp"; // Example of largest image
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="reveal mb-6">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium">My Work</span>
          </div>
        </div>
        <h2 className="section-title reveal" style={{ transitionDelay: "100ms" }}>
          Featured Projects
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "200ms" }}>
          A selection of my recent work across frontend development and ethical hacking
        </p>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 reveal" style={{ transitionDelay: "300ms" }}>
          <div className="inline-flex p-1 rounded-lg bg-secondary/70 dark:bg-secondary/30 backdrop-blur-sm">
            <Button
              onClick={() => setActiveCategory("all")}
              variant={activeCategory === "all" ? "default" : "ghost"}
              className={cn(
                "rounded-md transition-all",
                activeCategory === "all" ? "shadow-sm" : ""
              )}
            >
              All Projects
            </Button>
            <Button
              onClick={() => setActiveCategory("frontend")}
              variant={activeCategory === "frontend" ? "default" : "ghost"}
              className={cn(
                "rounded-md transition-all",
                activeCategory === "frontend" ? "shadow-sm" : ""
              )}
            >
              Frontend
            </Button>
            <Button
              onClick={() => setActiveCategory("hacking")}
              variant={activeCategory === "hacking" ? "default" : "ghost"}
              className={cn(
                "rounded-md transition-all",
                activeCategory === "hacking" ? "shadow-sm" : ""
              )}
            >
              Hacking
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="reveal" style={{ transitionDelay: `${400 + index * 100}ms` }}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
                category={project.category}
                lazy={true} // Enable lazy loading
              />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-12 reveal" style={{ transitionDelay: "800ms" }}>
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full px-8 transition-all hover:shadow-lg hover:bg-primary/10"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
