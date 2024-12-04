import AudioPlayer from "@/components/AudioPlayer";
import Achievements from "@/components/home/Achievements";
import Header from "@/components/home/Header";
import Loading from "@/components/ui/loading";
import { Building, Droplets, Fan, Gamepad2Icon, Network, Piano, RadioTower, SquarePower, Zap } from "lucide-react";
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
 
      </header>

      
      {/* About Me Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">About Me</h2>
        <div className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow space-y-6">
          <p className="text-cyber-gray">
            Hello, I'm Cruz! Welcome to my website! I am a hands-on technician, Fortnite content creator, and audio enthusiast. 
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl text-cyber-green">Career:</h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-gray">
              
              <li>Working as a contractor for AT&T contributing to the 5G deployment</li>
              <li>Working with several property management companies ensuring all assets are at peak performance</li>
              <li>Designing, installing, and integrating electrical systems to optimize processes </li>
              <li>Designing, programming, and troubleshooting PLC systems </li>
              <li>Working as a data technician on structured cabling projects, network troubleshooting, ect.</li>
              <li>Trained in rope access and high angle rescue</li>
            

            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl text-cyber-green">Game Development:</h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-gray">
              <li>My content has reached an audience of over 15 million users with over 30 million impressions.</li>
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
            <h3 className="text-xl text-cyber-green">Sound:</h3>
            <ul className="list-disc list-inside space-y-2 text-cyber-gray">
              
              <li>I have been creating, composing, and designing sound for over 15 years</li>
              <li>While not at a professional capacity, my audio has still reached over 100k views</li>
              <li>My public facing archive of sound spans over 5 gigabytes, while privately it's larger than 20 gigabytes</li>
              <li>My deep passion led me to build a 200 sq.ft. fully equiped studio in my backyard </li>
              <li>If you are an artist who is need of a producer or engineer, please reach out via email or socials </li>
              <li>This site contains many of my instrumentals, feel free to browse them and inquire if interested</li>
              <li>I am NOT interested in music promotion or any other similar solicitation</li>
            

            </ul>
          </div>
        </div>
      </section>
      
            {/* Skills Section */}
            <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Electrical Systems", icon: <Zap className="text-cyber-green" />, level: 99 },
            { name: "Building Automation", icon: <Building className="text-cyber-green" />, level: 90 },
            { name: "PLCs", icon: <SquarePower className="text-cyber-green" />, level: 90 },
            { name: "RF", icon: <RadioTower className="text-cyber-green" />, level: 75 },
            { name: "Game Development", icon: <Gamepad2Icon className="text-cyber-green" />, level: 80 }, 
            { name: "Audio Engineering", icon: <Piano className="text-cyber-green" />, level: 99 },
            { name: "Network & Data", icon: <Network className="text-cyber-green" />, level: 95 },
            { name: "HVAC", icon: <Fan className="text-cyber-green" />, level: 85 },
            { name: "Plumbing Systems", icon: <Droplets className="text-cyber-green" />, level: 98 },
            
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

      

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-mono text-cyber-blue mb-8">Contact</h2>
        <div className="bg-glass p-8 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
          <div className="font-mono space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $EMAIL</span>
              <span className="ml-2 text-cyber-green">cruzwootten@icloud.com</span>
            </div>
      
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $LOCATION</span>
              <span className="ml-2 text-cyber-green">Reno, NV</span>
            </div>
      
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $X</span>
              <span className="ml-2">
                <a 
                  href="https://x.com/Lilwikipediafn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyber-green hover:animate-text-glow"
                >
                  @LilWikipediaFN
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-green">$</span>
              <span className="text-cyber-gray">echo $TIKTOK</span>
              <span className="ml-2">
                <a 
                  href="https://www.tiktok.com/@lilwikipediafn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyber-green hover:animate-text-glow"
                >
                  @LilWikipediaFN
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <AudioPlayer />
      </div>
  );
};


export default Index;

