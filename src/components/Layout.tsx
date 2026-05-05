import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { BRAND, TRANSLATIONS } from "../constants/branding";
import { Moon, Sun, Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;
  const location = useLocation();

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.fitness, path: "/fitness" },
    { name: t.physio, path: "/physio" },
    { name: t.pricing, path: "/pricing" },
    { name: t.coaches, path: "/coaches" },
    { name: t.gallery, path: "/gallery" },
    { name: t.blog, path: "/blog" },
    { name: t.contact, path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-display font-extrabold text-gold tracking-tight">
              {BRAND.name}
            </span>
            <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-[0.2em] -mt-1 font-sans">
              Fitness & Physio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold uppercase tracking-wider",
                  location.pathname === link.path ? "text-gold" : "text-[var(--text-primary)]/70"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-xs font-bold w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-noir transition-all"
            >
              {lang.toUpperCase()}
            </button>
            <button onClick={toggleTheme} className="p-2 text-gold hover:scale-110 transition-transform">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/contact"
              className="px-6 py-2 premium-gradient text-noir font-bold text-sm tracking-wide rounded-sm hover:scale-105 transition-transform"
            >
              {lang === "fr" ? "S'INSCRIRE" : "JOIN NOW"}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={toggleTheme} className="p-2 text-gold">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[var(--bg-primary)] border-b border-gold/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-lg font-display font-bold text-[var(--text-primary)] hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 pt-4">
                 <button
                  onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                  className="text-sm font-bold w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center"
                >
                  {lang.toUpperCase()}
                </button>
                 <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 text-center py-3 premium-gradient text-noir font-bold tracking-wide"
                >
                  {lang === "fr" ? "S'INSCRIRE" : "JOIN NOW"}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].footer;
  
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="text-3xl font-display font-extrabold text-gold tracking-tight">
              {BRAND.name}
            </span>
            <span className="text-xs text-[var(--text-secondary)] uppercase tracking-[0.2em] -mt-1">
              Fitness & Physio
            </span>
          </Link>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {lang === "fr" 
              ? "Le centre d'élite pour votre transformation physique et votre santé à Yaoundé."
              : "The elite center for your physical transformation and health in Yaounde."}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--text-secondary)]/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[var(--text-secondary)]/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold font-display font-bold uppercase tracking-widest text-sm mb-6">{t.location}</h4>
          <p className="text-[var(--text-secondary)] text-sm">{BRAND.contact.location}</p>
          <p className="text-[var(--text-secondary)] text-sm mt-2">Yaoundé, Cameroun</p>
        </div>

        <div>
           <h4 className="text-gold font-display font-bold uppercase tracking-widest text-sm mb-6">{t.hours}</h4>
          <p className="text-[var(--text-secondary)] text-sm">{BRAND.contact.hours}</p>
          <p className="text-[var(--text-secondary)] text-sm mt-2">{lang === 'fr' ? 'Ouvert 7j/7' : 'Open 7 days a week'}</p>
        </div>

        <div>
          <h4 className="text-gold font-display font-bold uppercase tracking-widest text-sm mb-6">{t.contact}</h4>
          <div className="space-y-3">
            {BRAND.contact.phones.map(phone => (
              <a key={phone} href={`tel:${phone}`} className="flex items-center text-[var(--text-secondary)] hover:text-gold text-sm">
                <Phone size={14} className="mr-2" />
                {phone}
              </a>
            ))}
            <a href="mailto:info@bimiberd.com" className="flex items-center text-[var(--text-secondary)] hover:text-gold text-sm">
              <Mail size={14} className="mr-2" />
              info@bimiberd.com
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-[var(--text-secondary)]/40 text-xs">
        © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
    return (
        <a 
            href={`https://wa.me/${BRAND.contact.whatsapp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
            aria-label="Contact on WhatsApp"
        >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.004.332.009c.109.004.253-.041.397.303.144.344.491 1.196.534 1.282.043.087.072.188.014.303s-.087.13-.173.231c-.087.101-.18.224-.258.303-.09.092-.185.193-.079.373.107.179.474.781 1.019 1.265.702.624 1.292.818 1.479.911.188.093.297.077.405-.048.109-.126.462-.534.585-.715.123-.181.246-.152.412-.092.167.061 1.061.5 1.248.597.188.098.312.146.357.223.045.077.045.446-.1.851z" />
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.981-3.563c-.628-.97-.961-2.092-.96-3.235.001-3.374 2.748-6.121 6.125-6.121 1.635.001 3.17 1.341 4.331 2.503 1.161 1.162 1.795 2.705 1.794 4.333 0 3.375-2.743 6.124-6.116 6.124z" />
            </svg>
        </a>
    )
}

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold selection:text-noir">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
