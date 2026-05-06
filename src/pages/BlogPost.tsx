import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { BLOG_POSTS } from "../data/blog";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="bg-noir min-h-screen pt-40 text-center text-white">
        <h1 className="text-4xl font-display mb-8">Article non trouvé / Post not found</h1>
        <Link to="/blog" className="text-gold hover:underline">Retour au Blog / Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-noir min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title[lang]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 w-full pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8 hover:translate-x-[-10px] transition-transform"
            >
              <ArrowLeft size={16} className="mr-2" />
              {lang === 'fr' ? 'Retour au Blog' : 'Back to Blog'}
            </Link>
            
            <span className="inline-block px-3 py-1 bg-gold text-noir text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
              {post.category}
            </span>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-8 uppercase italic tracking-tighter">
              {post.title[lang]}
            </h1>
            
            <div className="flex flex-wrap gap-8 items-center text-white/50 text-xs font-bold uppercase tracking-widest border-t border-white/10 pt-8">
              <div className="flex items-center">
                <Calendar size={14} className="mr-2 text-gold" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={14} className="mr-2 text-gold" />
                {post.author}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-gold max-w-none"
          >
            <div className="text-white/70 text-lg leading-relaxed space-y-8 font-light italic border-l-2 border-gold pl-8 mb-12">
              {post.excerpt[lang]}
            </div>
            
            <div className="text-white/60 text-lg leading-relaxed space-y-8 whitespace-pre-wrap font-light">
              {post.content[lang]}
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center space-x-6">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold">Partager</span>
                  <button className="text-white/60 hover:text-gold transition-colors"><Share2 size={18} /></button>
               </div>
               
               <Link to="/contact" className="px-10 py-5 premium-gradient text-noir font-black tracking-[0.1em] rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all uppercase text-xs">
                  {lang === 'fr' ? 'Réserver une consultation' : 'Book a consultation'}
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts Link */}
      <section className="py-20 bg-gris/20 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-8 uppercase italic">{lang === 'fr' ? 'Plus d\'articles' : 'More Articles'}</h3>
            <Link to="/blog" className="inline-flex items-center text-gold font-bold text-sm uppercase tracking-widest group">
                {lang === 'fr' ? 'Explorer le blog' : 'Explore the blog'}
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default BlogPost;
