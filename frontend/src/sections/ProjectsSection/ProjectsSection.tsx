import ProjectCard from "@/src/components/ProjectCard/ProjectCard";
import Title from "@/src/components/Title/Title";
import { ProjectTypes } from "@/src/types/app";

const ProjectsSection = ({ title, linked, projects }: { title: string; linked?: boolean; projects: ProjectTypes[] }) => {
    return (
        <section className={`contain grid justify-stretch items-center gap-10 max-desktop:gap-8 max-tablet:gap-6 max-mobile:gap-5 max-small:gap-4 overflow-hidden`}>
            <Title title={title} view={linked ? "/works" : undefined} />
            <div className={`grid justify-stretch items-start grid-cols-3 gap-8 max-desktop:gap-6 max-laptop:gap-5 max-mobile:gap-4 max-small:gap-3 max-laptop:grid-cols-2 max-mobile:grid-cols-1`}>
                {
                    projects.map((project, i) => <ProjectCard project={project} key={i} />)
                }
            </div>
        </section>
    )
}

export default ProjectsSection
