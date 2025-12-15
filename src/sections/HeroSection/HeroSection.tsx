'use client'
import PrimaryButton from "@/src/components/Buttons/PrimaryButton"
import WebGhoulCard from "@/src/components/webGhoulCard/WebGhoulCard"
import DotsIcon from "@/src/icons/DotsIcon"
import { TypeAnimation } from "react-type-animation"

import data from "../../data/hero.json"

const HeroSection = () => {
    return (
        <section className="contain hero grid justify-stretch items-center gap-10 grid-cols-2 max-laptop:grid-cols-[1fr_auto] relative max-laptop:gap-8 max-tablet:gap-7 max-mobile:gap-0 max-mobile:grid-cols-1 max-mobile:grid-rows-[auto_1fr]">
            <DotsIcon className="absolute top-[50%] translate-y-[-50%] left-0 w-[100px] h-auto z-10 text-gray-400 max-desktop:w-[85px] max-laptop:w-[70px] max-tablet:w-[60px] max-mobile:w-[50px]" />
            <div className="grid justify-stretch items-center gap-8 max-laptop:gap-6 max-tablet:gap-5 max-mobile:gap-4 max-mobile:text-center max-mobile:order-1 max-mobile:items-start max-small:gap-3">
                <h1 className="font-bold [&_span]:text-primary!">
                    {data.title_prefix} <br className="max-mobile:hidden" /> <TypeAnimation
                        sequence={data.typing_sequence}
                        wrapper="span"
                        speed={40}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>

                <p className="text-gray-400">{data.description}</p>
                <PrimaryButton link={data.button_link} className="w-fit max-mobile:m-auto">
                    {data.button_text}
                </PrimaryButton>
            </div>

            {/* <div className="relative grid justify-end items-center content-center h-full max-mobile:m-auto">
                <Image
                    src={hero}
                    alt={"hero"}
                    className="relative w-[25vw] h-auto max-desktop:w-[21vw] max-laptop:w-[30vw] max-laptop:m-auto max-tablet:w-[25vw] max-mobile:w-[30vw] max-small:w-[32vw]"
                />
                <div className="border border-primary_border p-2 flex justify-start items-center gap-4 z-2 bg-background max-laptop:gap-3 max-mobile:gap-2 max-laptop:p-1.5 max-mobile:p-1">
                    <div className="h-6 w-6 bg-primary max-desktop:h-5 max-desktop:w-5 max-tablet:w-4 max-tablet:h-4"></div>
                    <h6 className="text-gray-400">Currently working on <span className="text-white">Portfolio</span></h6>
                </div>
                <DotsIcon className="absolute top-[10%] right-0 w-[150px] h-auto z-1 text-gray-400 max-desktop:w-[125px] max-laptop:w-[100px] max-tablet:w-20 max-mobile:w-18 max-small:w-16 max-tablet:top-[25%]" />
            </div> */}
            <WebGhoulCard />
        </section>
    )
}

export default HeroSection
