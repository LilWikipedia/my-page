const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2015-2017",
      description: "Specialized in Computer Security and Cryptography"
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      school: "Indian Institute of Technology",
      year: "2011-2015",
      description: "First Class with Distinction"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-blue mb-8">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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