import { Shield, Award, Bug } from "lucide-react";

const Achievements = () => {
  const cves = [
    {
      title: "Rapid7 Nexpose Critical Vulnerability",
      description: "Found a critical Session Management issue in Rapid7 Nexpose (also for insightVM).",
      cves: ["CVE-2019-5638", "CVE-2019-5640", "CVE-2019-5641", "CVE-2021-3844"],
      icon: <Shield className="w-6 h-6 text-cyber-green" />
    },
    {
      title: "Quick Heal Total Security Vulnerabilities",
      description: "Reported security issues in Quick Heal Total Security, an Antivirus software",
      cves: ["CVE-2020-27585", "CVE-2020-27586", "CVE-2020-27587"],
      icon: <Bug className="w-6 h-6 text-cyber-green" />
    },
    {
      title: "Nicehash Miner Vulnerabilities",
      description: "Reported an Authorization vulnerability and other bugs in Crypto currency mining software Nicehash Miner",
      cves: ["CVE-2019-6120", "CVE-2019-6121", "CVE-2019-6122"],
      icon: <Shield className="w-6 h-6 text-cyber-green" />
    },
    {
      title: "phpMyAdmin CSRF Vulnerability",
      description: "Found a CSRF in phpMyAdmin, submitted an exploit for the same on exploit.db, featured in prominent InfoSec blogs",
      cves: ["CVE-2017-1000499"],
      icon: <Bug className="w-6 h-6 text-cyber-green" />
    }
  ];

  const achievements = [
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
      <h2 className="text-3xl font-mono text-cyber-blue mb-8">CVEs & Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {cves.map((cve, index) => (
          <div key={index} className="bg-glass p-6 rounded-lg backdrop-blur-sm animate-border-glow">
            <div className="flex items-center gap-3 mb-4">
              {cve.icon}
              <h3 className="text-xl text-cyber-green">{cve.title}</h3>
            </div>
            <p className="text-cyber-gray mb-4">{cve.description}</p>
            <div className="flex flex-wrap gap-2">
              {cve.cves.map((cveId) => (
                <span key={cveId} className="bg-cyber-green/10 text-cyber-green px-2 py-1 rounded text-sm">
                  {cveId}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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