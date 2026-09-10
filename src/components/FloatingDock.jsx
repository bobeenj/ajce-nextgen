import { Home, Search, Award, BookOpen, Video, ArrowUpRight } from 'lucide-react';

export default function FloatingDock({ onOpenApply, onFocusSearch }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1.5 p-2 rounded-full floating-dock shadow-xl bg-white/95 border border-slate-200 backdrop-blur-xl">
        
        {/* Home Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-[#08203F] text-white flex items-center justify-center hover:bg-[#152a4e] transition-all shadow-sm"
          title="Return to Home"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
        </button>

        {/* Search Programs Button */}
        <button
          onClick={() => scrollTo('programs')}
          className="w-10 h-10 rounded-full text-slate-600 hover:text-[#1858A8] hover:bg-slate-100 flex items-center justify-center transition-all"
          title="Search 23 Programs"
          aria-label="Programs"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Heritage & Accreditations Button */}
        <button
          onClick={() => scrollTo('heritage')}
          className="w-10 h-10 rounded-full text-slate-600 hover:text-[#1858A8] hover:bg-slate-100 flex items-center justify-center transition-all relative group"
          title="Institutional History & Accreditations"
          aria-label="Accreditations & History"
        >
          <Award className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C89B3C] border-2 border-white"></span>
        </button>

        {/* Vertical Divider */}
        <div className="h-5 w-px bg-slate-200 mx-1"></div>

        {/* Quick Apply Pill */}
        <button
          onClick={onOpenApply}
          className="btn-secondary py-1.5 px-4 rounded-full text-xs font-hanken font-bold flex items-center gap-1"
        >
          <span>Apply 2026</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
