function updateNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const path = window.location.pathname.replace(/\/$/, "");
    navLinks.forEach(link => {
        console.log(`Checking link: ${link.getAttribute('href')}`);
        link.classList.remove('active');
        let href = link.getAttribute('href').replace(/\/$/, "");
        if (href === path) {
            link.classList.add('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new MutationObserver(mut => {
        if (document.querySelector('.nav-link')) {
            updateNavLinks();
            observer.disconnect();
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});