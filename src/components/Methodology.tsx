import React from 'react';
import { motion } from 'motion/react';
import { Search, Users, ClipboardCheck, MessageCircle } from 'lucide-react';

export const Methodology = () => {
  const steps = [
    {
      title: "Field Site Selection",
      description: "Conducted at Huma Medical Complex to capture local public and private healthcare transitions.",
      icon: Search
    },
    {
      title: "Physician Interviews",
      description: "In-depth semi-structured interviews with 5 practicing doctors across varying specializations.",
      icon: MessageCircle
    },
    {
      title: "Narrative Construction",
      description: "10 patient cases developed based on field observations and documented socio-cultural patterns.",
      icon: Users
    },
    {
      title: "Thematic Analysis",
      description: "Interpretive grounded methodology identifying four primary structural barriers to care.",
      icon: ClipboardCheck
    }
  ];

  return (
    <section className="py-24 bg-indigo-900 text-white px-4 overflow-hidden relative">
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
         <div className="w-96 h-96 border-40 border-white/20 rounded-full -mr-48 -mt-48" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 border-l-2 border-indigo-400 pl-8">
          <h2 className="text-[10px] font-bold text-indigo-300 uppercase tracking-[0.2em] mb-2 font-sans">Methodological Framework</h2>
          <h3 className="text-4xl font-serif font-bold italic">Interpretive Grounded Theory</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-5"
            >
              <span className="h-8 w-8 bg-indigo-700/50 border border-indigo-400/30 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-indigo-200">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-bold text-lg mb-3 tracking-tight text-white">{step.title}</h3>
                <p className="text-sm text-indigo-100/70 italic leading-relaxed font-serif">
                  "{step.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
