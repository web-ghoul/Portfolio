"use client"
import useContact from "@/src/hooks/useContact"
import PrimaryButton from "../Buttons/PrimaryButton"
import Input from "./Input"
import Textarea from "./Textarea"

const ContactForm = () => {
    const { form, loading, handleSendMessage } = useContact()

    return (
        <form className={`grid justify-stretch items-center gap-6`} onSubmit={handleSendMessage} ref={form}>
            <div className="grid justify-stretch items-center grid-cols-2 gap-6">
                <Input type={"text"} placeholder="Name" id="name" name="name" required />
                <Input type={"email"} placeholder="Email" id="email" name="email" required />
            </div>
            <Input type={"text"} placeholder="Subject" id="subject" name="subject" required />
            <Textarea placeholder="Message" rows={4} id="message" name="message" required />
            <PrimaryButton loading={loading} type={"submit"} className="w-fit">
                Send Message
            </PrimaryButton>
        </form>
    )
}

export default ContactForm
