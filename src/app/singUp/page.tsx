import  {LoginPageRightSection}  from "@/components/loginPageRightSection"
import { SingUpForm } from "@/components/singUpForm"
function SingUpPage() {
    return (
        <>
        <head>
            <title>تسجيل حساب جديد</title>
            <meta name="description" content="تسجيل حساب جديد" />
            <meta name="keywords" content="تسجيل حساب جديد" />
            <meta name="author" content="تسجيل حساب جديد" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <section className="w-full min-h-screen bg-muted flex  items-center justify-center">
        
            <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-20">
                <LoginPageRightSection />
                <SingUpForm />
            </div>
        </section>
        </>
    )
}
export default SingUpPage