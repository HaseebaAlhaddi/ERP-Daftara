import  {LoginPageRightSection}  from "@/components/loginPageRightSection"
import { SingUpForm } from "@/components/singUpForm"
function SingUpPage() {
    return (
        <section className="w-full min-h-screen bg-muted flex  items-center justify-center">
            <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-20">
                <LoginPageRightSection />
                <SingUpForm />
            </div>
        </section>
    )
}
export default SingUpPage