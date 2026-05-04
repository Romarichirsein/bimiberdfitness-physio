import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const { lang } = useLanguage();

  const plans = [
    {
      name: lang === "fr" ? "CLASSIQUE" : "CLASSIC",
      price: "25k",
      period: lang === "fr" ? "/ m" : "/ mo",
      features: [
        lang === "fr" ? "Accès illimité Fitness" : "Unlimited Fitness access",
        lang === "fr" ? "Coach en salle" : "In-gym coach",
        lang === "fr" ? "Vestiaires & Douches" : "Locker & Showers",
      ]
    },
    {
        name: lang === "fr" ? "ELITE" : "ELITE",
        price: "45k",
        period: lang === "fr" ? "/ m" : "/ mo",
        recommended: true,
        features: [
          lang === "fr" ? "Tout du plan Classique" : "Everything in Classic",
          lang === "fr" ? "Évaluation Physio initiale" : "Initial Physio evaluation",
          lang === "fr" ? "Programme nutritionnel" : "Nutritional program",
          lang === "fr" ? "Accès cours collectifs" : "Group classes access",
        ]
      },
    {
        name: lang === "fr" ? "PREMIUM +" : "PREMIUM +",
        price: "100k",
        period: lang === "fr" ? "/ m" : "/ mo",
        features: [
          lang === "fr" ? "Tout du plan Elite" : "Everything in Elite",
          lang === "fr" ? "Coaching privé (2x/sem)" : "Private coaching (2x/week)",
          lang === "fr" ? "Massages récupération" : "Recovery massages",
          lang === "fr" ? "Priorité réservations" : "Priority bookings",
        ]
      }
  ];

  return (
    <div className="bg-noir pb-24 min-h-screen">
       <section className="py-24 text-center">
            <h1 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-4 italic">
                {lang === 'fr' ? 'PROGRAMMES & TARIFS' : 'PROGRAMS & PRICING'}
            </h1>
            <p className="text-gold tracking-[0.3em] uppercase text-xs">Invest in your transformation</p>
       </section>

       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative p-8 rounded-sm bg-gris h-full border ${plan.recommended ? 'border-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-white/10'}`}
                >
                    {plan.recommended && (
                        <div className="absolute top-0 right-0 bg-gold text-noir text-[10px] font-bold px-4 py-1 uppercase tracking-tighter">
                            Most Popular
                        </div>
                    )}
                    <h3 className="text-2xl font-display font-bold text-white mb-6 italic">{plan.name}</h3>
                    <div className="flex items-baseline mb-8">
                        <span className="text-5xl font-extrabold text-gold">{plan.price}</span>
                        <span className="text-white/40 ml-2 text-sm uppercase tracking-widest">FCFA {plan.period}</span>
                    </div>

                    <ul className="space-y-4 mb-10">
                        {plan.features.map((f, j) => (
                            <li key={j} className="flex items-start text-white/70 text-sm">
                                <Check size={18} className="text-gold mr-3 mt-0.5 flex-shrink-0" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <Link to="/contact" className={`block text-center py-4 rounded-sm font-bold tracking-widest uppercase text-sm transition-all ${plan.recommended ? 'premium-gradient text-noir hover:scale-105' : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'}`}>
                        {lang === 'fr' ? 'CHOISIR CE PACK' : 'GET STARTED'}
                    </Link>
                </motion.div>
            ))}
       </div>

       <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 mt-24 text-center p-12 bg-gris border border-gold/10 rounded-sm"
       >
            <h3 className="text-2xl font-display font-bold text-gold mb-4 italic uppercase">
                {lang === 'fr' ? 'Besoin d\'un programme sur mesure ?' : 'Need a custom program?'}
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                {lang === 'fr' 
                    ? "Nos experts peuvent créer un programme totalement adapté à vos objectifs spécifiques, blessures ou emploi du temps."
                    : "Our experts can create a program fully adapted to your specific goals, injuries or schedule."}
            </p>
            <Link to="/contact" className="inline-flex items-center text-white border-b border-gold pb-1 hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm">
                {lang === 'fr' ? 'CONTACTER UN CONSEILLER' : 'TALK TO AN EXPERT'}
            </Link>
       </motion.div>
    </div>
  );
};

export default Programs;
