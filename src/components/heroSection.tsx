import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative z-0 w-full overflow-hidden my-10 px-4 sm:px-6 lg:px-0">
      {/* Background Image */}
      
      <div className=" max-w-6xl mx-auto   relative h-[500px] md:h-[600px] flex justify-start items-center relative rounded-xl overflow-hidden">
        <Image src="/home-img.svg" alt="Professional workspace" fill className="object-cover rounded-xl" priority />

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />

        {/* Content */}
        <div className="relative h-full w-full px-4 sm:px-6 lg:px-8 flex justify-start">
          <div className="flex flex-col justify-center items-start h-full max-w-2xl text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            نظام ERP متكامل
              <br />
              <span className="block">لإدارة كافة أعمالك</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl text-pretty">
            يعد دفترة برنامج ERP متكامل يعمل على مساعدتك في إدارة كل جوانب أعمالك بواجهة سهلة الاستخدام تدعم اللغة العربية، أصدر فواتيرك وأدِر مبيعاتك ومخزونك وعملائك موظفيك وحساباتك ودورة العمل لديك، مع تطبيقات إدارة شاملة وقابلة للتخصيص لتلبية احتياجات أعمالك، حيث يُمكِنُك استخدامه في أي وقت ومن أي مكان لكونه نظامًا سحابيًا بإجراءات أمان قوية تضمن سلامة بياناتك.
            </p>

            
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8">
                ابدأ الاستخدام مجانا
              </Button>
          </div>
        </div>
      </div>

      {/* Business Type Selector */}
      <div className=" max-w-6xl mx-auto bg-[#0A3D3E]  mt-10 py-8 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            
            <h2 className="text-white text-xl md:text-2xl font-semibold">تطبيقات إدارة الأعمال المضمَّنة في نظام </h2>
            <div className="flex flex-col lg:flex-row flex-wrap gap-4">
  {["المبيعات","المحاسبة العامة","المخزون","شؤون الموظفين","إدارة العمليات","علاقات العملاء"].map(item => (
    <Button
      key={item}
      variant="outline"
      className="bg-transparent border-white/30 text-white hover:bg-white/10 flex-1 text-center"
    >
      {item}
    </Button>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
