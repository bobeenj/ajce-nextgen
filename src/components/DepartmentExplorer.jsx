import React, { useState } from 'react';
import { Cpu, Activity, Layers, Aperture, Zap, Building2, FlaskConical, Briefcase, Code2, ArrowUpRight, ChevronRight, X, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { DEPARTMENTS, PROGRAMMES_DIRECTORY } from '../data/collegeData';

export default function DepartmentExplorer({ onSelectBranch }) {
  const [activeTab, setActiveTab] = useState('departments'); // 'departments' | 'matrix'
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDept, setSelectedDept] = useState(null);

  const filters = [
    { id: 'all', label: 'All 9 Faculties' },
    { id: 'computing', label: 'AI & Computing' },
    { id: 'ca', label: 'Computer Applications (MCA/BCA)' },
    { id: 'circuits', label: 'Robotics & VLSI' },
    { id: 'mechanical', label: 'Automotive & Energy' },
    { id: 'infra', label: 'Civil & Bio-Processes' },
    { id: 'business', label: 'Business School (BBA)' }
  ];

  const deptIcons = {
    cse: Cpu,
    aids: Activity,
    ca: Code2,
    ece: Layers,
    mech: Aperture,
    civil: Building2,
    eee: Zap,
    chem_food: FlaskConical,
    abs: Briefcase
  };

  const filteredDepts = DEPARTMENTS.filter((dept) => {
    if (activeFilter === 'computing') return ['cse', 'aids', 'ca'].includes(dept.id);
    if (activeFilter === 'ca') return ['ca'].includes(dept.id);
    if (activeFilter === 'circuits') return ['ece', 'eee'].includes(dept.id);
    if (activeFilter === 'mechanical') return ['mech', 'eee'].includes(dept.id);
    if (activeFilter === 'infra') return ['civil', 'chem_food'].includes(dept.id);
    if (activeFilter === 'business') return ['abs'].includes(dept.id);
    return true;
  });

  return (
    <section id="programs" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1858A8]/10 text-[#1858A8] font-hanken text-xs uppercase tracking-wider font-bold mb-3 border border-[#1858A8]/20">
          <Award className="w-3.5 h-3.5" />
          <span>UGC Autonomous Curriculum 2026-27 • 23 Degree Programs</span>
        </div>

        <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08203F] mb-4">
          Faculties of Engineering & Management
        </h2>
        
        <p className="text-slate-600 max-w-3xl mx-auto font-manrope text-sm sm:text-base font-light leading-relaxed">
          Statutory Autonomous status granted by the UGC on 6 July 2023. Affiliated to APJ Abdul Kalam Technological University (KTU), AJCE empowers students with industry-curated curriculums, micro-credentials, and minors.
        </p>

        {/* Seat Matrix Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto mt-8">
          <div className="academic-card p-4 text-center">
            <div className="font-hanken font-bold text-2xl text-[#08203F]">840 Seats</div>
            <div className="text-xs font-manrope text-slate-500 font-semibold mt-0.5">B.Tech (12 Programs)</div>
          </div>
          <div className="academic-card p-4 text-center">
            <div className="font-hanken font-bold text-2xl text-[#1858A8]">42 Seats</div>
            <div className="text-xs font-manrope text-slate-500 font-semibold mt-0.5">M.Tech (6 Progs)</div>
          </div>
          <div className="academic-card p-4 text-center">
            <div className="font-hanken font-bold text-2xl text-[#08203F]">180 Seats</div>
            <div className="text-xs font-manrope text-slate-500 font-semibold mt-0.5">Computer Applications</div>
          </div>
          <div className="academic-card p-4 text-center border-blue-200">
            <div className="font-hanken font-bold text-2xl text-[#1858A8]">60 Seats</div>
            <div className="text-xs font-manrope text-slate-500 font-semibold mt-0.5">BBA Honours (ABS)</div>
          </div>
          <div className="academic-card p-4 text-center col-span-2 sm:col-span-1">
            <div className="font-hanken font-bold text-2xl text-[#08203F]">10 Disciplines</div>
            <div className="text-xs font-manrope text-slate-500 font-semibold mt-0.5">Ph.D Research</div>
          </div>
        </div>

        {/* View Switcher: Faculty Cards vs Full Intake Matrix */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={() => setActiveTab('departments')}
            className={`px-5 py-2.5 rounded-xl font-hanken text-xs font-bold transition-all ${
              activeTab === 'departments'
                ? 'bg-[#08203F] text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Faculty Deep Dives
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-5 py-2.5 rounded-xl font-hanken text-xs font-bold transition-all ${
              activeTab === 'matrix'
                ? 'bg-[#1858A8] text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Official 2026-27 Intake Directory
          </button>
        </div>

        {/* Filter Pills */}
        {activeTab === 'departments' && (
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-1.5 rounded-full font-hanken text-xs tracking-wider transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#1858A8] text-white font-bold shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* VIEW 1: Department Cards */}
      {activeTab === 'departments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map((dept) => {
            const Icon = deptIcons[dept.id] || Cpu;
            return (
              <div
                key={dept.id}
                className="academic-card p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1858A8]/10 text-[#1858A8] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-[#08203F]">
                      {dept.accreditation}
                    </span>
                  </div>

                  <div className="text-xs font-hanken font-bold text-[#1858A8] uppercase tracking-wider mb-1">
                    {dept.code}
                  </div>

                  <h3 className="font-hanken text-xl font-bold text-[#08203F] mb-2 group-hover:text-[#1858A8] transition-colors">
                    {dept.name}
                  </h3>

                  <div className="text-xs font-mono text-slate-500 mb-4">
                    {dept.degree}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-manrope font-light mb-6">
                    {dept.tagline}
                  </p>

                  {/* Metrics HUD */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Avg Package</span>
                      <strong className="text-sm font-hanken font-bold text-[#08203F]">{dept.avgPackage}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">Top Offer</span>
                      <strong className="text-sm font-hanken font-bold text-emerald-600">{dept.topPackage}</strong>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {dept.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-manrope">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1858A8] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => setSelectedDept(dept)}
                  className="w-full btn-outlined py-2.5 text-xs font-hanken font-semibold justify-center group-hover:border-[#1858A8] group-hover:text-[#1858A8]"
                >
                  Curriculum & Labs <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: Official 2026-27 Intake Directory Table */}
      {activeTab === 'matrix' && (
        <div className="space-y-8 animate-fadeIn">
          {/* B.Tech 840 Seats */}
          <div className="academic-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-hanken text-2xl font-bold text-[#08203F] flex items-center gap-3">
                  <span>B.Tech Degree Programmes</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#1858A8]/10 text-[#1858A8] font-mono font-bold">
                    840 Sanctioned Seats
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-manrope mt-1">
                  4-Year Autonomous Curriculum with Honours & Minor Tracks • KTU Affiliated
                </p>
              </div>
              <div className="text-xs font-mono text-[#1858A8] font-bold">
                Helpline: +91 9072661600
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PROGRAMMES_DIRECTORY.btech.items.map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 hover:border-[#1858A8]/40 transition-colors">
                  <div>
                    <div className="text-sm font-hanken font-bold text-[#08203F]">{item.name}</div>
                    <div className="text-xs font-mono text-slate-500">{item.code} • {item.accredited}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-hanken font-bold text-[#1858A8]">{item.seats}</div>
                    <div className="text-[10px] text-slate-400 font-mono">SEATS</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* M.Tech, Computer Applications & Business School */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* M.Tech 42 Seats */}
            <div className="academic-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-hanken text-lg font-bold text-[#08203F]">M.Tech Specializations</h4>
                  <span className="text-xs font-mono text-[#1858A8] bg-[#1858A8]/10 px-2 py-0.5 rounded font-bold">42 Seats</span>
                </div>
                <div className="space-y-2 mb-4">
                  {PROGRAMMES_DIRECTORY.mtech.items.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-manrope flex justify-between">
                      <span>{m.name}</span>
                      <span className="font-mono text-slate-400">{m.code}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
                Admissions: +91 951 66 66 000
              </div>
            </div>

            {/* Computer Applications 180 Seats */}
            <div className="academic-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-hanken text-lg font-bold text-[#08203F]">Computer Applications</h4>
                  <span className="text-xs font-mono text-[#1858A8] bg-[#1858A8]/10 px-2 py-0.5 rounded font-bold">180 Seats</span>
                </div>
                <div className="space-y-2 mb-4">
                  {PROGRAMMES_DIRECTORY.computerApplications.items.map((ca, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 font-manrope flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#08203F]">{ca.name}</div>
                        <div className="text-[10px] text-slate-500">{ca.duration} • {ca.accredited}</div>
                      </div>
                      <div className="font-mono font-bold text-[#1858A8]">{ca.seats} Seats</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
                Admissions: +91 860 63 09 393
              </div>
            </div>

            {/* Business School & PhD */}
            <div className="academic-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-hanken text-lg font-bold text-[#08203F]">Amal Jyothi Business School</h4>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">New Intake</span>
                </div>
                <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 mb-4">
                  <div className="text-sm font-hanken font-bold text-[#08203F]">BBA Honours (Fully Residential)</div>
                  <div className="text-xs text-slate-600 font-manrope mt-1">4-Year Management Immersion with Executive Leadership & Global Analytics.</div>
                  <div className="text-xs font-mono text-[#1858A8] font-bold mt-2">60 Seats • Helpline: +91 907 45 57 708</div>
                </div>

                <div className="pt-2">
                  <h5 className="font-hanken text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Ph.D Research Disciplines</h5>
                  <div className="text-xs text-slate-700 font-mono leading-relaxed">
                    CH, CE, CSE, CA, ECE, EEE, FT, ME, MT, Basic Sciences
                  </div>
                </div>
              </div>
              <div className="text-xs font-mono text-slate-500 pt-3 border-t border-slate-100">
                Doctoral Centre under KTU
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Curriculum Modal Drawer */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08203F]/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white max-w-2xl w-full p-8 rounded-3xl border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1858A8]/10 text-[#1858A8]">
                {selectedDept.code}
              </span>
              <span className="text-xs font-mono text-slate-500">{selectedDept.accreditation}</span>
            </div>

            <h3 className="font-hanken text-2xl sm:text-3xl font-bold text-[#08203F] mb-2">
              {selectedDept.name}
            </h3>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed font-manrope">
              {selectedDept.tagline}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <span className="text-xs text-slate-500 font-mono">Degrees Offered</span>
                <p className="font-hanken font-bold text-[#08203F] text-sm mt-0.5">{selectedDept.degree}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono">Sanctioned Seats</span>
                <p className="font-hanken font-bold text-[#1858A8] text-sm mt-0.5">{selectedDept.seats} Seats</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-hanken text-sm uppercase tracking-wider text-[#08203F] font-bold mb-3">
                Autonomous Curricular Highlights
              </h4>
              <ul className="space-y-2">
                {selectedDept.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-manrope">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-hanken text-sm uppercase tracking-wider text-[#08203F] font-bold mb-3">
                Advanced Research Labs & Testing Facilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedDept.labs.map((lab, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs text-slate-700 font-mono">
                    {lab}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedDept(null);
                  if (onSelectBranch) onSelectBranch(selectedDept.id);
                }}
                className="flex-1 btn-secondary text-xs font-hanken font-bold py-3"
              >
                Apply for {selectedDept.code}
              </button>
              <button
                onClick={() => setSelectedDept(null)}
                className="btn-outlined py-3 px-6 text-xs font-hanken"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
