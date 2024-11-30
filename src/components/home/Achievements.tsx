import { Shield, Award, Bug } from "lucide-react";

const Achievements = () => {
  const cves = [
    "CVE-2019-5638", "CVE-2019-5640", "CVE-2019-5641", "CVE-2021-3844",
    "CVE-2020-27585", "CVE-2020-27586", "CVE-2020-27587",
    "CVE-2019-6120", "CVE-2019-6121", "CVE-2019-6122",
    "CVE-2017-1000499"
  ];

  const achievements = [
    {
      title: "Security Research Impact",
      description: "Found and reported critical vulnerabilities in major systems including Rapid7 Nexpose, Quick Heal Total Security, Nicehash Miner, and phpMyAdmin",
      icon: <Shield className="w-6 h-6 text-cyber-green" />
    },
    {
      title: "United Airlines Recognition",
      description: "Received total 2+ Million award miles from United Airlines for finding security issues",
      icon: <Award className="w-6 h-6 text-cyber-green" />
    },
    {
      title: "Industry Recognition",
      description: "Acknowledged by Google, Apple, Rapid7, FireEye, United Nations, Govt of India, Amazon, United States- Department of Defense, IBM, Symantec, United Airlines, Coinbase, JPMorgan Chase, Twitter and multiple Fortune 500 companies",
      icon: <Award className="w-6 h-6 text-cyber-green" />
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-mono text-cyber-green mb-8 animate-text-glow">CVEs & Achievements</h2>
      
      {/* CVEs Grid */}
      <div className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Bug className="w-6 h-6 text-cyber-green" />
          <h3 className="text-xl text-cyber-green">Discovered CVEs</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cves.map((cve) => (
            <span key={cve} className="bg-cyber-green/10 text-cyber-green px-3 py-2 rounded text-sm text-center hover:bg-cyber-green/20 transition-colors">
              {cve}
            </span>
          ))}
        </div>
      </div>

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