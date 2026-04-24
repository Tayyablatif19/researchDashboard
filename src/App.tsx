/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Methodology } from './components/Methodology';
import { ThematicInsights } from './components/ThematicInsights';
import { CaseStudies } from './components/CaseStudies';
import { References } from './components/References';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-indigo-600 z-[100] transform-origin-0"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 px-6 py-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 bg-indigo-900 flex items-center justify-center text-white font-serif font-bold rounded-sm text-lg">
             E
           </div>
           <div>
             <span className="font-bold text-[10px] block text-indigo-600 uppercase tracking-[0.2em] leading-none">Ethnography Dashboard</span>
           </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
           <a href="#overview" className="hover:text-indigo-600 transition-colors">Statistical Data</a>
           <a href="#themes" className="hover:text-indigo-600 transition-colors">Thematic Insights</a>
           <a href="#observations" className="hover:text-indigo-600 transition-colors">Field Journal</a>
        </nav>
      </header>

      <main className="pt-32">
        <Hero />
        
        <div id="overview">
          <Overview />
        </div>

        <Methodology />

        <div id="themes">
          <ThematicInsights />
        </div>

        <div id="observations">
          <CaseStudies />
        </div>

        <References />
      </main>
    </div>
  );
}

