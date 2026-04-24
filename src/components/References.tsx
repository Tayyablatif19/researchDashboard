import { researchData } from '../data/researchData';
import { BookOpen } from 'lucide-react';

export const References = () => {
  return (
    <footer className="footer-theme">
      <div className="bg-white py-24 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10 text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">
            <BookOpen size={14} />
            Academic Citations
          </div>

          <div className="grid grid-cols-1 gap-4">
            {researchData.references.map((ref, idx) => (
              <a 
                key={idx} 
                href={`#ref-${idx}`}
                className="group p-6 bg-slate-50 border border-slate-100 hover:border-indigo-600 hover:bg-white transition-all rounded-sm block"
              >
                <p className="text-slate-500 text-sm italic font-serif leading-relaxed pr-10 group-hover:text-slate-900 transition-colors">
                  {ref}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-slate-400 px-8 py-12 text-[10px] flex flex-col items-center gap-10 shrink-0">
        <div className="flex flex-col items-center text-center gap-3 max-w-xl">
          <p className="uppercase tracking-[0.4em] font-bold text-slate-200">Department of Accounting and Finance</p>
          <div className="flex items-center gap-4">
             <div className="h-px w-8 bg-slate-800"></div>
             <p className="uppercase tracking-[0.2em] font-medium text-slate-500">MUST Business School, Islamabad</p>
             <div className="h-px w-8 bg-slate-800"></div>
          </div>
        </div>

        <div className="flex gap-4 font-bold uppercase tracking-widest text-slate-600 border-t border-slate-800 pt-8 w-full justify-center">
          <span>Copyright © 2026 Research Group</span>
        </div>
      </div>
    </footer>
  );
};
