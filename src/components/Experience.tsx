const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "RMA Metering Pvt LTD",
      period: "Feb 2025 – Present",
      description:
        "Built and maintained a configuration application for flow computers used in gas metering systems. Implemented UI with React + MobX and integrated device communication protocols (Modbus, HART).",
      highlights: [
        "Developed hierarchical device modeling system",
        "Integrated Modbus and HART communication protocols",
        "Collaborated with hardware teams for register mapping",
      ],
    },
    {
      title: "Angular Developer",
      company: "ALR Soft",
      period: "Jan 2022 – Dec 2024",
      description:
        "Developed UI components, template-driven & reactive forms, routing, authentication, and integrated REST APIs for full-stack projects using MEAN and MERN patterns.",
      highlights: [
        "Built reusable UI components and form systems",
        "Implemented routing and authentication flows",
        "Integrated REST APIs for full-stack applications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-effect"></div>
              
              <div className="bg-card p-6 rounded-lg border border-border card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-primary font-medium mb-3">{exp.company}</p>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
