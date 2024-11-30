const Experience = () => {
  const experiences = [
    {
      title: "Manager",
      company: "Deloitte India - Attack Surface Management",
      period: "Jun 2024 - Present",
      description: "Leading multiple VAPT, Appsec, Risk Management related engagements"
    },
    {
      title: "Deputy Manager",
      company: "Deloitte India - Cyber Risk",
      period: "Jun 2022 - May 2024",
      description: "Performed Purple teaming, Breach and Attack simulation, Developed scripts for automating 50+ attack scenarios"
    },
    {
      title: "Assistant Manager",
      company: "Deloitte India - Cyber Risk",
      period: "Jun 2019 - May 2022",
      description: "Promoted to Assistant Manager. Performed Vulnerability Management, Application Security Assessments, Penetration Testing and analysed alerts from Automated tools"
    },
    {
      title: "Cyber Security Consultant",
      company: "Deloitte India - Cyber Risk",
      period: "Jun 2017 - May 2019",
      description: "Performed Application security assessments, Configuration Review, involved in kick off meetings, Explained security issues and remediations to Clients, management and developers"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">Experience</h2>
      <div className="grid grid-cols-1 gap-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow">
            <h3 className="text-xl text-cyber-green mb-2">{exp.title}</h3>
            <p className="text-cyber-gray mb-1">{exp.company}</p>
            <p className="text-sm text-cyber-gray/80 mb-2">{exp.period}</p>
            <p className="text-cyber-gray/90">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;