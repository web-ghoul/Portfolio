import Title from "@/src/components/Title/Title";
import ProjectsSection from "@/src/sections/ProjectsSection/ProjectsSection";
import data from "../../src/data/projects.json";

export default function Works() {
  return (
    <main className="grid justify-stretch items-center">
      <Title title={"projects"} subTitle="List of my projects" slash noLine className="title_contain" />
      <ProjectsSection title={"complete-apps"} projects={data.filter((pro) => (pro.scale !== "Small" && pro.scale !== "Landing") && pro.visible)} />
      <ProjectsSection title={"websites"} projects={data.filter((pro) => pro.scale === "Landing" && pro.visible)} />
      <ProjectsSection title={"small-projects"} projects={data.filter((pro) => pro.scale === "Small" && pro.visible)} />
    </main>
  );
}
