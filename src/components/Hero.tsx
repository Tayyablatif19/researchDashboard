import { motion } from 'motion/react';
import { researchData } from '../data/researchData';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center bg-white px-4 border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4 py-1 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-indigo-600"></span>
            Accounting and Finance Research Portfolio / {researchData.year}
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-800 leading-[1.05] mb-6 max-w-4xl">
            {researchData.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 font-medium mb-10 leading-relaxed max-w-2xl">
            {researchData.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button
               onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
               className="bg-indigo-600 text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase cursor-pointer hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Explore Findings
            </button>
            <div className="px-6 py-4 border border-slate-200 text-slate-500 rounded-sm text-xs font-bold tracking-widest uppercase">
               Methodology: {researchData.methodology}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-slate-100"
        >
          <div className="md:col-span-3">
             <h3 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-4">Abstract Overview</h3>
             <div className="flex gap-1">
                {[1,2,3,4].map(i => <div key={i} className="h-1 w-8 bg-slate-200 rounded-full" />)}
             </div>
          </div>
          <div className="md:col-span-9">
            <p className="text-slate-900 leading-relaxed font-serif text-sm md:text-lg italic font-medium">
              "{researchData.abstract}"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
