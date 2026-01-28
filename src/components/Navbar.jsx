import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { id: 'landing', label: 'Accueil' },
    { id: 'objectives', label: 'Objectifs' },
    { id: 'market', label: 'Marché' },
    { id: 'methodology', label: 'Métho' },
    { id: 'experimentation', label: 'Tests' },
    { id: 'dashboard', label: 'Résultats' },
    { id: 'recommendations', label: 'Conseils' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Vertical Progress Bar */}
      <div className="fixed left-0 top-0 w-1 h-full bg-white/5 z-[60]">
        <motion.div 
          className="w-full bg-gold-prestige origin-top"
          style={{ scaleY }}
        />
      </div>

      {/* Vertical Side Nav */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex items-center gap-4 text-left outline-none"
            >
              {/* Indicator Dot */}
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-gold-prestige scale-125 shadow-[0_0_10px_rgba(212,175,55,0.8)]' 
                  : 'bg-white/20 group-hover:bg-white/40'
              }`} />
              
              {/* Label */}
              <span className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-gold-prestige opacity-100 translate-x-0' 
                  : 'text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
