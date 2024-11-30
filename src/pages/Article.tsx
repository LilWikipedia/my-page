import { useParams } from "react-router-dom";
import Header from "@/components/home/Header";

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
      <Header />
      <div className="container mx-auto px-4 py-12">
        <article className="bg-glass rounded-lg overflow-hidden backdrop-blur-sm max-w-4xl mx-auto">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
          
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
