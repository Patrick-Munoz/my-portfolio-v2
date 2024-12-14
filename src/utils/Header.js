function toggleNav() {
    const nav = document.querySelector("nav");
    const backdrop = document.querySelector(".backdrop");
    nav.classList.toggle("hidden");
    backdrop.classList.toggle("hidden");
}

export default toggleNav;
