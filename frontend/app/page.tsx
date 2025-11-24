import AboutSection from "@/src/sections/AboutSection/AboutSection";
import HeroSection from "@/src/sections/HeroSection/HeroSection";
import ProjectsSection from "@/src/sections/ProjectsSection/ProjectsSection";
import QuoteSection from "@/src/sections/QuoteSection/QuoteSection";
import SkillsSection from "@/src/sections/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main className="grid justify-stretch items-center">
      <HeroSection />
      <QuoteSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </main>
  );
}
