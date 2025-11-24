import SkillCard from "@/src/components/SkillCard/SkillCard"

const SkillsSection = () => {
    return (
        <section className={`contain grid justify-between items-center gap-6 grid-cols-4`}>
            <SkillCard title={"Languages"} />
            <SkillCard title={"Other"} />
            <SkillCard title={"Tools"} />
            <SkillCard title={"Databases"} />
            <SkillCard title={"Frameworks"} />
        </section>
    )
}

export default SkillsSection
