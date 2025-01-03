function Contacts(){
    return(
        <>
        <footer className="row-start-4 bg-primary text-neutral grid gap-4 p-3 tablet:flex tablet:justify-between desktop:p-10" id="Contact">
            <aside className="flex flex-col items-center tablet:items-start">
                <h2 className="text-6xl font-bold">PM</h2>
                <ul className="flex">
                    <li>
                        <a href="https://www.facebook.com/patrick.munoz.315/" target="_blank"><img src="facebook-icon.svg" alt="Facebook" className="max-w-12"/></a>
                    </li>
                    <li>
                        <a href="https://github.com/Patrick-Munoz" target="_blank"><img src="github-icon.svg" alt="Github" className="max-w-12"/></a>
                    </li>
                    <li>
                        <a href="mailto:munozpatrickpenullar@gmail.com" target="_blank"><img src="gmail-icon.svg" alt="Gmail" className="max-w-12"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/patrick-mu%C3%B1oz-039997274/" target="_blank"><img src="linked-in-icon.svg" alt="Linked In" className="max-w-12"/></a>
                    </li>
                </ul>
                <p>&copy;patrickmunoz 2024</p>
            </aside>
            <aside className="text-center tablet:text-start">
                <h3 className="font-bold text-2xl">Quick Links</h3>
                <ul className="text-lg">
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </aside>
            <aside className="text-center tablet:text-start">
                <h3 className="font-bold text-2xl">Contact Info</h3>
                <ul className="text-lg">
                    <a href="mailto:munozpatrickpenullar@gmail.com"><li>munozpatrickpenullar@gmail.com</li></a>
                    <li>0976-082-9432</li>
                    <li>Pampanga, Arayat, San Agustin Sur</li>
                </ul>
            </aside>
        </footer>
        </>
    )
}

export default Contacts