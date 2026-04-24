import { motion } from 'motion/react';
import { researchData } from '../data/researchData';
import { Quote, ArrowRight } from 'lucide-react';

const themeColors = ['#4f46e5', '#10b981', '#f43f5e', '#f59e0b'];

export const ThematicInsights = () => {
  return (
    <section id="themes" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2 leading-none">Thematic Findings</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-800 tracking-tight leading-tight">Key Interactional Friction Points</h3>
          </div>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest hidden lg:block">Systemic Barrier Analysis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchData.themes.map((theme, idx) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 border border-slate-100 bg-slate-50/50 group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              {/* Corner Marker */}
              <div 
                className="absolute top-3 right-3 w-3 h-3 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: themeColors[idx % themeColors.length] }} 
              />

              <div className="mb-6">
                <h4 className="font-serif font-bold text-2xl text-slate-800 mb-2">{theme.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase tracking-wider mb-6">Insight Node {idx + 1}</p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans min-h-12">
                  {theme.description}
                </p>
              </div>

              <div className="space-y-3 mb-10">
                {theme.insights.map((insight, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{insight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex gap-4">
                  <Quote size={20} className="text-slate-200 shrink-0" />
                  <div>
                    <p className="italic text-slate-500 font-serif text-sm leading-relaxed mb-2">
                       "{theme.quote}"
                    </p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-indigo-600">
                      — {theme.author}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
