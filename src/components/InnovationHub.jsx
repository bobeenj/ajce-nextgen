import React from 'react';
import { Rocket, Sun, Cpu, Trophy, ArrowUpRight, Zap, Award, CheckCircle2 } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export default function InnovationHub() {
  const flightModules = [
    {
      num: '01',
      title: 'Amal Jyothi Racing (AJR) — Formula Student',
      tag: 'Motorsport & Aerodynamics',
      stat: '0-100 km/h in 3.9s',
      desc: 'Designed, engineered, and assembled completely in-house by AJCE students. Features custom tubular spaceframe chassis, aerodynamic CFD carbon wings, and live telemetry competing on national racetracks.',
      badge: 'Student Fabricated'
    },
    {
      num: '02',
      title: '500 kW Rooftop Clean Solar Microgrid',
      tag: 'ISO 14001 & 50001 Certified',
      stat: '7.2 Lakh Units/yr',
      desc: 'One of the largest institutional clean energy installations in Kerala. Powered by a 500 kW / 400 kW rooftop solar plant backed by a 1,120 KVA diesel generator for 100% uninterrupted green campus operations.',
      badge: 'Carbon Neutral'
    },
    {
      num: '03',
      title: '2 Technology Business Incubators (TBIs)',
      tag: 'DST-Supported Startups',
      stat: '95+ Startups Incubated',
      desc: 'Supported by the Department of Science & Technology (Govt. of India), offering seed grants up to ₹50 Lakhs, legal IP assistance, venture demo days, and over ₹12 Cr+ raised across 95+ campus startups.',
      badge: 'Govt of India DST'
    },
    {
      num: '04',
      title: 'AICTE IDEA Lab & Central Fab Lab',
      tag: '1 of 49 in All India',
      stat: '300+ Prototypes',
      desc: 'One of only 49 prestigious IDEA Labs sanctioned nationwide by AICTE. Equipped with laser cutters, SLA 3D printers, 5-axis CNCs, and advanced IoT testing equipment accessible 24/7 for interdisciplinary research.',
      badge: 'AICTE Funded'
    }
  ];

  return (
    <section id="innovations" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* YIP 8.0 Landmark Achievement Banner */}
      <div className="mb-14 academic-card p-6 sm:p-10 border-[#1858A8]/30 bg-gradient-to-r from-blue-50/50 via-white to-indigo-50/30">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1858A8]/10 text-[#1858A8] text-xs font-hanken font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Kerala Government State Championship</span>
            </div>
            <h3 className="font-hanken text-2xl sm:text-3xl font-bold text-[#08203F] mb-2">
              Kerala YIP 8.0 State Leaders
            </h3>
            <p className="text-slate-600 text-sm font-manrope font-light leading-relaxed">
              Young Innovators Programme 8.0: With 5 state-level group winners, AJCE stands as Kerala’s undisputed benchmark for collegiate student-led innovation, patent generation, and intellectual property.
            </p>
          </div>

          {/* 4 Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="font-hanken font-bold text-2xl text-emerald-600">5</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">State Winners</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="font-hanken font-bold text-2xl text-[#1858A8]">638</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Projects</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="font-hanken font-bold text-2xl text-[#08203F]">2,866</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Innovators</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
              <div className="font-hanken font-bold text-2xl text-amber-600">132</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">Mentors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="text-[#1858A8] font-hanken tracking-widest uppercase text-xs sm:text-sm mb-2 block font-bold">
            Maker Culture & Startup Ecosystem
          </span>
          <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08203F]">
            Your Research Flight Path
          </h2>
        </div>
        <p className="text-slate-600 max-w-sm text-left md:text-right font-manrope text-sm font-light">
          Hands-on hardware labs, formula racing bays, and real venture funding from your very first semester.
        </p>
      </div>

      {/* Numbered Modules */}
      <div className="space-y-4">
        {flightModules.map((item) => (
          <div
            key={item.num}
            className="academic-card p-6 sm:p-7 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center group"
          >
            {/* Number Badge */}
            <div className="text-3xl sm:text-4xl font-hanken font-extrabold text-slate-300 group-hover:text-[#1858A8] transition-colors w-14 text-left md:text-center shrink-0">
              {item.num}
            </div>

            {/* Center Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <span className="font-hanken text-xs font-bold text-[#1858A8] tracking-wider uppercase">
                  {item.tag}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                  {item.badge}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600">
                  {item.stat}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-hanken font-bold text-[#08203F] mb-1.5 group-hover:text-[#1858A8] transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm font-manrope font-light leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Action Circle */}
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-[#1858A8] group-hover:border-[#1858A8] group-hover:text-white transition-all text-slate-400 shadow-sm">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
