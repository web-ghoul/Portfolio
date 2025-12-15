'use client'
import { motion } from "motion/react";
import { Fragment } from "react/jsx-runtime";

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
    return (
        <motion.article viewport={{ once: false }} initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="border border-primary_border">
            <div className="border-b border-primary_border text-foreground p-3 max-laptop:p-2.5 max-tablet:p-2 max-mobile:p-1.5 max-small:p-1">
                <p className="font-medium!">{title}</p>
            </div>
            <div className="flex flex-wrap justify-stretch items-center gap-2 text-gray-500 dark:text-gray-400 p-3 max-laptop:p-2.5 max-tablet:p-2 max-mobile:p-1.5 max-small:p-1 max-laptop:gap-1.5 max-mobile:gap-1">
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
        </motion.article>
    )
}

export default SkillCard
