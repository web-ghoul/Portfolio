import { motion } from "framer-motion";
import Image from "next/image";
import { GlareCard } from "../ui/glare-card";

const SkillCard = () => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="flex items-center justify-center"
    >
      <GlareCard className="flex flex-col items-center justify-center">
        <Image
          alt={""}
          height={100}
          width={100}
          src={"/images/react.png"}
          className={"w-[100px] h-[100px] rounded-full"}
        />
      </GlareCard>
    </motion.div>
  );
};
export default SkillCard;
