import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Award, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export default function Hero({ onOpenApply, onOpenAdvisor }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#051124] text-white">
      
      {/* Background Video from AJCE Campus Tour (RpTeBB2lWKc) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="relative w-full h-full">
          {/* YouTube background iframe with ambient loop */}
          <iframe
            className="absolute top-1/2 left-1/2 w-[180vw] h-[180vh] sm:w-[130vw] sm:h-[130vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none opacity-45 scale-105 transition-opacity duration-1000"
            src="https://www.youtube-nocookie.com/embed/RpTeBB2lWKc?autoplay=1&mute=1&loop=1&playlist=RpTeBB2lWKc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
            title="AJCE Campus Aerial Tour"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        
        {/* Cinematic Gradient Overlays for Razor-Sharp Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-[#051124]/75 to-[#051124]/90 z-10"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#051124]/50 to-[#051124] z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Badges Pill Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge-gold">
                <Award className="w-3.5 h-3.5" />
                <span>UGC Autonomous • NAAC 'A+' Grade</span>
              </span>
              <span className="badge-terra">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KIRF Rank #4 in Kerala</span>
              </span>
              <button
                onClick={() => setShowVideoModal(true)}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <Play className="w-3 h-3 text-[#E4BC66] fill-[#E4BC66]" />
                <span>Watch Campus Film</span>
              </button>
            </div>

            {/* Contemporary Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              Engineering Future Leaders. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E4BC66] via-white to-[#E86B3E]">
                Empowering Autonomy.
              </span>
            </h1>

            {/* Verified Institutional Overview */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Welcome to <strong className="text-white font-semibold">Amal Jyothi College of Engineering (AJCE Autonomous)</strong>, Kanjirappally. Celebrating 25 Years of Pure Light with 23 degree programs, 2 DST-supported TBIs, AICTE IDEA Lab, 500-meter Skywalk, and direct international transfer pathways to the USA and Australia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenApply}
                className="btn-primary-action text-sm font-bold tracking-wide"
              >
                <span>Apply for 2026 Admissions</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#programs"
                className="btn-glass-action text-sm font-semibold"
              >
                <span>Explore 23 Programmes</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#innovations"
                className="btn-gold-action text-sm font-bold"
              >
                <span>TBIs & Startups Valley</span>
              </a>
            </div>

            {/* Key Verified Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-3xl font-extrabold text-[#E4BC66] block">A+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">NAAC Grade</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-3xl font-extrabold text-[#E4BC66] block">#4</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">KIRF Kerala (2026)</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-3xl font-extrabold text-[#E86B3E] block">95+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Startups Incubated</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-3xl font-extrabold text-[#E4BC66] block">68</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Acre Eco-Campus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live Highlight Cards */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Live Card 1: YIP 8.0 State Champions */}
            <div className="glass-panel-glow p-5 space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="badge-terra">Kerala YIP 8.0</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">5 State Winners</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                State Champions in Innovation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                638 Projects, 2,866 Student Innovators, and 132 Faculty Mentors with ₹4.3 Cr funding benchmark.
              </p>
            </div>

            {/* Live Card 2: Save the Date */}
            <div className="glass-panel p-5 space-y-2 border-l-4 border-l-[#BE4E27]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E86B3E] font-bold">Save The Date</span>
                <span className="text-xs font-mono text-slate-400">Sep 15–16, 2026</span>
              </div>
              <h4 className="text-base font-bold text-white">
                AI Conclave 2026
              </h4>
              <p className="text-xs text-slate-400">
                National summit on artificial intelligence and autonomous engineering systems at AJCE.
              </p>
            </div>

            {/* Live Card 3: 2026 Placement Milestone */}
            <div className="glass-panel p-5 space-y-2 border-l-4 border-l-[#C89B3C]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E4BC66] font-bold">Placements 2026</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">₹16 LPA Max</span>
              </div>
              <h4 className="text-base font-bold text-white">
                602+ Offers Across 95+ MNCs
              </h4>
              <p className="text-xs text-slate-400">
                TCS, Cognizant, Infosys, Wipro, Amazon, Federal Bank, UST, and Tier-1 tech recruiters.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Full Campus Documentary Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all font-bold"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/RpTeBB2lWKc?autoplay=1"
                title="Amal Jyothi College of Engineering Campus Tour"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
