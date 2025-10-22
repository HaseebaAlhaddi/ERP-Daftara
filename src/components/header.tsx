"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const programingMenu=[
  {
    title:"المبيعات ",
    links:[
     "المبيعات",
     "الفواتير وعروض الأسعار",
     "نقاط البيع",
     "   العروض",
     "   الأقساط",
     "  المبيعات المستهدفة والعمولات",
     " التأمينات",
]
  },
  {
    title:"العملاء",
    links:[
     "العملاء",
     "  إدارة العملاء",
     " متابعة العملاء",
     "نقاط الولاء للعملاء",
     "   النقاط والأرصدة",
     "   الاشتراكات والعضويات",
]
  },
  {
    title:"المخزون",
    links:[
     "المخزون",
     "المخزون والمستودعات",
     "إدارة المنتجات",
     "المشتريات",
     "دورة المشتريات",
     "إدارة الموردين",
     "الأذون المخزنية",
     "إدارة الجرد",
     "إدارة التصنيع",
     "إدارة أوامر الإنتاج",
]
  },
  {
    title:"الحسابات",
    links:[
      "الحسابات",
      "المصروفات",
      "برنامج محاسبي",
      "دليل الحسابات",
      "إدارة الأصول",
      "مراكز التكلفة",
      "دورة الشيكات",
    ]
  },
  {
    title:"شؤون الموظفين",
    links:[
      "شؤون الموظفين",
      "إدارة الهيكل التنظيمى",
      "الحضور والانصراف",
      "إدارة العقود",
      "إدارة المرتبات",
      "إدارة الطلبات",
    ]
  },
  {
    title:"التشغيل",
    links:[
      "التشغيل",
      "دورة العمل",
      "أوامر الشغل",
      "الحجوزات",
      "برنامج إدارة الإيجارات والوحدات",
      "عقود الإيجار",
      "تتبع الوقت",
    ]
  },
  {
    title:"تطبيقات الجوال",
    links:[
      "تطبيقات الجوال",
      "تطبيقات دفترة للجوال",
      "تطبيق إدارة الإعمال للجوال",
      "تطبيق نقاط البيع للجوال",
      "تطبيق نقاط البيع سطح المكتب",
      "تطبيق تسجيل الحضور للجوال",
      "تطبيق تسجيل المصروفات السريع للجوال",
      "تطبيق قراءة الفاتورة الإلكترونية للجوال",
    ]
  }
]

// Function to generate program URLs
const getProgramUrl = (link: string) => {
  // Extract all links from programingMenu
  const mainCategories = programingMenu.flatMap(section => section.links)
  console.log(mainCategories)
  if (mainCategories.includes(link.trim())) {
    return `/programs/${encodeURIComponent(link.trim())}`
  }
  return "/"
}
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-[1100] bg-white border-b">


      <div className="max-w-6xl mx-auto container flex h-16 items-center justify-between px-4">
        {/* شعار الموقع + زر القائمة */}
        <div className="flex items-center gap-3">
          <div
            className="lg:hidden h-8 w-8 rounded bg-primary cursor-pointer flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-white text-lg">☰</span>
          </div>
          <Link href="/" className="text-3xl font-bold first-letter:text-primary font-cairo cursor-pointer hover:opacity-80 transition-opacity">
       دفترة 
          </Link>
        </div>

        {/* القائمة في الشاشات الكبيرة */}
        <nav className="hidden lg:flex items-center gap-6">
          <div 
            className="relative"
            onMouseEnter={() => setProgramsDropdownOpen(true)}
            onMouseLeave={() => setProgramsDropdownOpen(false)}
          >
            <button className="text-base font-medium hover:text-primary transition-colors flex items-center gap-1">
              البرامج
              <ChevronDown className={`w-3 h-3 transition-transform ${programsDropdownOpen ? 'rotate-180' : 'rotate-0'}`}  />
            </button>
            
            {programsDropdownOpen && (
                <nav>
                  {/* Invisible bridge to prevent dropdown from closing */}
                  <div className="absolute top-full right-0 w-full h-1 bg-transparent"></div>
                  <div className="absolute top-full right-0 mt-1 w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-3 sm:p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        {programingMenu.map((section, index) => (
                          <div key={index} className="space-y-1 sm:space-y-2">
                            <h3 className="font-semibold text-gray-900 text-xs sm:text-sm border-b pb-1">
                              {section.title}
                            </h3>
                            <div className="space-y-0.5 sm:space-y-1">
                              {section.links.map((link, linkIndex) => (
                                <Link 
                                  key={linkIndex}
                                  href={getProgramUrl(link)} 
                                  className="block text-[10px] sm:text-xs text-gray-600 hover:text-primary hover:bg-gray-50 px-1 sm:px-2 py-0.5 sm:py-1 rounded transition-colors"
                                >
                                  {link}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>
                
            )}
          </div>
          <Link href="/pricing" className="text-base font-medium hover:text-primary transition-colors">
            الأسعار
          </Link>
          <Link href="/" className="text-base font-medium hover:text-primary transition-colors">
            مجالات العمل
          </Link>
          <Link href="/contectUs" className="text-base font-medium hover:text-primary transition-colors">
            اتصل بنا
          </Link>
        </nav>

        {/* أزرار الشاشات الكبيرة */}
        <div className="hidden lg:flex items-center gap-4">
          
            <Link href="/login">
              <Button variant="ghost" size="sm">
                تسجيل الدخول
              </Button>
            </Link>
          <Button size="sm">ابدأ الآن</Button>
        </div>

        {/* القائمة الجانبية للجوال */}
        {menuOpen && (
  <>
    {/* خلفية شفافة تغطي الشاشة */}
    <div
      className="fixed inset-0 z-[900] bg-black/60 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
    />

    {/* القائمة المنبثقة نفسها */}
    <div
      className="fixed top-0 right-0 z-[1000] h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out"
    >
      {/* Header with close button */}
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-bold">القائمة</h2>
        <button 
          onClick={() => setMenuOpen(false)}
          className="text-2xl hover:text-primary"
        >
          ×
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-6">
        <nav className="flex flex-col gap-3">
          {/* البرامج مع القائمة الفرعية */}
          <div>
            <button 
              onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
              className="text-lg font-medium hover:text-primary flex items-center justify-between w-full text-right"
            >
              البرامج
              <svg className={`w-4 h-4 transition-transform ${mobileProgramsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {mobileProgramsOpen && (
              <div className="mt-2 pr-4 space-y-2">
                {programingMenu.map((section, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-semibold text-gray-800 text-sm border-b border-gray-200 pb-1">
                      {section.title}
                    </h4>
                    <div className="space-y-1">
                      {section.links.map((link, linkIndex) => (
                        <Link 
                          key={linkIndex}
                          href={getProgramUrl(link)} 
                          onClick={() => setMenuOpen(false)}
                          className="block text-sm text-gray-600 hover:text-primary hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-primary">الأسعار</Link>
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-primary">مجالات العمل</Link>
          <Link href="/contectUs" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-primary">اتصل بنا</Link>
        </nav>
      </div>

      {/* Fixed footer */}
      <div className="p-6 border-t bg-gray-50">
        <div className="flex flex-col gap-3">
        <Link href="/login">
              <Button variant="ghost" size="sm" className="w-full">
                تسجيل الدخول
              </Button>
            </Link>
          <Button size="sm" onClick={() => setMenuOpen(false)}>ابدأ الآن</Button>
        </div>
      </div>
    </div>
  </>
)}
      </div>
    </header>
  );
}
