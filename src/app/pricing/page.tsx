import { Header }  from "@/components/header"
import { PricingPageHeroSection } from "@/components/pricingPageHeroSection"
import { PricingCard } from "@/components/pricingCard"
import MoreServices from "@/components/moreServices"
import { Footer } from "@/components/footer"
export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingPageHeroSection />
      <PricingCard/>
      <MoreServices/>
      <Footer/>
    </>
  )
}
