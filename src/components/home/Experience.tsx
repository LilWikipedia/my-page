const Experience = () => {
  const experiences = [
    {
      period: "Jun 2024 - Present",
      company: "Deloitte India - Attack Surface Management",
      title: "Manager",
      description: "Leading multiple VAPT, Appsec, Risk Management related engagements"
    },
    {
      period: "Jun 2022 - May 2024",
      company: "Deloitte India - Cyber Risk",
      title: "Deputy Manager",
      description: "Performed Purple teaming, Breach and Attack simulation, Developed scripts for automating 50+ attack scenarios"
    },
    {
      period: "Jun 2019 - May 2022",
      company: "Deloitte India - Cyber Risk",
      title: "Assistant Manager",
      description: "Promoted to Assistant Manager. Performed Vulnerability Management, Application Security Assessments, Penetration Testing and analysed alerts from Automated tools"
    },
    {
      period: "Jun 2017 - May 2019",
      company: "Deloitte India - Cyber Risk",
      title: "Cyber Security Consultant",
      description: "Performed Application security assessments, Configuration Review, involved in kick off meetings, Explained security issues and remediations to Clients, management and developers"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-blue mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.title} className="glass p-6 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <span className="text-cyber-gray font-mono">{exp.period}</span>
              <span className="text-cyber-gray/60">{exp.company}</span>
            </div>
            <h3 className="text-xl text-white mb-3">{exp.title}</h3>
            <p className="text-cyber-gray/80 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;