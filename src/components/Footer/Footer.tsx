import FacebookIcon from "@/src/icons/FacebookIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"
import data from "../../data/links.json"
import Logo from "../Logo/Logo"
import Media from "../Media/Media"

const Footer = () => {
    return (
        <footer className={`border-t border-primary_border contain grid justify-stretch items-center gap-20 max-desktop:gap-18 max-laptop:gap-16 max-tablet:gap-14 max-mobile:gap-12 max-small:gap-10`}>
            <div className="flex justify-between items-start gap-6 flex-wrap max-laptop:gap-5 max-mobile:gap-4">
                <div className="grid justify-stretch items-center gap-4 max-laptop:gap-3 max-mobile:gap-2">
                    <div className="flex flex-wrap justify-start items-center gap-4 max-laptop:gap-3.5 max-tablet:gap-3 max-mobile:gap-2.5 max-small:gap-2">
                        <Logo />
                        <a className="text-gray-500 dark:text-gray-400 transition-all hover:text-primary" href={data.mail} target="_blank">
                            <h6>mahmoudaboraya2021@gmail.com</h6>
                        </a>
                    </div>
                    <p>MERN-Stack Developer</p>
                </div>

                <div className="grid justify-stretch items-center gap-4 max-mobile:m-auto">
                    <h6 className="font-bold">Social Media</h6>
                    <div className="flex flex-wrap justify-start items-center gap-3 max-mobile:justify-center">
                        <Media link={data.whatsapp}>
                            <WhatsAppIcon className="w-5 h-auto max-laptop:w-4 max-mobile:w-3.5 max-small:w-3" />
                        </Media>
                        <Media link={data.facebook}>
                            <FacebookIcon className="w-5 h-auto max-laptop:w-4 max-mobile:w-3.5 max-small:w-3" />
                        </Media>
                        <Media link={data.linkedin}>
                            <LinkedinIcon className="w-5 h-auto max-laptop:w-4 max-mobile:w-3.5 max-small:w-3" />
                        </Media>
                    </div>
                </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-center">© Copyright {new Date().getFullYear()}. Made by webGhoul.</p>
        </footer>
    )
}

export default Footer
