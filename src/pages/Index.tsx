import { Shield, Terminal, Server, Database, Bug, Lock, Mail, MapPin, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      {/* Quick Contact Info */}
      <div className="container mx-auto px-4 py-4 flex justify-end space-x-6 text-sm">
        <a href="mailto:ashutosh@barot.me" className="flex items-center gap-2 text-cyber-green hover:animate-text-glow">
          <Mail size={14} />
          ashutosh@barot.me
        </a>
        <a href="https://ashutoshbarot.com" target="_blank" className="flex items-center gap-2 text-cyber-green hover:animate-text-glow">
          <Globe size={14} />
          ashutoshbarot.com
        </a>
        <span className="flex items-center gap-2 text-cyber-green">
          <MapPin size={14} />
          San Francisco Bay Area
        </span>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="overflow-hidden whitespace-nowrap border-r-2 border-cyber-green animate-typing">
          <h1 className="text-4xl md:text-6xl font-mono text-cyber-green animate-text-glow">
            Ashutosh Barot
          </h1>
          <p className="text-xl md:text-2xl mt-2">Security Engineer & Researcher</p>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-mono text-cyber-blue mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Network Security", icon: <Shield className="text-cyber-green" />, level: 90 },
            { name: "Penetration Testing", icon: <Terminal className="text-cyber-green" />, level: 85 },
            { name: "System Administration", icon: <Server className="text-cyber-green" />, level: 80 },
            { name: "Database Security", icon: <Database className="text-cyber-green" />, level: 75 },
            { name: "Malware Analysis", icon: <Bug className="text-cyber-green" />, level: 85 },
            { name: "Encryption", icon: <Lock className="text-cyber-green" />, level: 90 },
          ].map((skill) => (
            <div key={skill.name} className="bg-glass p-4 rounded-lg backdrop-blur-sm animate-border-glow">
              <div className="flex items-center gap-2 mb-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <div className="h-2 bg-cyber-dark rounded-full">
                <div
                  className="h-full bg-cyber-green rounded-full transition-all duration-1000"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-mono text-cyber-blue mb-8">Experience</h2>
        <div className="space-y-6">
          {[
            {
              title: "Senior Security Engineer",
              company: "CyberTech Solutions",
              period: "2020 - Present",
              description: "Leading security operations and incident response team",
            },
            {
              title: "Security Analyst",
              company: "SecureNet Systems",
              period: "2018 - 2020",
              description: "Conducted vulnerability assessments and penetration testing",
            },
            {
              title: "Junior Security Engineer",
              company: "DataGuard Inc",
              period: "2016 - 2018",
              description: "Implemented security controls and monitored network traffic",
            },
          ].map((exp) => (
            <div key={exp.title} className="bg-glass p-6 rounded-lg backdrop-blur-sm">
              <div className="font-mono">
                <span className="text-cyber-green">$</span> cat experience/{exp.period}
              </div>
              <h3 className="text-xl text-cyber-green mt-2">{exp.title}</h3>
              <p className="text-sm text-cyber-gray">{exp.company}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Media Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-mono text-cyber-blue mb-8">Featured Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Cybersecurity Expert Warns of Rising Threats",
              publisher: "Tech Weekly",
              date: "2023",
              link: "#",
            },
            {
              title: "The Future of Network Security",
              publisher: "Security Today",
              date: "2023",
              link: "#",
            },
            {
              title: "Emerging Trends in Cyber Defense",
              publisher: "Digital Guardian",
              date: "2022",
              link: "#",
            },
            {
              title: "Expert Analysis: Cloud Security Challenges",
              publisher: "Cloud Tech Review",
              date: "2022",
              link: "#",
            },
          ].map((media) => (
            <div key={media.title} className="bg-glass p-6 rounded-lg backdrop-blur-sm hover:animate-border-glow cursor-pointer">
              <h3 className="text-xl text-cyber-green">{media.title}</h3>
              <div className="flex justify-between items-center mt-2 text-sm">
                <span className="text-cyber-gray">{media.publisher}</span>
                <span className="text-cyber-blue">{media.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-mono text-cyber-blue mb-8">Contact</h2>
        <div className="bg-glass p-6 rounded-lg backdrop-blur-sm max-w-md mx-auto">
          <div className="font-mono space-y-2">
            <p>
              <span className="text-cyber-green">$</span> echo $EMAIL
              <br />
              <span className="ml-4">john.doe@secure.net</span>
            </p>
            <p>
              <span className="text-cyber-green">$</span> echo $LOCATION
              <br />
              <span className="ml-4">Silicon Valley, CA</span>
            </p>
            <p>
              <span className="text-cyber-green">$</span> echo $GITHUB
              <br />
              <span className="ml-4">github.com/johndoe</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
