import ProjectCard from "@/src/components/ProjectCard/ProjectCard";
import Title from "@/src/components/Title/Title";
import { ProjectTypes } from "@/src/types/app";

const ProjectsSection = ({ title, linked, projects }: { title: string; linked?: boolean; projects: ProjectTypes[] }) => {
    return (
        <section className={`contain grid justify-stretch items-center gap-10`}>
            <Title title={title} view={linked ? "/works" : undefined} />
            <div className={`grid justify-stretch items-center grid-cols-3 gap-8`}>
                {
                    projects.map((project, i) => <ProjectCard project={project} key={i} />)
                }
            </div>
        </section>
    )
}

export default ProjectsSection
