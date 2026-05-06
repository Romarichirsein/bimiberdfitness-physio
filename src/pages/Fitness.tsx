import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Dumbbell, Music, Zap, Flame } from "lucide-react";

const Fitness = () => {
  const { lang } = useLanguage();

  const services = [
    {
      title: lang === "fr" ? "MUSCULATION" : "BODYBUILDING",
      desc: lang === "fr" ? "Équipements de pointe pour sculpter votre corps." : "State-of-the-art equipment to sculpt your body.",
      icon: Dumbbell,
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: lang === "fr" ? "AÉROBIC" : "AEROBICS",
        desc: lang === "fr" ? "Boostez votre cardio avec des séances énergiques." : "Boost your cardio with energetic sessions.",
        icon: Zap,
        img: "https://images.unsplash.com/photo-1518611012118-29615638a44f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: lang === "fr" ? "DANSE" : "DANCE",
        desc: lang === "fr" ? "Bougez au rythme de vos musiques préférées." : "Move to the rhythm of your favorite music.",
        icon: Music,
        img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: lang === "fr" ? "HIIT" : "HIIT Training",
        desc: lang === "fr" ? "Entraînement par intervalles à haute intensité." : "High Intensity Interval Training.",
        icon: Flame,
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-noir pb-24">
      <section className="h-[50vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="header" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir to-transparent" />
        </div>
        <div className="relative text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-extrabold text-white italic uppercase"
            >
                FITNESS
            </motion.h1>
            <p className="text-gold tracking-[0.5em] uppercase text-xs mt-4">Power & Transformation</p>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 mt-24"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative h-[400px] overflow-hidden rounded-sm gold-border"
            >
                <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="w-12 h-12 bg-gold/20 flex items-center justify-center rounded-full mb-4 border border-gold/30">
                        <s.icon className="text-gold" size={24} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-white/60 text-sm max-w-xs">{s.desc}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Fitness;
