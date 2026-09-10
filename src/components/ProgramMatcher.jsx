import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowUpRight, RotateCcw, CheckCircle2, ChevronRight, Cpu, Wrench, Radio, Building2, FlaskConical, Briefcase } from 'lucide-react';
import { MATCH_QUESTIONS, DEPARTMENTS } from '../data/collegeData';

export default function ProgramMatcher({ onApplyWithBranch }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const icons = {
    Cpu: Cpu,
    Wrench: Wrench,
    Radio: Radio,
    Building2: Building2,
    FlaskConical: FlaskConical,
    Sparkles: Sparkles,
    Briefcase: Briefcase
  };

  const handleSelectOption = (option) => {
    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);

    if (currentStep < MATCH_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const branchScores = {};
      updatedAnswers.forEach((ans) => {
        if (ans.branches) {
          ans.branches.forEach((b) => {
            branchScores[b] = (branchScores[b] || 0) + 1;
          });
        }
      });

      let bestBranchId = 'cse';
      let maxScore = -1;
      Object.keys(branchScores).forEach((b) => {
        if (branchScores[b] > maxScore) {
          maxScore = branchScores[b];
          bestBranchId = b;
        }
      });

      const matchedDept = DEPARTMENTS.find((d) => d.id === bestBranchId) || DEPARTMENTS[0];
      setResult(matchedDept);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1858A8', '#C89B3C', '#08203F', '#10b981'],
        });
      } catch (err) {}
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const currentQ = MATCH_QUESTIONS[currentStep];

  return (
    <section id="quiz" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="academic-card p-6 sm:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#1858A8] font-hanken tracking-widest uppercase text-xs sm:text-sm mb-2 block font-bold">
            Career Vector Algorithm
          </span>
          <h2 className="font-hanken text-3xl sm:text-4xl font-extrabold text-[#08203F] mb-2">
            Find Your Engineering Fit
          </h2>
          <p className="text-slate-600 font-manrope font-light text-xs sm:text-sm max-w-xl mx-auto">
            Answer 3 intuitive questions to calculate which autonomous engineering or management specialization matches your intellectual curiosity.
          </p>
        </div>

        {/* Quiz Steps Indicator */}
        {!result && (
          <div className="flex items-center justify-center gap-2 mb-8">
            {MATCH_QUESTIONS.map((q, idx) => (
              <div
                key={q.id}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentStep
                    ? 'w-10 bg-[#1858A8]'
                    : idx < currentStep
                    ? 'w-4 bg-[#08203F]'
                    : 'w-4 bg-slate-200'
                }`}
              />
            ))}
          </div>
        )}

        {/* Question View */}
        {!result && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                Question 0{currentStep + 1} of 0{MATCH_QUESTIONS.length}
              </span>
              <h3 className="font-hanken text-xl sm:text-2xl font-bold text-[#08203F] mt-1">
                {currentQ.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-manrope font-light mt-1">
                {currentQ.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentQ.options.map((option) => {
                const Icon = icons[option.icon] || Cpu;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left hover:border-[#1858A8] hover:bg-blue-50/50 hover:shadow-md transition-all flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1858A8] flex items-center justify-center shrink-0 group-hover:bg-[#1858A8] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-hanken text-sm font-bold text-[#08203F] mb-1 group-hover:text-[#1858A8] transition-colors">
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="text-xs text-slate-600 font-manrope font-light leading-relaxed">
                          {option.description}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Result View */}
        {result && (
          <div className="text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-[#1858A8]/10 text-[#1858A8] flex items-center justify-center mx-auto shadow-sm">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1858A8] block mb-1">
                Algorithm Recommendation
              </span>
              <h3 className="font-hanken text-2xl sm:text-3xl font-extrabold text-[#08203F]">
                {result.name}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-manrope font-light max-w-xl mx-auto mt-2 leading-relaxed">
                {result.tagline}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Degree Format</span>
                <div className="font-hanken font-bold text-sm text-[#08203F] mt-0.5">{result.degree}</div>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Avg Salary</span>
                <div className="font-hanken font-bold text-sm text-[#1858A8] mt-0.5">{result.avgPackage}</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Top Offer</span>
                <div className="font-hanken font-bold text-sm text-emerald-600 mt-0.5">{result.topPackage}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
              <button
                onClick={() => onApplyWithBranch(result.id)}
                className="btn-secondary py-3 px-6 text-xs font-hanken font-bold"
              >
                Apply for {result.code} <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
              <button
                onClick={handleReset}
                className="btn-outlined py-3 px-5 text-xs font-hanken font-semibold flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Fit Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
