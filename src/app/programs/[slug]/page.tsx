import programs  from "@/data/programs.json"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturesSection } from "@/components/featuresSection"
import { DownloadSection } from "@/components/downloadSection"
export default function ProgramPage({ params }: { params: { slug: string } }) {
    // Decode the URL parameter
    const decodedSlug = decodeURIComponent(params.slug)
    const program = programs[decodedSlug as keyof typeof programs]
    
    if (!program) {
        return (
            <div className="w-full py-24">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-2xl font-bold mb-4">Program not found</h1>
                    <p className="text-gray-600 mb-4">Slug: {decodedSlug}</p>
                    <p className="text-gray-600">Available programs: {Object.keys(programs).join(', ')}</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <Header />
            <section className="w-full py-24 ">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                {program.sections.map((section, index) => (
                    <>
                        <div key={index} className={`flex gap-8 flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-4">{section.title}</h1>
                            <p className="text-gray-600 mb-4 text-pretty">{section.description}</p>
                            {index === 0 && (
                                <>
                                    <div className="flex gap-4 mt-6">
                                        <Button size="lg">ابدأ الاستخدام الآن </Button>
                                        <Button variant="outline" size="lg">جولة سريعة</Button>
                                    </div>
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
                                </>
                            )}
                            {index === 1 && (
                            <div className="flex gap-4 mt-6">
                                <Button size="lg">ابدأ الاستخدام الآن </Button>
                                <Button variant="outline" size="lg">المميزات</Button>
                            </div>
                        )}
                            </div>
                            <div className="flex-1">
                                <Image src={`/${section.icon}`} alt={section.title} width={350} height={100} />
                            </div>
                        </div>
                        {index === 0 && (
                            <div className="mt-8 bg-primary text-white p-4 rounded-3xl flex items-center justify-center gap-12 ">
                                <div className="flex-[3] space-y-4 mt-10 ">
                                    <h2 className="text-2xl font-bold mr-10">نظام متكامل قابل للتخصيص ليناسب أكثر من 50 مجالًا مختلفًا</h2>
                                    <p className="mb-4 mr-10">مكانية تخصيص نظام دفترة حسب مجال عملك بما في ذلك التطبيقات المضمَّنة وتصميمات الواجهة لتحقيق أهداف أعمالك.</p>
                                </div>
                                <div className="flex-[1]">
                                    <Button variant="outline" className="text-primary" size="lg">ابدأ الاستخدام الآن </Button>
                                </div>
                            </div>
                        )}
                        
                    </>
                ))}
                </div>
            </section>
            <FeaturesSection />
            <DownloadSection />
            <Footer />
        </>
    )
}