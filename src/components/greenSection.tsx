import { Button } from "@/components/ui/button"

export function GreenSection() {
    return (
      <section className="relative bg-[#00A82D] text-white pb-10 pt-24 overflow-hidden">
        {/* القوس العلوي الثابت */}
        <svg
          className="absolute top-0 left-0 w-full h-[180px] md:h-[220px] lg:h-[260px]"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F9F9F9" /* لون خلفية الصفحة العلوية */
            d="M0,200 Q720,20 1440,200 L1440,0 L0,0 Z"
          ></path>
        </svg>
  
        {/* المحتوى */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold  mt-12">
        احصل على تجربتك المجانية
        </h2>
        <p className="py-4">سجِّل حسابك في دفترة في خطوات بسيطة من دون الحاجة إلى بطاقة ائتمان</p>
        <Button 
          size="lg" 
          className="bg-black hover:bg-gray-800 text-white font-semibold mt-10 px-8 py-4 text-lg rounded-lg"
        >
          ابدأ الاستخدام مجانا
        </Button>
      </div>
      </section>
    );
  }
  