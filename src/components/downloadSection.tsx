import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play, Store } from "lucide-react"

const downloadContent = {
  title: "حمِّل تطبيق دفترة للهواتف الذكية مجانًا",
  description: "كن على تواصل دائم مع عملائك وأدر أعمالك بسلاسة وسهولة مع تطبيق دفترة للهاتف المحمول. تابع آخر مستجدات أعمالك واقت بنا بسهولة ودقة، وأدر معاملاتك المختلفة عبر واجهة سهلة الاستخدام تعمل على أنظمة تشغيل الهواتف المختلفة.",
  image: {
    src: "/download-img.webp",
    alt: "دفترة على جميع الأجهزة",
    width: 640,
    height: 420
  }
}

const storeButtons = [
  {
    id: "app-store",
    icon: Apple,
    text: "App Store",
    
  },
  {
    id: "google-play",
    icon: Play,
    text: "Google Play",
    
  },
  {
    id: "app-gallery",
    icon: Store,
    text: "AppGallery",
   
  }
]

export function DownloadSection() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-start  gap-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mr-3">
            {downloadContent.title}
          </h2>
          <p className="text-gray-700 leading-8 mr-3">
            {downloadContent.description}
          </p>

          <div className="flex flex-wrap gap-3 justify-end">
            {storeButtons.map((button) => {
              const IconComponent = button.icon
              return (
                <Button 
                  key={button.id}
                  variant="outline" 
                  className="rounded-xl px-4 py-6 text-sm font-semibold flex items-center gap-2"
                >
                  <IconComponent className="w-5 h-5" />
                  {button.text}
                </Button>
              )
            })}
          </div>
        </div>
        <div >
          <Image
            src={downloadContent.image.src}
            alt={downloadContent.image.alt}
            width={downloadContent.image.width}
            height={downloadContent.image.height}
            className="w-full max-w-[560px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}


