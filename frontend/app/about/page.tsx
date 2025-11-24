import Title from "@/src/components/Title/Title";
import AboutSection from "@/src/sections/AboutSection/AboutSection";
import FactsSection from "@/src/sections/FactsSection/FactsSection";
import SkillsSection from "@/src/sections/SkillsSection/SkillsSection";

export default function About() {
  return (
    <main className="grid justify-stretch items-center">
      <Title title={"about-me"} subTitle="Who am i?" noLine slash className="title_contain" />
      <AboutSection noTitle />
      <SkillsSection variant="basic" />
      <FactsSection />
    </main>
  );
}
