import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { slug } = useParams();

  // This would typically fetch the article data based on the slug
  const article = {
    title: "Advanced Network Security Techniques",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2024-03-15",
    author: "Ashutosh Barot",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80",
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/blog" className="text-cyber-green hover:animate-text-glow">← Back to Blog</Link>
        </div>
        
        <article className="bg-glass rounded-lg overflow-hidden backdrop-blur-sm">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-mono text-cyber-green mb-4">{article.title}</h1>
            <div className="flex gap-4 text-sm text-cyber-blue mb-8">
              <span>{article.date}</span>
              <span>{article.author}</span>
            </div>
            <div className="prose prose-invert max-w-none">
              {article.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Article;