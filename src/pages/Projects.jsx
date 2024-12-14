import ProjectCard from "../components/ProjectCard"
import { useState } from "react";

function Projects(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        <ProjectCard
            projectImg={"food-bites-desktop.png"} 
            imgAlt={"Foodbites Landing Page"} 
            projectTitle={"FoodBites Landing Page"}
            projectDescription={"My own project, A landing page for a food delivery business."}
        >
            <li>Frontend Developer</li>
            <li>Designer</li>
        </ProjectCard>,
        <ProjectCard
            projectImg={"food-bites-desktop.png"} 
            imgAlt={"Foodbites Landing Page"} 
            projectTitle={"FoodBites Landing Page"}
            projectDescription={"My own project, A landing page for a food delivery business."}
        >
            <li>Frontend Developer</li>
            <li>Designer</li>
        </ProjectCard>,
        <ProjectCard
            projectImg={"food-bites-desktop.png"} 
            imgAlt={"Foodbites Landing Page"} 
            projectTitle={"FoodBites Landing Page"}
            projectDescription={"My own project, A landing page for a food delivery business."}
        >
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
                <div className="flex transition-transform duration-500 tablet:w-3/4 laptop:w-2/4" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
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