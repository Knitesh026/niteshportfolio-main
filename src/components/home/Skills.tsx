
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
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

  const developmentSkills = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="8.5"></line>
        </svg>
      ),
      tags: ["React", "Vue", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Landing Page Design",
      description: "Designing effective landing pages that convert visitors into customers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      tags: ["Conversion", "UX/UI", "A/B Testing", "Analytics", "SEO"]
    },
    {
      title: "Portfolio Design",
      description: "Creating beautiful portfolio websites for individuals and businesses",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      tags: ["Branding", "Visuals", "Optimization", "Responsive", "Mobile-first"]
    }
  ];

  const hackingSkills = [
    {
      title: "Information Gathering",
      description: "Collecting and analyzing information for security assessments",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      ),
      tags: ["OSINT", "Reconnaissance", "Footprinting", "Social Engineering"]
    },
    {
      title: "Android Hacking",
      description: "Security assessment and penetration testing for Android applications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      tags: ["APK Analysis", "Vulnerability Assessment", "Exploitation", "Patching"]
    },
    {
      title: "Cybersecurity",
      description: "Identifying and addressing security vulnerabilities in applications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      tags: ["Penetration Testing", "Security Audits", "Threat Modeling", "Risk Assessment"]
    },
    {
      title: "Linux & Payload Creation",
      description: "Expertise in Linux security and developing custom security tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11a9 9 0 0 1 9-9"></path>
          <path d="M4 4a16 16 0 0 1 16 16"></path>
          <circle cx="5" cy="19" r="1"></circle>
        </svg>
      ),
      tags: ["Bash Scripting", "Security Tools", "Exploitation", "Automation"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="section-container">
        <div className="reveal mb-6">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium">My Expertise</span>
          </div>
        </div>
        <h2 className="section-title reveal" style={{ transitionDelay: "100ms" }}>
          Skills & Capabilities
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "200ms" }}>
          I combine frontend development with ethical hacking knowledge to create secure and beautiful digital experiences
        </p>

        {/* Development Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 reveal" style={{ transitionDelay: "300ms" }}>
            Development Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentSkills.map((skill, index) => (
              <div key={`dev-${index}`} className="reveal" style={{ transitionDelay: `${400 + index * 100}ms` }}>
                <SkillCard 
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  tags={skill.tags}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hacking Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 reveal" style={{ transitionDelay: "700ms" }}>
            Ethical Hacking Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hackingSkills.map((skill, index) => (
              <div key={`hack-${index}`} className="reveal" style={{ transitionDelay: `${800 + index * 100}ms` }}>
                <SkillCard 
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  tags={skill.tags}
                  variant="hacking"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
