import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "الاساسية",
    price: "£20.00",
    period: "/شهريا",
    description: "يدفع 240£ سنويا",
    popular: false,
  },
  {
    name: "المتقدمة",
    price: "£41.25",
    period: "/شهريا",
    description: "يدفع 495£ سنويا",
    popular: false,
  },
  {
    name: "الشاملة",
    price: "£50.00",
    period: "/شهريا",
    description: "يدفع 600£ سنويا",
    popular: true,
  },
 
]

export function PricingSection() {
  return (
    <section className=" w-full py-24 bg-muted">
      <div className="container max-w-6xl mx-auto ">
        <div className="text-center space-y-4 mb-5">
          <h2 className="text-2xl lg:text-5xl text-center  lg:text-4xl font-bold text-balance">
          ابــــداً
          <span className="text-primary px-2">مــــجـاناً</span>
          واخــــتــــر خـطتك لاحــــقاً
          </h2>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto pt-5">
          <div className="flex gap-6 pb-4 min-w-max">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative transition-transform duration-300 hover:scale-105 lg:hover:scale-110 ${plan.popular ? "border-primary shadow-lg pt-6" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent pt-2">الاكثر شيوعا</Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className='w-full'
                  variant= "outline"
                >
                 اختر الخطة
                </Button>
                <Button className="w-full bg-accent  ">
                  عرض  المزيد من التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
