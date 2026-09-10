import React from 'react';
import { Briefcase, Quote, ArrowUpRight, Award, ShieldCheck, Cpu } from 'lucide-react';
import { RECRUITERS, TESTIMONIALS, INDUSTRY_PARTNERS, COLLEGE_INFO } from '../data/collegeData';

export default function PlacementRadar() {
  return (
    <section id="placements" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[#1858A8] font-hanken tracking-widest uppercase text-xs sm:text-sm mb-2 block font-bold">
          Department of Placement & Training (DPT)
        </span>
        <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08203F] mb-4">
          Placement Radar & Industry Alliances
        </h2>
        <p className="text-slate-600 font-manrope font-light text-base">
          Rigorous full-stack aptitude drills, machine coding bootcamps, and executive mock panels launch AJCE graduates straight into premier MNCs and core engineering giants.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="academic-card p-6 text-center">
          <div className="text-3xl sm:text-4xl font-hanken font-extrabold text-[#08203F]">₹20 LPA</div>
          <div className="text-xs font-hanken font-bold text-slate-700 mt-2 uppercase tracking-wide">Highest Package</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Tier-1 Cloud SWE</div>
        </div>
        <div className="academic-card p-6 text-center border-blue-200 bg-blue-50/20">
          <div className="text-3xl sm:text-4xl font-hanken font-extrabold text-[#1858A8]">519+</div>
          <div className="text-xs font-hanken font-bold text-slate-700 mt-2 uppercase tracking-wide">Class of 2026 Offers</div>
          <div className="text-[11px] text-emerald-600 mt-0.5 font-mono font-bold">Active & Counting</div>
        </div>
        <div className="academic-card p-6 text-center">
          <div className="text-3xl sm:text-4xl font-hanken font-extrabold text-[#08203F]">100+</div>
          <div className="text-xs font-hanken font-bold text-slate-700 mt-2 uppercase tracking-wide">Recruiting Titans</div>
          <div className="text-[11px] text-slate-500 mt-0.5">MNCs, Core & Banks</div>
        </div>
        <div className="academic-card p-6 text-center border-emerald-200 bg-emerald-50/20">
          <div className="text-2xl sm:text-3xl font-hanken font-extrabold text-emerald-700">Class of 2027</div>
          <div className="text-xs font-hanken font-bold text-slate-700 mt-2 uppercase tracking-wide">Early Birds</div>
          <div className="text-[11px] text-emerald-700 mt-0.5 font-mono font-bold">Recruitment On</div>
        </div>
      </div>

      {/* Recruiter Marquee */}
      <div className="mb-14 relative">
        <div className="flex items-center justify-between mb-4">
          <span className="font-hanken text-xs uppercase tracking-widest text-slate-500 font-bold">Corporate Hiring Partners</span>
          <span className="font-mono text-xs text-[#1858A8]">Amazon • Microsoft • Bosch • Federal Bank • TCS</span>
        </div>
        <div className="absolute top-8 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-8 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="overflow-hidden py-2">
          <div className="animate-marquee gap-4 flex">
            {RECRUITERS.concat(RECRUITERS).map((recruiter, idx) => (
              <div
                key={idx}
                className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3.5 shrink-0 shadow-sm hover:border-[#1858A8]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-[#08203F] text-white flex items-center justify-center font-hanken font-bold text-xs">
                  {recruiter.name[0]}
                </div>
                <div>
                  <div className="font-hanken text-sm font-bold text-[#08203F]">{recruiter.name}</div>
                  <div className="text-[10px] text-slate-500 font-manrope">{recruiter.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centres of Excellence & Technology Alliances */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#1858A8]" />
            <h3 className="font-hanken text-lg font-bold text-[#08203F]">
              Industry Centres of Excellence & Technology Alliances
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 font-bold">Array W Ecosystem</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {INDUSTRY_PARTNERS.slice(0, 12).map((partner, idx) => (
            <div key={idx} className="academic-card p-3.5 text-center">
              <div className="text-xs font-hanken font-bold text-[#08203F] truncate">{partner.name}</div>
              <div className="text-[10px] font-mono text-[#1858A8] font-semibold mt-1">{partner.type}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Student Placements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="academic-card p-7 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-6 h-6 text-[#1858A8]/30 mb-3" />
              <p className="text-slate-600 font-manrope font-light text-xs sm:text-sm italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover border border-[#1858A8]/30"
              />
              <div>
                <div className="font-hanken text-sm font-bold text-[#08203F]">{t.name}</div>
                <div className="text-[11px] text-slate-500">{t.batch} • <span className="text-[#1858A8] font-semibold">{t.company}</span></div>
                <div className="text-[10px] font-mono text-emerald-600 font-bold mt-0.5">{t.package}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
