import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Flow Computer",
      description: "A monitoring/configuration app for flow/comms devices. Built with React and MobX; focuses on hierarchical device modeling and robust device communication.",
      tags: ["React", "MobX", "TypeScript", "Device Protocols"],
      link: "#",
    },
    {
      title: "Inheritance Calculator",
      description: "Interactive tool to compute and visualize inheritance shares with complex logic and intuitive UI.",
      tags: ["React", "JavaScript", "UI/UX"],
      link: "#",
    },
    {
      title: "Blog App with Admin Panel",
      description: "Full-stack CMS with post creation, user roles, and admin controls for content management.",
      tags: ["MERN", "Node.js", "MongoDB", "Express"],
      link: "#",
    },
    {
      title: "E-commerce Store",
      description: "Product listing, cart, and checkout flows with a responsive UI and seamless user experience.",
      tags: ["React", "Node.js", "REST API"],
      link: "#",
    },
    {
      title: "Resume Builder App",
      description: "Generate downloadable resumes from form data with multiple templates and customization options.",
      tags: ["React", "PDF Generation", "Forms"],
      link: "#",
    },
    {
      title: "Angular Gemini AI Chatbot",
      description: "Chat interface integrated into an Angular app with AI-powered responses.",
      tags: ["Angular", "AI Integration", "TypeScript"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my full-stack development skills, from frontend interfaces to backend systems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-card border-border card-hover group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 min-h-[60px]">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/omamaaslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            View more projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
