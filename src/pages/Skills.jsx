import SkillCard from "../components/SkillsCard"

function Skills(){
    return(
        <>
        <section className="bg-secondary row-start-3 py-5 h-screen flex flex-col relative" id="Skills">
            <h2 className="text-primary font-bold text-4xl text-center">SKILLS</h2>
            <SkillCard/>
        </section>
        </>
    )
}

export default Skills