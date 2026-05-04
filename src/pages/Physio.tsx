import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Stethoscope, Heart, ShieldPlus, Baby } from "lucide-react";

const Physio = () => {
  const { lang } = useLanguage();

  const services = [
    {
      title: lang === "fr" ? "KINÉSITHÉRAPIE" : "PHYSIOTHERAPY",
      desc: lang === "fr" ? "Soins thérapeutiques pour restaurer le mouvement." : "Therapeutic care to restore movement.",
      icon: Stethoscope,
      img: "https://images.unsplash.com/photo-1576091160550-217359f4ecf1?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: lang === "fr" ? "RÉÉDUCATION" : "REHABILITATION",
        desc: lang === "fr" ? "Programmes personnalisés après chirurgie ou blessure." : "Personalized programs after surgery or injury.",
        icon: ShieldPlus,
        img: "https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: lang === "fr" ? "MASSOTHÉRAPIE" : "MASSAGE THERAPY",
        desc: lang === "fr" ? "Relaxation profonde et soulagement des tensions musculaires." : "Deep relaxation and muscle tension relief.",
        icon: Heart,
        img: "https://images.unsplash.com/photo-1544161515-4af6b1d4efcd?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: lang === "fr" ? "RÉÉDUCATION INFANTILE" : "CHILD REHABILITATION",
        desc: lang === "fr" ? "Accompagnement spécialisé pour les plus jeunes." : "Specialized guidance for the youngest.",
        icon: Baby,
        img: "https://images.unsplash.com/photo-1581009146145-b5ef03a94e78?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-noir pb-24">
      <section className="h-[50vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217359f4ecf1?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="header" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir to-transparent" />
        </div>
        <div className="relative text-center px-4">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-display font-extrabold text-white italic uppercase"
            >
                PHYSIOTHÉRAPIE
            </motion.h1>
            <p className="text-gold tracking-[0.5em] uppercase text-xs mt-4">Health & Recovery Expertise</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-16"
        >
            <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase italic tracking-tighter">
                {lang === 'fr' ? 'NOTRE APPROCHE MÉDICALE' : 'OUR MEDICAL APPROACH'}
            </h2>
            <p className="text-white/60 leading-loose">
                {lang === 'fr' 
                    ? "Chez BIMIBERD, nous combinons l'expertise médicale avec un accompagnement humain. Nos physiothérapeutes qualifiés utilisent les dernières techniques pour assurer une récupération optimale."
                    : "At BIMIBERD, we combine medical expertise with human guidance. Our qualified physiotherapists use the latest techniques to ensure optimal recovery."}
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group bg-gris rounded-sm overflow-hidden flex flex-col md:flex-row h-auto md:h-64 gold-border"
            >
                <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <s.icon className="text-gold mb-4" size={32} strokeWidth={1.5} />
                    <h3 className="text-xl font-display font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-white/50 text-sm">{s.desc}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Physio;
