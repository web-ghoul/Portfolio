'use client'
import { motion } from "motion/react";
import { ReactNode } from 'react';

const Media = ({ link, children }: { link: string; children: ReactNode }) => {
    return (
        <motion.a viewport={{ once: false }} href={link} initial={{ scale: 0.9 }} animate={{ scale: 1 }} target="_blank" className="transition-all text-gray-500 dark:text-gray-400 hover:text-primary hover:scale-95 hover:cursor-pointer flex flex-wrap justify-start items-center gap-3 max-laptop:gap-2.5 max-mobile:gap-2 max-small:gap-1.5 max-tablet:hover:scale-97">
            {children}
        </motion.a>
    )
}

export default Media
