import Section from '../components/Section';
import { TrendingUp, AlertCircle } from 'lucide-react';

const Objectives = () => {
  return (
    <Section id="objectives">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">Objectifs & <span className="text-gold-prestige">Hypothèses</span></h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Notre hypothèse principale repose sur la transformation de l'expérience d'achat : passer d'un catalogue technique intimidant à un conseil personnalisé et émotionnel.
          </p>
          
          <div className="glass-panel p-6 border-l-4 border-gold-prestige">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <AlertCircle className="text-gold-prestige" />
              Le Paradoxe
            </h3>
            <p className="text-gray-400 italic">
              "Transformer le jargon technique (tanins, astringence) en bénéfice émotionnel (soyeux, puissant)."
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={100} />
            </div>
            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Objectif d'Uplift</h3>
            <div className="text-6xl font-bold text-gradient mb-2">+23%</div>
            <p className="text-gray-300">De conversion estimée via l'accompagnement IA</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl font-bold text-white mb-1">50-100</div>
              <p className="text-xs text-gray-400 uppercase">Micro-sondages</p>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl font-bold text-white mb-1">Top 10</div>
              <p className="text-xs text-gray-400 uppercase">Intentions Logs</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Objectives;
