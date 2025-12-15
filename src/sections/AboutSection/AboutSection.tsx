"use client"
import Title from "@/src/components/Title/Title"
import DotsIcon from "@/src/icons/DotsIcon"
import SquareIcon from "@/src/icons/SquareIcon"
import { motion } from "motion/react"
import Image from "next/image"
import about from "../../assets/images/about.png"

import data from "../../data/about.json"

const AboutSection = ({ noTitle }: { noTitle?: boolean }) => {
    return (
        <section className="contain grid justify-stretch items-center grid-cols-2 gap-10 relative max-laptop:gap-8 max-tablet:gap-7 max-mobile:gap-6 max-small:gap-5 max-laptop:grid-cols-1">
            <SquareIcon className="w-30 h-auto absolute top-[50%] translate-y-[-50%] -left-10 text-gray-400 max-laptop:w-28 max-mobile:w-22 max-small:w-20 max-small:-left-12" />
            <div className="grid justify-stretch items-center gap-8 max-desktop:gap-6 max-tablet:gap-5 max-mobile:gap-4 max-small:gap-3 text-gray-400">
                {!noTitle && <Title title={"about-me"} />}
                {
                    data.map((paragraph, i) => (
                        <motion.p key={i} viewport={{ once: false }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{paragraph}</motion.p>
                    ))
                }
            </div>
            <div className="grid justify-end items-center w-full max-laptop:justify-center">
                <div className="w-3/4 h-auto ml-auto relative max-laptop:w-1/2 max-laptop:m-auto">
                    <DotsIcon className={`absolute left-0 bottom-[10%] w-[120px] h-auto text-gray-400 max-desktop:w-[100px] max-laptop:w-20 max-mobile:w-[60px] max-small:w-10`} />
                    <Image src={about} className="w-full h-auto border-b border-primary" alt={"about"} />
                    <DotsIcon className={`absolute right-0 top-[10%] w-[120px] h-auto text-gray-400 max-desktop:w-[100px] max-laptop:w-20 max-mobile:w-[60px] max-small:w-10`} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection
