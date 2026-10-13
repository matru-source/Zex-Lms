import { Video, Laptop, Users, Award, CheckCircle2 } from "lucide-react";

export default function WhyProgramsStandOut() {
  const pillars = [
    {
      title: "Live Interactive Masterclasses",
      subtitle: "Learn directly from practitioners, not pre-recorded theory.",
      description:
        "Every cohort is led by seasoned enterprise architects with live Q&A, active code reviews, and real-time business problem solving.",
      image: "/feature_live_class.jpg",
      icon: Video,
      highlights: ["Real-time Doubt Clearing", "Weekly Live Studio Sessions", "Recorded Lifetime Access"],
    },
    {
      title: "Hands-on Enterprise Sandbox Labs",
      subtitle: "Practice on authentic Oracle & SAP production environments.",
      description:
        "Gain 24/7 dedicated access to enterprise ERP instances to configure General Ledgers, build supply chain workflows, and deploy cloud infrastructure.",
      image: "/feature_hands_on_lab.jpg",
      icon: Laptop,
      highlights: ["24/7 Cloud Sandbox Access", "End-to-End Enterprise Flows", "Real Business Use-Cases"],
    },
    {
      title: "1-on-1 Mentorship & Career Support",
      subtitle: "Dedicated career advisors to fast-track your promotion.",
      description:
        "Receive personalized resume audits, mock technical interviews, LinkedIn profile optimization, and direct introductions to global hiring partners.",
      image: "/feature_mentorship.jpg",
      icon: Users,
      highlights: ["Resume & LinkedIn Audits", "Mock Technical Interviews", "Alumni Referral Network"],
    },
    {
      title: "Globally Recognized Credentials",
      subtitle: "Industry-standard certificates that open doors worldwide.",
      description:
        "Graduate with verifiable digital credentials co-branded with global technology leaders, instantly shareable across LinkedIn and corporate portals.",
      image: "/feature_certificate.jpg",
      icon: Award,
      highlights: ["Verifiable Digital Badges", "Accredited Partner Credentials", "Lifetime Credential Portal"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            The Learn with IITans Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Our Programs Stand Out
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Engineered from the ground up for working professionals who demand real skills and tangible career velocity.
          </p>
        </div>

        {/* 2x2 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200 hover:border-blue-400 bg-white shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Photo Top Header */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  
                  {/* Floating Icon Pill */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm">
                    <Icon className="w-4 h-4 text-[#0075eb]" />
                    <span className="text-xs font-bold text-slate-900">Pillar {idx + 1}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#0075eb] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-1">{p.subtitle}</p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">{p.description}</p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {p.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
