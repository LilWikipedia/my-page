import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { slug } = useParams();

  // This would typically fetch the article data based on the slug
  const article = {
    title: "Advanced Network Security Techniques",
    content: "Article content goes here...",
    date: "2024-03-15",
    author: "Ashutosh Barot"
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/blog" className="text-cyber-green hover:animate-text-glow">← Back to Blog</Link>
        </div>
        
        <article className="bg-glass p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-mono text-cyber-green mb-4">{article.title}</h1>
          <div className="flex gap-4 text-sm text-cyber-blue mb-8">
            <span>{article.date}</span>
            <span>{article.author}</span>
          </div>
          <div className="prose prose-invert max-w-none">
            {article.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Article;