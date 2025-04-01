import { useEffect, useRef } from "react";

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <div className="reveal mb-6">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium">About Me</span>
          </div>
        </div>
        <h2 className="section-title reveal" style={{ transitionDelay: "100ms" }}>
          Passionate about technology and security
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="reveal" style={{ transitionDelay: "200ms" }}>
            {/* Profile image with glassmorphism effect */}
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-4/5 h-4/5 rounded-2xl overflow-hidden glass shadow-lg">
                  <div className="w-full h-full">
                    <img 
                      src="/images/Connect (1).webp" 
                      alt="Nitesh Kumar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md z-0 animate-pulse-slow"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md z-0 animate-float"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg reveal" style={{ transitionDelay: "300ms" }}>
              I'm a passionate Frontend Developer and Ethical Hacker with expertise in creating beautiful, functional interfaces and ensuring digital security.
            </p>
            
            <p className="text-lg reveal" style={{ transitionDelay: "400ms" }}>
              With a strong foundation in both frontend development and cybersecurity, I bring a unique perspective to creating secure, user-friendly applications that not only look great but also prioritize privacy and data protection.
            </p>
            
            <p className="text-lg reveal" style={{ transitionDelay: "500ms" }}>
              My journey in tech began with a fascination for building things on the web, which evolved into a deeper interest in understanding the security implications of the systems we build. This dual expertise allows me to create solutions that are both beautiful and secure.
            </p>
            
            <div className="pt-4 reveal" style={{ transitionDelay: "600ms" }}>
              <h3 className="text-xl font-semibold mb-4">My approach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovative Design</h4>
                    <p className="text-sm text-foreground/80">Creating intuitive and engaging user experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Security-First</h4>
                    <p className="text-sm text-foreground/80">Building with security and privacy in mind</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Collaborative</h4>
                    <p className="text-sm text-foreground/80">Working closely with clients to achieve goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Problem Solver</h4>
                    <p className="text-sm text-foreground/80">Finding efficient solutions to complex challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
