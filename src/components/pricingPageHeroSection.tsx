import { Check, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export  function PricingPageHeroSection() {
    return (
        <section className="container mx-auto my-8 px-4 py-16 text-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      ابدأ <span className="text-green-600">مجاناً</span>
          <br />
          واختر خطتك لاحقاً
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>تجربة مجانية لمدة 14 يوم</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>لا يلزم بطاقة ائتمان</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span>إلغاء في أي وقت</span>
          </div>
        </div>
      </section>
    )
}