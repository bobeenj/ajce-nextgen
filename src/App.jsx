import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstitutionalHeritage from './components/InstitutionalHeritage';
import ProgramMatcher from './components/ProgramMatcher';
import DepartmentExplorer from './components/DepartmentExplorer';
import ConferencesAndPathways from './components/ConferencesAndPathways';
import InnovationHub from './components/InnovationHub';
import CampusExperience from './components/CampusExperience';
import PlacementRadar from './components/PlacementRadar';
import ScholarshipCalculator from './components/ScholarshipCalculator';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';
import AiAdvisorModal from './components/AiAdvisorModal';
import FloatingDock from './components/FloatingDock';

export default function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [initialBranch, setInitialBranch] = useState('cse');
  const [initialScholarship, setInitialScholarship] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  // Dual-Stage Custom Cursor & Parallax Logic
  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';

      // Parallax effect on ambient background orbs
      const orbs = document.querySelectorAll('.parallax-orb');
      const px = (window.innerWidth - e.pageX * 2) / 100;
      const py = (window.innerHeight - e.pageY * 2) / 100;

      orbs.forEach((orb) => {
        const speed = parseFloat(orb.getAttribute('data-speed') || '1');
        orb.style.transform = `translate(${px * speed}px, ${py * speed}px)`;
      });
    };

    // Smooth lerp for trail dot
    const animateTrail = () => {
      const dx = mouseX - trailX;
      const dy = mouseY - trailY;

      trailX += dx * 0.22;
      trailY += dy * 0.22;

      trail.style.left = trailX + 'px';
      trail.style.top = trailY + 'px';

      animationFrameId = requestAnimationFrame(animateTrail);
    };

    // Expand cursor over interactive targets
    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, select, [role="button"], .hover-target')) {
        document.body.classList.add('cursor-expanded');
      } else {
        document.body.classList.remove('cursor-expanded');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Web Audio Western Ghats mountain atmosphere synthesis
  const toggleAmbientSound = () => {
    try {
      if (isMuted) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(420, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.03, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start();

        window._ambientAudio = { ctx, gainNode };
        setIsMuted(false);
      } else {
        if (window._ambientAudio?.ctx) {
          window._ambientAudio.ctx.close();
          window._ambientAudio = null;
        }
        setIsMuted(true);
      }
    } catch (err) {
      console.warn("Ambient audio synthesis error:", err);
    }
  };

  const handleApplyWithBranch = (branchId) => {
    setInitialBranch(branchId);
    setIsApplyOpen(true);
  };

  const handleApplyWithScholarship = (scholarshipData) => {
    if (scholarshipData.branch) setInitialBranch(scholarshipData.branch);
    setInitialScholarship(scholarshipData);
    setIsApplyOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#051124] text-slate-100 flex flex-col relative selection:bg-[#BE4E27] selection:text-white font-sans antialiased">
      {/* Custom Magnetic Cursor Elements */}
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-trail" ref={trailRef}></div>

      {/* Floating Ambient Parallax Orbs (Subtle Royal Blue & Tech Cyan Haze) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div
          className="orb bg-[#1858A8] w-[32rem] h-[32rem] top-[-10%] left-[-10%] animate-float parallax-orb opacity-[0.06]"
          data-speed="-2"
        ></div>
        <div
          className="orb bg-[#C89B3C] w-[38rem] h-[38rem] bottom-[-20%] right-[-10%] animate-float-delayed parallax-orb opacity-[0.07]"
          data-speed="2.5"
        ></div>
        <div
          className="orb bg-[#08203F] w-80 h-80 top-[45%] left-[65%] animate-float-slow parallax-orb opacity-[0.04]"
          data-speed="1.5"
        ></div>
      </div>

      {/* Floating Pill Navbar */}
      <Navbar
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      {/* Main Experience Stream */}
      <main className="flex-1 relative z-10">
        {/* 1. Kinetic Hero with Background College Video, Headlines & Admissions */}
        <Hero
          onOpenApply={() => setIsApplyOpen(true)}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

        {/* 2. Institutional Heritage, Accreditations & Diocesan Leadership (No Login Required) */}
        <InstitutionalHeritage />

        {/* 3. AI Trajectory Predictor Quiz */}
        <ProgramMatcher onApplyWithBranch={handleApplyWithBranch} />

        {/* 4. The Science of Engineering / 23 Autonomous Disciplines & Seat Matrix (Including CA & BCA/MCA) */}
        <DepartmentExplorer onSelectBranch={handleApplyWithBranch} />

        {/* 5. International Pathways (USA/Australia) & 2026 Conferences */}
        <ConferencesAndPathways onOpenApply={() => setIsApplyOpen(true)} />

        {/* 6. Innovation Hub / YIP 8.0 & 2 TBIs / AICTE IDEA Lab */}
        <InnovationHub />

        {/* 7. Campus Orbit & 68-Acre High-Res Facilities */}
        <CampusExperience />

        {/* 8. Industry Centers of Excellence & Recruiter Marquee */}
        <PlacementRadar />

        {/* 9. Scholarship Matrix & Fee Calculator */}
        <ScholarshipCalculator onApplyWithScholarship={handleApplyWithScholarship} />
      </main>

      {/* Footer */}
      <Footer
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      {/* Floating Bottom Navigation Dock */}
      <FloatingDock
        onOpenApply={() => setIsApplyOpen(true)}
      />

      {/* Interactive Modals */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        initialBranch={initialBranch}
        initialScholarship={initialScholarship}
      />

      <AiAdvisorModal
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onOpenApply={() => {
          setIsAdvisorOpen(false);
          setIsApplyOpen(true);
        }}
      />

      {/* Floating Western Ghats Ambient Audio Trigger (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={toggleAmbientSound}
          className="p-3 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-[#1858A8] border border-slate-200 shadow-lg backdrop-blur-md transition-all flex items-center gap-2 group text-xs hover-target"
          title={isMuted ? "Play Western Ghats mountain atmosphere" : "Mute mountain atmosphere"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#1858A8] animate-pulse" />}
          <span className="hidden group-hover:inline pr-1 text-[11px] font-hanken font-semibold text-slate-700">
            {isMuted ? "Atmosphere" : "Mountain Ambience Playing"}
          </span>
        </button>
      </div>

      {/* Floating Admissions AI Advisor Trigger (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAdvisorOpen(true)}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-[#1858A8] text-white font-hanken font-bold text-xs tracking-wide shadow-lg shadow-[#1858A8]/30 hover:shadow-xl hover:shadow-[#1858A8]/40 border border-white/20 transition-all transform hover:scale-105 active:scale-95 hover-target"
          aria-label="Ask AJCE AI Admissions Advisor"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B3C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C89B3C]"></span>
            </span>
          </div>
          <span>AI Advisor</span>
        </button>
      </div>
    </div>
  );
}
