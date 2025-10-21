import { Header } from "@/components/header"
import { HeroSection } from "@/components/heroSection"
import { ProgramingSection } from "@/components/programingSectio"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FeaturesSection } from "@/components/featuresSection"
import { Footer } from "@/components/footer"
import { GreenSection } from "@/components/greenSection"
import { DownloadSection } from "@/components/downloadSection"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        
        <PricingSection />
        <TestimonialSection 
          title="نظام متكامل قابل للتخصيص ليناسب أكثر من 50 مجالًا مختلفًا"
          description="إمكانية تخصيص نظام دفترة حسب مجال عملك بما في ذلك التطبيقات المضمَّنة وتصميمات الواجهة لتحقيق أهداف أعمالك ."
          buttonText="ابدأ الاستخدام مجانا"
        />
        <ProgramingSection />
        <TestimonialSection 
        title="واجهة سهلة الاستخدام بميزات متعددة" 
        description="لا حاجة لامتلاك معرفة عميقة في طرق المحاسبة أو نظم تخطيط الموارد المؤسسية لإتقان العمل على دفترة." 
        buttonText="ابدأ الاستخدام مجانا" />
        <FeaturesSection/>
        <GreenSection/>
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
