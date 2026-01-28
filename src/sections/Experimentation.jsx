import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Users, Split, MousePointerClick, MessageCircle, CheckCircle } from 'lucide-react';

const Experimentation = () => {
  return (
    <Section id="experimentation">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Expérimentation & <span className="text-gold-prestige">Funnel</span></h2>
      
      <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto">
        {/* A/B Test Schema */}
        <div className="glass-panel p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
               <div className="flex flex-col items-center gap-2">
                 <div className="bg-white/10 p-4 rounded-full"><Users size={32} /></div>
                 <span className="text-sm text-gray-400">Trafic Total</span>
               </div>
               
               <div className="flex-1 flex items-center justify-center">
                 <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-white/20 w-32 relative"
                 >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-carbon-dark border border-white/20 p-2 rounded-full">
                        <Split size={20} className="text-gold-prestige" />
                    </div>
                 </motion.div>
               </div>

               <div className="flex flex-col gap-8 flex-1">
                 <div className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                    <span className="text-gray-300 font-bold">50% Témoin</span>
                    <span className="text-xs text-gray-500 ml-auto">Expérience Actuelle</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-lg border border-gold-prestige/30 bg-gold-prestige/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gold-prestige/5 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-gold-prestige"></div>
                    <span className="text-white font-bold">50% Groupe Test</span>
                    <span className="text-xs text-gold-prestige ml-auto">Projection Avec IA</span>
                 </div>
               </div>
            </div>
        </div>

        {/* Funnel KPIs */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
            {[
                { icon: MousePointerClick, label: "Taux d'engagement", value: "35%", sub: "Cible Engagement" },
                { icon: CheckCircle, label: "Click-to-product", value: "+15%", sub: "Projection vs Témoin" }
            ].map((kpi, idx) => (
                <div key={idx} className="glass-panel p-6 text-center hover:bg-white/5 transition-colors">
                    <kpi.icon className="mx-auto mb-4 text-gold-prestige w-8 h-8"/>
                    <div className="text-3xl font-bold text-white mb-1">{kpi.value}</div>
                    <div className="text-sm font-bold text-gray-300 mb-1">{kpi.label}</div>
                    <div className="text-xs text-gray-500">{kpi.sub}</div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Experimentation;
