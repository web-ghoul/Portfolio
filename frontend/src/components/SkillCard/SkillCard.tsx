
const SkillCard = ({ title }: { title: string }) => {
    return (
        <article className="border border-primary_border">
            <div className="border-b border-primary_border text-whtie p-3">
                <h5>{title}</h5>
            </div>
            <div className="flex flex-wrap justify-stretch items-center gap-2 text-gray-400 p-3">
                <h6>TypeScript</h6>
                <h6>Python</h6>
                <h6>JavaScript</h6>
                <h6>C++</h6>
                <h6>Java</h6>
                <h6>C#</h6>
                <h6>Rust</h6>
            </div>
        </article>
    )
}

export default SkillCard
