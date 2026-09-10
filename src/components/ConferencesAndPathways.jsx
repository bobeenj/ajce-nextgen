import React from 'react';
import { Globe, Plane, Compass, Calendar, Sparkles, Trophy, Users, ArrowUpRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import { INTERNATIONAL_PATHWAYS, CONFERENCES_2026, HIGHLIGHT_EVENTS_2026, COLLEGE_INFO } from '../data/collegeData';

export default function ConferencesAndPathways({ onOpenApply }) {
  return (
    <section id="pathways" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1858A8]/10 text-[#1858A8] font-hanken text-xs uppercase tracking-wider font-bold mb-3 border border-[#1858A8]/20">
          <Globe className="w-3.5 h-3.5" />
          <span>Global University Transfers & Research Conclaves</span>
        </div>

        <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08203F] mb-4">
          International Pathways & Conferences 2026
        </h2>
        
        <p className="text-slate-600 max-w-3xl mx-auto font-manrope text-sm sm:text-base font-light leading-relaxed">
          From Chicago to Townsville, AJCE students cross global frontiers via structured dual-degree transfer programs. Simultaneously, our campus hosts prestigious IEEE/Springer peer-reviewed conferences and national summits.
        </p>
      </div>

      {/* Part 1: International Pathways */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <Plane className="w-5 h-5 text-[#1858A8]" />
            <h3 className="font-hanken text-xl sm:text-2xl font-bold text-[#08203F]">
              International Dual-Degree Transfer Pathways
            </h3>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-[#08203F]">
            11 Countries • 4 Continents
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INTERNATIONAL_PATHWAYS.map((p) => (
            <div
              key={p.id}
              className="academic-card p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#08203F] text-white">
                    {p.countries}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">New Transfer Route</span>
                </div>

                <h4 className="font-hanken text-2xl font-bold text-[#08203F] mb-3 group-hover:text-[#1858A8] transition-colors">
                  {p.title}
                </h4>

                <div className="text-xs font-mono text-[#1858A8] font-semibold mb-4 bg-blue-50 p-2.5 rounded-xl border border-blue-100">
                  ⏱️ {p.duration}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-manrope font-light">
                  {p.description}
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-manrope">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1858A8] flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {p.contact && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mb-6 font-mono">
                    <div className="text-[#08203F] font-bold mb-0.5">Enquiries & Research Dean:</div>
                    <div>{p.contact}</div>
                  </div>
                )}
              </div>

              <button
                onClick={onOpenApply}
                className="w-full btn-secondary text-xs font-hanken font-bold py-3"
              >
                {p.cta} <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: AI Conclave 2026 Feature Banner in Deep Navy */}
      <div id="events" className="mb-16">
        <div className="navy-card p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C89B3C] text-xs font-mono uppercase tracking-wider mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>National Flagship Summit • 15 & 16 September 2026</span>
            </div>

            <h3 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              AI Conclave 2026
            </h3>

            <p className="text-lg sm:text-xl font-hanken text-[#C89B3C] italic mb-4 font-light">
              {HIGHLIGHT_EVENTS_2026[0].theme}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-8 font-manrope font-light">
              {HIGHLIGHT_EVENTS_2026[0].description}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenApply}
                className="btn-secondary py-3 px-6 text-xs font-hanken font-bold"
              >
                Register as Delegate / Author
              </button>
              <span className="text-xs font-mono text-slate-300">
                Venue: Amal Jyothi College of Engineering, Kanjirappally
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: 2026 Research Conferences */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#1858A8]" />
            <h3 className="font-hanken text-xl sm:text-2xl font-bold text-[#08203F]">
              Annual Research Conferences 2026
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 font-bold">5 Conferences</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {CONFERENCES_2026.map((conf, idx) => (
            <div key={idx} className="academic-card p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-[#1858A8] mb-1">{conf.code}</div>
                <div className="text-xs text-slate-500 font-mono mb-3">{conf.date}</div>
                <p className="text-xs text-slate-700 font-manrope font-medium leading-snug">{conf.title}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-emerald-600 font-semibold">
                Call for Papers Active
              </div>
            </div>
          ))}
        </div>

        {/* Flagship Contests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHT_EVENTS_2026.slice(1, 4).map((evt, idx) => (
            <div key={idx} className="academic-card p-6">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-[#08203F] text-white font-bold">
                {evt.badge}
              </span>
              <h4 className="font-hanken text-lg font-bold text-[#08203F] mt-3 mb-1">{evt.tag}</h4>
              <div className="text-xs text-[#1858A8] font-mono font-bold mb-2">{evt.date}</div>
              <p className="text-xs text-slate-600 font-manrope leading-relaxed">{evt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
