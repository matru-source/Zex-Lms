import { Link } from "react-router-dom";
import { Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const trendingTags = [
    "Oracle Cloud Financials", "SAP S/4HANA Logistics", "IFS Aurena Cloud",
    "AWS Certified Solutions Architect", "PMP® Certification", "DevOps Engineer",
    "Azure Data Fundamentals", "Cyber Security Specialist", "Business Analyst Master's",
    "Scrum Master (CSM)", "Python for Data Science", "Generative AI for Enterprise",
  ];

  const columns = [
    {
      title: "Flagship Programs",
      links: [
        { name: "Oracle Fusion ERP Bootcamp", href: "/courses" },
        { name: "SAP S/4HANA Consultant Track", href: "/courses" },
        { name: "IFS Cloud Architecture", href: "/courses" },
        { name: "Enterprise Cloud & DevOps", href: "/courses" },
        { name: "AI & Business Operations", href: "/courses" },
        { name: "Project Management Master's", href: "/courses" },
      ],
    },
    {
      title: "Enterprise Solutions",
      links: [
        { name: "Zex LMS for Business", href: "/contact" },
        { name: "Corporate Team Upskilling", href: "/contact" },
        { name: "Custom Sandbox Environments", href: "/contact" },
        { name: "Role-Based Learning Paths", href: "/contact" },
        { name: "Enterprise Skills Analytics", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Zex LMS", href: "/about" },
        { name: "Leadership & Advisory", href: "/about" },
        { name: "Alumni Success Stories", href: "/#alumni" },
        { name: "Careers (We're Hiring!)", href: "/careers" },
        { name: "Press & Media Coverage", href: "/press" },
      ],
    },
    {
      title: "Resources & Community",
      links: [
        { name: "Knowledge Base", href: "/faq" },
        { name: "Community Forum", href: "/forum" },
        { name: "Free Skill Assessments", href: "/quizzes" },
        { name: "Webinars & Masterclasses", href: "/courses" },
        { name: "Curriculum Syllabi", href: "/courses" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Top Tag Cloud Strip */}
      <div className="border-b border-slate-900 py-10">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            Trending Certifications & Enterprise Topics
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag, idx) => (
              <Link
                key={idx}
                to="/courses"
                className="text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main 5-Column Directory */}
      <div className="py-14 border-b border-slate-900">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Brand & Contact Info */}
            <div className="space-y-5">
              <Link to="/" className="inline-flex items-center gap-2">
                <img src="/logo.png" alt="Zex LMS" className="h-9 w-auto brightness-200" />
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed">
                The premier digital bootcamp and corporate upskilling academy for Oracle, SAP, IFS, and Next-Gen Cloud technologies.
              </p>

              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-300 font-medium">+1 (800) 555-0199 (Toll-Free)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-300">support@zexlms.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>24/7 Global Learner Success</span>
                </div>
              </div>
            </div>

            {/* Columns 2-5: Nav Groups */}
            {columns.map((col, cIdx) => (
              <div key={cIdx} className="space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        to={link.href}
                        className="text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="py-8 bg-slate-950">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Zex LMS Platform Inc. All rights reserved. Oracle, SAP, IFS, Microsoft, and AWS trademarks belong to their respective holders.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}