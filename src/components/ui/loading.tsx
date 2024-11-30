import { Terminal } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-cyber-dark/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <Terminal className="w-12 h-12 text-cyber-green animate-pulse mx-auto" />
        <div className="font-mono text-cyber-green space-y-2">
          <p className="animate-pulse">Initializing security protocols...</p>
          <div className="flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                className="inline-block h-2 w-2 bg-cyber-green rounded-full animate-bounce" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;