import Section from '../components/Section';
import { Users, FileText, MessageSquare, Mail } from 'lucide-react';

const Methodology = () => {
  return (
    <Section id="methodology">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Méthodologie de <span className="text-gold-prestige">Collecte</span></h2>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* Qualitative */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-white border-b border-white/10 pb-4 mb-6">Qualitatif</h3>
          
          <div className="glass-panel p-6 flex gap-4 items-start group hover:bg-white/10 transition-colors">
            <div className="bg-wine-deep/30 p-3 rounded-lg text-gold-prestige">
              <Users size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">5-8 Entretiens Semi-directifs</h4>
              <p className="text-gray-400 text-sm">Compréhension profonde des freins à l'achat et du besoin de réassurance.</p>
            </div>
          </div>

          <div className="glass-panel p-6 flex gap-4 items-start group hover:bg-white/10 transition-colors">
            <div className="bg-wine-deep/30 p-3 rounded-lg text-gold-prestige">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">6 Tests Utilisateurs</h4>
              <p className="text-gray-400 text-sm">Mesure du "Temps de choix" avant et après intervention de l'IA.</p>
            </div>
          </div>
        </div>

        {/* Quantitative */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-white border-b border-white/10 pb-4 mb-6 text-right">Quantitatif</h3>
          
          <div className="glass-panel p-6 flex gap-4 items-start flex-row-reverse text-right group hover:bg-white/10 transition-colors">
            <div className="bg-carbon-dark p-3 rounded-lg text-gold-prestige border border-white/10">
              <MessageSquare size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Micro-sondages In-Bot</h4>
              <p className="text-gray-400 text-sm">50-100 réponses collectées directement dans le flux conversationnel.</p>
            </div>
          </div>

          <div className="glass-panel p-6 flex gap-4 items-start flex-row-reverse text-right group hover:bg-white/10 transition-colors">
            <div className="bg-carbon-dark p-3 rounded-lg text-gold-prestige border border-white/10">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Logs de Conversations</h4>
              <p className="text-gray-400 text-sm">Analyse sémantique des Top 10 intentions clients.</p>
            </div>
          </div>

          <div className="glass-panel p-6 flex gap-4 items-start flex-row-reverse text-right group hover:bg-white/10 transition-colors">
            <div className="bg-carbon-dark p-3 rounded-lg text-gold-prestige border border-white/10">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Email Post-achat</h4>
              <p className="text-gray-400 text-sm">Score de confiance (1-5) sur la recommandation reçue.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Methodology;
