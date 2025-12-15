'use client'
import { ProjectTypes } from "@/src/types/app"
import { motion } from "motion/react"
import { Fragment } from "react/jsx-runtime"
import PrimaryButton from "../Buttons/PrimaryButton"
import SecondaryButton from "../Buttons/SecondaryButton"

const ProjectCard = ({ project }: { project: ProjectTypes }) => {
    const { thumbnail, title, description, skills, live, github } = project

    return (
        <motion.article viewport={{ once: false }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className={`grid justify-stretch items-center border border-primary_border`}>
            {thumbnail && <div className="h-[300px] w-full bg-cover bg-center bg-no-repeat max-desktop:h-[250px] max-laptop:h-[225px] max-tablet:h-[200px] max-mobile:h-[175px] max-small:h-[150px] border-b border-primary_border" style={{ backgroundImage: `url(${thumbnail})` }}></div>}
            <div className="flex justify-start items-center flex-wrap gap-2 px-4 py-2 border-b border-primary_border text-gray-500 dark:text-gray-400 max-laptop:px-3 max-tablet:py-1.5 max-mobile:px-2 max-small:py-1 max-laptop:gap-1.5 max-mobile:gap-1">
                {
                    skills.map((skill, i) => {
                        if (skills.length - 1 === i) {
                            return <Fragment key={i}>
                                <h6>{skill}</h6>
                            </Fragment>
                        }
                        return <Fragment key={i}>
                            <h6>{skill}</h6>
                            -
                        </Fragment>
                    })
                }
            </div>
            <div className="grid justify-stretch items-center gap-4 px-4 py-6 max-desktop:py-5 max-laptop:px-3 max-tablet:py-4 max-mobile:px-2 max-laptop:gap-3.5 max-tablet:gap-3 max-mobile:gao-2.5 max-small:gap-2">
                <h3 className="text-foreground font-medium capitalize">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 capitalize">{description}</p>
                <div className="flex flex-wrap justify-start items-center gap-4 max-laptop:gap-3 max-mobile:gap-2">
                    {live && <a href={live} target="_blank">
                        <PrimaryButton >
                            {"Live <~>"}
                        </PrimaryButton>
                    </a>}
                    {github && <a href={github} target="_blank">
                        <SecondaryButton>
                            {"Github >="}
                        </SecondaryButton>
                    </a>}
                </div>
            </div>
        </motion.article>
    )
}

export default ProjectCard
