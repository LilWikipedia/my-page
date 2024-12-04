import { Award, ChartColumnIncreasing, SquarePower } from "lucide-react";

const Achievements = () => {


  const achievements = [
    {
      title: "Career",
      description: "Designed, installed, and integrated a PLC system to control and distribute compressed air to various departments at slot machine manufacturer IGT's Reno campus",
      icon: <SquarePower className="w-6 h-6 text-cyber-green" />
    },
    {
      title: "Game Development",
      description: "As of late 2024, content I have created in the UGC Fortnite ecosystem has reached over 15 million users with peak CCU coming in at 2k and over 30 million total impressions ",
      icon: <ChartColumnIncreasing className="w-6 h-6 text-cyber-green" />
    },

    {
      title: "Sound",
      description: "Awarded the 'Emerging Talent' scholarship while attending Academy of Art University in persuance of an AA in Sound Design for Visual Media",
      icon: <Award className="w-6 h-6 text-cyber-green" />
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">Highlights</h2>
      


      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow">
            <div className="flex items-center gap-3 mb-4">
              {achievement.icon}
              <h3 className="text-xl text-cyber-green">{achievement.title}</h3>
            </div>
            <p className="text-cyber-gray">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;