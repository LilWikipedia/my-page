import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced Network Security Techniques",
      excerpt: "Exploring modern approaches to network security and threat prevention.",
      date: "2024-03-15",
      slug: "advanced-network-security",
    },
    {
      id: 2,
      title: "Cloud Security Best Practices",
      excerpt: "Essential security measures for cloud infrastructure.",
      date: "2024-03-10",
      slug: "cloud-security-best-practices",
    },
    // Add more blog posts here
  ];

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-mono text-cyber-green animate-text-glow">Blog</h1>
          <Link to="/" className="text-cyber-green hover:animate-text-glow">← Back to Home</Link>
        </div>
        
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="bg-glass p-6 rounded-lg backdrop-blur-sm hover:animate-border-glow"
            >
              <h2 className="text-xl text-cyber-green mb-2">{post.title}</h2>
              <p className="text-cyber-gray mb-2">{post.excerpt}</p>
              <span className="text-sm text-cyber-blue">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;