import { FormEvent } from "react";

const useContact = (values: { name: string; email: string; title: string; subject: string }) => {

    const handleSendMessage = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(values)
    }

    return { handleSendMessage }
}

export default useContact
