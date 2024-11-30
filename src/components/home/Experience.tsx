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
    <div>
      <h2 className="text-2xl font-mono text-cyber-green mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="glass rounded-lg p-4">
            <div className="flex items-start gap-4">
              <span className="text-cyber-gray font-mono text-sm whitespace-nowrap">{exp.period}</span>
              <div className="flex-1">
                <span className="text-cyber-gray/60 text-sm block mb-2">{exp.company}</span>
                <h3 className="text-lg text-white mb-2">{exp.title}</h3>
                <p className="text-cyber-gray/80 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;