import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ParallaxSection from "@/sections/ParallaxSection";
import ServicesSection from "@/sections/ServicesSection";
import SkillsSection from "@/sections/SkillsSection";
import TestimonialSection from "@/sections/TestimonialSection";
import { VelocityText } from "@/sections/VelocityTextSection";
import ViewProjectsSection from "@/sections/ViewProjectSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VelocityText />
      <ServicesSection />
      <ParallaxSection />
      <ViewProjectsSection />
      <SkillsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
