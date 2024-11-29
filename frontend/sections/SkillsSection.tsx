"use client";
import SkillCard from "@/components/SkillCard/SkillCard";
import Title from "@/components/Title/Title";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <section
      id="launch-schedule"
      className="text-white bg-black relative z-[2] grid justify-stretch items-center gap-12"
    >
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-4xl font-black uppercase text-zinc-50"
      >
        <Title text={"Skills"} />
      </motion.div>
      <div className="grid justify-stretch items-center gap-8 grid-cols-5">
        {Array.from({ length: 24 }).map((_, i) => (
          <SkillCard key={i} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
