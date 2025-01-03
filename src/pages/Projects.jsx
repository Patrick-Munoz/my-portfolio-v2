import ProjectCard from "../components/ProjectCard"
import { useState, useEffect } from "react";
import ProjectDisplay from "../components/ProjectDisplay";

function Projects(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTablet, setIsTablet] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);
    const [isDisplayOpen, setIsDisplayOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsTablet(width >= 768);
            setIsLaptop(width >= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const projectGalleries = {
        exactLanding: {
            laptop: [
                "landing-page-1.png",
                "landing-page-2.png",
                "landing-page-3.png",
                "landing-page-4.png",
                "landing-page-5.png",
                "landing-page-6.png",
            ],
            mobile: [
                "mobile-landing-page-1.png",
                "mobile-landing-page-2.png",
                "mobile-landing-page-3.png",
                "mobile-landing-page-4.png",
                "mobile-landing-page-5.png",
            ]
        },
        exactSystem: {
            laptop: [
                "exact-system-1.png",
                "exact-system-2.png",
                "exact-system-3.png",
                "exact-system-4.png",
            ],
            mobile: [
                // Add exact system mobile screenshots here
            ]
        },
        librarySystem: {
            laptop: [
                "library-management-1.png",
                "library-management-2.png",
                "library-management-3.png",
                "library-management-4.png",
            ],
            mobile: [
                // Add library system mobile screenshots here
            ]
        }
    };

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
            onClick={() => {
                setSelectedProject("exactSystem");
                setIsDisplayOpen(true);
            }}
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
            onClick={() => {
                setSelectedProject("exactLanding");
                setIsDisplayOpen(true);
            }}
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
            onClick={() => {
                setSelectedProject("librarySystem");
                setIsDisplayOpen(true);
            }}
        >
            <li>Project Manager</li>
            <li>Frontend Developer</li>
            <li>Designer</li>
        </ProjectCard>,
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                if (isLaptop) return cards.length - 3;
                if (isTablet) return cards.length - 1;
                return cards.length - 1;
            }
            return prevIndex - 1;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            if (isLaptop && prevIndex === cards.length - 3) return 0;
            if (isTablet && prevIndex === cards.length - 1) return 0;
            if (prevIndex === cards.length - 1) return 0;
            return prevIndex + 1;
        });
    };

    return (
        <>
        <section className="bg-secondary row-start-2 py-5 h-screen flex flex-col items-center relative gap-4" id="Projects">
            <h2 className="text-primary font-bold text-4xl text-center">PROJECTS</h2>
            <button
                id="prev"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-neutral p-2 rounded-full z-10"
            >
                &#8249;
            </button>
            <ul className="grow flex justify-center w-4/5 overflow-hidden tablet:justify-normal">
                <div className="flex transition-transform duration-500 h-screen tablet:w-3/4 laptop:w-full" 
                     style={{ transform: `translateX(-${currentIndex * (isLaptop ? 33.33 : 100)}%)` }}
                >
                    {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full tablet:h-3/4 laptop:w-1/3 laptop:h-full">
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
        {isDisplayOpen && (
                <ProjectDisplay 
                    onClose={() => setIsDisplayOpen(false)}
                    project={selectedProject}
                    galleries={projectGalleries}
                />
        )}
        </>
    );
}

export default Projects