import Achievements from "@/components/home/Achievements";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Header from "@/components/home/Header";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";
import { Download, Lock, Shield, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

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
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12">
        <div className="overflow-hidden whitespace-nowrap border-r-2 border-cyber-green animate-typing">
          <h1 className="text-4xl md:text-6xl font-mono text-cyber-green animate-text-glow">
            Cruz Wootten
          </h1>
          <p className="text-xl md:text-2xl mt-2">Technician, Game Designer, and Audio Enthusiast</p>
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

      
      {/* About Me Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">About Me</h2>
        <div className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow space-y-6">
          <p className="text-cyber-gray">
            I am a hands-on technician with a wide range of experience from RF/5G deployments, to full-stack development, to game design. My free time is spent with my family, detailing sound, riding my motorcycles, or researching.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl text-cyber-green">Game Design:</h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-gray">
              
              <li>Content I have created has reached an audience of over 15 million users across more than 100 countries</li>
              <li>Proud to be considered a 'Founder' in the Fortnite content creation community, having over 5 years experience</li>
              <li>Developing content via Unreal Editor for Fortnite enabled my skillset to segue to Unreal Engine broadining my capabilities</li>
              <li>Developed over 80 custom experiences, using UEFN, and Epic Games new scriping language 'Verse'</li>
              <li>As a champion to the community, and a proponent of Wikipedia- I created the wikipedia pages for:</li>
              <li>Unreal Editor for Fortnite - https://en.wikipedia.org/wiki/Unreal_Editor_for_Fortnite</li>
              <li>Verse (Programming Language) - https://en.wikipedia.org/wiki/Verse_(programming_language)</li>
              <li>I also created and designed an alternative documentation website for the Verse programming language for easier reference</li>
              <li>https://www.FNCwiki.com</li>

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


      
      {/* Keep existing sections */}
      <Achievements />
      <Testimonials />


      {/* Education and Experience Sections */}

      {/* Education and Experience Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Education />
        <Experience />
      </div>
      
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

