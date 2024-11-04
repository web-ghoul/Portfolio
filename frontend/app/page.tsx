import { TracingBeam } from '@/components/ui/tracing-beam';
import AboutSection from '@/sections/AboutSection';
import HeroSection from '@/sections/HeroSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ServicesSection from '@/sections/ServicesSection';
import { VelocityText } from '@/sections/VelocityTextSection';
export default function Home() {
  return (
    <TracingBeam>
      <HeroSection />
      <AboutSection />
      <VelocityText
        text={
          "I'm a dedicated MERN Stack Developer with a strong foundation in full-stack web development, specializing in MongoDB, Express.js"
        }
      />
      <ServicesSection />
      <ProjectsSection />
    </TracingBeam>
  );
}
