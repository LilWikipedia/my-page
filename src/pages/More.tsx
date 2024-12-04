import Header from "@/components/home/Header";
import { Link } from "react-router-dom";

const More = () => {
  const Posts = [
    {
      id: 1,
      title: "Official creator page",
      excerpt: "https://www.fortnite.com/@Lil-Wikipedia",
      date: "2024",
      slug: "https://www.fortnite.com/@Lil-Wikipedia",
      image: "src/components/builtbywiki.png",
    },
    {
      id: 2,
      title: "Official creator page (Alt account)",
      excerpt: "https://www.fortnite.com/@wikipedia",
      date: "2024",
      slug: "https://www.fortnite.com/@wikipedia",
      image: "src/components/builtbywiki.png",
    },
    {
      id: 3,
      title: "Placeholder",
      excerpt: "TODO: This is a placeholder slot.",
      date: "2024",
      slug: "2024",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-mono text-cyber-green animate-text-glow">Links</h1>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/More/${post.slug}`}
              className="group bg-glass rounded-lg overflow-hidden hover:animate-border-glow transition-all duration-300"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-xl text-cyber-green mb-2 group-hover:animate-text-glow">{post.title}</h2>
                <p className="text-cyber-gray mb-4">{post.excerpt}</p>
                <span className="text-sm text-cyber-blue">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;