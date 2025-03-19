import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/ui/theme-provider";
import * as React from "react";

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[50vh] p-8 text-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-4">We're working on fixing this issue.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const Index = () => {
  const { theme } = useTheme();
  const { toast } = useToast();

  // Show welcome toast on first load
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    
    if (!hasSeenWelcome) {
      // Slight delay for better UX
      const timer = setTimeout(() => {
        toast({
          title: "Welcome to my portfolio!",
          description: "Feel free to explore my work and get in touch.",
        });
        sessionStorage.setItem("hasSeenWelcome", "true");
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Implement smooth reveal on scroll
  useEffect(() => {
    const handleRevealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      
      reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          reveal.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleRevealElements);
    // Initial check on page load
    handleRevealElements();
    
    return () => window.removeEventListener("scroll", handleRevealElements);
  }, []);

  return (
    <div className={`min-h-screen antialiased ${theme === "dark" ? "dark" : ""}`}>
      <Navbar />
      <main>
        <ErrorBoundary>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
