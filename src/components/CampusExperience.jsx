import React, { useState, useRef } from 'react';
import { CheckCircle2, MapPin, Compass, Building, Coffee, BookOpen, Sun, Trophy, Moon, Wifi, Zap } from 'lucide-react';
import { CAMPUS_HOTSPOTS, COLLEGE_INFO } from '../data/collegeData';

export default function CampusExperience() {
  const orbRef = useRef(null);
  const [activeTimeline, setActiveTimeline] = useState(1);
  const infra = COLLEGE_INFO.infrastructure;

  const handleOrbMouseMove = (e) => {
    const orb = orbRef.current;
    if (!orb) return;
    const rect = orb.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    orb.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08)`;
  };

  const handleOrbMouseLeave = () => {
    const orb = orbRef.current;
    if (!orb) return;
    orb.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const timelineSteps = [
    { time: '07:00 AM', title: 'Mountain Dawn & Hilltop Run', desc: 'Jogging through scenic Western Ghats trails followed by fresh breakfast in Sanjo/Amala dining halls.' },
    { time: '09:15 AM', title: 'Autonomous AI & GPU Simulation', desc: 'Working with faculty mentors in the GPU deep learning cluster and 5-axis CNC machining centers.' },
    { time: '01:15 PM', title: 'Skywalk Stroll & Ideation', desc: 'Walking across the 500-meter elevated Skywalk connecting academic complexes with panoramic valley vistas.' },
    { time: '04:30 PM', title: 'Formula Car Testing at TBI', desc: 'Assembling carbon chassis components in the Amal Jyothi Racing bay or prototyping with DST grants.' },
    { time: '07:00 PM', title: 'Floodlit Synthetic Turf Sports', desc: 'High-energy football and badminton matches under floodlights at the international arena pavilion.' },
    { time: '09:30 PM', title: 'Knowledge Centre & Study Jam', desc: 'Quiet study in the 60,000-volume digital library or collaborative late-night coding over 2.10 Gbps Wi-Fi.' },
  ];

  return (
    <section id="campus" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 3D Simulation Showcase */}
      <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 mb-16">
        {/* Left Info */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1858A8]/10 text-[#1858A8] font-hanken text-xs uppercase tracking-wider font-bold mb-3 border border-[#1858A8]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>The Residential Biosphere</span>
          </div>
          
          <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08203F] mb-6 leading-tight">
            68-Acre Hilltop <br />
            <span className="text-[#1858A8]">Eco-Smart Biosphere</span>
          </h2>
          
          <p className="text-slate-600 mb-8 font-manrope font-light text-base leading-relaxed">
            Amal Jyothi is a self-contained 68-acre academic sanctuary with 1.26 Lakh sq.m built-up space nestled in the foothills of the Western Ghats. Cutting-edge engineering laboratories merge with lush green mountain mist.
          </p>

          <ul className="space-y-3.5 font-manrope text-sm text-slate-700 mb-8">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1858A8] shrink-0" />
              <span><strong>68-Acre Hilltop Campus</strong> (1.26 Lakh sq.m built-up area)</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1858A8] shrink-0" />
              <span><strong>2,500 Hostel Residents</strong> (Ladies 1,200 in Amala · Gents 1,300 in Sanjo)</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1858A8] shrink-0" />
              <span><strong>500-Meter Skywalk</strong> (World Record elevated bridge connecting blocks)</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1858A8] shrink-0" />
              <span><strong>2.10 Gbps Leased Internet</strong> with 1,400+ high-end workstations</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1858A8] shrink-0" />
              <span><strong>Amal Jyothi Driving Academy</strong> (Kerala's first college-run driving school)</span>
            </li>
          </ul>
        </div>

        {/* Right 3D Interactive Telemetry Simulation Card */}
        <div className="w-full lg:w-1/2 relative h-[380px] sm:h-[420px] flex items-center justify-center">
          <div
            onMouseMove={handleOrbMouseMove}
            onMouseLeave={handleOrbMouseLeave}
            className="absolute inset-0 academic-card overflow-hidden flex items-center justify-center shadow-xl bg-gradient-to-br from-slate-50 to-blue-50/50"
          >
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at center, #1858A8 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            ></div>

            {/* Glowing Interactive Tilt Orb / Core */}
            <div
              ref={orbRef}
              className="w-36 h-36 rounded-3xl bg-gradient-to-br from-[#08203F] via-[#1858A8] to-[#C89B3C] shadow-[0_10px_40px_rgba(0,102,255,0.4)] flex items-center justify-center cursor-pointer transition-transform duration-100 ease-out"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Compass className="w-8 h-8 text-white animate-spin [animation-duration:14s]" />
              </div>
            </div>

            {/* Top Telemetry HUD */}
            <div className="absolute top-6 left-6 font-mono text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1858A8] animate-ping"></span>
                <span className="font-bold text-[#08203F]">CAMPUS TELEMETRY</span>
              </div>
              <div className="text-[10px] text-slate-500">LAT: 9.531° N • LON: 76.818° E</div>
              <div className="text-[10px] text-[#1858A8] font-semibold">ALT: +65m PEAK • KOOVAPPALLY</div>
            </div>

            {/* Bottom Real-Time Sensors */}
            <div className="absolute bottom-6 right-6 font-mono text-right text-xs text-slate-600 space-y-1">
              <div className="font-bold text-[#08203F]">SOLAR: 500 kW / KSEB GRID</div>
              <div className="text-[10px] text-slate-500">GENSET BACKUP: 1,120 KVA</div>
              <div className="text-[10px] text-[#1858A8] font-semibold">BANDWIDTH: 2.10 Gbps LEASED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Landmarks Hotspots */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {CAMPUS_HOTSPOTS.map((spot) => (
          <div
            key={spot.id}
            className="academic-card p-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-hanken font-bold uppercase tracking-wider text-[#1858A8] block mb-1">
                {spot.category}
              </span>
              <h4 className="font-hanken text-base font-bold text-[#08203F] mb-2 leading-snug">
                {spot.name}
              </h4>
              <p className="text-slate-600 text-xs font-light font-manrope leading-relaxed mb-4">
                {spot.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#1858A8]">
              <span>{spot.badge}</span>
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        ))}
      </div>

      {/* 24-Hour Day in the Life Timeline */}
      <div className="academic-card p-8 sm:p-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-hanken uppercase tracking-widest text-[#1858A8] font-bold block mb-1">
            Student Life Blueprint
          </span>
          <h3 className="font-hanken text-2xl sm:text-3xl font-bold text-[#08203F] mb-2">
            A Day in the Life at Amal Jyothi
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm font-manrope font-light">
            From dawn mountain runs in the Western Ghats to midnight coding commits in hostel study lounges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {timelineSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTimeline === idx
                  ? 'bg-blue-50/70 border-[#1858A8] shadow-sm'
                  : 'bg-slate-50/50 border-slate-100 hover:border-slate-300'
              }`}
              onClick={() => setActiveTimeline(idx)}
            >
              <div className="font-mono text-xs font-bold text-[#1858A8] mb-1.5">{step.time}</div>
              <h4 className="font-hanken text-base font-bold text-[#08203F] mb-1.5">{step.title}</h4>
              <p className="text-slate-600 text-xs font-manrope font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
