import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Instagram, Linkedin, Mail, Send, Twitter } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const templateParams = {
        from_name: (form.elements.namedItem("name") as HTMLInputElement).value,
        from_email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
        to_email: 'kr.nitesh026@gmail.com, kr.nitesh656@gmail.com'
      };

      await emailjs.send(
        'service_05roz21', // Replace with your EmailJS service ID
        'template_wmzu1g8', // Replace with your EmailJS template ID
        templateParams,
        'ai1g2C0xWp69MtQvY' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />, 
      url: "https://github.com/Knitesh026",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://www.linkedin.com/in/nitesh-kumar-109933104/",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="h-5 w-5" />, 
      url: "#",
      color: "hover:text-blue-400 dark:hover:text-blue-300"
    },
    { 
      name: "Instagran", 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://www.instagram.com/knitesh656/",
      color: "hover:text-blue-400 dark:hover:text-blue-300"
    },
    { 
      name: "Email", 
      icon: <Mail className="h-5 w-5" />, 
      url: "mailto:kr.nitesh656@gmail.com,kr.nitesh026@gmail.com",
      color: "hover:text-red-500 dark:hover:text-red-400"
    },
    {
      name: "Buy Me a Coffee",
      icon: (
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          width="24"
          className="inline-block"
        />
      ),
      url: "https://buymeacoffee.com/krnitesh02h",
      color: "hover:opacity-80"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="section-container">
        <div className="reveal mb-6">
          <div className="inline-block mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
        </div>
        <h2 className="section-title reveal" style={{ transitionDelay: "100ms" }}>
          Let's Work Together
        </h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: "200ms" }}>
          Have a project in mind or want to explore opportunities? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="reveal" style={{ transitionDelay: "300ms" }}>
            <div className="bg-card dark:bg-card/60 border border-border/40 rounded-2xl p-8 backdrop-blur-sm shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="rounded-lg border-border/50 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="rounded-lg border-border/50 focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="rounded-lg border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, questions, or opportunities..."
                    rows={5}
                    required
                    className="rounded-lg border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-lg transition-all duration-300 hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 lg:pl-8 reveal" style={{ transitionDelay: "400ms" }}>
            {/* Info Cards */}
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="bg-secondary/30 dark:bg-secondary/20 rounded-2xl p-6 backdrop-blur-sm border border-border/40">
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <p className="text-foreground/80">kr.nitesh656@gmail.com</p>
              </div>
              
              <div className="bg-secondary/30 dark:bg-secondary/20 rounded-2xl p-6 backdrop-blur-sm border border-border/40">
                <h4 className="text-lg font-medium mb-2">Location</h4>
                <p className="text-foreground/80">Bhopal, India</p>
              </div>
              
              <div className="bg-secondary/30 dark:bg-secondary/20 rounded-2xl p-6 backdrop-blur-sm border border-border/40">
                <h4 className="text-lg font-medium mb-2">Availability</h4>
                <p className="text-foreground/80">Open for freelance projects and full-time opportunities</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect with me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-secondary/50 dark:bg-secondary/30 text-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${link.color}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-foreground/70 pt-2">
                Feel free to reach out through any of these platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
