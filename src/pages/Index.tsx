import { Download, Shield, Terminal, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/home/Header";
import Education from "@/components/home/Education";
import Testimonials from "@/components/home/Testimonials";
import Achievements from "@/components/home/Achievements";
import Loading from "@/components/ui/loading";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate loading time (remove this in production and use real loading states)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      <Header />
      
      <header className="container mx-auto px-4 py-12">
        <div className="overflow-hidden whitespace-nowrap border-r-2 border-cyber-green animate-typing">
          <h1 className="text-4xl md:text-6xl font-mono text-cyber-green animate-text-glow">
            Ashutosh Barot
          </h1>
          <p className="text-xl md:text-2xl mt-2">Security Engineer & Researcher</p>
        </div>
        <div className="mt-6">
          <Button 
            variant="outline" 
            className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark"
            onClick={() => window.open('https://ashutoshbarot.com/Ashutosh%20Barot%20-%20Cybersec%20Resume%207%20Yrs%20Exp_public.pdf', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">Technical Skills</h2>
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

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">About Me</h2>
        <div className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow space-y-6">
          <p className="text-cyber-gray">
            Passionate Security Researcher with proven expertise in identifying and mitigating critical vulnerabilities across web,
            mobile, and IT infrastructure. My work has helped prevent potential data leaks for over 500 million users and received
            recognition from top global companies.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl text-cyber-green">Adversary Simulation and CVEs:</h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-gray">
              <li>Assigned 12 CVEs, including CVE-2019-6120, CVE-2019-6121, CVE-2019-6122 for authorization vulnerabilities in Nicehash Miner</li>
              <li>Bypassed a popular Mobile Antivirus's SMS security feature using a '%' character</li>
              <li>Disabled a prominent EDR through BeyondTrust misconfigurations, achieving Local Privilege Escalation (LPE)</li>
              <li>Developed over 80 custom simulations with scripts and Atomic Red Team YAML files</li>
              <li>Simulated abuse of stolen Azure token from external networks</li>
              <li>Conducted Black Box Testing using custom wordlists to uncover "Shadow IT" assets</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-cyber-green">Bug Bounty and Hall of Fames:</h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-gray">
              <li>Rank #2 on Coinbase's bug bounty program on Hackerone (since 2022)</li>
              <li>Acknowledged by Google, Rapid7, FireEye, United Nations, Amazon, U.S. Department of Defense, and numerous Fortune 500 companies</li>
              <li>Received Abuse research grant from Google to identify abuse risks in Google Meet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Keep existing sections */}
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
              <span className="ml-2 text-cyber-green">a@ashutoshbarot.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $LOCATION</span>
              <span className="ml-2 text-cyber-green">Remote</span>
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
