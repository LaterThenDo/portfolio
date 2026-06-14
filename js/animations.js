// ===== Scroll Reveal Animations =====
// Adds a "visible" class to elements with [data-animate] when they enter the viewport.

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll("[data-animate]");

    if (!("IntersectionObserver" in window) || targets.length === 0) {
        targets.forEach(el => el.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    targets.forEach(el => observer.observe(el));
});

// ===== Header shrink-on-scroll =====
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
