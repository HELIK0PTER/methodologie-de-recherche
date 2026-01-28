import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Landing = () => {
  return (
    <Section id="landing" className="text-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-gold-prestige text-sm font-semibold tracking-wider uppercase"
      >
        <Sparkles size={16} />
        <span>Startup Phase : &lt; 6 mois d'activité</span>
      </motion.div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Sommelier Virtuel : <br />
        <span className="text-gradient">L'IA au service du Terroir</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
        Optimiser la vente de vin en ligne par l'accompagnement d'un sommelier virtuel interactif.
      </p>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm tracking-widest text-gray-400 uppercase">Projet de recherche appliquée</p>
        <h3 className="text-2xl font-serif text-white">Matheus KOPS GUEDES</h3>
        <h3 className="text-2xl font-serif text-white">Rayan MAHANI</h3>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-gray-500 text-sm">Scroll to explore</span>
      </motion.div>
    </Section>
  );
};

export default Landing;
