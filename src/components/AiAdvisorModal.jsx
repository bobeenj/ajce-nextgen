import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { FAQS, COLLEGE_INFO } from '../data/collegeData';

export default function AiAdvisorModal({ isOpen, onClose, onOpenApply }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am the Amal Jyothi Autonomous Admissions & Campus AI Advisor. Ask me anything about our 23 Autonomous degree programs, KEAM scholarship cutoffs, Sanjo & Amala hostel amenities, Formula Racing team (AJR), or 2 TBIs!",
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "What are the KEAM rank scholarships?",
    "Tell me about the Formula Student racing team",
    "What are the hostel and mess facilities like?",
    "How does the TBI startup incubator work?",
    "What is UGC Autonomous status benefit?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes('scholarship') || lower.includes('fee') || lower.includes('concession')) {
        reply = "At Amal Jyothi, we offer extensive scholarships based on KEAM rank and 12th PCM marks. Top 2,000 KEAM ranks receive up to a 100% tuition fee waiver. Ranks up to 5,000 receive 75%, and ranks up to 10,000 receive 50%. You can test your exact estimate on our live Scholarship Calculator!";
      } else if (lower.includes('formula') || lower.includes('car') || lower.includes('racing') || lower.includes('racing team')) {
        reply = "Our flagship motorsport team is 'Amal Jyothi Racing' (AJR). Students in Mechanical, Automobile, ECE, and AI design and manufacture Formula Student cars from scratch with custom tubular spaceframe chassis, telemetry sensors, and aerodynamic wings, competing at national events!";
      } else if (lower.includes('hostel') || lower.includes('mess') || lower.includes('room') || lower.includes('food') || lower.includes('stay')) {
        reply = "AJCE features Sanjo (Boys) and Amala (Girls) modern residence halls accommodating over 2,500 students. We offer multi-cuisine dining (North & South Indian), high-speed optical fiber Wi-Fi, 24/7 security, in-hostel study rooms, and synthetic sports turf!";
      } else if (lower.includes('tbi') || lower.includes('startup') || lower.includes('incubator') || lower.includes('entrepreneur')) {
        reply = "AJCE has one of Kerala's premier DST-funded Technology Business Incubators (TBI). We provide up to ₹50 Lakhs seed funding grants, Fab Lab prototyping machines, patent guidance, and mentorship. Over 50+ student ventures have been incubated with ₹12 Cr+ in total funding!";
      } else if (lower.includes('autonomous') || lower.includes('ktu') || lower.includes('syllabus') || lower.includes('curriculum')) {
        reply = "UGC Autonomous status (conferred on 6 July 2023, affiliated with APJ Abdul Kalam Technological University) enables AJCE to continuously update its syllabus to match current industry demands (AI, DevOps, Robotics, Microgrids) while providing an internationally accredited KTU degree with NAAC 'A+' credentials!";
      } else if (lower.includes('driving') || lower.includes('license')) {
        reply = "AJCE is home to Kerala's first college-run driving academy! Students can receive professional four-wheeler and two-wheeler driving training on-campus and earn their official government driving license without disrupting their class schedule.";
      } else if (lower.includes('placement') || lower.includes('package') || lower.includes('salary') || lower.includes('company') || lower.includes('recruit')) {
        reply = "Our top placement package has reached ₹20 LPA, with average packages ranging from ₹5.5 LPA to ₹6.8 LPA across branches. Over 100+ recruiting partners visit campus including Amazon, Microsoft, Bosch, Federal Bank, Infosys, Cognizant, TCS, and UST.";
      } else {
        reply = "Amal Jyothi College of Engineering (Kanjirappally, Kerala) offers UGC Autonomous engineering education across AI & Data Science, CSE, ECE, Mechanical & Automobile, Civil, Electrical, and Chemical/Food Tech. Would you like me to connect you with the Admissions Desk (+91 9072661600) or pre-fill your application?";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          time: 'Just now'
        }
      ]);
      setIsTyping(false);
    }, 550);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl border border-slate-200 shadow-2xl flex flex-col h-[85vh] sm:h-[620px] overflow-hidden font-manrope">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-[#08203F] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1858A8] p-0.5 flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-hanken font-bold text-white flex items-center gap-2">
                <span>AJCE Admissions AI Advisor</span>
                <span className="w-2 h-2 rounded-full bg-[#C89B3C] animate-ping"></span>
              </div>
              <div className="text-[11px] text-slate-300 font-normal">Autonomous Guidance & Campus Intelligence</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[10px] font-hanken font-bold text-[#1858A8] uppercase tracking-wider shrink-0">Suggestions:</span>
          {quickPrompts.slice(0, 3).map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] text-slate-700 hover:text-[#1858A8] bg-white hover:bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap border border-slate-200 transition-colors font-medium shadow-sm"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-8 h-8 rounded-xl bg-[#08203F] text-[#C89B3C] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[82%] sm:max-w-[75%] p-3.5 sm:p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#1858A8] text-white rounded-tr-none shadow-md shadow-[#1858A8]/20 font-medium'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none font-normal shadow-sm'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 items-center text-xs text-slate-500">
              <div className="w-8 h-8 rounded-xl bg-[#08203F] text-[#C89B3C] flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1858A8] animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1858A8] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1858A8] animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 border-t border-slate-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about AJCE admissions, fees, hostel..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1858A8] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              className="p-2.5 rounded-full bg-[#1858A8] hover:bg-[#124380] text-white font-bold transition-all shrink-0 shadow-md shadow-[#1858A8]/30"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 font-manrope">
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#1858A8]" />
              <span>Admissions: <a href="tel:+919072661600" className="font-bold text-slate-700 hover:text-[#1858A8]">+91 9072661600</a></span>
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="text-[#1858A8] hover:underline font-hanken font-bold"
            >
              Apply Online 2026 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
