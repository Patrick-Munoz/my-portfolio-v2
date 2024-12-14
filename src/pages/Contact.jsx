function Contacts(){
    return(
        <>
        <footer className="row-start-4 bg-primary text-neutral grid gap-4 p-3 tablet:flex tablet:justify-between desktop:p-10" id="Contact">
            <aside className="flex flex-col items-center tablet:items-start">
                <h2 className="text-6xl font-bold">PM</h2>
                <ul className="flex">
                    <li>
                        <img src="facebook-icon.svg" alt="Facebook" className="max-w-12"/>
                    </li>
                    <li>
                        <img src="github-icon.svg" alt="Github" className="max-w-12"/>
                    </li>
                    <li>
                        <img src="gmail-icon.svg" alt="Gmail" className="max-w-12"/>
                    </li>
                    <li>
                        <img src="linked-in-icon.svg" alt="Linked In" className="max-w-12"/>
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
                    <li>munozpatrickpenullar@gmail.com</li>
                    <li>0976-082-9432</li>
                    <li>Pampanga, Arayat, San Agustin Sur</li>
                </ul>
            </aside>
        </footer>
        </>
    )
}

export default Contacts