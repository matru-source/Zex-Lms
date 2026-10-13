import { Star, ShieldCheck } from "lucide-react";

export default function TrustRatingsBar() {
  const reviews = [
    {
      platform: "SwitchUp",
      rating: "4.6",
      count: "1,400+ reviews",
      badgeColor: "bg-emerald-500",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      platform: "Trustpilot",
      rating: "4.7",
      count: "4,500+ reviews",
      badgeColor: "bg-[#00b67a]",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      platform: "CourseReport",
      rating: "4.8",
      count: "2,200+ reviews",
      badgeColor: "bg-blue-600",
      pillBg: "bg-blue-50 text-blue-800 border-blue-200",
    },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200/80 py-6">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Join 50,000+ Learners Who Trust Zex LMS
              </h2>
              <p className="text-xs text-slate-500">
                Rated independently by verified students and corporate cohorts
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="flex items-center justify-between sm:justify-start gap-4 px-4 py-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900">{r.platform}</div>
                  <div className="text-[11px] text-slate-500">{r.count}</div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-white text-xs font-bold shrink-0">
                  <span>{r.rating}</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
