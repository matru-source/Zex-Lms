import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, Star, CheckCircle, Sparkles } from "lucide-react";
import axios from "axios";
import { API_ROUTES } from "../../../lib/api";

interface CourseCardData {
  id: string;
  title: string;
  category: string;
  partner: string;
  partnerBadge: string;
  duration: string;
  format: string;
  cohort: string;
  rating: number;
  reviewsCount: number;
  features: string[];
  image: string;
}

export default function TopProgramsCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "oracle", name: "Oracle Solutions" },
    { id: "sap", name: "SAP S/4HANA" },
    { id: "ifs", name: "IFS Applications" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "ai", name: "AI & Business Acumen" },
  ];

  // Fetch real database courses
  const { data: serverCourses } = useQuery({
    queryKey: ["landing-programs-catalog"],
    queryFn: async () => {
      try {
        const res = await axios.get(API_ROUTES.COURSE.GET_COURSES);
        return res.data?.data || [];
      } catch (e) {
        return [];
      }
    },
    staleTime: 60000,
  });

  // Curated flagship programs matching Simplilearn catalog standard
  const flagshipPrograms: CourseCardData[] = [
    {
      id: "oracle-financials-master",
      title: "Oracle Fusion Cloud Financials & Supply Chain Master's Program",
      category: "oracle",
      partner: "Oracle Corporation",
      partnerBadge: "Certified Specialist",
      duration: "6 Months",
      format: "Live Online Bootcamp",
      cohort: "Starts Nov 15",
      rating: 4.8,
      reviewsCount: 1420,
      features: ["Live Hands-on Sandbox Labs", "General Ledger & Payables", "1-on-1 Capstone Mentorship"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "sap-s4hana-logistics",
      title: "SAP S/4HANA Enterprise Logistics & Procurement Consultant",
      category: "sap",
      partner: "SAP Global",
      partnerBadge: "Partner Training",
      duration: "5 Months",
      format: "Live Cohort",
      cohort: "Starts Nov 22",
      rating: 4.9,
      reviewsCount: 2180,
      features: ["S/4HANA Real Sandbox Access", "End-to-End MM/SD Workflows", "Industry Digital Credential"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ifs-cloud-enterprise",
      title: "IFS Cloud Applications Architecture & Service Management",
      category: "ifs",
      partner: "IFS World",
      partnerBadge: "Enterprise Track",
      duration: "4 Months",
      format: "Live Online",
      cohort: "Starts Dec 01",
      rating: 4.7,
      reviewsCount: 940,
      features: ["Aurena UX & REST APIs", "Asset & Service Management", "Direct Hiring Referrals"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "cloud-devops-architect",
      title: "Enterprise Cloud Architect Bootcamp: AWS & Microsoft Azure",
      category: "cloud",
      partner: "AWS & Microsoft",
      partnerBadge: "Dual Accredited",
      duration: "6 Months",
      format: "Live Bootcamp",
      cohort: "Starts Nov 18",
      rating: 4.9,
      reviewsCount: 3120,
      features: ["Kubernetes & Terraform Labs", "Multi-Cloud Security", "Job Assist & Mock Interviews"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ai-business-transformation",
      title: "AI-Powered Business Operations & Enterprise Automation",
      category: "ai",
      partner: "Learn with IITans Enterprise",
      partnerBadge: "Executive Program",
      duration: "3 Months",
      format: "Executive Weekend",
      cohort: "Starts Nov 28",
      rating: 4.8,
      reviewsCount: 880,
      features: ["Generative AI in ERP", "Workflow Automation with Agents", "Strategic Executive Capstone"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "oracle-hcm-talent",
      title: "Oracle Cloud HCM: Global HR & Workforce Management",
      category: "oracle",
      partner: "Oracle Corporation",
      partnerBadge: "HCM Specialist",
      duration: "4 Months",
      format: "Live Online Bootcamp",
      cohort: "Starts Dec 05",
      rating: 4.7,
      reviewsCount: 1110,
      features: ["Core HR & Payroll Modules", "Fast Formulas & HDL Labs", "Interview Question Bank"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Map real database courses if present
  const dbMappedPrograms: CourseCardData[] = (serverCourses || []).map((c: any) => ({
    id: c.id,
    title: c.name || c.title,
    category: c.category?.name?.toLowerCase().includes("oracle")
      ? "oracle"
      : c.category?.name?.toLowerCase().includes("sap")
      ? "sap"
      : c.category?.name?.toLowerCase().includes("ifs")
      ? "ifs"
      : "all",
    partner: c.category?.name || "Learn with IITans",
    partnerBadge: "Official Curriculum",
    duration: "12 Weeks",
    format: "Self-Paced + Live Doubt Clear",
    cohort: "Enroll Anytime",
    rating: 4.8,
    reviewsCount: 350,
    features: [
      `${c._count?.chapters || 12} Comprehensive Chapters`,
      `${c._count?.lessons || 45} Video Lessons`,
      "Verifiable Course Certificate",
    ],
    image: c.thumbnailUrl || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  }));

  const allDisplayPrograms = [...flagshipPrograms, ...dbMappedPrograms];

  const filteredPrograms =
    activeCategory === "all"
      ? allDisplayPrograms
      : allDisplayPrograms.filter((p) => p.category.toLowerCase().includes(activeCategory));

  return (
    <section id="explore-programs" className="py-20 bg-white">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            Curated High-Impact Career Tracks
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore Our Top Programs
              </h2>
              <p className="text-slate-600 text-base mt-2 max-w-2xl">
                Upskill with live interactive masterclasses, industry-grade ERP sandboxes, and recognized credentials.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0075eb] hover:text-[#005bb5] transition-colors"
            >
              <span>View All Programs ({allDisplayPrograms.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2-Column Catalog Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Category Tabs */}
          <div className="lg:col-span-3 sticky top-24 space-y-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Browse Domains
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center justify-between ${
                    isActive
                      ? "bg-[#0075eb] text-white shadow-sm"
                      : "text-slate-700 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  <span>{cat.name}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-white" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: 3-Column Course Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPrograms.map((course, idx) => (
                <div
                  key={`${course.id}-${idx}`}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden"
                >
                  {/* Thumbnail & Partner Header */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
                    
                    {/* Partner Pill */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-bold text-slate-800 shadow-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      {course.partner}
                    </div>

                    {/* Badge Pill */}
                    <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                      <span className="bg-blue-600/90 px-2 py-0.5 rounded text-[11px] font-semibold">
                        {course.partnerBadge}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Pills (Duration, Mode) */}
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {course.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {course.cohort}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-[#0075eb] transition-colors mb-3">
                        {course.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1.5 text-xs mb-4">
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-bold border border-amber-200">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>{course.rating}</span>
                        </div>
                        <span className="text-slate-400">({course.reviewsCount.toLocaleString()} reviews)</span>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4">
                        {course.features.map((f, fi) => (
                          <div key={fi} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">{course.format}</span>
                      <Link
                        to={course.id.startsWith("oracle-") || course.id.startsWith("sap-") || course.id.startsWith("ifs-") ? "/courses" : `/public/course/${course.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0075eb] hover:text-[#005bb5] transition-colors"
                      >
                        <span>View Program</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Bottom View All Link */}
            <div className="mt-10 text-center">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-[#0075eb] text-[#0075eb] hover:bg-blue-50 font-bold text-sm transition-all"
              >
                <span>Explore All {allDisplayPrograms.length} Programs & Certifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
