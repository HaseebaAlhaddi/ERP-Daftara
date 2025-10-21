import  {LoginPageRightSection}  from "@/components/loginPageRightSection"
import { LoginForm } from "@/components/loginPageForm"
function LoginPage() {
    return (
        <>
        <head>
            <title>دفترة - تسجيل الدخول</title>
            <meta name="description" content="دفترة - تسجيل الدخول" />
            <meta name="keywords" content="دفترة, تسجيل الدخول, نظام ERP, متكامل, إدارة أعمال, تطبيقات إدارة, تطبيقات ERP, تطبيقات إدارة الأعمال, تطبيقات ERP المتكاملة, تطبيقات إدارة الأعمال المتكاملة, تطبيقات ERP المتكاملة" />
            <meta name="author" content="دفترة" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <section className="w-full min-h-screen bg-muted flex  items-center justify-center">
            <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-20">
                <LoginPageRightSection />
                <LoginForm />
            </div>
        </section>
        </>
        
    )
}
export default LoginPage

