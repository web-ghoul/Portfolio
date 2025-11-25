import { Fragment } from "react/jsx-runtime";

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
    return (
        <article className="border border-primary_border">
            <div className="border-b border-primary_border text-whtie p-3 max-laptop:p-2.5 max-tablet:p-2 max-mobile:p-1.5 max-small:p-1">
                <p className="font-medium!">{title}</p>
            </div>
            <div className="flex flex-wrap justify-stretch items-center gap-2 text-gray-400 p-3 max-laptop:p-2.5 max-tablet:p-2 max-mobile:p-1.5 max-small:p-1 max-laptop:gap-1.5 max-mobile:gap-1">
                {
                    skills.map((skill, i) => {
                        if (skills.length - 1 === i) {
                            return (
                                <Fragment key={i}>
                                    <p className="font-normal">{skill}</p>
                                </Fragment>
                            )
                        }
                        return (
                            <Fragment key={i}>
                                <p className="font-normal">{skill}</p>
                                -
                            </Fragment>
                        )
                    })
                }
            </div>
        </article>
    )
}

export default SkillCard
