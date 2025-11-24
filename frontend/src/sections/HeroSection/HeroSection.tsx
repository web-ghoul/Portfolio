import PrimaryButton from "@/src/components/Buttons/PrimaryButton"
import DotsIcon from "@/src/icons/DotsIcon"
import Image from "next/image"
import hero from "../../assets/images/hero.png"

const HeroSection = () => {
    return (
        <section className="contain hero grid justify-stretch items-center gap-10 grid-cols-2 relative">
            <DotsIcon className="absolute top-[50%] translate-y-[-50%] left-0 w-[100px] h-auto z-10" />
            <div className="grid justify-stretch items-center gap-8">
                <h1 className="font-bold [&_span]:text-primary">
                    Mahmoud Salama is a <span>web developer</span> and <span>software engineer</span>
                </h1>
                <p className="text-gray-400">He crafts responsive websites where technologies meet creativity</p>
                <PrimaryButton link={"/contact"} className="w-fit">
                    Contact me!!
                </PrimaryButton>
            </div>

            <div className="relative grid justify-center items-center">
                <Image src={hero} alt={"hero"} className="w-[500px] h-auto" />
                <div className="border border-primary_border p-2 flex justify-start items-center gap-4">
                    <div className="h-6 w-6 bg-primary"></div>
                    <h6 className="text-gray-400">Currently working on <span className="text-white">Portfolio</span></h6>
                </div>
                <DotsIcon className="absolute top-[10%] right-0 w-[150px] h-auto z-1" />
            </div>
        </section>
    )
}

export default HeroSection
