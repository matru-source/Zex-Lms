import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CorporateUpskillingBanner() {
  const corporateLogos = [
    { name: "Cisco", domain: "Networking & Cloud" },
    { name: "Dell Technologies", domain: "Hardware & Infrastructure" },
    { name: "Amazon Web Services", domain: "Cloud & AI" },
    { name: "Bosch", domain: "Smart Enterprise" },
    { name: "Airbus", domain: "Aerospace & Systems" },
    { name: "HP", domain: "Global Compute" },
    { name: "Deloitte", domain: "ERP Consulting" },
    { name: "Accenture", domain: "Digital Transformation" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background mesh */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-[1380px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Enterprise Showcase Box */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-14 shadow-2xl border border-blue-400/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copy Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-white" />
                Zex LMS for Enterprise & Teams
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Upskill Your Workforce with Enterprise ERP & Cloud Capabilities.
              </h2>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Customized role-based learning tracks, dedicated enterprise sandboxes, and white-glove analytics to build an agile internal talent pipeline.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-white">500+</div>
                  <div className="text-xs text-blue-100 font-medium mt-1">Live Classes Monthly</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-white">1,000+</div>
                  <div className="text-xs text-blue-100 font-medium mt-1">Hands-on Labs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-white">95%</div>
                  <div className="text-xs text-blue-100 font-medium mt-1">Completion Rate</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-bold text-base shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Request a Corporate Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-800/60 hover:bg-blue-800 text-white font-semibold text-base border border-white/20 transition-all"
                >
                  <span>Explore Enterprise Tracks</span>
                </Link>
              </div>
            </div>

            {/* Photo Right Column */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative">
                <img
                  src="/corporate_team.jpg"
                  alt="Enterprise Team Upskilling"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs text-white flex items-center justify-between">
                  <span className="font-semibold">Fortune 500 Ready</span>
                  <span className="text-emerald-400 font-bold">✓ SCORM & SSO Compliant</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate Hiring Partners Logo Grid */}
        <div className="mt-16 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Empowering Teams and Certified Alumni Across Leading Global Companies
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {corporateLogos.map((c, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-500 text-center transition-all group"
              >
                <div className="text-sm font-black text-slate-200 group-hover:text-white transition-colors">
                  {c.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{c.domain}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
