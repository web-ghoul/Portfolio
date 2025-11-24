import FacebookIcon from "@/src/icons/FacebookIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import MessageIcon from "@/src/icons/MessageIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"

const MessageMe = () => {
    return (
        <div className="border border-primary_border p-3 grid justify-stretch items-center gap-4">
            <h6 className="text-white">Message me here</h6>
            <div className="grid justify-stretch items-center gap-3 text-gray-400">
                <a className="flex flex-wrap justify-start items-center gap-3 transition-all hover:text-primary hover:cursor-pointer">
                    -
                    <WhatsAppIcon className="w-5 h-auto" />
                    <p>+20-1094851646</p>
                </a>
                <a className="flex flex-wrap justify-start items-center gap-3 transition-all hover:text-primary hover:cursor-pointer">
                    -
                    <FacebookIcon className="w-5 h-auto" />
                    <p>mahmoud salama</p>
                </a>
                <a className="flex flex-wrap justify-start items-center gap-3 transition-all hover:text-primary hover:cursor-pointer">
                    -
                    <LinkedinIcon className="w-5 h-auto" />
                    <p>eng. mahmoud salama</p>
                </a>
                <a className="flex flex-wrap justify-start items-center gap-3 transition-all hover:text-primary hover:cursor-pointer">
                    -
                    <MessageIcon className="w-5 h-auto" />
                    <p>mahmoudaboraya2021@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default MessageMe
