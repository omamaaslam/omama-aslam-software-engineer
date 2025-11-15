const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS/SASS", "JavaScript (ES6+)", "TypeScript", "React", "Angular", "Tailwind", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "SQLite", "RESTful APIs", "Socket.IO"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "MobX", "Agile", "WCAG", "Cross-browser Testing"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg border border-border card-hover"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
