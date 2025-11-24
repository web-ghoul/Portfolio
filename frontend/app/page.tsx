import AboutSection from "@/src/sections/AboutSection/AboutSection";
import ContactSection from "@/src/sections/ContactSection/ContactSection";
import HeroSection from "@/src/sections/HeroSection/HeroSection";
import ProjectsSection from "@/src/sections/ProjectsSection/ProjectsSection";
import QuoteSection from "@/src/sections/QuoteSection/QuoteSection";
import SkillsSection from "@/src/sections/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main className="grid justify-stretch items-center">
      <HeroSection />
      <QuoteSection />
      <ProjectsSection title={"projects"} projects={[]} linked />
      <SkillsSection variant="fancy" />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
