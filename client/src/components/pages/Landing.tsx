import NavBar from "../ui/Landing/NavBar";
import SimplilearnHero from "../ui/Landing/SimplilearnHero";
import TrustRatingsBar from "../ui/Landing/TrustRatingsBar";
import TopProgramsCatalog from "../ui/Landing/TopProgramsCatalog";
import AlumniOutcomes from "../ui/Landing/AlumniOutcomes";
import WhyProgramsStandOut from "../ui/Landing/WhyProgramsStandOut";
import CorporateUpskillingBanner from "../ui/Landing/CorporateUpskillingBanner";
import AwardsAccolades from "../ui/Landing/AwardsAccolades";
import GetInTouch from "../ui/Landing/GetInTouch";
import Footer from "../ui/Landing/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header Navigation */}
      <NavBar />

      {/* 2. Simplilearn-Grade Light Hero + Accreditation Strip */}
      <SimplilearnHero />

      {/* 3. Independent Review Platform Rating Bar (Trustpilot, SwitchUp, CourseReport) */}
      <TrustRatingsBar />

      {/* 4. Core Catalog: 2-Column "Explore Our Top Programs" with Domain Tabs & Card Grid */}
      <TopProgramsCatalog />

      {/* 5. Alumni Career Transitions & Outcomes (85% Promoted, 65% Salary Hike) */}
      <div id="alumni">
        <AlumniOutcomes />
      </div>

      {/* 6. Why Our Programs Stand Out: 4 Pillar Feature Photo Cards */}
      <WhyProgramsStandOut />

      {/* 7. Enterprise & Corporate Upskilling Royal Blue Banner + Hiring Partners Marquee */}
      <CorporateUpskillingBanner />

      {/* 8. Global Industry Awards & Accolades */}
      <AwardsAccolades />

      {/* 9. Talk to an Advisor / Consultation Request */}
      <div id="contact" className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <GetInTouch />
        </div>
      </div>

      {/* 10. Multi-Column Enterprise Mega Footer */}
      <Footer />
    </main>
  );
}