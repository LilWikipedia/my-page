const Education = () => {
  const education = [
    {
      period: "2010-2015",
      school: "Ahmedabad Institute of Technology",
      degree: "Bachelor's Degree-Computer Engineering",
      description: "Studied Computer Engineering. Learned concepts of Computer Networks, Java, C, C++, asp.net, C#, Database Management System, Operating Systems, Microprocessors and more."
    },
    {
      period: "2015-2017",
      school: "National Forensic Sciences University",
      degree: "MTech in Cyber Security and Incident Response (Masters Degree)",
      description: "Masters Degree in Cyber Security. Learned performing Vulnerability Analysis, Incident Response, Application Security, SCADA Security, Risk Management and more"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-blue mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu) => (
          <div key={edu.degree} className="glass p-6 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <span className="text-cyber-gray font-mono">{edu.period}</span>
              <span className="text-cyber-gray/60">{edu.school}</span>
            </div>
            <h3 className="text-xl text-white mb-3">{edu.degree}</h3>
            <p className="text-cyber-gray/80 leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;