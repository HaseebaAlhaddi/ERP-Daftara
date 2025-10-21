"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export function SingUpForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    return (
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-background">
         <div className="w-full max-w-md space-y-8"></div>
         <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">انشاء حساب جديد</h1>
            <p className="text-muted-foreground">دقيقتين فقط لبدأ الإستخدام</p>
          </div>
          {/* Form */}
          <form className="space-y-4">
            {/* Business Name */}
            <div className="space-y-2">
              <Label htmlFor="businessName">الاسم التجاري *</Label>
              <Input id="businessName" type="text"  required />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني *</Label>
              <Input id="email" type="email"  required />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف *</Label>
              <div className="flex gap-2">
                <Select defaultValue="+1">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+1">+1</SelectItem>
                    <SelectItem value="+44">+44</SelectItem>
                    <SelectItem value="+971">+971</SelectItem>
                    <SelectItem value="+966">+966</SelectItem>
                    <SelectItem value="+20">+20</SelectItem>
                  </SelectContent>
                </Select>
                <Input id="phone" type="tel"  className="flex-1" required />
              </div>
            </div>

            {/* Subdomain */}
            <div className="space-y-2">
              <Label htmlFor="subdomain">صفحة الدخول*</Label>
              <div className="flex items-center gap-0">
                <div className="flex items-center border border-r-0 rounded-l-lg px-3 h-10 bg-muted text-muted-foreground text-sm">
                  https://daftra.com/   
                </div>
                <Input
                  id="subdomain"
                  type="text"
                  placeholder="subdomain"
                  className="rounded-none border-r-0 flex-1"
                  required
                />
                <div className="flex items-center border border-l-0 rounded-r-lg px-3 h-10 bg-muted text-muted-foreground text-sm">
                  .daftra.com
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور *</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"}  required />
                
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">تأكيد كلمة المرور *</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-base">
            ابدأ الإستخدام مجانا
            </Button>

            {/* Terms */}
            <p className="text-xs text-center text-muted-foreground">
            يُعد النقر على زر تسجيل الاشتراك موافقة منك على
              <Link href="/terms" className="text-primary hover:underline">
                الشروط والأحكام
              </Link>
              جميع بياناتك محمية بموجب{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                سياسة الخصوصية
              </Link>
              .
            </p>

            {/* Login Link */}
            <p className="text-center text-sm">
                هل لديك حساب؟{" "}
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                تسجيل الدخول
              </Link>
            </p>
          </form>
        </div>
      
        )
}