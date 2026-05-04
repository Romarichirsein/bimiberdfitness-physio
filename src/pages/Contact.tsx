import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { BRAND } from "../constants/branding";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (!firstName || firstName.trim().length < 2) {
      newErrors.firstName = lang === 'fr' ? 'Prénom requis (min 2 caractères)' : 'First name required (min 2 chars)';
    }
    
    if (!lastName || lastName.trim().length < 2) {
      newErrors.lastName = lang === 'fr' ? 'Nom requis (min 2 caractères)' : 'Last name required (min 2 chars)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = lang === 'fr' ? 'Email invalide' : 'Invalid email address';
    }

    const phoneRegex = /^\+?[0-9\s-]{8,20}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = lang === 'fr' ? 'Numéro de téléphone invalide' : 'Invalid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) return;

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const time = formData.get('time') as string;
    const details = formData.get('details') as string;

    const message = `*ELITE PERFORMANCE - NOUVELLE RÉSERVATION*
---------------------------------------
*👤 Client:* ${firstName} ${lastName}
*📧 Email:* ${email}
*📞 Téléphone:* ${phone}

*🎯 Service:* ${service}
*⏰ Horaire:* ${time}

*📝 Détails supplémentaires:*
${details || 'Aucun détail fourni.'}
---------------------------------------
_Envoyé depuis le site Elite Performance_`;

    const whatsappUrl = `https://wa.me/237699000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-noir pb-24">
       <section className="py-24 text-center">
            <h1 className="text-4xl md:text-7xl font-display font-extrabold text-white mb-4 italic">
                {lang === 'fr' ? 'CONTACTEZ-NOUS' : 'GET IN TOUCH'}
            </h1>
            <p className="text-gold tracking-[0.3em] uppercase text-xs">We are ready to guide you</p>
       </section>

       <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center rounded-full border border-gold/30">
                        <MapPin className="text-gold" size={28} />
                    </div>
                    <div>
                        <h4 className="text-gold font-display font-bold uppercase tracking-widest mb-2">Location</h4>
                        <p className="text-white text-lg font-light leading-relaxed">{BRAND.contact.location}</p>
                        <p className="text-white/40 text-sm mt-1">Yaoundé, Cameroon</p>
                    </div>
                </div>

                <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center rounded-full border border-gold/30">
                        <Phone className="text-gold" size={28} />
                    </div>
                    <div>
                        <h4 className="text-gold font-display font-bold uppercase tracking-widest mb-2">Phones</h4>
                        {BRAND.contact.phones.map(p => (
                            <p key={p} className="text-white text-lg font-light leading-relaxed">{p}</p>
                        ))}
                    </div>
                </div>

                <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gold/10 flex items-center justify-center rounded-full border border-gold/30">
                        <Clock className="text-gold" size={28} />
                    </div>
                    <div>
                        <h4 className="text-gold font-display font-bold uppercase tracking-widest mb-2">Opening Hours</h4>
                        <p className="text-white text-lg font-light leading-relaxed">{BRAND.contact.hours}</p>
                        <p className="text-white/40 text-sm mt-1">{lang === 'fr' ? 'Lundi au Dimanche' : 'Monday to Sunday'}</p>
                    </div>
                </div>

                {/* Simple Map Placeholder */}
                <div className="w-full h-64 bg-gris rounded-sm overflow-hidden gold-border relative flex items-center justify-center opacity-60">
                    <MapPin className="text-gold/20 absolute" size={100} />
                    <div className="text-center p-8">
                        <p className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Interactive Map</p>
                        <p className="text-white/40 text-[10px] uppercase">Coming Soon to Yaoundé Digital Hub</p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gris p-10 rounded-sm gold-border"
            >
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-noir">
                            <Send size={32} />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white uppercase italic">Message Sent!</h3>
                        <p className="text-white/60">Our team will contact you very soon.</p>
                    </div>
                ) : (
                    <motion.form 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                    >
                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                            className="mb-8"
                        >
                             <h3 className="text-2xl font-display font-bold text-white mb-2 italic uppercase tracking-tighter">
                                {lang === 'fr' ? 'Réserver une séance' : 'Book an Appointment'}
                             </h3>
                             <p className="text-white/40 text-xs">
                                {lang === 'fr' 
                                    ? 'Remplissez le formulaire et nos conseillers vous contacteront pour planifier votre séance.' 
                                    : 'Complete the form below and our consultants will reach out to schedule your session.'}
                             </p>
                        </motion.div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{lang === 'fr' ? 'Prénom' : 'First Name'}</label>
                                <input 
                                    required 
                                    name="firstName" 
                                    type="text" 
                                    placeholder="e.g. Jean" 
                                    className={`w-full bg-noir border ${errors.firstName ? 'border-red-500' : 'border-white/10'} p-4 text-white text-sm focus:border-gold outline-none transition-colors rounded-sm`} 
                                />
                                {errors.firstName && <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.firstName}</p>}
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{lang === 'fr' ? 'Nom' : 'Last Name'}</label>
                                <input 
                                    required 
                                    name="lastName" 
                                    type="text" 
                                    placeholder="e.g. Dupont" 
                                    className={`w-full bg-noir border ${errors.lastName ? 'border-red-500' : 'border-white/10'} p-4 text-white text-sm focus:border-gold outline-none transition-colors rounded-sm`} 
                                />
                                {errors.lastName && <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.lastName}</p>}
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">Email Address</label>
                                <input 
                                    required 
                                    name="email" 
                                    type="email" 
                                    placeholder="email@example.com" 
                                    className={`w-full bg-noir border ${errors.email ? 'border-red-500' : 'border-white/10'} p-4 text-white text-sm focus:border-gold outline-none transition-colors rounded-sm`} 
                                />
                                {errors.email && <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.email}</p>}
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{lang === 'fr' ? 'Téléphone' : 'Phone Number'}</label>
                                <input 
                                    required 
                                    name="phone" 
                                    type="tel" 
                                    placeholder="+237 ..." 
                                    className={`w-full bg-noir border ${errors.phone ? 'border-red-500' : 'border-white/10'} p-4 text-white text-sm focus:border-gold outline-none transition-colors rounded-sm`} 
                                />
                                {errors.phone && <p className="text-[10px] text-red-500 uppercase tracking-widest">{errors.phone}</p>}
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{lang === 'fr' ? 'Type de service' : 'Service Type'}</label>
                                <select name="service" className="w-full bg-noir border border-white/10 p-4 text-white text-sm focus:border-gold outline-none transition-colors rounded-sm appearance-none">
                                    <option value="Fitness">{lang === 'fr' ? 'Fitness / Coaching Personnel' : 'Fitness / Personal Training'}</option>
                                    <option value="Physiotherapy">{lang === 'fr' ? 'Consultation de Kiné' : 'Physiotherapy Consultation'}</option>
                                    <option value="Massage">Sports Massage</option>
                                    <option value="Nutrition">Nutrition Coaching</option>
                                </select>
                            </motion.div>
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2">
                                <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">{lang === 'fr' ? 'Horaire souhaité' : 'Preferred Time'}</label>
                                <select name="time" className="w-full bg-noir border border-white/10 p-4 text-white text-sm focus:border-gold outline-none transition-colors rounded-sm appearance-none">
                                    <option value="Morning">{lang === 'fr' ? 'Matin (08:00 - 12:00)' : 'Morning (08:00 - 12:00)'}</option>
                                    <option value="Afternoon">{lang === 'fr' ? 'Après-midi (12:00 - 16:00)' : 'Afternoon (12:00 - 16:00)'}</option>
                                    <option value="Evening">{lang === 'fr' ? 'Soir (16:00 - 20:00)' : 'Evening (16:00 - 20:00)'}</option>
                                </select>
                            </motion.div>
                        </div>

                        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="space-y-2">
                            <label className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">Additional Details (Optional)</label>
                            <textarea name="details" rows={3} placeholder={lang === 'fr' ? 'Dites-nous en plus sur vos objectifs...' : 'Please tell us more about your goals or specific health concerns...'} className="w-full bg-noir border border-white/10 p-4 text-white text-sm focus:border-gold outline-none transition-colors rounded-sm resize-none"></textarea>
                        </motion.div>

                        <motion.button 
                            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            className="w-full py-5 premium-gradient text-noir font-black uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                        >
                            {lang === 'fr' ? 'Demander un rendez-vous' : 'Request Appointment'}
                        </motion.button>
                    </motion.form>
                )}
            </motion.div>
       </div>
    </div>
  );
};

export default Contact;
