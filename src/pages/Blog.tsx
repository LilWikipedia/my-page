import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced Network Security Techniques",
      excerpt: "Exploring modern approaches to network security and threat prevention.",
      date: "2024-03-15",
      slug: "advanced-network-security",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Cloud Security Best Practices",
      excerpt: "Essential security measures for cloud infrastructure.",
      date: "2024-03-10",
      slug: "cloud-security-best-practices",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Cybersecurity in 2024",
      excerpt: "Latest trends and developments in cybersecurity.",
      date: "2024-03-05",
      slug: "cybersecurity-2024",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-mono text-cyber-green animate-text-glow">Blog</h1>
          <Link to="/" className="text-cyber-green hover:animate-text-glow">← Back to Home</Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group bg-glass rounded-lg overflow-hidden hover:animate-border-glow transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
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

export default Blog;