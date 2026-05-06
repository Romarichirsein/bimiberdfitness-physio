import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Instagram, Linkedin } from "lucide-react";

const Coaches = () => {
  const { lang } = useLanguage();

  const team = [
    {
      name: "Jean-Pierre T.",
      title: lang === "fr" ? "Coach Musculation Senior" : "Senior Bodybuilding Coach",
      exp: "12+ yrs",
      img: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop"
    },
    {
        name: "Dr. Marie L.",
        title: lang === "fr" ? "Kiné & Rééducation" : "Physio & Rehab Specialist",
        exp: "8+ yrs",
        img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Yasmine O.",
        title: lang === "fr" ? "Coach Danse & Aérobic" : "Dance & Aerobics Coach",
        exp: "6+ yrs",
        img: "https://images.unsplash.com/photo-1518611012118-29615638a44f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Ahmed K.",
        title: lang === "fr" ? "Expert HIIT & Cardio" : "HIIT & Cardio Expert",
        exp: "10+ yrs",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] pb-24">
       <motion.section 
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="py-24 text-center"
       >
            <h1 className="text-4xl md:text-7xl font-display font-extrabold text-[var(--text-primary)] mb-4 uppercase">
                {lang === 'fr' ? 'NOTRE ÉQUIPE' : 'OUR TEAM'}
            </h1>
            <p className="text-gold tracking-[0.3em] uppercase text-xs">The experts behind your transformation</p>
       </motion.section>

       <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((coach, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm gold-border mb-6">
                        <img src={coach.img} alt={coach.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                             <a href="#" className="w-10 h-10 bg-gold text-noir rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <Instagram size={18} />
                             </a>
                             <a href="#" className="w-10 h-10 bg-gold text-noir rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <Linkedin size={18} />
                             </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-1">{coach.name}</h3>
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{coach.title}</p>
                        <p className="text-[var(--text-secondary)] text-[10px] uppercase tracking-[0.3em]">Experience: {coach.exp}</p>
                    </div>
                </motion.div>
            ))}
       </div>
    </div>
  );
};

export default Coaches;
