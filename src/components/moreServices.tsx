import { Calculator, Monitor, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function MoreServices() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary " />,
      title: "تهيئه الحساب",
      description: "اطلب المساعدة في إعداد حسابك، وضبطه حسب احتياجاتك، أو إدارته بسهولة - فريقنا مستعد لدعمك.",
      action: "اطلب المساعدة في الحساب >",
      actionIcon: "→"
    },
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "المحاسبة",
      description: "اطلب استشارة محاسبية من خبرائنا تشمل المراجعة المالية أو الدعم في التدقيق بكل احترافية.",
      action: "تحدث مع محاسبينا ←",
      actionIcon: "←"
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "التخصيص",
      description: "اطلب ميزات أو تطويرات مخصصة لتكييف دفتره حسب احتياجاتك - فريقنا جاهز لدعمك.",
      action: "تواصل مع فريق الحلول المخصصة ←",
      actionIcon: "←"
    }
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          طلبات الخدمات الإضافية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-right">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="text-center">
                  <Link 
                    href="/" 
                    className="text-primary hover:text-blue-700 font-medium text-sm inline-flex items-center gap-2 transition-colors"
                  >
                    {service.action}
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
