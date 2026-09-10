import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Building, User, Mail, Phone, Calendar, ShieldCheck } from 'lucide-react';
import { DEPARTMENTS } from '../data/collegeData';

export default function ApplyModal({ isOpen, onClose, initialBranch, initialScholarship }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    branch: initialBranch || 'cse',
    keamRank: initialScholarship?.rank || '',
    pcmMarks: '90',
    admissionQuota: 'merit',
    hostelRequired: 'yes',
    visitCampus: 'yes',
    visitDate: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  useEffect(() => {
    if (initialBranch) {
      setFormData((prev) => ({ ...prev, branch: initialBranch }));
    }
    if (initialScholarship?.rank) {
      setFormData((prev) => ({ ...prev, keamRank: initialScholarship.rank }));
    }
  }, [initialBranch, initialScholarship]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete submission
      const generatedId = `AJCE-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      setApplicationId(generatedId);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#1858A8', '#C89B3C', '#08203F', '#10b981']
        });
      } catch (err) {}
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative font-manrope">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors z-20"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 bg-[#08203F] text-white">
          <div className="flex items-center gap-2 text-xs font-hanken font-bold text-[#C89B3C] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>ADMISSIONS 2026–27 — UGC AUTONOMOUS BATCH</span>
          </div>
          <h3 className="text-2xl font-hanken font-extrabold text-white">
            {submitted ? "Application Registered" : "Admission Application Portal"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal leading-relaxed">
            {submitted
              ? "Your priority application number has been registered with the AJCE Admissions Office."
              : "Direct autonomous intake, KEAM merit allotment & Diocesan scholarship reservation."}
          </p>

          {/* Stepper Dots */}
          {!submitted && (
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    s === step
                      ? 'bg-[#C89B3C]'
                      : s < step
                      ? 'bg-[#1858A8]'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleNext} className="space-y-4">
              {/* Step 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 font-hanken">
                    Step 1 of 3: Applicant Contact Information
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Abraham / Maya Sen"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1858A8] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1858A8] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1858A8] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City / District & State *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Kottayam, Kochi, Trivandrum, Bengaluru"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1858A8] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Academic Program & Quota */}
              {step === 2 && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 font-hanken">
                    Step 2 of 3: Academic Program Preference
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Department & Branch *</label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1858A8] focus:bg-white"
                    >
                      {DEPARTMENTS.map((dept) => (
                        <option key={dept.id} value={dept.id} className="text-slate-900">
                          {dept.name} ({dept.code}) — {dept.degree}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Expected KEAM Rank</label>
                      <input
                        type="number"
                        name="keamRank"
                        placeholder="e.g. 4200 (Optional)"
                        value={formData.keamRank}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1858A8] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">12th PCM Marks (%)</label>
                      <input
                        type="number"
                        name="pcmMarks"
                        min="50"
                        max="100"
                        value={formData.pcmMarks}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1858A8] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Admission Category</label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {[
                        { id: 'merit', label: 'Govt Merit (KEAM)' },
                        { id: 'management', label: 'Management Merit' },
                        { id: 'nri', label: 'NRI / Overseas' }
                      ].map((quota) => (
                        <button
                          key={quota.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, admissionQuota: quota.id })}
                          className={`p-2.5 rounded-xl border text-center font-hanken font-bold transition-all ${
                            formData.admissionQuota === quota.id
                              ? 'border-[#1858A8] bg-[#1858A8]/10 text-[#1858A8]'
                              : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {quota.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Campus Living & Tour */}
              {step === 3 && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 font-hanken">
                    Step 3 of 3: Campus Amenities & Visit
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Hostel Accommodation Required?</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'yes', label: 'Yes (Sanjo / Amala Hostels)' },
                        { id: 'no', label: 'No (Day Scholar / College Bus)' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, hostelRequired: opt.id })}
                          className={`p-2.5 rounded-xl border text-center font-hanken font-bold transition-all ${
                            formData.hostelRequired === opt.id
                              ? 'border-[#1858A8] bg-[#1858A8]/10 text-[#1858A8]'
                              : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Schedule Guided 68-Acre Campus Orbit Visit?</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'yes', label: 'Yes, I want a physical tour' },
                        { id: 'no', label: 'Virtual tour is sufficient' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, visitCampus: opt.id })}
                          className={`p-2.5 rounded-xl border text-center font-hanken font-bold transition-all ${
                            formData.visitCampus === opt.id
                              ? 'border-[#1858A8] bg-[#1858A8]/10 text-[#1858A8]'
                              : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.visitCampus === 'yes' && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Visit Date</label>
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#1858A8]"
                      />
                    </div>
                  )}

                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-2.5 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-[#1858A8] shrink-0 mt-0.5" />
                    <span>
                      Autonomous admissions guarantee: direct processing without intermediate agents. Confidentiality guaranteed under AJCE Privacy Charter.
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-hanken font-bold text-xs transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1858A8] hover:bg-[#124380] text-white font-hanken font-bold text-xs tracking-wider shadow-md shadow-[#1858A8]/30 transition-all"
                >
                  <span>{step === 3 ? "Submit Application" : "Continue"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Success View */
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-hanken font-bold uppercase tracking-widest text-[#1858A8] block mb-1">
                  Application Logged Successfully
                </span>
                <h4 className="text-xl font-hanken font-extrabold text-slate-900">
                  Welcome to Amal Jyothi Autonomous
                </h4>
                <div className="mt-2 inline-block px-4 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono font-bold text-sm tracking-wider">
                  {applicationId}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-bold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-bold text-slate-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">Programme:</span>
                  <span className="font-bold text-slate-900 uppercase">{formData.branch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Admissions Helpline:</span>
                  <a href="tel:+919072661600" className="font-bold text-[#1858A8]">+91 9072661600</a>
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Our admissions counselor will contact you via WhatsApp and phone within 2 hours with the official scholarship grant letter.
              </p>

              <button
                onClick={handleResetAndClose}
                className="w-full max-w-xs py-2.5 rounded-xl bg-[#08203F] hover:bg-[#152a4e] text-white font-hanken font-bold text-xs tracking-wider transition-all"
              >
                Done & Return to Campus Orbit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
