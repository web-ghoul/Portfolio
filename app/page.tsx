import AboutSection from "@/src/sections/AboutSection/AboutSection";
import ContactSection from "@/src/sections/ContactSection/ContactSection";
import HeroSection from "@/src/sections/HeroSection/HeroSection";
import ProjectsSection from "@/src/sections/ProjectsSection/ProjectsSection";
import QuoteSection from "@/src/sections/QuoteSection/QuoteSection";
import SkillsSection from "@/src/sections/SkillsSection/SkillsSection";
import projects from "../src/data/projects.json";

export default function Home() {
  const pro = projects.filter(project => project.visible).slice(0, 3)

  return (
    <main className="grid justify-stretch items-center">
      <HeroSection />
      <QuoteSection />
      <ProjectsSection title={"projects"} projects={pro} linked />
      <SkillsSection variant="fancy" />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
