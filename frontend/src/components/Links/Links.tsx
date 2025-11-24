import FacebookIcon from "@/src/icons/FacebookIcon"
import GithubIcon from "@/src/icons/GithubIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"

const Links = () => {
    return (
        <div className={`fixed left-10 top-0 px-1 grid justify-center items-center bg-background z-1000`}>
            <div className="h-[20vh] border border-primary_border m-auto w-0" />
            <div className="grid justify-center items-center gap-2">
                <a href="" target="_blank">
                    <WhatsAppIcon className="w-6 h-auto pt-4 transition-all hover:text-primary hover:scale-95" />
                </a>
                <a href="" target="_blank">
                    <FacebookIcon className="w-6 h-auto pt-4 transition-all hover:text-primary hover:scale-95" />
                </a>
                <a href="" target="_blank">
                    <GithubIcon className="w-6 h-auto pt-4 transition-all hover:text-primary hover:scale-95" />
                </a>
                <a href="" target="_blank">
                    <LinkedinIcon className="w-6 h-auto pt-4 transition-all hover:text-primary hover:scale-95" />
                </a>
            </div>
        </div>
    )
}

export default Links
