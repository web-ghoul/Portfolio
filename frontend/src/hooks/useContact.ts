import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

const useContact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false)

    const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.current) return;
        setLoading(true)
        await emailjs
            .sendForm(
                "service_nqve4wi",
                "template_irbr19d",
                form.current,
                "1nJjrbK2pv9PhyreL"
            )
            .then(
                (result) => {
                    setLoading(false)
                    form.current?.reset()
                    console.log(result.text);
                },
                (error) => {
                    setLoading(false)
                    console.log(error.text);
                }
            );
        setLoading(false)
    }

    return { form, loading, handleSendMessage }
}

export default useContact
