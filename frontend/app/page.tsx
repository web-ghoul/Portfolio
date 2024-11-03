import { TracingBeam } from '@/components/ui/tracing-beam';
import AboutSection from '@/sections/AboutSection';
import HeroSection from '@/sections/HeroSection';
import OurProjectsSection from '@/sections/OurProjectsSection';
import ProjectsSection from '@/sections/ProjectsSection';
export default function Home() {
  return (
    <TracingBeam>
      <HeroSection />
      <AboutSection />
      <OurProjectsSection />
      <ProjectsSection />
    </TracingBeam>
  );
}
