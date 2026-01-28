import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageSquare, BookOpen, UserCheck } from 'lucide-react';
import { useState } from 'react';

const RecommendationItem = ({ icon: Icon, title, desc, impact, isOpen, onClick }) => {
  return (
    <motion.div 
      layout
      onClick={onClick}
      className={`glass-panel p-6 cursor-pointer border-l-4 transition-all duration-300 ${isOpen ? 'border-gold-prestige bg-white/10' : 'border-transparent hover:bg-white/5'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg ${isOpen ? 'bg-gold-prestige text-carbon-dark' : 'bg-white/5 text-gray-400'}`}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {!isOpen && <p className="text-sm text-gray-500">{desc}</p>}
          </div>
        </div>
        <ArrowRight className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-90 text-gold-prestige' : ''}`} />
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 pt-4 border-t border-white/10"
        >
          <p className="text-gray-300 mb-4">{desc}</p>
          <div className="flex items-center gap-2 text-gold-prestige text-sm font-bold bg-gold-prestige/10 px-4 py-2 rounded-full inline-flex">
            <Check size={16} />
            <span>Impact Visé: {impact}</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const Recommendations = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const recommendations = [
    {
      icon: MessageSquare,
      title: "Réécriture du Jargon",
      desc: "Reformulation automatique des termes techniques en langage bénéfice (ex: 'Tanique' → 'Structuré et puissant').",
      impact: "-20% Est. Rebond"
    },
    {
      icon: BookOpen,
      title: "Parcours Guidés",
      desc: "Séquençage des questions pour qualifier le besoin sans perdre l'utilisateur (Occasion → Goût → Budget).",
      impact: "+15% Obj. Complétion"
    },
    {
      icon: UserCheck,
      title: "Ajustement du Ton",
      desc: "Adaptation dynamique du niveau de langage (Pédagogique vs Expert) selon les réponses de l'utilisateur.",
      impact: "+10% Cible Satisfaction"
    }
  ];

  return (
    <Section id="recommendations">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Recommandations <span className="text-gold-prestige">Actionnables</span></h2>
      
      <div className="grid gap-6 w-full max-w-3xl mx-auto">
        {recommendations.map((rec, idx) => (
          <RecommendationItem 
            key={idx} 
            {...rec} 
            isOpen={openIndex === idx}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Recommendations;
