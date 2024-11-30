import { Download, Shield, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/home/Header";
import Education from "@/components/home/Education";
import Testimonials from "@/components/home/Testimonials";
import Achievements from "@/components/home/Achievements";
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      <Header />
      
      <header className="container mx-auto px-4 py-20">
        <div className="overflow-hidden whitespace-nowrap border-r-2 border-cyber-green animate-typing">
          <h1 className="text-4xl md:text-6xl font-mono text-cyber-green animate-text-glow">
            Ashutosh Barot
          </h1>
          <p className="text-xl md:text-2xl mt-2">Security Engineer & Researcher</p>
        </div>
        <div className="mt-8">
          <Button 
            variant="outline" 
            className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
              Download Resume
          </Button>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-mono text-cyber-blue mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Security Engineering", icon: <Shield className="text-cyber-green" />, level: 90 },
            { name: "Penetration Testing", icon: <Terminal className="text-cyber-green" />, level: 85 },
            { name: "System Security", icon: <Lock className="text-cyber-green" />, level: 90 },
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

      <Education />
      <Achievements />
      <Testimonials />

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-mono text-cyber-blue mb-8">Contact</h2>
        <div className="bg-glass p-8 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
          <div className="font-mono space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $EMAIL</span>
              <span className="ml-2 text-cyber-green">ashutosh@barot.me</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $LOCATION</span>
              <span className="ml-2 text-cyber-green">San Francisco Bay Area</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $WEBSITE</span>
              <span className="ml-2">
                <a href="https://ashutoshbarot.com" target="_blank" rel="noopener noreferrer" className="text-cyber-green hover:animate-text-glow">
                  ashutoshbarot.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;