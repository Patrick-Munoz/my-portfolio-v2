function toggleNav() {
    const nav = document.querySelector('nav');
    const backdrop = document.querySelector('.backdrop');
    const isOpen = nav.classList.contains('translate-x-0');

    if (isOpen) {
        nav.classList.remove('translate-x-0');
        nav.classList.add('translate-x-full');
        backdrop.classList.add('hidden');
        document.body.style.overflow = 'unset';  // Enable scrolling
    } else {
        nav.classList.remove('translate-x-full');
        nav.classList.add('translate-x-0');
        backdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';  // Disable scrolling
    }
}

export default toggleNav;
