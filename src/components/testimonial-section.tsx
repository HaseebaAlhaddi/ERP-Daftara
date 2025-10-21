import { Button } from "./ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialSectionProps {
  title: string
  description: string
  buttonText?: string
}

export function TestimonialSection({ 
  title, 
  description, 
  buttonText = "ابدأ الاستخدام مجانا" 
}: TestimonialSectionProps) {
  return (
    <section className="py-5 bg-muted/30 w-full">
      <div className="container  max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold">{title}</h2>
          <p className=" text-lg lg:text-2xl  text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
