'use client'
import FacebookIcon from "@/src/icons/FacebookIcon"
import GithubIcon from "@/src/icons/GithubIcon"
import LinkedinIcon from "@/src/icons/LinkedinIcon"
import WhatsAppIcon from "@/src/icons/WhatsAppIcon"
import { motion } from "motion/react"
import data from "../../data/links.json"
import Media from "../Media/Media"

const Links = () => {
    return (
        <motion.div viewport={{ once: false }} initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed right-10 top-0 px-1 pb-1 rounded-sm grid justify-center items-center bg-background z-1000 max-laptop:right-8 max-tablet:right-7 max-mobile:right-5 max-small:right-4 w-fit`}>
            <div className="min-h-[20vh] border border-primary_border m-auto w-0" />
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
        </motion.div>
    )
}

export default Links
