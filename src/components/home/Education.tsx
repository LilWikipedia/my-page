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
    <div>
      <h2 className="text-2xl font-mono text-cyber-green mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="glass rounded-lg p-4">
            <div className="flex items-start gap-4">
              <span className="text-cyber-gray font-mono text-sm whitespace-nowrap">{edu.period}</span>
              <div className="flex-1">
                <span className="text-cyber-gray/60 text-sm block mb-2">{edu.school}</span>
                <h3 className="text-lg text-white mb-2">{edu.degree}</h3>
                <p className="text-cyber-gray/80 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;