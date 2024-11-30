const Education = () => {
  const education = [
    {
      degree: "MTech in Cyber Security and Incident Response (Masters Degree)",
      school: "National Forensic Sciences University",
      year: "2015-2017",
      description: "Masters Degree in Cyber Security. Learned performing Vulnerability Analysis, Incident Response, Application Security, SCADA Security, Risk Management and more"
    },
    {
      degree: "Bachelor's Degree-Computer Engineering",
      school: "Ahmedabad Institute of Technology",
      year: "2010-2015",
      description: "Studied Computer Engineering. Learned concepts of Computer Networks, Java, C, C++, asp.net, C#, Database Management System, Operating Systems, Microprocessors and more."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">Education</h2>
      <div className="grid grid-cols-1 gap-6">
        {education.map((edu) => (
          <div key={edu.degree} className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow">
            <h3 className="text-xl text-cyber-green mb-2">{edu.degree}</h3>
            <p className="text-cyber-gray mb-1">{edu.school}</p>
            <p className="text-sm text-cyber-gray/80 mb-2">{edu.year}</p>
            <p className="text-cyber-gray/90">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;