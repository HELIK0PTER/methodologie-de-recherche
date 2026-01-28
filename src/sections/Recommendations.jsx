import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Check, MessageSquare, BookOpen, UserCheck, Sparkles } from 'lucide-react';

const RecommendationCard = ({ icon: Icon, title, desc, impact, index }) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { delay: index * 0.4, duration: 0.5 }
        }
      }}
      className="glass-panel p-6 border-l-4 border-gold-prestige bg-white/5 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-gold-prestige text-carbon-dark shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
      </div>

      <div className="flex-grow">
        <p className="text-gray-300 text-sm leading-relaxed mb-6">{desc}</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: (index * 0.4) + 0.3 }}
        className="flex items-center gap-2 text-gold-prestige text-[10px] uppercase tracking-widest font-bold bg-gold-prestige/10 px-4 py-2 rounded-full self-start border border-gold-prestige/20"
      >
        <Check size={14} />
        <span>Impact : {impact}</span>
      </motion.div>
    </motion.div>
  );
};

const Recommendations = () => {
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
    },
    {
        icon: Sparkles,
        title: "Réassurance Continue",
        desc: "Validation des choix par des preuves sociales ou des accords mets-vins contextuels pour lever le doute.",
        impact: "+12% Confiance Achat"
    }
  ];

  return (
    <Section id="recommendations">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Plan d'Action <span className="text-gold-prestige">Stratégique</span>
      </h2>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto"
      >
        {recommendations.map((rec, idx) => (
          <RecommendationCard 
            key={idx} 
            index={idx}
            {...rec} 
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Recommendations;