import Title from "@/src/components/Title/Title"
import SquareIcon from "@/src/icons/SquareIcon"
import Image from "next/image"
import about from "../../assets/images/about.png"

const AboutSection = () => {
    return (
        <section className="contain grid justify-stretch items-center gap-10 relative">
            <SquareIcon className="w-30 h-auto absolute top-[50%] translate-y-[-50%] -left-10" />
            <Title title={"about-me"} />
            <div className="grid justify-stretch items-center gap-10 grid-cols-2">
                <div className="grid justify-stretch items-center gap-8 text-gray-400">
                    <p>Hello, i&apos;m Mahmoud Salama!</p>
                    <p>I’m a passionate full-stack developer based in Egypt with strong experience in building modern, scalable, and user-friendly web applications. I enjoy turning ideas into functional digital products using technologies like React, Next.js, Node.js, ExpressJS and NestJS</p>
                    <p>Over the years, I’ve worked on a variety of projects—from e-commerce platforms to AI-powered applications—always focusing on clean code, performance, and great user experience. I’m constantly learning new tools and frameworks to improve my craft and stay ahead in the ever-evolving world of software development.</p>
                </div>
                <div className="grid justify-center items-center">
                    <Image src={about} className="w-1/2 h-auto" alt={"about"} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection
