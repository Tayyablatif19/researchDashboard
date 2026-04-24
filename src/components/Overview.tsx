import { motion } from 'motion/react';
import { researchData } from '../data/researchData';
import * as Icons from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart as ReBarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const colors = {
  indigo: '#4f46e5',
  emerald: '#10b981',
  amber: '#f59e0b',
  rose: '#f43f5e',
  slate: '#e2e8f0'
};

export const Overview = () => {
  const chartData = [
    { name: 'Doctors', value: researchData.participants.doctors.length, fill: colors.indigo },
    { name: 'Patients', value: researchData.participants.patients.length, fill: colors.emerald }
  ];

  const genderData = [
    { name: 'Male', value: 8, fill: colors.amber },
    { name: 'Female', value: 7, fill: colors.rose }
  ];

  const kpiColors = [colors.indigo, colors.emerald, colors.amber, colors.rose];

  return (
    <section id="overview" className="py-24 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-slate-200 pb-8">
          <div>
            <h2 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2">Research Dashboard</h2>
            <h3 className="text-3xl font-serif font-bold text-slate-800">Quantitative Overview</h3>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {researchData.kpis.map((kpi, idx) => {
            const IconComponent = (Icons as any)[kpi.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 border border-slate-200 shadow-sm relative overflow-hidden group"
              >
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all group-hover:w-2" 
                  style={{ backgroundColor: kpiColors[idx % kpiColors.length] }} 
                />
                <div className="flex items-start justify-between mb-2">
                   <IconComponent size={14} className="text-slate-300" />
                   <span className="text-3xl font-bold text-slate-800 tracking-tighter">{kpi.value}</span>
                </div>
                <h3 className="text-[10px] uppercase text-slate-500 font-bold tracking-widest leading-none">{kpi.label}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Composition Distribution</h3>
            <div className="h-62.5">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                  />
                  <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', paddingTop: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 border border-slate-200 shadow-sm text-slate-800">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Gender Demographics</h3>
            <div className="h-62.5">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={genderData} layout="vertical" margin={{ left: 10, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={80} axisLine={false} tickLine={false} style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }} />
                  <Tooltip 
                    cursor={{fill: 'rgba(241, 245, 249, 0.5)'}}
                    contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="value" radius={[0, 2, 2, 0]} barSize={24} />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
