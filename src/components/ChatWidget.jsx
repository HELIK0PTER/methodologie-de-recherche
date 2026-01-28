import { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Bonjour ! Je suis votre Sommelier Virtuel. Une question sur un vin ?" }
  ]);

  const scenarios = [
    { q: "C'est quoi des tanins ?", a: "Les tanins viennent de la peau du raisin. Imaginez la sensation rapeuse du thé noir trop infusé : c'est ça ! Ils donnent la structure ('le squelette') au vin rouge." },
    { q: "Quel vin pour une viande rouge ?", a: "Pour une viande rouge, je vous recommande un vin rouge structuré (donc tannique !) pour tenir tête au gras de la viande. Bordeaux ou Côte-du-Rhône seront parfaits." },
    { q: "Un blanc sec c'est quoi ?", a: "C'est un vin blanc sans sucre résiduel. Il est vif, frais, et ne 'colle' pas au palais. Parfait pour les fruits de mer !" }
  ];

  const handleAsk = (scenario) => {
    setMessages(prev => [...prev, { type: 'user', text: scenario.q }]);
    
    // Simulate thinking delay
    setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: scenario.a }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 md:w-96 glass-panel border border-gold-prestige/30 shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-wine-deep/90 p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                    <div className="bg-white/10 p-1 rounded-full"><Bot size={20} className="text-gold-prestige"/></div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Sommelier.AI</h4>
                        <span className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> En ligne</span>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={18}/></button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-carbon-dark/80 scrollbar-thin scrollbar-thumb-gold-prestige/20">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-lg max-w-[85%] text-sm ${
                            msg.type === 'user' 
                                ? 'bg-gold-prestige text-carbon-dark font-medium rounded-tr-none' 
                                : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Suggestions */}
            <div className="p-4 border-t border-white/10 bg-black/40">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Demander :</p>
                <div className="flex flex-wrap gap-2">
                    {scenarios.map((s, i) => (
                        <button 
                            key={i} 
                            onClick={() => handleAsk(s)}
                            className="text-xs bg-white/5 hover:bg-gold-prestige hover:text-carbon-dark border border-white/10 px-3 py-2 rounded-full transition-colors text-left"
                        >
                            {s.q}
                        </button>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gold-prestige text-carbon-dark p-4 rounded-full shadow-lg shadow-gold-prestige/20 flex items-center justify-center font-bold"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
