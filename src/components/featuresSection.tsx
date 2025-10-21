import { Shield, Headphones, Palette, MousePointer, Clock, Globe, RefreshCw, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Headphones,
    title: "دعم فني متوفر مجانًا",
    description:
      "احصل على دعم فني مجاني من فريق مكرَّس للرد على استفساراتكم ومساعدتكم في حال واجهتم أي مشكلات؛ عبر التواصل من خلال الهاتف أو البريد الإلكتروني على مدار اليوم، وذلك لضمان حصولكم على تجربة مثالية عند استخدام نظام دفترة.",
  },
  {
    icon: Shield,
    title: "الأمان والحماية",
    description:
      "يولي نظام دفترة اهتمامًا بالغًا بسلامة بياناتكم على خوادمنا، لذا نستخدم خوادم مؤمنة بالكامل ومشفرة بتقنية SSL 256 bit مع عدة طبقات من الحماية، إلى جانب وجود الخوادم في قارتين مختلفتين مع إجراءات سلامة إضافية لمواقعها وقيود قوية على صلاحية الوصول إلى البيانات.",
  },
  {
    icon: Palette,
    title: "تجربة مخصصة بالكامل",
    description:
      "خصِّص النظام بما يتوافق مع مجال عملك من خلال تفعيل التطبيقات المطلوبة فقط، وخصِّص واجهة الاستخدام لتلائم هوية علامتك التجارية وألوانها، إلى جانب التعديل في قوالب الفواتير وعروض الأسعار وغيرها من المطبوعات للحصول على تجربة مثالية مخصصة لاحتياجاتك.",
  },
  {
    icon: MousePointer,
    title: "واجهة سهلة الاستخدام",
    description:
      "أدِر أعمالك بسهولة مع العديد من الخصائص والأدوات المضمّنة في واجهة سهلة الاستخدام بخطوات بسيطة، إذ لا تحتاج إلى امتلاك معرفة عميقة بأنظمة تخطيط الموارد المؤسسية أو طرق المحاسبة المعقدة من أجل العمل على أي من تطبيقات النظام.",
  },
  {
    icon: Clock,
    title: "توفير الوقت والجهد",
    description:
      "تابع مؤشرات أعمالك بدقة وأدِر عملياتك بفعالية في خطوات بسيطة من دون استغراق الكثير من الوقت أو بذل مجهود كبير في تنفيذها، وذلك بفضل واجهة المستخدم البسيطة والعمليات المؤتمتة التي يتميز بها نظام دفترة.",
  },
  {
    icon: Globe,
    title: "من أي مكان وفي أي وقت",
    description:
      "لكونه نظامًا سحابيًا على خوادم مؤمنة بالكامل، فستجد دفترة في متناول يديك دائماً لمساعدتك في إدارة أعمالك بفعالية على مدار الساعة وطوال أيام الأسبوع، مع إمكانية إصدار الفواتير عبر تطبيق سطح المكتب في حال انقطاع الاتصال بالإنترنت.",
  },
  {
    icon: RefreshCw,
    title: "تحديثات دورية مجانًا",
    description:
      "يعمل دفترة باستمرار على تطوير النظام بأكمله وتحديث تطبيقاته وميزاته لمواكبة متطلبات الأعمال بما في ذلك إضافة الخصائص والأدوات الجديدة التي من شأنها تسهيل إدارة أعمالك على نحو فعال، فيما ستحصل على كل هذه التحديثات مجانًا.",
  },
  {
    icon: DollarSign,
    title: "سعر اقتصادي",
    description:
      "احصل على نظام متكامل يتضمن كل ما تحتاجه من تطبيقات لتلبية كل احتياجات أعمالك باشتراك شهري بسيط من دون الحاجة إلى مدفوعات إضافية لكل تطبيق على حدة، إلى جانب دعم فني من متخصصين وتحديثات متواصلة مجانًا.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:py-24" >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-balance">
          لماذا يُعَدُّ دفترة...شريكًا مثاليًا لأعمالك؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
