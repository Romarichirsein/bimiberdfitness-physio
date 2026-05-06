import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";

const Blog = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-noir min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white mb-6 uppercase italic tracking-tighter">
            {lang === "fr" ? "Notre" : "Our"} <span className="text-gold-gradient">Blog</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            {lang === "fr" 
              ? "Conseils d'experts, actualités et guides pour votre parcours de fitness et de santé." 
              : "Expert advice, news and guides for your fitness and health journey."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gris/40 border border-white/5 rounded-sm overflow-hidden flex flex-col hover:border-gold/30 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title[lang]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-noir text-[10px] font-black uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-[10px] text-white/40 uppercase tracking-widest mb-4">
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1 text-gold" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={12} className="mr-1 text-gold" />
                    {post.author}
                  </div>
                </div>
                
                <h2 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gold transition-colors leading-tight">
                  {post.title[lang]}
                </h2>
                
                <p className="text-white/50 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                  {post.excerpt[lang]}
                </p>
                
                <div className="mt-auto">
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-gold font-bold text-xs uppercase tracking-widest group/link">
                    {lang === 'fr' ? 'Lire la suite' : 'Read More'}
                    <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
