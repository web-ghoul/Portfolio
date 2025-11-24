import project from "../../assets/project.svg"
import PrimaryButton from "../Buttons/PrimaryButton"

const ProjectCard = () => {
    return (
        <article className={`grid justify-stretch items-center border border-primary_border`}>
            <div className="h-[300px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${project.src})` }}></div>
            <div className="flex justify-start items-center flex-wrap gap-2 px-4 py-2 border-y border-primary_border text-gray-400">
                <h6>HTML</h6>
                -
                <h6>SCSS</h6>
                -
                <h6>Python</h6>
                -
                <h6>Flask</h6>
                -
                <h6>CSS</h6>
                -
                <h6>Express</h6>
                -
                <h6>Node.js</h6>
            </div>
            <div className="grid justify-stretch items-center gap-4 px-4 py-6">
                <h3 className="text-white font-medium">Kahoot Answers Viewer</h3>
                <p className="text-gray-400">Get answers to your kahoot quiz</p>
                <div className="flex flex-wrap justify-start items-center gap-3">
                    <PrimaryButton>
                        {"Live <~>"}
                    </PrimaryButton>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
