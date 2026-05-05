import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../constants/branding";
import { ArrowRight, Activity, Users, Trophy, HeartPulse, ChevronLeft, ChevronRight, HelpCircle, Dumbbell, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    image: "/images/hero_fitness.png",
    tag: "Premium Fitness",
    title: {
      fr: "Remets-toi en forme avec des professionnels",
      en: "Get in shape with professionals"
    },
    subtitle: {
      fr: "Un centre d'élite pour votre transformation physique et votre santé.",
      en: "An elite center for your physical transformation and health."
    }
  },
  {
    image: "/images/hero_coaching.png",
    tag: "Elite Coaching",
    title: {
      fr: "Atteignez vos objectifs de performance",
      en: "Reach your performance goals"
    },
    subtitle: {
      fr: "Des programmes personnalisés conçus par des experts du fitness.",
      en: "Personalized programs designed by fitness experts."
    }
  },
  {
    image: "https://images.unsplash.com/photo-1631815541542-0884ff60a9bb?q=80&w=1974&auto=format&fit=crop",
    tag: "Advanced Physio",
    title: {
      fr: "Récupération et santé optimisées",
      en: "Optimized recovery and health"
    },
    subtitle: {
      fr: "Approche médicale de pointe pour la rééducation et le bien-être.",
      en: "Cutting-edge medical approach for rehabilitation and well-being."
    }
  }
];

import { BLOG_POSTS } from "../data/blog";

const Home = () => {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const DISPLAY_POSTS = BLOG_POSTS.slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero Carousel Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <motion.img 
              key={`${currentSlide}-img`}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              src={HERO_SLIDES[currentSlide].image} 
              alt="Hero Gym" 
              className="w-full h-full object-cover opacity-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-[var(--bg-primary)]" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-20">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1.5 border border-gold/40 text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-8 rounded-full bg-gold/5 backdrop-blur-sm">
                   {HERO_SLIDES[currentSlide].tag}
                </span>
                
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] text-[var(--text-primary)] mb-10 tracking-tighter">
                  {HERO_SLIDES[currentSlide].title[lang].split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                  <span className="text-gold-gradient">{HERO_SLIDES[currentSlide].title[lang].split(' ').pop()}</span>
                </h1>
                
                <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-xl font-light leading-relaxed">
                  {HERO_SLIDES[currentSlide].subtitle[lang]}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mt-4 relative z-20">
                  <Link to="/contact" className="px-10 py-5 premium-gradient text-noir font-black tracking-[0.1em] rounded-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center group relative overflow-hidden uppercase text-sm">
                    <span className="relative z-10 flex items-center">
                      {lang === 'fr' ? 'RÉSERVER UNE SÉANCE' : 'BOOK A SESSION'}
                      <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Link>
                  
                  <Link to="/fitness" className="px-10 py-5 bg-[var(--bg-primary)]/5 border border-[var(--text-primary)]/10 text-[var(--text-primary)] font-bold tracking-[0.1em] rounded-sm hover:bg-[var(--text-primary)]/10 transition-all uppercase text-sm flex items-center justify-center backdrop-blur-sm">
                    {lang === 'fr' ? 'NOS SERVICES' : 'OUR SERVICES'}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 left-10 z-20 hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-12 bg-gold' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
          <div className="flex space-x-4 ml-8">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-[var(--text-primary)]/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-[var(--text-primary)]">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-[var(--text-primary)]/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-[var(--text-primary)]">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-10 z-10 flex flex-col items-end text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent mr-5"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[var(--bg-secondary)] border-y border-gold/5"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: lang === 'fr' ? 'Membres' : 'Members', value: '1,500+', icon: Users },
            { label: lang === 'fr' ? 'Coachs' : 'Coaches', value: '12+', icon: Trophy },
            { label: lang === 'fr' ? 'Services' : 'Services', value: '8+', icon: Activity },
            { label: lang === 'fr' ? 'Réussite' : 'Success', value: '98%', icon: HeartPulse },
          ].map((stat, i) => (
            <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/10 mb-4 group-hover:border-gold transition-colors">
                <stat.icon className="text-gold" size={24} />
              </div>
              <div className="text-3xl font-display font-bold text-[var(--text-primary)] mb-1">{stat.value}</div>
              <div className="text-xs text-[var(--text-secondary)] uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <section className="py-32 px-4 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="w-full lg:w-1/2 space-y-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-6 flex items-center">
                <span className="w-12 h-[1px] bg-gold mr-4"></span>
                {lang === 'fr' ? 'NOTRE PHILOSOPHIE' : 'OUR PHILOSOPHY'}
              </h2>
              <h3 className="text-5xl md:text-7xl font-display font-black text-[var(--text-primary)] uppercase tracking-tighter mb-8 leading-[0.9]">
                {lang === 'fr' ? 'Plus qu\'une salle,' : 'More than a gym,'} <br />
                <span className="text-gold-gradient">{lang === 'fr' ? 'Un Style de Vie.' : 'A Lifestyle.'}</span>
              </h3>
              <p className="text-[var(--text-secondary)] text-xl font-light leading-relaxed max-w-xl">
                {lang === 'fr' 
                  ? "L'excellence n'est pas un acte, mais une habitude. Nous fusionnons la haute performance sportive avec la précision médicale de la physiothérapie."
                  : "Excellence is not an act, but a habit. We merge high sports performance with the medical precision of physiotherapy."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-6 bg-white/5 border border-white/5 rounded-sm hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 border border-gold/20 group-hover:scale-110 transition-transform">
                    <Trophy className="text-gold" size={20} />
                </div>
                <h4 className="text-[var(--text-primary)] font-bold uppercase text-sm tracking-widest mb-3">{lang === 'fr' ? 'Performance Elite' : 'Elite Performance'}</h4>
                <p className="text-[var(--text-secondary)] text-xs font-light leading-relaxed">
                  {lang === 'fr' ? 'Dépasser vos limites avec des protocoles d\'entraînement utilisés par les pros.' : 'Push your limits with training protocols used by the pros.'}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group p-6 bg-[var(--text-primary)]/5 border border-[var(--text-primary)]/5 rounded-sm hover:border-gold/30 transition-all"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 border border-gold/20 group-hover:scale-110 transition-transform">
                    <HeartPulse className="text-gold" size={20} />
                </div>
                <h4 className="text-[var(--text-primary)] font-bold uppercase text-sm tracking-widest mb-3">{lang === 'fr' ? 'Santé Intégrative' : 'Integrative Health'}</h4>
                <p className="text-[var(--text-secondary)] text-xs font-light leading-relaxed">
                  {lang === 'fr' ? 'La physiothérapie est au cœur de notre approche pour une longévité athlétique durable.' : 'Physiotherapy is at the heart of our approach for sustainable athletic longevity.'}
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1599058917233-57c0e620394e?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 brightness-75" 
                alt="Philosophy Excellence" 
              />
              <div className="absolute inset-0 border-[20px] border-[var(--bg-primary)] opacity-20 pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-gold/30 -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-gold/30 -z-10" />
            </div>
            
            {/* Expertise Badge */}
            <div className="absolute bottom-8 right-8 bg-[var(--bg-primary)]/90 backdrop-blur-xl border border-gold/20 p-6 rounded-sm shadow-2xl">
               <div className="text-gold font-black text-3xl mb-1 tracking-tighter">BIMIBERD</div>
               <div className="text-[var(--text-secondary)] text-[10px] uppercase tracking-[0.3em] font-bold">Expertise Center</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section Header */}
      <section className="pt-20 px-4 bg-[var(--bg-primary)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">UNPARALLELED EXPERTISE</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-[var(--text-primary)] uppercase tracking-tighter mb-4">
              {lang === 'fr' ? 'Nos' : 'Our'} <span className="text-gold-gradient">{lang === 'fr' ? 'Piliers' : 'Services'}</span>
            </h3>
            <div className="w-24 h-1 bg-gold mx-auto mb-16 rounded-full opacity-30" />
          </motion.div>
      </section>

      {/* Services Grid Preview */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 px-4 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 60px rgba(212, 175, 55, 0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-[600px] group overflow-hidden rounded-sm border border-gold/0 hover:border-gold/60 transition-all duration-300"
            >
                <img 
                    src="https://images.unsplash.com/photo-1581009146145-b5ef03a94e78?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    alt="Fitness"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent transition-opacity group-hover:opacity-60" />
                <div className="absolute bottom-10 left-10 p-2">
                    <motion.span 
                        initial={{ opacity: 0.8 }}
                        whileHover={{ letterSpacing: "0.5em", opacity: 1 }}
                        className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block transition-all"
                    >
                        Power & Performance
                    </motion.span>
                    <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4 uppercase">FITNESS</h2>
                    <p className="text-[var(--text-secondary)] mb-6 max-w-xs">{TRANSLATIONS[lang].sections.fitness.description}</p>
                    <Link to="/fitness" className="inline-flex items-center text-gold font-bold text-sm hover:underline group/link">
                        {lang === 'fr' ? 'VOIR TOUT' : 'VIEW ALL'} 
                        <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 60px rgba(212, 175, 55, 0.3), inset 0 0 20px rgba(212, 175, 55, 0.1)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-[600px] group overflow-hidden rounded-sm border border-gold/0 hover:border-gold/60 transition-all duration-300"
            >
                <img 
                    src="https://images.unsplash.com/photo-1576091160550-217359f4ecf1?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    alt="Physiotherapy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/40 to-transparent transition-opacity group-hover:opacity-60" />
                <div className="absolute bottom-10 left-10 p-2">
                    <motion.span 
                        initial={{ opacity: 0.8 }}
                        whileHover={{ letterSpacing: "0.5em", opacity: 1 }}
                        className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block transition-all"
                    >
                        RECOVERY & HEALTH
                    </motion.span>
                    <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4 uppercase">PHYSIOTHÉRAPIE</h2>
                    <p className="text-[var(--text-secondary)] mb-6 max-w-xs">{TRANSLATIONS[lang].sections.physio.description}</p>
                    <Link to="/physio" className="inline-flex items-center text-gold font-bold text-sm hover:underline group/link">
                        {lang === 'fr' ? 'VOIR TOUT' : 'VIEW ALL'} 
                        <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </div>
      </motion.section>

      {/* Facilities Section */}
      <section className="py-32 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">THE SPACE</h2>
              <h3 className="text-4xl md:text-6xl font-display font-black text-[var(--text-primary)] uppercase tracking-tighter">
                {lang === 'fr' ? 'Installations' : 'World Class'} <span className="text-gold-gradient">{lang === 'fr' ? 'D\'Élite' : 'Facilities'}</span>
              </h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 h-[400px]">
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm hover:opacity-80 transition-opacity" />
              </div>
              <div className="h-[400px]">
                <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm hover:opacity-80 transition-opacity" />
              </div>
              <div className="h-[400px]">
                <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm hover:opacity-80 transition-opacity" />
              </div>
           </div>
           
           <div className="mt-12 text-center">
              <Link to="/gallery" className="text-gold font-bold text-xs uppercase tracking-[0.2em] hover:tracking-[0.4em] transition-all flex items-center justify-center">
                {lang === 'fr' ? 'EXPLORER LA GALERIE' : 'EXPLORE THE GALLERY'}
                <ArrowRight size={14} className="ml-2" />
              </Link>
           </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-32 px-4 bg-[var(--bg-primary)] border-t border-gold/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">BIMIBERD INSIGHTS</h2>
              <h3 className="text-4xl md:text-6xl font-display font-black text-[var(--text-primary)] uppercase tracking-tighter">
                {lang === 'fr' ? 'Derniers' : 'Latest'} <span className="text-gold-gradient">Articles</span>
              </h3>
            </div>
            <Link to="/blog" className="px-8 py-3 border border-gold text-gold font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-noir transition-all rounded-sm flex items-center group mb-2 mx-auto md:mx-0">
              {lang === 'fr' ? 'TOUT LE BLOG' : 'VIEW ALL POSTS'}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DISPLAY_POSTS.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                    <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title[lang]} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[var(--bg-primary)]/80 backdrop-blur-md text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-gold transition-colors">{post.title[lang]}</h4>
                  <div className="flex items-center text-gold text-[10px] font-bold uppercase tracking-widest group-hover:underline">
                    {lang === 'fr' ? 'LIRE' : 'READ MORE'} <ArrowRight size={12} className="ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-[var(--bg-secondary)]"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-12">TESTIMONIALS</h2>
            <p className="text-3xl font-light text-[var(--text-primary)] leading-relaxed mb-8">
                "{lang === 'fr' 
                    ? "La transformation n'est pas seulement physique, elle est mentale. BIMIBERD m'a donné les outils pour me surpasser." 
                    : "The transformation is not just physical, it's mental. BIMIBERD gave me the tools to exceed my limits."}"
            </p>
            <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="User" />
                </div>
                <div className="text-left">
                    <div className="text-[var(--text-primary)] font-bold text-sm uppercase">Cedric M.</div>
                    <div className="text-gold text-[10px] tracking-widest uppercase">CEO, Tech Cameroon</div>
                </div>
            </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-[var(--bg-primary)] border-t border-[var(--text-primary)]/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">QUESTIONS</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-[var(--text-primary)] uppercase tracking-tighter">
              {lang === 'fr' ? 'Foire Aux' : 'Frequently Asked'} <span className="text-gold-gradient">Questions</span>
            </h3>
          </div>

          <div className="space-y-6">
            {[
              {
                q: lang === 'fr' ? "Ai-je besoin d'être un athlète pour m'inscrire ?" : "Do I need to be an athlete to join?",
                a: lang === 'fr' ? "Pas du tout ! Nous accueillons tous les niveaux. Notre mission est d'amener chacun à atteindre sa propre performance d'élite." : "Not at all! We welcome all levels. Our mission is to lead everyone to achieve their own elite performance."
              },
              {
                q: lang === 'fr' ? "La physiothérapie est-elle remboursée ?" : "Is physiotherapy reimbursed?",
                a: lang === 'fr' ? "Oui, nos services de kinésithérapie sont conformes aux standards médicaux et peuvent être pris en charge par votre assurance." : "Yes, our physiotherapy services comply with medical standards and can be covered by your insurance."
              },
              {
                q: lang === 'fr' ? "Comment se passe la première séance ?" : "What happens in the first session?",
                a: lang === 'fr' ? "Nous commençons par une évaluation complète : posture, force, mobilité et objectifs pour créer votre plan personnalisé." : "We start with a full assessment: posture, strength, mobility, and goals to create your personalized plan."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gris/20 border border-white/5 rounded-sm"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <HelpCircle className="text-gold" size={20} />
                  <h4 className="text-[var(--text-primary)] font-bold text-lg uppercase tracking-tight italic">{faq.q}</h4>
                </div>
                <p className="text-[var(--text-secondary)] font-light leading-relaxed pl-9">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1548691906-f61f7d0ea341?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 contrast-150 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-6">{lang === 'fr' ? 'VOTRE VOYAGE COMMENCE ICI' : 'YOUR JOURNEY STARTS HERE'}</h2>
            <h3 className="text-5xl md:text-8xl font-display font-black text-[var(--text-primary)] uppercase tracking-tighter mb-10 leading-[0.85]">
              {lang === 'fr' ? 'PRÊT À REJOINDRE' : 'READY TO JOIN'} <br />
              <span className="text-gold-gradient">{lang === 'fr' ? 'L\'ÉLITE ?' : 'THE ELITE?'}</span>
            </h3>
            <p className="text-[var(--text-secondary)] text-xl font-light mb-12 max-w-lg leading-relaxed">
              {lang === 'fr' 
                ? "Ne remettez pas votre transformation à demain. Prenez rendez-vous aujourd'hui pour une évaluation avec nos experts."
                : "Don't delay your transformation. Book an assessment with our experts today."}
            </p>
            <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-gold text-noir font-black uppercase tracking-widest text-sm hover:bg-white transition-all transform hover:-translate-y-1">
              {lang === 'fr' ? 'DÉMARRER MAINTENANT' : 'START NOW'}
              <Zap className="ml-3" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
