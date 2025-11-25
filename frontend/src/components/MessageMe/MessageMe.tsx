import FacebookIcon from "@/src/icons/FacebookIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import MessageIcon from "@/src/icons/MessageIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"
import Media from "../Media/Media"

const MessageMe = () => {
    return (
        <div className="border border-primary_border p-3 grid justify-stretch items-center gap-4">
            <h6 className="text-white">Message me here</h6>
            <div className="grid justify-stretch items-center gap-3 text-gray-400">
                <Media link="">
                    -
                    <WhatsAppIcon className="w-5 h-auto" />
                    <p>+20-1094851646</p>
                </Media>
                <Media link="">
                    -
                    <FacebookIcon className="w-5 h-auto" />
                    <p>mahmoud salama</p>
                </Media>
                <Media link="">
                    -
                    <LinkedinIcon className="w-5 h-auto" />
                    <p>eng. mahmoud salama</p>
                </Media>
                <Media link="">
                    -
                    <MessageIcon className="w-5 h-auto" />
                    <p>mahmoudaboraya2021@gmail.com</p>
                </Media>
            </div>
        </div>
    )
}

export default MessageMe
