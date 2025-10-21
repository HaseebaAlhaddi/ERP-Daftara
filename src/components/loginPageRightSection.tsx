import type React from "react"
import Link from "next/link"
function FeatureLink({ children }: { children: React.ReactNode }) {
    return (
        <a href="#" className="flex items-center gap-1 text-primary hover:underline font-medium text-sm">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {children}
        </a>
    )
}
export function LoginPageRightSection() {
    return (
        <section className="max-w-md">
            <div className="space-y-3">
            <Link href="/" className="text-3xl font-bold font-cairo cursor-pointer hover:opacity-80 transition-opacity mb-4">
                <span className="text-primary">د</span>فترة 
          </Link>
                <p className="text-base text-gray-600 py-2 ">كل ما تحتاجه لإدارة أعمالك في برنامج واحد!</p>
                <p className="text-sm text-gray-600 py-2">يدعم أكثر من 50 مجالا مختلفا وأكثر من 20 تطبيق لإدارة الأعمال بإحترافية!</p>
                <p className="text-xs text-gray-600 py-2">جميع هذه الميزات مخصصَّة حسب مجال عملك!</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <FeatureLink>المبيعات والنقاط</FeatureLink>
                    <FeatureLink>الفواتير الإلكترونية</FeatureLink>
                    <FeatureLink>المخزون</FeatureLink>
                    <FeatureLink>الحسابات العامة</FeatureLink>
                    <FeatureLink>العملاء</FeatureLink>
                    <FeatureLink>إدارة الموظفين</FeatureLink>
                    <FeatureLink>الفروع</FeatureLink>
                    <FeatureLink>دورة العمل</FeatureLink>
                </div>
            </div>

        </section>
    )

}
