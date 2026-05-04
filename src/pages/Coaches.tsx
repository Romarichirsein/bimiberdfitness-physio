import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Instagram, Linkedin } from "lucide-react";

const Coaches = () => {
  const { lang } = useLanguage();

  const team = [
    {
      name: "Jean-Pierre T.",
      title: lang === "fr" ? "CoachMusculation Senior" : "Senior Bodybuilding Coach",
      exp: "12+ yrs",
      img: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Dr. Marie L.",
        title: lang === "fr" ? "Kiné & Rééducation" : "Physio & Rehab Specialist",
        exp: "8+ yrs",
        img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c77c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "Yasmine O.",
        title: lang === "fr" ? "Coach Danse & Aérobic" : "Dance & Aerobics Coach",
        exp: "6+ yrs",
        img: "https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "Ahmed K.",
        title: lang === "fr" ? "Expert HIIT & Cardio" : "HIIT & Cardio Expert",
        exp: "10+ yrs",
        img: "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-noir pb-24">
       <section className="py-24 text-center">
            <h1 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-4 italic">
                {lang === 'fr' ? 'NOTRE ÉQUIPE' : 'OUR TEAM'}
            </h1>
            <p className="text-gold tracking-[0.3em] uppercase text-xs">The experts behind your transformation</p>
       </section>

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
                        <h3 className="text-xl font-display font-bold text-white mb-1">{coach.name}</h3>
                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{coach.title}</p>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Experience: {coach.exp}</p>
                    </div>
                </motion.div>
            ))}
       </div>
    </div>
  );
};

export default Coaches;
