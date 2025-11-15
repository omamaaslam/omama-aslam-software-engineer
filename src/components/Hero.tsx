import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <p className="text-primary text-sm md:text-base mb-4 font-mono">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-foreground">
              Omama Aslam
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-muted-foreground">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              React · TypeScript · MobX · Node.js
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              I build reliable, user-centered web applications and dashboards for data-driven systems. 
              With 3.5+ years of hands-on experience on MEAN / MERN stacks, I turn complex UI/UX designs 
              into fast, accessible, and maintainable code.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" onClick={scrollToProjects}>
                View Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open("/OmamaAslam_Resume.pdf", "_blank")}
              >
                Download Resume
              </Button>
              <Button size="lg" variant="secondary" onClick={scrollToContact}>
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 justify-center text-muted-foreground">
              <a
                href="https://github.com/omamaaslam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/omamaaslam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:chohanomama@gmail.com"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+923088924783"
                className="hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
