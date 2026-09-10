import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Award, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import ajceOfficialLogoWhite from '../assets/ajce-official-logo-white.png';

export default function Navbar({ onOpenApply, onOpenAdvisor }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programmes', href: '#programs' },
    { name: 'Heritage', href: '#heritage' },
    { name: 'Conferences', href: '#pathways' },
    { name: 'Innovations & TBIs', href: '#innovations' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Placements', href: '#placements' },
    { name: 'Scholarships', href: '#scholarships' }
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300 top-0 left-0">
      
      {/* Top Utility Bar */}
      <div className="bg-[#040C1A] text-slate-300 py-1 px-4 sm:px-6 lg:px-12 text-xs font-mono border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-[#E4BC66] font-bold">UGC AUTONOMOUS</span>
            <span className="text-white/20">•</span>
            <span className="text-emerald-400 font-semibold">NAAC 'A+' GRADE</span>
            <span className="text-white/20">•</span>
            <span className="text-sky-400">KIRF RANK #4 IN KERALA</span>
            <span className="text-white/20">•</span>
            <span>7 NBA ACCREDITED PROGRAMMES</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans">
            <a href="tel:+919072661600" className="hover:text-[#E4BC66] transition-colors flex items-center gap-1.5 text-slate-200">
              <Phone className="w-3.5 h-3.5 text-[#BE4E27]" />
              <span className="font-semibold">Admissions: +91 9072661600</span>
            </a>
            <span className="text-white/20">•</span>
            <a href="#heritage" className="text-[#E4BC66] hover:underline flex items-center gap-1 font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Accreditations</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#051124]/95 backdrop-blur-xl border-b border-white/15 py-3 shadow-2xl shadow-black/50' 
          : 'bg-[#051124]/80 backdrop-blur-md border-b border-white/10 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with clean left alignment */}
          <div className="flex items-center shrink-0">
            <a href="#" className="block shrink-0" title="Amal Jyothi College of Engineering Autonomous">
              <img
                src={ajceOfficialLogoWhite}
                alt="Amal Jyothi College of Engineering Autonomous"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain block shrink-0 transition-transform duration-200 hover:scale-[1.02]"
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs font-sans font-bold uppercase tracking-wider text-slate-200 ml-10 mr-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#E4BC66] transition-colors py-1 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE4E27] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 ml-auto">
            <button
              onClick={onOpenAdvisor}
              className="btn-glass-action py-2 px-3.5 text-xs rounded-xl flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E4BC66]" />
              <span>AI Advisor</span>
            </button>

            <button
              onClick={onOpenApply}
              className="btn-primary-action py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-1.5 shadow-lg shrink-0"
            >
              <span>Apply 2026-27</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex xl:hidden items-center gap-2 ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#051124] border-b border-white/15 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 hover:text-[#E4BC66] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenApply(); }}
                className="btn-primary-action w-full py-3 text-xs uppercase tracking-wider"
              >
                Apply 2026-27 Admissions
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
