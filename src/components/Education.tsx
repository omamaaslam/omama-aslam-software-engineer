import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "PMAS ARID Agriculture University",
      period: "2017 – 2021",
    },
    {
      degree: "Intermediate (Computer Science)",
      institution: "Govt College Model Town, Lahore",
      period: "2015 – 2017",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg border border-border card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground font-mono">
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span>
              <span className="text-muted-foreground">Urdu (Native)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span>
              <span className="text-muted-foreground">Punjabi (Native)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span>
              <span className="text-muted-foreground">English (Professional)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
