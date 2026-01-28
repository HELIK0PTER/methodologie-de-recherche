import { useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';

// Sections
import Landing from './sections/Landing';
import Objectives from './sections/Objectives';
import Market from './sections/Market';
import Methodology from './sections/Methodology';
import Experimentation from './sections/Experimentation';
import Dashboard from './sections/Dashboard';
import Recommendations from './sections/Recommendations';

const SECTIONS = [
  'landing',
  'objectives',
  'market',
  'methodology',
  'experimentation',
  'dashboard',
  'recommendations'
];

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleKeyDown = (e) => {
      // Prevent default behavior for space and arrows to avoid unwanted jumping
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        // Only prevent if not in a textarea/input (like the chat widget)
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
          return;
        }
        e.preventDefault();
      }

      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find current section index based on scroll position
      let currentIndex = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i]);
        if (el && el.offsetTop <= currentScroll + windowHeight / 2) {
          currentIndex = i;
        }
      }

      const goToSection = (index) => {
        const targetId = SECTIONS[index];
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        if (currentIndex < SECTIONS.length - 1) {
          goToSection(currentIndex + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          goToSection(currentIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-carbon-dark min-h-screen text-white relative selection:bg-gold-prestige selection:text-carbon-dark">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden pl-16 md:pl-24">
        <Landing />
        <Objectives />
        <Market />
        <Methodology />
        <Experimentation />
        <Dashboard />
        <Recommendations />

        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/40 backdrop-blur-md">
          <p>© 2024 Matheus KOPS GUEDES - IIM - Projet Recherche Appliquée</p>
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
}

export default App;
