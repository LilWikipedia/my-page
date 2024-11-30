import { Mail, MapPin, Globe, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/ashutoshbarot", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/ashutoshbarot", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/ashutoshbarot", label: "Twitter" },
    { icon: <img src="/hackerone.svg" className="w-5 h-5" alt="HackerOne" />, url: "https://hackerone.com/ashutoshbarot", label: "HackerOne" }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0 py-4">
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
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
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-green hover:animate-text-glow"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <nav className="py-2 border-b border-cyber-green/20">
        <div className="flex justify-end space-x-6">
          <Link to="/" className="text-cyber-green text-lg font-bold hover:animate-text-glow border-b-2 border-cyber-green">
            Home
          </Link>
          <Link to="/blog" className="text-cyber-green text-lg font-bold hover:animate-text-glow">
            Blog
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;