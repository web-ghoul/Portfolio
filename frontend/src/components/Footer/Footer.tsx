import FacebookIcon from "@/src/icons/FacebookIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"
import data from "../../data/links.json"
import Logo from "../Logo/Logo"
import Media from "../Media/Media"

const Footer = () => {
    return (
        <footer className={`border-t border-primary_border contain grid justify-stretch items-center gap-20`}>
            <div className="flex justify-between items-start gap-6">
                <div className="grid justify-stretch items-center gap-4">
                    <div className="flex justify-start items-center gap-4">
                        <Logo />
                        <a className="text-gray-400 transition-all hover:text-primary" href={""} target="_blank">
                            <h6>mahmoudaboraya2021@gmail.com</h6>
                        </a>
                    </div>
                    <p>MERN-Stack Developer</p>
                </div>

                <div className="grid justify-stretch items-center gap-4">
                    <h6 className="font-bold">Social Media</h6>
                    <div className="flex flex-wrap justify-start items-center gap-3">
                        <Media link={data.whatsapp}>
                            <WhatsAppIcon className="w-5 h-auto" />
                        </Media>
                        <Media link={data.facebook}>
                            <FacebookIcon className="w-5 h-auto" />
                        </Media>
                        <Media link={data.linkedin}>
                            <LinkedinIcon className="w-5 h-auto" />
                        </Media>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 text-center">© Copyright {new Date().getFullYear()}. Made by webGhoul.</p>
        </footer>
    )
}

export default Footer
