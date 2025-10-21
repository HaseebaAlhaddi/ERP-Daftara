import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Calculator, Workflow, Users, Boxes, IdCard } from "lucide-react"

interface CardData {
  type: string
  text: string
  image: string
  bg: string // tailwind backgroun d classes
}

const cards: CardData[] = [
  {
    type:"إدارة مبيعات",
    text: "برنامج إدارة مبيعات شامل لتحقيق أرباحك المستهدفة",
    image: "/home-sales-sc.webp",
    bg: "bg-emerald-50",
  },
  {
    type:"محاسبة",
    text: "برنامج محاسبة وقيود يومية متكامل لمتابعة أكثر دقة لأعمالك",
    image: "/home-accounting-sc.webp",
    bg: "bg-teal-50",
  },
  {
    type:"دورة العمل",
    text: "برنامج دورة العمل لتدفق أعمال أكثر سلاسة",
    image: "/home-operation-sc.webp",
    bg: "bg-emerald-50",
  },
  {
    type:"علاقات العملاء",
    text: "برنامج إدارة علاقات العملاء لضمان رضا عميلك",
    image: "/home-crm-sc.webp",
    bg: "bg-stone-50",
  },
  {
    type:"إدارة المخزون",
    text: "برنامج إدارة المخزون والموردين لتتبع حركة منتجاتك بفعالية",
    image: "/home-inventory-sc.webp",
    bg: "bg-emerald-50",
  },
  {
    type:"إدارة شؤون الموظفين",
    text: "برنامج إدارة شؤون الموظفين لضمان سير أعمال أكثر كفاءة",
    image: "/home-hrm-sc.webp",
    bg: "bg-teal-50",
  },
]

function renderIconForType(type: string) {
  switch (type) {
    case "إدارة مبيعات":
      return <ShoppingCart className="w-5 h-5 text-gray-700" aria-hidden />
    case "محاسبة":
      return <Calculator className="w-5 h-5 text-gray-700" aria-hidden />
    case "دورة العمل":
      return <Workflow className="w-5 h-5 text-gray-700" aria-hidden />
    case "علاقات العملاء":
      return <Users className="w-5 h-5 text-gray-700" aria-hidden />
    case "إدارة المخزون":
      return <Boxes className="w-5 h-5 text-gray-700" aria-hidden />
    case "إدارة شؤون الموظفين":
      return <IdCard className="w-5 h-5 text-gray-700" aria-hidden />
    default:
      return null
  }
}

export function ProgramingSection() {
  return (
    <section className="w-full py-16 bg-muted/40">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative flex items-center ${card.bg} rounded-3xl shadow-sm p-8 gap-6 min-h-56 overflow-hidden`}
            >
              <div className="flex-shrink-0 w-1/2 h-40 relative">
                <Image src={card.image} alt={card.type} width={400} height={200} className="object-contain rounded-lg" />
              </div>
              <div className="flex-1 flex flex-col  text-end gap-3">
                <div className="flex items-center justify-end gap-2 text-gray-700">
                  <span className="text-sm font-medium opacity-80">{card.type}</span>
                  {renderIconForType(card.type)}
                </div>
                <p className="text-3xl font-semibold text-gray-900 leading-snug">{card.text}</p>
                <Button variant="outline" className="border-2 rounded-full px-6 py-5 text-gray-900 hover:bg-primary">
                  استكشف البرنامج
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
