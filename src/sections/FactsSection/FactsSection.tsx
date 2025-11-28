import FactCard from "@/src/components/FactCard/FactCard"
import Title from "@/src/components/Title/Title"
import DotsIcon from "@/src/icons/DotsIcon"
import SquareIcon from "@/src/icons/SquareIcon"

const FactsSection = () => {
    return (
        <section className="contain grid justify-stretch items-center gap-10 relative max-laptop:gap-8 max-tablet:gap-7 max-mobile:gap-6 max-small:gap-5">
            <SquareIcon className="w-30 h-auto absolute top-[50%] translate-y-[-50%] -left-10 text-gray-400 max-laptop:w-28 max-mobile:w-22 max-small:w-18 -z-1" />
            <Title title={"my-fun-facts"} noLine />
            <div className="grid justify-stretch items-center gap-8 max-desktop:gap-6 max-tablet:gap-5 max-mobile:gap-4 max-small:gap-3 grid-cols-[75%_1fr] max-laptop:grid-cols-1">
                <div className="flex flex-wrap justify-stretch items-center gap-6 max-laptop:gap-5 max-tablet:gap-4 max-small:gap-3 w-full">
                    <FactCard>
                        I like <span>winter</span> more than summer
                    </FactCard>
                    <FactCard>
                        I often play <span>football</span> with my friends
                    </FactCard>
                    <FactCard>
                        I like <span>pizza</span> and <span>pasta</span>
                    </FactCard>
                    <FactCard>
                        I like play <span>ping pong</span>
                    </FactCard>
                    <FactCard>
                        My favorite movie is <span>Pursuit of Happiness</span>
                    </FactCard>
                    <FactCard>
                        I stay <span>curious</span>
                    </FactCard>
                    <FactCard>
                        I believe in <span>helping</span> people around me
                    </FactCard>
                    <FactCard>
                        I like turning <span>ideas</span> into <span>real</span> things
                    </FactCard>
                </div>
            </div>
            <DotsIcon className="w-30 h-auto absolute top-[20%] translate-y-[-50%] right-0 text-gray-400 max-laptop:w-28 max-mobile:w-22 max-small:w-18 -z-1" />
        </section>
    )
}

export default FactsSection
