import Section from '../components/Section';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ArrowDown, HelpCircle, Sparkles, TrendingUp } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
    const barData = {
        labels: ['Mobile', 'Desktop'],
        datasets: [
          {
            label: 'Taux Actuel (Témoin)',
            data: [1.2, 2.5],
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderWidth: 1,
            barThickness: 45,
          },
          {
            label: 'Taux Cible (Avec IA)',
            data: [1.8, 3.2],
            backgroundColor: 'rgba(212, 175, 55, 0.8)',
            borderColor: 'rgba(212, 175, 55, 1)',
            borderWidth: 1,
            barThickness: 45,
          },
        ],
    };

    const plugins = [{
        id: 'enhanced-labels',
        afterDraw: (chart) => {
            const { ctx, chartArea: { top } } = chart;
            ctx.save();
            
            const uplifts = ["+50% d'Uplift", "+28% d'Uplift"];
            
            chart.data.datasets.forEach((dataset, i) => {
                const meta = chart.getDatasetMeta(i);
                meta.data.forEach((bar, index) => {
                    // 1. Valeurs individuelles (1.2%, etc.)
                    const val = dataset.data[index] + "%";
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'center';
                    ctx.font = 'bold 12px sans-serif';
                    ctx.fillText(val, bar.x, bar.y - 10);

                    // 2. Badges d'Uplift (uniquement pour le dataset "Cible" à l'index 1)
                    if (i === 1) {
                        const text = uplifts[index];
                        const textWidth = ctx.measureText(text).width;
                        const padding = 8;
                        const rectW = textWidth + padding * 2;
                        const rectH = 24;
                        const rectX = bar.x - rectW / 2 - 20;
                        const rectY = top - 30;

                        // Dessin du badge (Pill)
                        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
                        ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
                        ctx.lineWidth = 1;
                        
                        // Rectangle arrondi
                        ctx.beginPath();
                        ctx.roundRect(rectX, rectY, rectW, rectH, 4);
                        ctx.fill();
                        ctx.stroke();

                        // Texte du badge
                        ctx.fillStyle = '#D4AF37';
                        ctx.font = 'bold 11px sans-serif';
                        ctx.fillText(text, bar.x - 20, rectY + 12);
                    }
                });
            });
            ctx.restore();
        }
    }];

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 40 } }, // Espace pour les badges
        plugins: {
            legend: { 
                position: 'bottom', 
                labels: { color: 'white', padding: 20 } 
            },
            tooltip: { enabled: true }
        },
        scales: {
            y: { 
                max: 4,
                ticks: { color: 'rgba(255,255,255,0.5)' }, 
                grid: { color: 'rgba(255,255,255,0.05)' }
            },
            x: { 
                ticks: { color: 'white', font: { weight: 'bold' } }, 
                grid: { display: false }
            }
        }
    };

  return (
    <Section id="dashboard">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projection des <span className="text-gold-prestige">Résultats</span></h2>
      
      <div className="grid md:grid-cols-2 gap-12 w-full items-center">
         <div className="glass-panel p-8 relative overflow-hidden h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-8">Uplift Conversion par Device</h3>
            
            <div className="flex-grow">
                <div className="h-[300px]">
                    <Bar data={barData} options={barOptions} plugins={plugins} />
                </div>
            </div>

            <div className="mt-8 flex gap-4 text-xs text-gray-400 bg-white/5 p-4 rounded-lg border border-white/5">
                <div className="w-1 bg-red-500/50 rounded-full"></div>
                <p>
                    <span className="text-white font-bold">Note :</span> Le point de départ mobile est plus bas (1.2%) car la friction est naturellement plus élevée. L'IA apporte ici le plus fort gain relatif (+50%).
                </p>
            </div>
         </div>

         <div className="flex flex-col gap-4 relative max-w-sm mx-auto w-full">
            <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-lg flex items-center gap-4">
                <div className="bg-red-500/20 p-3 rounded-full text-red-400">
                    <HelpCircle size={24} />
                </div>
                <div className="flex-1">
                    <h4 className="text-red-400 font-bold uppercase text-[10px] tracking-widest">Le Blocage</h4>
                    <p className="text-white font-serif text-lg">Incompréhension du jargon</p>
                </div>
            </div>

            <ArrowDown className="text-gray-600 mx-auto" size={24} />

            <div className="bg-gold-prestige/10 border border-gold-prestige/30 p-5 rounded-lg flex items-center gap-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold-prestige shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
                <div className="bg-gold-prestige/20 p-3 rounded-full text-gold-prestige">
                    <Sparkles size={24} />
                </div>
                <div className="flex-1">
                    <h4 className="text-gold-prestige font-bold uppercase text-[10px] tracking-widest">Action de l'IA</h4>
                    <p className="text-white font-serif text-lg">Clarification Contextuelle</p>
                </div>
            </div>

            <ArrowDown className="text-gold-prestige mx-auto" size={24} />

            <div className="bg-green-500/10 border border-green-500/20 p-5 rounded-lg flex items-center gap-4 shadow-lg shadow-green-500/5">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                    <TrendingUp size={24} />
                </div>
                <div className="flex-1">
                    <h4 className="text-green-400 font-bold uppercase text-[10px] tracking-widest">L'Impact Visé</h4>
                    <p className="text-white font-bold text-2xl">+15% <span className="text-sm font-normal text-gray-300">Valeur Panier</span></p>
                </div>
            </div>
         </div>
      </div>
    </Section>
  );
};

export default Dashboard;