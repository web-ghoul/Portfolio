import ContactForm from "@/src/components/ContactForm/ContactForm"
import MessageMe from "@/src/components/MessageMe/MessageMe"
import Title from "@/src/components/Title/Title"

const ContactSection = ({ noTitle }: { noTitle?: boolean }) => {
    return (
        <section className="contain grid justify-stretch items-center gap-10 max-desktop:gap-8 max-laptop:gap-7 max-tablet:gap-6 max-mobile:gap-5 max-small:gap-4">
            {!noTitle && <Title title={"contacts"} />}
            <div className="grid justify-stretch items-center gap-8">
                <p className="text-gray-400 w-[50%] max-desktop:w-[60%] max-laptop:w-[75%] max-tablet:w-full">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.
                </p>
                <div className="grid justify-stretch items-start grid-cols-[60%_1fr] gap-8 max-desktop:grid-cols-[55%_1fr] max-laptop:grid-cols-1 max-laptop:gap-6 max-tablet:gap-5 max-mobile:gap-4">
                    <ContactForm />
                    <MessageMe />
                    <hr className="hidden max-laptop:block border-zinc-900" />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
