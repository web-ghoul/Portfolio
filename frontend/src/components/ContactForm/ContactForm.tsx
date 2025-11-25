"use client"
import useContact from "@/src/hooks/useContact"
import { useState } from "react"
import PrimaryButton from "../Buttons/PrimaryButton"
import Input from "./Input"
import Textarea from "./Textarea"

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const { form, loading, handleSendMessage } = useContact()

    return (
        <form className={`grid justify-stretch items-center gap-6`} onSubmit={handleSendMessage} ref={form}>
            <div className="grid justify-stretch items-center grid-cols-2 gap-6">
                <Input type={"text"} placeholder="Name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                <Input type={"email"} placeholder="Email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <Input type={"text"} placeholder="Subject" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <Textarea placeholder="Message" rows={4} id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <PrimaryButton loading={loading} type={"submit"} className="w-fit">
                Send Message
            </PrimaryButton>
        </form>
    )
}

export default ContactForm
