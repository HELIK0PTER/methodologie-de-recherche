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
import { Bar, Doughnut } from 'react-chartjs-2';

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
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderWidth: 1,
          },
          {
            label: 'Taux Cible (Avec IA)',
            data: [1.8, 3.2],
            backgroundColor: 'rgba(212, 175, 55, 0.6)',
            borderColor: 'rgba(212, 175, 55, 1)',
            borderWidth: 1,
          },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'bottom', labels: { color: 'white' } },
            title: { display: true, text: 'Projection Uplift Conversion par Device', color: 'white' },
        },
        scales: {
            y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
            x: { ticks: { color: 'white' }, grid: { display: false } }
        }
    };

  return (
    <Section id="dashboard">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projection des <span className="text-gold-prestige">Résultats</span></h2>
      
      <div className="grid md:grid-cols-2 gap-8 w-full">
         {/* Split Device Chart */}
         <div className="glass-panel p-6">
            <Bar data={barData} options={barOptions} />
         </div>

         {/* Impact Matrix */}
         <div className="glass-panel p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Matrice d'Impact</h3>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-1/3 text-right text-gray-400 text-sm">Question Technique</div>
                    <div className="flex-1 h-1 bg-white/10 relative">
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full bg-gradient-to-r from-gray-500 to-transparent opacity-30"></div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center py-2 bg-white/5 rounded-lg border border-gold-prestige/30">
                    <span className="text-gold-prestige font-bold mb-1">Réponse IA Pédagogique</span>
                    <span className="text-xs text-gray-500">Reformulation Empathique</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-1/3 text-right text-gold-prestige font-bold text-sm">Impact Estimé Panier</div>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gold-prestige w-[80%] animate-pulse"></div>
                    </div>
                    <div className="text-white text-sm font-bold">+15%</div>
                </div>
            </div>
         </div>
      </div>
    </Section>
  );
};

export default Dashboard;
