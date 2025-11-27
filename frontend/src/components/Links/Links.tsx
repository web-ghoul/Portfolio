import FacebookIcon from "@/src/icons/FacebookIcon"
import GithubIcon from "@/src/icons/GithubIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"
import data from "../../data/links.json"
import Media from "../Media/Media"

const Links = () => {
    return (
        <div className={`fixed left-10 top-0 px-1 grid justify-center items-center bg-background z-1000 max-laptop:left-8 max-tablet:left-7 max-mobile:left-5 max-small:left-3`}>
            <div className="h-[20vh] border border-primary_border m-auto w-0" />
            <div className="grid justify-center items-center gap-2">
                <Media link={data.whatsapp}>
                    <WhatsAppIcon className="w-6 h-auto pt-4 max-laptop:pt-3 max-mobile:pt-2 max-laptop:w-5 max-mobile:w-4 max-small:w-3" />
                </Media>
                <Media link={data.facebook}>
                    <FacebookIcon className="w-6 h-auto pt-4 max-laptop:pt-3 max-mobile:pt-2 max-laptop:w-5 max-mobile:w-4 max-small:w-3" />
                </Media>
                <Media link={data.github}>
                    <GithubIcon className="w-6 h-auto pt-4 max-laptop:pt-3 max-mobile:pt-2 max-laptop:w-5 max-mobile:w-4 max-small:w-3" />
                </Media>
                <Media link={data.linkedin}>
                    <LinkedinIcon className="w-6 h-auto pt-4 max-laptop:pt-3 max-mobile:pt-2 max-laptop:w-5 max-mobile:w-4 max-small:w-3" />
                </Media>
            </div>
        </div>
    )
}

export default Links
