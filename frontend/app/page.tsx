import { TracingBeam } from '@/components/ui/tracing-beam';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';
import HeroSection from '@/sections/HeroSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ServicesSection from '@/sections/ServicesSection';
import TestimonialSection from '@/sections/TestimonialSection';
import { VelocityText } from '@/sections/VelocityTextSection';
export default function Home() {
  return (
    <TracingBeam>
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <VelocityText
        text={"Hello, it's me webGhoul, I'am MERN Stack Developer"}
      />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </TracingBeam>
  );
}
