'use client'
import { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Instagram, ChevronDown } from "lucide-react"
const footerSections = [
  {
    title: "البرامج",
    links: [
      "برنامج المبيعات والفواتير",
      "برنامج إدارة المخزون",
      "برنامج الحسابات العامة",
      "برنامج دورة العمل",
      "برنامج إدارة علاقات العملاء",
      "برنامج إدارة شؤون الموظفين",
    ],
  },
  {
    title: "دليل الموقع",
    links: [
     {text: " تسجيل حساب", href: "/singUp"},
     {text: "تسجيل الدخول", href: "/login"},
     {text: "الأسعار", href: "/pricing"},
     {text: "تواصل معنا", href: "/contectUs"},
     "برنامج الربح والشراكة",
     "شركاء النجاح",
     "برنامج الوكلاء",
     "الموردين المعتمدين",
     "المركز التعليمي ",
     "آخر التحديثات",
     "دليل API",
    ],
  },
 
  {
    title:"مجالات العمل",
    links:[
     " برنامج إدارة المحلات التجارية",
     " برنامج المؤسسات التجارية والتوريد",
     " برنامج إدارة صالونات ومراكز التجميل",
     " برنامج إدارة الجيم والنوادي الصحية",
     " برنامج إدارة محلات النظارات والبصريات",
     " برنامج إدارة مكاتب المحاماة",
     " برنامج إدارة الصيدليات",
     " برنامج إدارة شركات الأدوية",
     " برنامج إدارة العيادات والمراكز الطبية",
     ],
  },
     
]
export function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }
  return (
    <footer className="bg-[#0C3C3C] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {footerSections.map((section, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between gap-3 md:cursor-default"
                aria-expanded={openIndex === index}
                aria-controls={`footer-section-${index}`}
              >
                <h3 className="font-semibold text-base mb-4 md:mb-0">{section.title}</h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform md:hidden ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  aria-hidden="true"
                />
              </button>
              <ul
                id={`footer-section-${index}`}
                className={`space-y-3 overflow-hidden transition-[max-height] duration-300 ease-in-out md:block ${
                  openIndex === index ? "max-h-96" : "max-h-0 md:max-h-none hidden md:block"
                }`}
              >
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={typeof link === 'string' ? '#' : link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {typeof link === 'string' ? link : link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-600">
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-white transition-colors">
            الشروط والأحكام 
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
            سياسة الخصوصية
            </Link>
          </div>
          <div>
            <p>جميع الحقوق محفوظة © 2025.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
