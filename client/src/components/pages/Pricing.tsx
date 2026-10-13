import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../ui/Landing/NavBar";
import Footer from "../ui/Landing/Footer";
import {
  Check,
  Zap,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  const plans = [
    {
      name: "Self-Paced Starter",
      tagline: "Essential on-demand skills for self-motivated individuals",
      monthlyPrice: 49,
      annualPrice: 39,
      popular: false,
      ctaText: "Start 7-Day Free Trial",
      ctaLink: "/signup",
      ctaStyle: "bg-white text-slate-800 border border-slate-300 hover:bg-slate-50",
      features: [
        "Full access to 100+ On-Demand Video Courses",
        "Curricula across Oracle, SAP, IFS & Cloud",
        "Practice chapter quizzes and assessments",
        "Downloadable cheat sheets & project templates",
        "Community Discussion Forum access",
        "Standard Certificate of Completion",
      ],
      notIncluded: [
        "Live interactive cohorts & doubts resolution",
        "24/7 dedicated enterprise ERP sandbox access",
        "1-on-1 career coaching & mock interviews",
      ],
    },
    {
      name: "Live Bootcamp & Career Track",
      tagline: "Intensive cohort-based training with live masterclasses & job assist",
      monthlyPrice: 499,
      annualPrice: 399,
      popular: true,
      badge: "MOST POPULAR",
      ctaText: "Apply for Next Cohort",
      ctaLink: "/courses",
      ctaStyle: "bg-[#0075eb] text-white hover:bg-[#005bb5] shadow-md hover:shadow-lg",
      features: [
        "Everything in Self-Paced Starter, plus:",
        "Weekly Live Studio Masterclasses with Enterprise Architects",
        "24/7 Dedicated Cloud Sandbox (Oracle & SAP Instances)",
        "1-on-1 Capstone Project Mentorship & Code Reviews",
        "Direct Career Assist: Resume Audit & Mock Technical Interviews",
        "Verified Accredited Digital Badge shareable on LinkedIn",
        "Lifetime access to all session recordings & updates",
      ],
      notIncluded: [],
    },
    {
      name: "Enterprise & Team License",
      tagline: "Comprehensive workforce transformation for modern engineering teams",
      customPrice: "Custom",
      popular: false,
      ctaText: "Request Enterprise Quote",
      ctaLink: "/corporate",
      ctaStyle: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
      features: [
        "Everything in Live Bootcamp, plus:",
        "Custom role-based learning tracks for your tech stack",
        "Enterprise sandbox provisioning with SSO (SAML/Okta)",
        "Manager dashboard with skill metrics & completion tracking",
        "SCORM / LMS integration & white-glove onboarding",
        "Dedicated Customer Success Manager & 24/7 Priority SLA",
        "Bulk enterprise discounts & volume licensing",
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      q: "Can I switch or cancel my plan anytime?",
      a: "Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your account settings. There are no long-term lock-in contracts.",
    },
    {
      q: "How do the Oracle and SAP sandbox environments work?",
      a: "Bootcamp students receive instant browser-based remote credentials to live, fully-configured enterprise sandbox instances to practice real transactions, general ledger setups, and business workflows without installing heavy software locally.",
    },
    {
      q: "What is the schedule for live masterclasses?",
      a: "Live classes are scheduled on weekends and weekday evenings to accommodate working professionals. If you miss a live session, full HD recordings with timestamps and notes are available within 2 hours.",
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Yes, all individual plans come with a risk-free 14-day money-back guarantee. If you are not completely satisfied with the curriculum, simply email support for a full refund.",
    },
    {
      q: "Do you offer corporate invoicing and bulk team discounts?",
      a: "Yes, teams of 5 or more receive volume pricing. We accept corporate credit cards, ACH, wire transfers, and purchase orders.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <NavBar />

      <main className="flex-1">
        
        {/* Header / Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-16 pb-20 border-b border-slate-200/80">
          <div className="max-w-[1380px] mx-auto px-6 lg:px-12 text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 fill-current" />
              Transparent, High-ROI Investment
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Invest in Your Career. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Choose the Right Learning Path.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Whether you are an ambitious professional aiming for a senior promotion or an engineering leader upskilling a team, we have you covered.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <span className={`text-sm font-semibold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isAnnual ? "bg-[#0075eb]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isAnnual ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
                  Annual Billing
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Save 25%
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 3 Pricing Cards Grid */}
        <section className="py-16 -mt-10">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {plans.map((p, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
                    p.popular
                      ? "border-blue-500 ring-2 ring-blue-500/20 shadow-xl lg:-translate-y-4"
                      : "border-slate-200 shadow-2xs hover:shadow-lg"
                  }`}
                >
                  {/* Popular Flagship Badge */}
                  {p.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[11px] tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
                      {p.badge}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-black text-slate-900">{p.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 min-h-[32px] leading-relaxed">
                        {p.tagline}
                      </p>

                      <div className="mt-6 flex items-baseline gap-1">
                        {p.customPrice ? (
                          <span className="text-4xl font-black text-slate-900">{p.customPrice}</span>
                        ) : (
                          <>
                            <span className="text-4xl sm:text-5xl font-black text-slate-900">
                              ${isAnnual ? p.annualPrice : p.monthlyPrice}
                            </span>
                            <span className="text-slate-500 text-sm font-medium">/ month</span>
                          </>
                        )}
                      </div>
                      {!p.customPrice && (
                        <div className="text-[11px] text-slate-400 mt-1">
                          {isAnnual ? "Billed annually (risk-free 14-day refund)" : "Billed monthly, cancel anytime"}
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => navigate(p.ctaLink)}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.98] mb-8 ${p.ctaStyle}`}
                    >
                      {p.ctaText}
                    </button>

                    {/* Features List */}
                    <div className="space-y-3 pt-6 border-t border-slate-100">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        What's Included
                      </div>
                      {p.features.map((f, fi) => (
                        <div key={fi} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}

                      {p.notIncluded.map((nf, nfi) => (
                        <div key={nfi} className="flex items-start gap-2.5 text-xs text-slate-400 line-through">
                          <span className="w-4 h-4 text-slate-300 text-center font-bold shrink-0">✕</span>
                          <span>{nf}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-500" />
                    <span>Includes 24/7 technical student support</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="py-12 bg-white border-y border-slate-200/80">
          <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-slate-900">85%</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Report Promotion within 6 Mo</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">65%+</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Average Salary Increase</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">14 Days</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Money-Back Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">24/7</div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Live Enterprise Sandbox Labs</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Everything You Need to Know
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-base">{faq.q}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-12 p-8 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <h3 className="font-bold text-slate-900 text-lg">Still have questions about pricing or curriculums?</h3>
              <p className="text-slate-600 text-sm mt-1 max-w-lg mx-auto">
                Speak directly with an enterprise admissions advisor to find the best track for your career.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0075eb] text-white font-bold text-sm hover:bg-[#005bb5] transition-all shadow-sm"
              >
                <span>Talk to an Admissions Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
