"use client"
import { motion } from 'framer-motion';
import { Highlight } from '../ui/hero-highlight';

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={`text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-fit leading-relaxed lg:leading-snug text-center mx-auto ${className}`}
    >
      <Highlight className="text-black dark:text-white">{text}</Highlight>
    </motion.h1>
  );
};

export default Title;
