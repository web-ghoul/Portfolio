import ProjectCard from "@/src/components/ProjectCard/ProjectCard"
import Title from "@/src/components/Title/Title"

const ProjectsSection = () => {
    return (
        <section className={`contain grid justify-stretch items-center gap-10`}>
            <Title title={"Projects"} view="/works" />
            <div className={`grid justify-stretch items-center grid-cols-3 gap-8`}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default ProjectsSection
