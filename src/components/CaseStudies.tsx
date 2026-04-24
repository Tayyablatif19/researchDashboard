import React, { useState } from 'react';
import { motion } from 'motion/react';
import { researchData } from '../data/researchData';
import { User, Tag, ChevronRight, ClipboardCheck } from 'lucide-react';

export const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="observations" className="py-24 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2 leading-none">Ethnographic Data</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-800 tracking-tight leading-tight uppercase relative">
               Field Journal: {researchData.year}
               <span className="absolute -top-6 -left-4 text-[40px] opacity-[0.05] pointer-events-none font-serif tracking-tighter">ARCHIVE</span>
            </h3>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-slate-200"></span>
            Observation Archive
          </div>
        </div>

        {/* Privacy Box */}
        <div className="mb-12 p-8 bg-indigo-50/30 border-l-4 border-indigo-900 rounded-sm relative overflow-hidden">
          <div className="absolute top-2 right-4 opacity-5 pointer-events-none">
            <ClipboardCheck size={80} />
          </div>
          <p className="text-sm text-slate-700 font-serif leading-relaxed italic max-w-3xl">
            <span className="font-bold uppercase tracking-widest text-indigo-900 block mb-2 not-italic text-[10px]">Confidentiality Protocol</span>
            "All participant names used in this record are <span className="underline decoration-indigo-200 decoration-2 underline-offset-4">pseudonyms</span>. This measure has been implemented to ensure the privacy and clinical confidentiality of individuals remains intact while preserving the ethnographic integrity of their lived narratives."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">Participant Registry</h4>
            <div className="max-h-150 overflow-y-auto pr-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-200">
              {researchData.participants.patients.map((patient, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 transition-all flex items-center justify-between group rounded-sm border ${
                    activeTab === idx 
                      ? 'bg-indigo-900 border-indigo-900 shadow-xl shadow-indigo-100' 
                      : 'bg-white border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-sm ${activeTab === idx ? 'bg-indigo-800 text-white' : 'bg-slate-50 text-slate-300'}`}>
                      <User size={14} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-xs uppercase tracking-wider ${activeTab === idx ? 'text-white' : 'text-slate-700'}`}>{patient.name}</h4>
                    </div>
                  </div>
                  <ChevronRight size={14} className={`transition-transform ${activeTab === idx ? 'text-white rotate-90' : 'text-slate-200 group-hover:text-indigo-400'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 flex flex-col">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">Observation Detail</h4>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm rounded-sm grow flex flex-col relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-10 border-b border-slate-50 pb-8">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{researchData.participants.patients[activeTab].barrier}</span>
                </div>
                <div className="text-[10px] text-slate-300 font-mono tracking-tighter">TIMESTAMP: 2026.Q1.ARCHV</div>
              </div>

              <div className="grow border-2 border-dashed border-slate-50 p-8 relative overflow-hidden bg-slate-50/20">
                <p className="text-xl md:text-2xl font-serif font-bold italic text-slate-700 leading-relaxed max-w-2xl group relative z-10">
                  "{researchData.participants.patients[activeTab].story}"
                </p>
                <div className="absolute bottom-4 right-4 opacity-[0.03] pointer-events-none">
                  <User size={160} />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-100">
                 <div className="space-y-1">
                    <p className="text-slate-300 uppercase tracking-widest text-[9px] font-bold">Gender Marker</p>
                    <p className="text-xs font-bold text-slate-500 uppercase">{researchData.participants.patients[activeTab].gender}</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-slate-300 uppercase tracking-widest text-[9px] font-bold">Age Group</p>
                    <p className="text-xs font-bold text-slate-500 uppercase">{researchData.participants.patients[activeTab].age}</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
