import ProjectCard from "../components/ProjectCard"
import { useState } from "react";

function Projects(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        <ProjectCard
            projectImg={"food-bites-desktop.png"} 
            imgAlt={"Foodbites Landing Page"} 
            projectTitle={"FoodBites Landing Page"}
            projectDescription={"I developed my own project: a fully responsive and visually engaging landing page for a food delivery business. "}
            href={"https://foodbites-project.netlify.app"}
        >
            <li>Frontend Developer</li>
            <li>Designer</li>
        </ProjectCard>,
        <ProjectCard
            projectImg={"exact-system-1.png"} 
            imgAlt={"Exact Registrar System"} 
            projectTitle={"Exact Registrar System"}
            projectDescription={"A comprehensive registrar management system designed to streamline the organization and handling of school records, ensuring efficiency and accuracy."}
        >
            <li>Project Manager</li>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>Designer</li>
        </ProjectCard>,
        <ProjectCard
            projectImg={"landing-page-1.png"} 
            imgAlt={"Exact Landing Page"} 
            projectTitle={"Exact Landing Page"}
            projectDescription={"I designed and developed a professional landing page for the Exact Colleges of Asia, showcasing the school, its programs, and its dedication to academic excellence."}
        >
            <li>Project Manager</li>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>Designer</li>
        </ProjectCard>,
        <ProjectCard
            projectImg={"library-management-1.png"} 
            imgAlt={"Library Management System"} 
            projectTitle={"Library Management System"}
            projectDescription={"A system designed to efficiently organize and manage book collections, streamlining cataloging, tracking, and borrowing processes."}
        >
            <li>Project Manager</li>
            <li>Frontend Developer</li>
            <li>Designer</li>
        </ProjectCard>,
        // ... other ProjectCard components ...
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="bg-secondary row-start-2 py-5 h-screen flex flex-col items-center relative gap-4" id="Projects">
            <h2 className="text-primary font-bold text-4xl text-center">PROJECTS</h2>
            <button
                id="prev"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-neutral p-2 rounded-full z-10"
            >
                &#8249;
            </button>
            <ul className="grow flex justify-center w-4/5 overflow-hidden">
                <div className="flex transition-transform duration-500 h-screen tablet:w-3/4 laptop:w-2/4" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full tablet:h-3/4 laptop:h-full">
                        {card}
                    </div>
                    ))}
                </div>
            </ul>
            <button
                id="next"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-neutral p-2 rounded-full z-10"
            >
                &#8250;
            </button>
        </section>
    );
}

export default Projects