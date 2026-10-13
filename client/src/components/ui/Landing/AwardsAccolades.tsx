import { Trophy, Award, Medal, Sparkles } from "lucide-react";

export default function AwardsAccolades() {
  const awards = [
    {
      title: "2025 Gold Winner",
      category: "Customer Service & Learning Delivery",
      organization: "Stevie® Awards International",
      icon: Trophy,
      gradient: "from-amber-500 to-yellow-600",
      bgGlow: "bg-amber-50 border-amber-200 text-amber-800",
    },
    {
      title: "Top 20 IT Training Provider",
      category: "Enterprise Cloud & ERP Training",
      organization: "Training Industry Global",
      icon: Award,
      gradient: "from-blue-600 to-indigo-600",
      bgGlow: "bg-blue-50 border-blue-200 text-blue-800",
    },
    {
      title: "EdTech Breakthrough Award",
      category: "Best Interactive Cloud Learning Platform",
      organization: "EdTech Breakthrough Program",
      icon: Medal,
      gradient: "from-emerald-600 to-teal-600",
      bgGlow: "bg-emerald-50 border-emerald-200 text-emerald-800",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Global Accolades
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Recognized by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center gap-5"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${a.gradient} text-white flex items-center justify-center shrink-0 shadow-sm`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${a.bgGlow}`}>
                    {a.title}
                  </span>
                  <div className="text-sm font-extrabold text-slate-900 mt-2">{a.category}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{a.organization}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
