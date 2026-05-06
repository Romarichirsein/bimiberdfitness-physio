import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

const Gallery = () => {
  const { lang } = useLanguage();

  const images = [
    { 
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", 
        size: "md:col-span-2 md:row-span-2",
        title: "Main Arena"
    },
    { 
        url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", 
        size: "md:col-span-1 md:row-span-1",
        title: "Cardio Zone"
    },
    { 
        url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop", 
        size: "md:col-span-1 md:row-span-1",
        title: "Weights Area"
    },
    { 
        url: "https://images.unsplash.com/photo-1576091160550-217359f4ecf1?q=80&w=2070&auto=format&fit=crop", 
        size: "md:col-span-1 md:row-span-1",
        title: "Physio Room"
    },
    { 
        url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", 
        size: "md:col-span-1 md:row-span-1",
        title: "Group Classes"
    },
    { 
        url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop", 
        size: "md:col-span-2 md:row-span-1",
        title: "Training Gear"
    }
  ];

  return (
    <div className="bg-noir pb-24">
       <motion.section 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="py-24 text-center"
       >
            <h1 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-4 italic uppercase">
                {lang === 'fr' ? 'GALERIE D\'IMAGES' : 'GALLERY'}
            </h1>
            <p className="text-gold tracking-[0.3em] uppercase text-xs">Excellence in every corner</p>
       </motion.section>

       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4">
            {images.map((img, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`relative group overflow-hidden rounded-sm gold-border ${img.size}`}
                >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white font-display font-bold uppercase tracking-widest text-sm">{img.title}</span>
                    </div>
                </motion.div>
            ))}
       </div>
    </div>
  );
};

export default Gallery;
