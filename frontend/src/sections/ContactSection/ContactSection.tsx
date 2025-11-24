import ContactForm from "@/src/components/ContactForm/ContactForm"
import MessageMe from "@/src/components/MessageMe/MessageMe"
import Title from "@/src/components/Title/Title"

const ContactSection = ({ noTitle }: { noTitle?: boolean }) => {
    return (
        <section className="contain grid justify-stretch items-center gap-10">
            {!noTitle && <Title title={"contacts"} />}
            <div className="grid justify-stretch items-center gap-8">
                <p className="text-gray-400 w-[50%]">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.
                </p>
                <div className="grid justify-stretch items-start grid-cols-[60%_1fr] gap-8">
                    <ContactForm />
                    <MessageMe />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
