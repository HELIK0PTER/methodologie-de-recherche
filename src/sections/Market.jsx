import Section from '../components/Section';
import { Map, ShoppingBag, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon: Icon, label, value, subtext, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-panel p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
  >
    <div className="bg-white/10 p-3 rounded-full mb-4">
      <Icon className="text-gold-prestige w-8 h-8" />
    </div>
    <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">{label}</h3>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    {subtext && <p className="text-xs text-gray-500">{subtext}</p>}
  </motion.div>
);

const Market = () => {
  return (
    <Section id="market">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Repères de <span className="text-gold-prestige">Marché</span></h2>
      
      <div className="grid md:grid-cols-3 gap-8 w-full">
        {/* French Market */}
        <StatCard 
          icon={Map}
          label="Marché FR 2024"
          value="175,3 Md€"
          subtext="+9,6% vs 2023"
          delay={0.1}
        />

        {/* Conversion Comparison */}
        <div className="glass-panel p-6 col-span-1 md:col-span-2 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <ShoppingBag size={150} />
          </div>
          <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-6">Comparatif Conversion</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 text-gray-300">
                <span>Moyenne E-commerce</span>
                <span>1.88%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gray-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2 text-white font-bold">
                <span className="flex items-center gap-2"><TrendingUp size={16} className="text-gold-prestige"/> Cible Sommelier.AI</span>
                <span className="text-gold-prestige">3.5%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="h-full bg-gradient-to-r from-gold-prestige to-amber-500 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CSAT Benchmark */}
        <StatCard 
          icon={Star}
          label="Objectif CSAT"
          value="85%"
          subtext="Excellence Client Visée"
          delay={0.3}
        />
        
        {/* Additional Insight */}
        <div className="col-span-1 md:col-span-2 glass-panel p-6 flex items-center justify-between">
           <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">Opportunité "Digital Native"</h3>
              <p className="text-gray-400 text-sm max-w-md">
                Les marques DNVB (Digital Native Vertical Brands) sur-performent grâce à une maîtrise directe de la relation client.
              </p>
           </div>
           <div className="text-4xl font-bold text-white/10">DNVB</div>
        </div>
      </div>
    </Section>
  );
};

export default Market;
