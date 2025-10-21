"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Login attempt:", { email })
    // Add your login logic here
  }

  return (
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">تسجيل الدخول</h1>
        </div>
        <div className="space-y-1">
          <Label htmlFor="email" className="text-sm">
            البريد الإلكتروني *
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-10"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password" className="text-sm">
            كلمة المرور *
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-10 pr-10 w-full"
            />
           
          </div>
        </div>

        <div className="text-left">
          <a href="#" className="text-primary hover:underline text-sm font-medium">
            هل نسيت كلمة المرور؟
          </a>
        </div>

        <Button type="submit" variant="default" size="default" className="w-full">
                تسجيل الدخول
              </Button>

        <div className="text-center text-sm">
          <span className="text-muted-foreground">{"ليس لديك حساب؟ "}</span>
          <Link href="/singUp" className="text-blue-600 hover:underline font-medium">انشاء حساب جديد</Link>
          
        </div>
      </form>
    </div>
  )
}
