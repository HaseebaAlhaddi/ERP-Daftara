import ContectPageHeroSection from "@/components/contectPageHeroSection"
import ContectPageFormAndInfo from "@/components/contectPageFormAndInfo"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContectUs() {
    return (
        <>
        <head>
            <title>دفترة - تواصل معنا</title>
            <meta name="description" content="دفترة - تواصل معنا" />
            <meta name="keywords" content="دفترة, تواصل معنا, نظام ERP, متكامل, إدارة أعمال, تطبيقات إدارة, تطبيقات ERP, تطبيقات إدارة الأعمال, تطبيقات ERP المتكاملة, تطبيقات إدارة الأعمال المتكاملة, تطبيقات ERP المتكاملة" />
            <meta name="author" content="دفترة" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <div>
            <Header />
            <ContectPageHeroSection />
            <ContectPageFormAndInfo />
            <Footer />
        </div>
        </>
    )
}