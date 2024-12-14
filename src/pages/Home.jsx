import Header from "../components/Header"

function Home(){
    return(
        <>
        <section className="grid gap-1 bg-primary row-start-1 text-neutral p-3 h-screen w-screen" id="Home">
            <Header/>
            <div className="flex flex-col gap-1 items-center justify-evenly desktop:flex-row-reverse desktop:justify-between desktop:gap-8">
                <img src="me.png" alt="A picture of me" className="rounded-full border-solid border-2 max-w-36 max-h-36 tablet:max-w-72 tablet:max-h-72 desktop:border-none desktop:rounded-none desktop:max-w-96 desktop:max-h-96"/>
                <div className="flex flex-col items-center gap-1 desktop:items-start desktop:gap-3">
                    <h2 className="font-bold text-4xl tablet:text-7xl">Patrick Munoz</h2>
                    <h3 className="font-bold text-lg tablet:text-4xl">Frontend Web Developer</h3>
                    <p className="text-center max-w-72 tablet:text-2xl tablet:max-w-96 desktop:text-start desktop:max-w-full">
                        Motivated Web Developer with experience in front-end and back-end development. 
                        Skilled in HTML, CSS, JavaScript, React, and Node.js, 
                        with a focus on building responsive, user-friendly applications and streamlining workflows.
                    </p>
                </div>
            </div>
            <ul className="flex justify-center items-center desktop:justify-start">
                <li>
                    <a href="https://www.facebook.com/patrick.munoz.315" target="blank"><img src="facebook-icon.svg" alt="Facebook" className="max-w-10 max-h-10 tablet:max-w-20 tablet:max-h-20 desktop:max-w-14 desktop:max-h-14"/></a>
                </li>
                <li>
                    <a href="https://github.com/Patrick-Munoz" target="blank"><img src="github-icon.svg" alt="Facebook" className="max-w-10 max-h-10 tablet:max-w-20 tablet:max-h-20 desktop:max-w-14 desktop:max-h-14"/></a>
                </li>
                <li>
                    <a href="mailto:munozpatrickpenullar@gmail.com" target="blank"><img src="gmail-icon.svg" alt="Facebook" className="max-w-10 max-h-10 tablet:max-w-20 tablet:max-h-20 desktop:max-w-14 desktop:max-h-14"/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/patrick-mu%C3%B1oz-039997274/" target="blank"><img src="linked-in-icon.svg" alt="Facebook" className="max-w-10 max-h-10 tablet:max-w-20 tablet:max-h-20 desktop:max-w-14 desktop:max-h-14"/></a>
                </li>
            </ul>
            <div className="flex flex-col font-bold items-center justify-center gap-2 desktop:flex-row desktop:justify-start desktop:gap-4">
                <a href="PATRICK JACOB P. MUNOZ.pdf" target="blank"><button className="bg-accent p-3 w-48 shadow-sm shadow-black rounded-md tablet:w-60 tablet:p-5">DOWNLOAD CV</button></a>
                <a href="mailto:munozpatrickpenullar@gmail.com" target="blank"><button className="bg-accent p-3 w-48 shadow-sm shadow-black rounded-md tablet:w-60 tablet:p-5">GET IN TOUCH</button></a>
            </div>
        </section>
        </>
    )
}

export default Home