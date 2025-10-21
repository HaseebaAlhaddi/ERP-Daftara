import { Header }  from "@/components/header"
import { PricingPageHeroSection } from "@/components/pricingPageHeroSection"
import { PricingCard } from "@/components/pricingCard"
import MoreServices from "@/components/moreServices"
import { Footer } from "@/components/footer"
export default function PricingPage() {
  return (
    <>
    <head>
      <title>دفترة - الأسعار</title>
      <meta name="description" content="دفترة - الأسعار" />
      <meta name="keywords" content="دفترة, الأسعار, نظام ERP, متكامل, إدارة أعمال, تطبيقات إدارة, تطبيقات ERP, تطبيقات إدارة الأعمال, تطبيقات ERP المتكاملة, تطبيقات إدارة الأعمال المتكاملة, تطبيقات ERP المتكاملة" />
      <meta name="author" content="دفترة" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
      <Header />
      <PricingPageHeroSection />
      <PricingCard/>
      <MoreServices/>
      <Footer/>
    </>
  )
}
