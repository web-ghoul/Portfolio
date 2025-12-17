import FactCard from "@/src/components/FactCard/FactCard"
import Title from "@/src/components/Title/Title"
import DotsIcon from "@/src/icons/DotsIcon"
import SquareIcon from "@/src/icons/SquareIcon"

import data from "../../data/facts.json"

const FactsSection = () => {
    return (
        <section className="contain grid justify-stretch items-center gap-10 relative max-laptop:gap-8 max-tablet:gap-7 max-mobile:gap-6 max-small:gap-5">
            <SquareIcon className="w-30 h-auto absolute top-[50%] translate-y-[-50%] -left-10 text-gray-400 max-laptop:w-28 max-mobile:w-22 max-small:w-18 -z-1" />
            <Title title={"my-fun-facts"} noLine />
            <div className="grid justify-stretch items-center gap-8 max-desktop:gap-6 max-tablet:gap-5 max-mobile:gap-4 max-small:gap-3 grid-cols-[75%_1fr] max-laptop:grid-cols-1">
                <div className="flex flex-wrap justify-stretch items-center gap-6 max-laptop:gap-5 max-tablet:gap-4 max-small:gap-3 w-full">
                    {
                        data.map((fact, i) => (
                            <FactCard key={i}>
                                {fact.prefix} {fact.highlight && <span>{fact.highlight}</span>} {fact.mid && fact.mid} {fact.highlight2 && <span>{fact.highlight2}</span>} {fact.suffix && fact.suffix}
                            </FactCard>
                        ))
                    }
                </div>
            </div>
            <DotsIcon className="w-30 h-auto absolute top-[20%] translate-y-[-50%] right-0 text-gray-400 max-laptop:w-28 max-mobile:w-22 max-small:w-18 -z-1" />
        </section>
    )
}

export default FactsSection
