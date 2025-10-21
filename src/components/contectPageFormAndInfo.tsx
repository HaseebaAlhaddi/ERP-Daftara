"use client";
import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
function ContectPageFormAndInfo() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      })
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle form submission
      }
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }))
      }
    
  return (
   <section className="w-full ">
     <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-20  bg-white rounded-lg shadow-sm p-8 md:p-12 mb-20 mx-8">
       <div className="space-y-8">
         <div>
           <h2 className="text-xl font-semibold text-gray-900 mb-6">معلومات الاتصال</h2>

           <div className="space-y-6">
             <div>
               <h3 className="font-medium text-gray-900 mb-2">للتواصل الهاتفى</h3>
               <div className="flex items-start gap-3 text-gray-600">
                 <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                 <div>
                   <p>الشرق الأوسط</p>
                  
                   <p className="text-sm"> <a href="tel:+966115030300" className="text-blue-600 hover:underline">+966 115030300</a></p>
                 </div>
               </div>
             </div>

             <div>
               <h3 className="text-lg font-bold  mb-2">خدمة الواتساب</h3>
               <p className="font-semibold text-medium mt-2">فريق المبيعات: <a href="tel:+966115030301" className="text-blue-600 hover:underline">+966 115030301</a></p>
               <p>السبت - الخميس: 10 صباحًا - 7 مساءً(مكة المكرمة) </p>
               <p className="font-semibold text-medium mt-2">الدعم الفنى: <a href="tel:+966115030302" className="text-blue-600 hover:underline">+966 115030302</a></p>
               <p>24/7</p>
             </div>
           </div>
         </div>

         <div className="pt-6 border-t">
           <h3 className="font-semibold text-gray-900 mb-4">الدعم الفني</h3>
           <div className="space-y-3">
             <div className="flex items-center gap-3 text-gray-600">
               <Mail className="w-5 h-5 flex-shrink-0" />
               <a href="mailto:support@daftra.com" className="text-blue-600 hover:underline">
                 support@daftra.com
               </a>
             </div>
             <p className="text-sm text-gray-600">
             هل قابلتك مشكلة مع برنامجنا أو لديك سؤال عن أحد خصائصه تواصل معنا وسوف نقوم بالرد خلال 24 ساعة
             </p>
           </div>
         </div>

         <div className="pt-6 border-t">
           <h3 className="font-semibold text-gray-900 mb-4">الاستفسارات العامة</h3>
           <div className="space-y-3">
             <div className="flex items-center gap-3 text-gray-600">
               <Mail className="w-5 h-5 flex-shrink-0" />
               <a href="mailto:info@daftra.com " className="text-blue-600 hover:underline">
               info@daftra.com 
               </a>
             </div>
             <p className="text-sm text-gray-600">
             يقوم القسم المختص بالرد على استفسارك فى خلال 24 ساعة
             </p>
           </div>
         </div>
       </div>

       <form onSubmit={handleSubmit} className="space-y-6">
         <div className="space-y-2">
           <Label htmlFor="name">
             الاسم <span className="text-red-500">*</span>
           </Label>
           <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-gray-50" />
         </div>

         <div className="space-y-2">
           <Label htmlFor="email">
             البريد الإلكتروني <span className="text-red-500">*</span>
           </Label>
           <Input
             id="email"
             name="email"
             type="email"
             value={formData.email}
             onChange={handleChange}
             required
             className="bg-gray-50"
           />
         </div>

         <div className="space-y-2">
           <Label htmlFor="subject">
           عنوان الرسالة<span className="text-red-500">*</span>
           </Label>
           <Input
             id="subject"
             name="subject"
             value={formData.subject}
             onChange={handleChange}
             required
             className="bg-gray-50"
           />
         </div>

         <div className="space-y-2">
           <Label htmlFor="phone">
           الهاتف <span className="text-red-500">*</span>
           </Label>
           <Input
             id="phone"
             name="phone"
             value={formData.phone}
             onChange={handleChange}
             required
             className="bg-gray-50"
           />
         </div>

         <div className="space-y-2">
           <Label htmlFor="message">
             الرسالة <span className="text-red-500">*</span>
           </Label>
           <Textarea
             id="message"
             name="message"
             value={formData.message}
             onChange={handleChange}
             required
             rows={6}
             className="bg-gray-50 resize-none"
           />
         </div>

         <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
           إرسال الرسالة
         </Button>
       </form>
     </div>
   </section>
  )
}

export default ContectPageFormAndInfo