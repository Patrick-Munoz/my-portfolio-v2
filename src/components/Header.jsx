import { useEffect } from 'react';
import toggleNav from "../utils/Header"

function Header(){
    useEffect(() => {
        // Cleanup function to ensure scrolling is re-enabled when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return(
        <>
        <header className="flex justify-between mb-5 h-fit tablet:items-center">
            <a href="" className="flex items-center">
                <h1 className="text-neutral text-3xl font-bold desktop:text-6xl">PM</h1>
            </a>
            <button 
                className="text-3xl tablet:hidden"
                onClick={toggleNav}
                aria-label="Toggle navigation menu"
                aria-expanded="false"
            >
                &#9776;
            </button>
            <aside className="hidden backdrop fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleNav}></aside>
            <nav className="flex flex-col items-end fixed right-0 top-0 h-full bg-primary min-w-44 z-30 translate-x-full tablet:translate-x-0 tablet:block tablet:flex-1 tablet:bg-transparent tablet:relative tablet:static">
                <button 
                    className="absolute left-5 top-0 text-2xl tablet:hidden" 
                    onClick={toggleNav}
                    aria-label="Close navigation menu"
                >
                    &#10005;
                </button>
                <ul className="flex gap-4 flex-col text-end w-full font-bold p-3 tablet:p-0 tablet:flex-row tablet:justify-end tablet:gap-16 tablet:text-xl desktop:text-2xl">
                    <li onClick={toggleNav}><a href="#Home">Home</a></li>
                    <li onClick={toggleNav}><a href="#Projects">Project</a></li>
                    <li onClick={toggleNav}><a href="#Skills">Skills</a></li>
                    <li onClick={toggleNav}><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header