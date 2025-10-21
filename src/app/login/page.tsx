import  {LoginPageRightSection}  from "@/components/loginPageRightSection"
import { LoginForm } from "@/components/loginPageForm"
function LoginPage() {
    return (
        <section className="w-full min-h-screen bg-muted flex  items-center justify-center">
            <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-20">
                <LoginPageRightSection />
                <LoginForm />
            </div>
        </section>
    )
}
export default LoginPage

