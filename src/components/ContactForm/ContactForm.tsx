"use client"
import useContact from "@/src/hooks/useContact"
import PrimaryButton from "../Buttons/PrimaryButton"
import Input from "./Input"
import Textarea from "./Textarea"

const ContactForm = () => {
    const { form, loading, handleSendMessage } = useContact()

    return (
        <form className={`grid justify-stretch items-center gap-6 max-laptop:gap-5 max-tablet:gap-4 max-mobile:gap-3 max-small:gap-2.5 max-laptop:order-1`} onSubmit={handleSendMessage} ref={form}>
            <div className="grid justify-stretch items-center grid-cols-2 gap-6 max-laptop:gap-5 max-tablet:gap-4 max-mobile:gap-3 max-small:gap-2.5 max-mobile:grid-cols-1">
                <Input type={"text"} placeholder="Name" id="name" name="name" required />
                <Input type={"email"} placeholder="Email" id="email" name="email" required />
            </div>
            <Input type={"text"} placeholder="Subject" id="subject" name="subject" required />
            <Textarea placeholder="Message" rows={4} id="message" name="message" required />
            <PrimaryButton loading={loading} type={"submit"} className="w-fit max-mobile:w-full">
                Send Message
            </PrimaryButton>
        </form>
    )
}

export default ContactForm
