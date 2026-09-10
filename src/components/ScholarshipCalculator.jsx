import React, { useState } from 'react';
import { Calculator, Award, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';

export default function ScholarshipCalculator({ onApplyWithScholarship }) {
  const [keamRank, setKeamRank] = useState(4500);
  const [boardMarks, setBoardMarks] = useState(92);
  const [selectedBranch, setSelectedBranch] = useState('cse');
  const [hostelSelected, setHostelSelected] = useState(true);

  // Merit calculations
  const calculateScholarship = () => {
    let waiverPercentage = 0;
    let schemeName = "Standard Merit Tuition";

    if (keamRank <= 2000) {
      waiverPercentage = 100;
      schemeName = "Diocesan Platinum Award (100% Free Tuition)";
    } else if (keamRank <= 5000) {
      waiverPercentage = 75;
      schemeName = "Autonomous Gold Scholarship (75% Tuition Waiver)";
    } else if (keamRank <= 10000) {
      waiverPercentage = 50;
      schemeName = "Silver Merit Grant (50% Tuition Waiver)";
    } else if (boardMarks >= 95) {
      waiverPercentage = 40;
      schemeName = "Board Topper Academic Waiver (40% Concession)";
    } else if (keamRank <= 15000 || boardMarks >= 90) {
      waiverPercentage = 25;
      schemeName = "Merit Concession (25% Tuition Fee Waiver)";
    }

    const baseTuition = 85000;
    const waivedAmount = Math.round((baseTuition * waiverPercentage) / 100);
    const finalTuition = baseTuition - waivedAmount;
    const hostelFee = hostelSelected ? 48000 : 0;
    const netSemester = finalTuition + hostelFee;

    return {
      waiverPercentage,
      schemeName,
      baseTuition,
      waivedAmount,
      finalTuition,
      hostelFee,
      netSemester
    };
  };

  const calc = calculateScholarship();

  return (
    <section id="scholarships" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="academic-card p-6 sm:p-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1858A8]/10 text-[#1858A8] font-hanken text-xs uppercase tracking-wider font-bold mb-3 border border-[#1858A8]/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Merit Transparency Engine</span>
          </div>

          <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08203F] mb-3">
            Merit Scholarship & Fee Simulator
          </h2>

          <p className="text-slate-600 font-manrope text-sm font-light leading-relaxed">
            Amal Jyothi provides up to <strong>100% Free Tuition</strong> for top KEAM rank holders, alongside special Diocesan scholarships and academic grants.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls: 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* KEAM Rank Slider */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <label className="font-hanken font-bold text-sm text-[#08203F]">
                  Estimated / Actual KEAM Rank
                </label>
                <span className="font-mono text-base font-bold text-[#1858A8] px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm">
                  #{keamRank.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="30000"
                step="100"
                value={keamRank}
                onChange={(e) => setKeamRank(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1858A8]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
                <span>Rank 1 (100% Waiver)</span>
                <span>Rank 5,000 (75%)</span>
                <span>Rank 10,000 (50%)</span>
                <span>30,000+</span>
              </div>
            </div>

            {/* 12th Board PCM Score Slider */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <label className="font-hanken font-bold text-sm text-[#08203F]">
                  12th Board PCM Score (Physics, Chemistry, Maths)
                </label>
                <span className="font-mono text-base font-bold text-[#08203F] px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-sm">
                  {boardMarks}%
                </span>
              </div>
              <input
                type="range"
                min="60"
                max="100"
                step="1"
                value={boardMarks}
                onChange={(e) => setBoardMarks(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#08203F]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
                <span>60% Eligibility</span>
                <span>85% Merit</span>
                <span>95%+ Topper Grant</span>
                <span>100%</span>
              </div>
            </div>

            {/* Branch & Accommodation Preferences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-hanken font-bold text-[#08203F] uppercase tracking-wider mb-2">
                  Specialization Vector
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-hanken font-semibold text-[#08203F] focus:outline-none focus:border-[#1858A8]"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.code})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-hanken font-bold text-[#08203F] uppercase tracking-wider mb-2">
                  Accommodation Mode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setHostelSelected(false)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-hanken font-bold transition-all ${
                      !hostelSelected
                        ? 'bg-[#08203F] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Day Scholar
                  </button>
                  <button
                    type="button"
                    onClick={() => setHostelSelected(true)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-hanken font-bold transition-all ${
                      hostelSelected
                        ? 'bg-[#1858A8] text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Hostel (2,500)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary Card: 5 Columns */}
          <div className="lg:col-span-5 bg-[#08203F] text-white p-7 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono tracking-widest text-[#C89B3C] uppercase">
                Scholarship Assessment
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1858A8] text-white">
                {calc.waiverPercentage}% Waiver
              </span>
            </div>

            <div>
              <h3 className="font-hanken text-xl font-bold text-white mb-1">
                {calc.schemeName}
              </h3>
              <p className="text-xs text-slate-300 font-manrope font-light">
                Merit-based institutional fee concession for autonomous engineering cohort.
              </p>
            </div>

            {/* Fee Breakdown Table */}
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-400">Standard Semester Tuition:</span>
                <span className="text-slate-200">₹{calc.baseTuition.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-emerald-400">Merit Fee Waiver ({calc.waiverPercentage}%):</span>
                <span className="text-emerald-400 font-bold">- ₹{calc.waivedAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-slate-300">Net Tuition Payable:</span>
                <span className="text-white font-bold">₹{calc.finalTuition.toLocaleString()}</span>
              </div>
              {hostelSelected && (
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-slate-400">Sanjo/Amala Hostel (Mess + Room):</span>
                  <span className="text-slate-200">₹{calc.hostelFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between items-baseline pt-2 text-sm">
                <strong className="text-white font-hanken">Total Estimated / Sem:</strong>
                <strong className="text-xl font-hanken font-extrabold text-[#C89B3C]">
                  ₹{calc.netSemester.toLocaleString()}
                </strong>
              </div>
            </div>

            <button
              onClick={() => onApplyWithScholarship({
                rank: keamRank,
                waiver: calc.waiverPercentage,
                branch: selectedBranch
              })}
              className="w-full btn-secondary py-3.5 text-xs font-hanken font-bold tracking-wide"
            >
              Claim Waiver in Application <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
