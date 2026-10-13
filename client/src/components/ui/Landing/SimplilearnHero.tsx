import { ArrowRight, CheckCircle2, Star, Award, Video } from "lucide-react";
import { Link } from "react-router-dom";

export default function SimplilearnHero() {
  const partners = [
    { name: "Oracle", badge: "Certified Partner", color: "text-red-600 bg-red-50 border-red-200" },
    { name: "SAP", badge: "Authorized Training", color: "text-blue-700 bg-blue-50 border-blue-200" },
    { name: "IFS", badge: "Enterprise Partner", color: "text-purple-700 bg-purple-50 border-purple-200" },
    { name: "Microsoft", badge: "Gold Partner", color: "text-cyan-700 bg-cyan-50 border-cyan-200" },
    { name: "AWS", badge: "Training Partner", color: "text-amber-700 bg-amber-50 border-amber-200" },
    { name: "PMI®", badge: "ATP Authorized", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50/40 pt-10 pb-16 border-b border-slate-100">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              WORLD'S #1 ENTERPRISE ERP & TECH BOOTCAMP
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Learn. Grow. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Get Ahead with AI & Cloud ERP.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Master Oracle, SAP, IFS, and Cloud Architecture with live interactive cohorts, hands-on enterprise sandbox labs, and 1-on-1 career assistance.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong className="text-slate-900">15,000+</strong> Careers Advanced</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong className="text-slate-900">500+</strong> Live Classes Monthly</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong className="text-slate-900">85%</strong> Report Promotions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#explore-programs"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#0075eb] hover:bg-[#005bb5] text-white font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-2xs hover:border-slate-300 transition-all duration-200"
              >
                <span>Talk to an Advisor</span>
              </Link>
            </div>

            {/* Micro rating pill */}
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-slate-700">4.8 / 5 Rating</span>
              <span className="text-slate-300">•</span>
              <span>Based on 12,000+ Global Reviews</span>
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[460px]">
              {/* Soft background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl filter blur-2xl opacity-70 -z-10"></div>
              
              {/* Main cutout image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-xl">
                <img
                  src="/image.png"
                  alt="Learn with IITans Learner"
                  className="w-full h-[320px] sm:h-[440px] object-cover object-top"
                  loading="eager"
                />

                {/* Floating pill 1: Placement Rate */}
                <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">85% Career Success</div>
                    <div className="text-[9px] sm:text-[11px] text-slate-500 leading-tight">Industry Hiring Guarantee</div>
                  </div>
                </div>

                {/* Floating pill 2: Live Cohorts */}
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                    <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-900 leading-tight">Live Mentorship</div>
                    <div className="text-[9px] sm:text-[11px] text-slate-500 leading-tight">Certified Architects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Accreditation & University Partner Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/70">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider text-center mb-5">
            Accredited & Recognized In Collaboration with Global Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all duration-150"
              >
                <span className="font-extrabold text-sm text-slate-800 tracking-tight">{p.name}</span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${p.color}`}>
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
