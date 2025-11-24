import Title from "@/src/components/Title/Title";
import ProjectsSection from "@/src/sections/ProjectsSection/ProjectsSection";

export default function Works() {
  return (
    <main className="grid justify-stretch items-center">
      <Title title={"projects"} subTitle="List of my projects" slash noLine className="title_contain" />
      <ProjectsSection title={"complete-apps"} projects={[]} />
      <ProjectsSection title={"small-projects"} projects={[]} />
    </main>
  );
}
