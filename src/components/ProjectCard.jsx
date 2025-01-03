function ProjectCard({projectImg, imgAlt, projectTitle, projectDescription, children: role, href, onClick}){
    return(
        <>
        <li className="rounded-3xl text-neutral bg-primary max-w-72 h-5/6 flex flex-col justify-between m-auto tablet:max-w-96 wide:h-3/5">
            <figure>
                <img src={projectImg} alt={imgAlt} className="rounded-t-3xl"/>
                <figcaption className="font-bold px-3 pt-3 text-2xl">{projectTitle}</figcaption>
                <p className="px-3 text-lg">{projectDescription}</p>
            </figure>
            <div className="px-3 pt-3">
                <h3 className="font-bold text-lg">Role</h3>
                <ul className="list-disc ms-6">
                    {role}
                </ul>
            </div>
            <div className="flex justify-end p-3">
                {href ? (
                    <a href={href} target="_blank">
                        <button className="bg-accent p-1 w-32 shadow-sm shadow-black rounded-md font-bold">VISIT</button>
                    </a>
                ) : (
                    <div className="flex gap-2">
                        <button onClick={onClick} className="bg-accent p-1 w-32 shadow-sm shadow-black rounded-md font-bold">GALLERY</button>
                    </div>
                )}
            </div>
        </li>
        </>
    )
}

export default ProjectCard