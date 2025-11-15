const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted-foreground">
            <p className="text-base md:text-lg leading-relaxed">
              I'm a creative and detail-oriented software engineer with 3.5+ years of experience 
              building responsive, accessible web applications using MEAN and MERN stacks. I focus 
              on translating UI/UX designs into high-quality, performant code with an emphasis on 
              accessibility (WCAG), cross-browser compatibility, and maintainability.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              At RMA Metering I work on configuration and monitoring applications for gas metering 
              flow computers — integrating device protocols, modeling hierarchical data structures, 
              and ensuring accurate register mapping in close collaboration with hardware teams.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Previously, I built UI components, forms, routing, and full-stack applications using 
              Angular and Node at ALR Soft.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              When I'm not coding, I explore new web technologies and work on personal projects 
              that sharpen both frontend and backend skills.
            </p>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
              What I Do
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Custom web apps & dashboards (React / Angular)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Frontend architecture & component design (TypeScript, SASS, Tailwind)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>State management & real-time UI (MobX, Socket.IO)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>REST API integration and small backend services (Node, Express, MongoDB)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▹</span>
                <span>Accessibility improvements & cross-browser testing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
