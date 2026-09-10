import ajceOfficialLogoWhite from '../assets/ajce-official-logo-white.png';
import React from 'react';
import { Loader, MapPin, Phone, Mail, ArrowUp, Award, ExternalLink, ShieldCheck, History, User } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export default function Footer({ onOpenApply, onOpenAdvisor }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contacts = COLLEGE_INFO.contacts;

  return (
    <footer className="py-16 border-t border-slate-200 relative z-10 bg-[#08203F] text-slate-300 font-body text-xs">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Etymology & Silver Jubilee Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] font-head font-bold text-[11px] uppercase tracking-wider">
                  25 Years of Pure Light (2001–2026)
                </span>
                <span className="text-slate-400 text-xs">• Silver Jubilee Celebration</span>
              </div>
              <p className="text-slate-200 font-body font-normal text-xs italic leading-relaxed">
                "{COLLEGE_INFO.etymology}"
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#heritage"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#1858A8] text-white font-head font-semibold text-xs transition-all flex items-center gap-1.5 border border-white/10"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89B3C]" />
                <span>View Accreditations & History</span>
              </a>
              <div className="text-right flex-shrink-0 hidden sm:block">
                <span className="font-head font-bold text-xs text-[#C89B3C] block">UGC Autonomous Institution</span>
                <span className="text-[11px] text-slate-400">APJ Abdul Kalam Technological University</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ajceOfficialLogoWhite}
                alt="Amal Jyothi College of Engineering"
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm font-body font-normal">
              Managed by the Catholic Diocese of Kanjirappally. Conferred Autonomous status by the UGC on 6 July 2023. Affiliated to APJ Abdul Kalam Technological University (KTU). An autonomous 68-acre eco-smart campus engineering future leaders.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-head font-semibold text-[#C89B3C]">
                NAAC 'A+' Grade
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-head font-semibold text-blue-300">
                7 NBA Programmes
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-head font-semibold text-emerald-400">
                KIRF #4 in Kerala
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-head font-semibold text-amber-300">
                ISO 14001 & 50001
              </span>
            </div>

            <div className="pt-2">
              <a
                href="#heritage"
                className="text-xs font-head font-bold text-[#C89B3C] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Award className="w-3.5 h-3.5" />
                <span>25 Years History & Accreditations →</span>
              </a>
            </div>
          </div>

          {/* Academic Modules */}
          <div>
            <div className="font-head font-bold text-xs text-white uppercase tracking-wider mb-3">
              23 Autonomous Programs
            </div>
            <ul className="space-y-2 font-body text-slate-300">
              <li><a href="#programs" className="hover:text-[#C89B3C] transition-colors">B.Tech — 840 Seats (12 Progs)</a></li>
              <li><a href="#programs" className="hover:text-[#C89B3C] transition-colors">M.Tech — 42 Seats (6 Progs)</a></li>
              <li><a href="#programs" className="hover:text-[#C89B3C] transition-colors">Computer Applications — 180 Seats</a></li>
              <li><a href="#programs" className="hover:text-[#C89B3C] transition-colors">BBA Honours (ABS) — 60 Seats</a></li>
              <li><a href="#programs" className="hover:text-[#C89B3C] transition-colors">Ph.D Research (10 Depts)</a></li>
              <li><a href="#pathways" className="hover:text-[#C89B3C] transition-colors">USA Elmhurst & Australia JCU</a></li>
            </ul>
          </div>

          {/* Innovation & Campus */}
          <div>
            <div className="font-head font-bold text-xs text-white uppercase tracking-wider mb-3">
              Campus Ecosystem
            </div>
            <ul className="space-y-2 font-body text-slate-300">
              <li><a href="#innovations" className="hover:text-[#C89B3C] transition-colors">Kerala YIP 8.0 State Champions</a></li>
              <li><a href="#innovations" className="hover:text-[#C89B3C] transition-colors">2 TBIs • 95+ Startups Incubated</a></li>
              <li><a href="#innovations" className="hover:text-[#C89B3C] transition-colors">AICTE IDEA Lab (1 of 49 India)</a></li>
              <li><a href="#innovations" className="hover:text-[#C89B3C] transition-colors">Amal Jyothi Racing (AJR)</a></li>
              <li><a href="#campus" className="hover:text-[#C89B3C] transition-colors">500-m World Record Skywalk</a></li>
              <li><a href="#campus" className="hover:text-[#C89B3C] transition-colors">Sanjo & Amala Hostels (2,500)</a></li>
            </ul>
          </div>

          {/* Direct Admissions Helplines from ajce.in */}
          <div>
            <div className="font-head font-bold text-xs text-white uppercase tracking-wider mb-3">
              Reach Us & Admissions
            </div>
            <div className="space-y-2.5 font-body text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                <span>Kanjirappally, Koovappally P.O., Kottayam, Kerala 686518</span>
              </div>
              
              <div className="pt-1 text-[11px] space-y-1">
                <div>B.Tech: <a href="tel:+919072661600" className="text-white hover:text-[#C89B3C] font-semibold">+91 9072661600</a></div>
                <div>M.Tech: <a href="tel:+919516666000" className="text-white hover:text-[#C89B3C] font-semibold">+91 951 66 66 000</a></div>
                <div>BBA (ABS): <a href="tel:+919074557708" className="text-white hover:text-[#C89B3C] font-semibold">+91 907 45 57 708</a></div>
                <div>BCA/MCA: <a href="tel:+918606309393" className="text-white hover:text-[#C89B3C] font-semibold">+91 860 63 09 393</a></div>
                <div>Reception: <a href="tel:+919072661610" className="text-slate-400 hover:text-white">+91 907 26 61 610</a></div>
              </div>

              <div className="pt-1 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span className="text-slate-300 text-[11px]">info@ajce.in • info@amaljyothi.ac.in</span>
              </div>

              <button
                onClick={onOpenApply}
                className="mt-3 w-full py-2.5 px-4 rounded-xl bg-[#1858A8] hover:bg-[#0052cc] text-white font-head font-bold text-xs tracking-wider transition-all shadow-md shadow-[#1858A8]/30"
              >
                Apply Online (2026-27)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Amal Jyothi College of Engineering (AJCE Autonomous). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#heritage" className="hover:text-white transition-colors">
              History & Accreditations
            </a>
            <button onClick={onOpenAdvisor} className="hover:text-white transition-colors">
              AI Admissions Advisor
            </button>
            <a href="#pathways" className="hover:text-white transition-colors">
              Conferences 2026
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Apex</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C89B3C]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
