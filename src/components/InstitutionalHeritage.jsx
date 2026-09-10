import React, { useState } from 'react';
import { Award, History, Building2, CheckCircle2, ShieldCheck, Sparkles, ExternalLink, Users, School, GraduationCap, ChevronRight } from 'lucide-react';
import { COLLEGE_INFO } from '../data/collegeData';

export default function InstitutionalHeritage() {
  const [activeTab, setActiveTab] = useState('accreditations'); // 'accreditations' | 'history' | 'leadership'

  const milestones = [
    {
      year: "2001",
      title: "Foundation of Light",
      desc: "Amal Jyothi College of Engineering established by the Catholic Diocese of Kanjirappally under the visionary leadership of Mar Mathew Arackal, dedicated to St. Mary Immaculate."
    },
    {
      year: "2008",
      title: "First IEDC in Kerala",
      desc: "Sanctioned Kerala's first Innovation and Entrepreneurship Development Centre (IEDC) by the DST, Govt. of India, sparking the campus startup revolution."
    },
    {
      year: "2014",
      title: "500 kW Rooftop Solar Milestone",
      desc: "Inaugurated one of Kerala's largest institutional clean energy solar farms, transforming AJCE into an eco-friendly green pioneer."
    },
    {
      year: "2016",
      title: "NAAC 'A' Grade Accreditation",
      desc: "Recognized by NAAC with Grade 'A' for state-of-the-art laboratory infrastructure, faculty excellence, and student learning outcomes."
    },
    {
      year: "2021",
      title: "Elevated to NAAC 'A+' Grade",
      desc: "Conferred the prestigious NAAC 'A+' Grade with a stellar CGPA, placing AJCE in the top echelon of professional engineering colleges."
    },
    {
      year: "2023",
      title: "UGC Autonomous Conformance",
      desc: "Conferred Autonomous status by the University Grants Commission (UGC) on 6 July 2023, granting full academic freedom to formulate cutting-edge curricula."
    },
    {
      year: "2026",
      title: "Silver Jubilee: 25 Years of Pure Light",
      desc: "Celebrating 25 years with 23 autonomous degree programs, 2 DST-funded TBIs, 95+ incubated startups, and KIRF Rank #4 in Kerala."
    }
  ];

  const certificates = [
    {
      title: "NAAC 'A+' Grade Accreditation",
      authority: "National Assessment and Accreditation Council (NAAC)",
      status: "Highest Institutional Grade",
      badge: "NAAC A+",
      desc: "Certified for exceptional teaching-learning processes, high-impact research, physical infrastructure, and governance.",
      img: "https://www.ajce.in/home/images/naaclogo.png"
    },
    {
      title: "7 NBA Accredited Programmes",
      authority: "National Board of Accreditation (NBA), New Delhi",
      status: "Washington Accord Standard",
      badge: "7 Programs",
      desc: "Accredited for Chemical, Civil, Computer Science, Electronics & Comm., Electrical & Electronics, Mechanical, and MCA.",
      img: "https://www.ajce.in/home/images/nba.webp"
    },
    {
      title: "UGC Autonomous Institution",
      authority: "University Grants Commission (UGC), New Delhi",
      status: "Conferred on 6 July 2023",
      badge: "Autonomous",
      desc: "Statutory academic autonomy under APJ Abdul Kalam Technological University (KTU) to design autonomous curricula.",
      img: "https://www.ajce.in/home/widgets/new/obe_wid.png"
    },
    {
      title: "KIRF Rank #4 in Kerala (2026)",
      authority: "Kerala Institutional Ranking Framework (KIRF)",
      status: "Top 4 Engineering in State",
      badge: "Rank 4",
      desc: "Ranked 4th among all engineering colleges across Kerala in 2026 based on academic parameters and placements.",
      img: "https://www.ajce.in/home/images/kirflogo.png"
    },
    {
      title: "NIRF Innovation Rank #2 in Kerala",
      authority: "Ministry of Education, Govt. of India",
      status: "Excellence in Innovation",
      badge: "Rank 2",
      desc: "Ranked 2nd in Kerala for innovation, incubation, patent commercialization, and startup creation.",
      img: "https://www.ajce.in/home/images/nirf.png"
    },
    {
      title: "AICTE IDEA Lab (1 of 49 in India)",
      authority: "All India Council for Technical Education",
      status: "National Centre of Excellence",
      badge: "IDEA Lab",
      desc: "Sanctioned ₹1.1 Crore grant to establish state-of-the-art multidisciplinary prototyping & manufacturing facility.",
      img: "https://www.ajce.in/home/widgets/new/aicte_idealab.png"
    }
  ];

  const leaders = [
    {
      name: "Mar Jose Pulickal",
      role: "Patron & Bishop of Kanjirappally",
      focus: "Spiritual guardianship, ethical grounding, and service-oriented education.",
      icon: School
    },
    {
      name: "Fr. Dr. Mathew Paikatt",
      role: "Manager",
      focus: "Institutional visionary steering campus infrastructure, global linkages, and autonomy.",
      icon: Building2
    },
    {
      name: "Dr. Z. V. Lakaparampil",
      role: "Principal",
      focus: "Academic administration, Outcome-Based Education (OBE), and KTU autonomous compliance.",
      icon: GraduationCap
    },
    {
      name: "Dr. Soney C George",
      role: "Dean (Research)",
      focus: "Doctoral programs, international university pathways (Elmhurst, JCU), and patent commercialization.",
      icon: Users
    }
  ];

  return (
    <section id="heritage" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1858A8]/10 text-[#1858A8] font-hanken text-xs uppercase tracking-wider font-bold mb-3 border border-[#1858A8]/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Institutional Credentials • 25 Years of Pure Light (2001–2026)</span>
        </div>

        <h2 className="font-hanken text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08203F] mb-4">
          History, Accreditations & Leadership
        </h2>
        
        <p className="text-slate-600 max-w-3xl mx-auto font-manrope text-sm sm:text-base font-light leading-relaxed">
          Managed by the Catholic Diocese of Kanjirappally and conferred Autonomous status by the UGC on 6 July 2023. A quarter-century of uncompromising educational excellence.
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8">
          <button
            onClick={() => setActiveTab('accreditations')}
            className={`px-5 py-2.5 rounded-xl font-hanken text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'accreditations'
                ? 'bg-[#08203F] text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Certificates & Accreditations</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-5 py-2.5 rounded-xl font-hanken text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'history'
                ? 'bg-[#08203F] text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <History className="w-3.5 h-3.5 text-[#1858A8]" />
            <span>25 Years History</span>
          </button>

          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-2.5 rounded-xl font-hanken text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'leadership'
                ? 'bg-[#08203F] text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Diocese & Leadership</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Accreditations Grid */}
      {activeTab === 'accreditations' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {certificates.map((cert, idx) => (
            <div key={idx} className="academic-card p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="h-14 w-28 bg-slate-50 border border-slate-100 rounded-xl p-2 flex items-center justify-center shrink-0">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#1858A8]/10 text-[#1858A8] font-hanken font-bold text-[11px] border border-[#1858A8]/20">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-hanken font-bold text-base text-[#08203F] mb-1 group-hover:text-[#1858A8] transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-2 font-manrope">
                  {cert.authority}
                </div>
                <p className="text-xs text-slate-600 font-normal leading-relaxed font-manrope">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold flex items-center gap-1 font-hanken">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{cert.status}</span>
                </span>
                <span className="text-slate-400 font-mono text-[10px]">Verified</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: 25 Years Timeline */}
      {activeTab === 'history' && (
        <div className="max-w-4xl mx-auto space-y-4 animate-in fade-in duration-300">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#08203F] to-[#152a4e] text-white mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] font-hanken font-bold text-xs uppercase tracking-wider">
                Silver Jubilee Milestone (2001–2026)
              </span>
              <h3 className="font-hanken font-bold text-2xl text-white mt-1">
                25 Years of Pure Light
              </h3>
              <p className="text-xs text-slate-300 italic mt-1 font-manrope">
                "{COLLEGE_INFO.etymology}"
              </p>
            </div>
            <div className="text-center sm:text-right shrink-0">
              <span className="font-hanken font-extrabold text-3xl text-[#C89B3C]">25+</span>
              <span className="text-xs text-slate-300 block">Years of Excellence</span>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1858A8]/30 space-y-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#1858A8] shadow-sm group-hover:scale-125 transition-transform"></div>

                <div className="academic-card p-5 hover:border-[#1858A8]/40 transition-all">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-hanken font-extrabold text-base text-[#1858A8]">
                      {m.year}
                    </span>
                    <span className="text-slate-300">•</span>
                    <h4 className="font-hanken font-bold text-sm sm:text-base text-[#08203F]">
                      {m.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed font-manrope">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Diocese & Leadership */}
      {activeTab === 'leadership' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="academic-card p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50">
            <div className="max-w-3xl">
              <span className="text-xs font-hanken font-bold text-[#1858A8] uppercase tracking-wider block mb-1">
                Foundational Trust & Governance
              </span>
              <h3 className="font-hanken font-bold text-2xl text-[#08203F] mb-2">
                Catholic Diocese of Kanjirappally
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-manrope mb-4">
                Amal Jyothi College of Engineering is managed by the Catholic Diocese of Kanjirappally through the Amal Jyothi Educational Trust. Established in 2001, the institution bridges world-class technological research with deep societal commitment.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-hanken font-semibold text-slate-700">
                <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Christian Minority Status</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">UGC Autonomous</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Approved by AICTE, New Delhi</span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">Affiliated to KTU</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, idx) => {
              const Icon = leader.icon;
              return (
                <div key={idx} className="academic-card p-6 text-center hover:shadow-md transition-all flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#08203F] text-[#C89B3C] flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-hanken font-bold text-base text-[#08203F]">
                    {leader.name}
                  </h4>
                  <div className="text-xs font-bold text-[#1858A8] font-hanken mt-0.5 mb-2">
                    {leader.role}
                  </div>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed font-manrope">
                    {leader.focus}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
