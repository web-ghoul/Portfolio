import FacebookIcon from "@/src/icons/FacebookIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import MessageIcon from "@/src/icons/MessageIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"
import data from "../../data/links.json"
import Media from "../Media/Media"

const MessageMe = () => {
    return (
        <div className="border border-primary_border p-3 grid justify-stretch items-center gap-4 max-laptop:order-1">
            <h6 className="text-white">Message me here</h6>
            <div className="grid justify-stretch items-center gap-3 text-gray-400">
                <Media link={data.whatsapp}>
                    -
                    <WhatsAppIcon className="w-5 h-auto" />
                    <p>+20-1094851646</p>
                </Media>
                <Media link={data.facebook}>
                    -
                    <FacebookIcon className="w-5 h-auto" />
                    <p>mahmoud salama</p>
                </Media>
                <Media link={data.linkedin}>
                    -
                    <LinkedinIcon className="w-5 h-auto" />
                    <p>eng. mahmoud salama</p>
                </Media>
                <Media link={data.mail}>
                    -
                    <MessageIcon className="w-5 h-auto" />
                    <p>mahmoudaboraya2021@gmail.com</p>
                </Media>
            </div>
        </div>
    )
}

export default MessageMe
