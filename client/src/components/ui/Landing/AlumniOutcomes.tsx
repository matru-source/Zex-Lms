import { useState } from "react";
import { TrendingUp, Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AlumniOutcomes() {
  const [activeTab, setActiveTab] = useState(0);

  const stories = [
    {
      name: "Jorge Barboza",
      prevRole: "IT Systems Analyst",
      prevCompany: "Nikki Beach Worldwide",
      newRole: "Senior Cloud & ERP Architect",
      newCompany: "Deloitte Digital",
      hike: "+110% Salary Hike",
      quote:
        "The hands-on Oracle Cloud and SAP sandbox labs made complex enterprise architectures effortless to understand. Three weeks after completing the capstone, I was hired into enterprise consulting, doubling my compensation!",
      image: "/alumni_spotlight.jpg",
      program: "Oracle & SAP Enterprise Master's Program",
      verified: true,
    },
    {
      name: "Pratishtha Thakur",
      prevRole: "Junior Developer",
      prevCompany: "Airborne Imaging",
      newRole: "Lead S/4HANA Supply Chain Consultant",
      newCompany: "Accenture",
      hike: "+125% Salary Hike",
      quote:
        "I had zero prior enterprise ERP experience. The 1-on-1 mentor code reviews and interview prep question banks gave me the exact confidence needed to lead enterprise migration projects.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      program: "SAP S/4HANA Logistics Consultant Bootcamp",
      verified: true,
    },
    {
      name: "Marcus Vance",
      prevRole: "Supply Chain Coordinator",
      prevCompany: "Zoee Logistics",
      newRole: "Principal ERP Business Analyst",
      newCompany: "PwC Advisory",
      hike: "+95% Salary Hike",
      quote:
        "After a 2-year career break, Zex LMS served as the definitive launchpad. The verifiable digital badge proved my technical acumen directly to recruiters without friction.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      program: "IFS Applications & Business Acumen Master's",
      verified: true,
    },
  ];

  const current = stories[activeTab];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 border-y border-slate-200/80">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-4 h-4" />
            Proven Career Outcomes & Return on Investment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear From Our Incredible Alumni
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Thousands of professionals transition into high-paying enterprise technology careers every year.
          </p>
        </div>

        {/* 3 Big Metrics Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs text-center">
            <div className="text-4xl sm:text-5xl font-black text-[#0075eb] tracking-tight">85%</div>
            <div className="text-sm font-bold text-slate-900 mt-2">Career Advancement Rate</div>
            <p className="text-xs text-slate-500 mt-1">Report promotion, salary increase, or new job within 6 months</p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs text-center">
            <div className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">65%+</div>
            <div className="text-sm font-bold text-slate-900 mt-2">Average Salary Hike</div>
            <p className="text-xs text-slate-500 mt-1">Verified compensation increases across certified graduates</p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs text-center">
            <div className="text-4xl sm:text-5xl font-black text-amber-500 tracking-tight">4.8 / 5</div>
            <div className="text-sm font-bold text-slate-900 mt-2">Average Learner Rating</div>
            <p className="text-xs text-slate-500 mt-1">Based on 15,000+ course evaluations across all programs</p>
          </div>
        </div>

        {/* Featured Alumni Spotlight Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Alumni Portrait Left Column */}
            <div className="lg:col-span-5 relative h-80 lg:h-[460px] bg-slate-100">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{current.hike}</span>
              </div>
            </div>

            {/* Quote and Career Transition Right Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {current.program}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">{current.name}</h3>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-10 h-10 text-blue-100 absolute -top-4 -left-3 -z-10" />
                <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
                  "{current.quote}"
                </p>
              </div>

              {/* Career Transition Flow Card */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Career Transition
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-500">From</div>
                    <div className="text-sm font-bold text-slate-800">{current.prevRole}</div>
                    <div className="text-xs text-slate-500">{current.prevCompany}</div>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-[#0075eb] shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  <div className="sm:text-right">
                    <div className="text-xs text-blue-600 font-semibold">Promoted To</div>
                    <div className="text-sm font-bold text-slate-900">{current.newRole}</div>
                    <div className="text-xs text-emerald-600 font-bold">{current.newCompany}</div>
                  </div>
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="flex items-center gap-3 pt-2">
                {stories.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      activeTab === idx
                        ? "bg-[#0075eb] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
