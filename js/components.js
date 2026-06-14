// ===== Shared Header & Footer (Modular Components) =====
// Edit nav links / footer content here once — applies to every page.

const NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "aboutme.html", label: "About Me" },
    { href: "works.html", label: "Works" },
    { href: "contact.html", label: "Contact" },
];

function renderHeader() {
    const navHTML = NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join("\n");

    return `
    <details class="mobile-menu">
        <summary>
            <img src="images/hamburger-menu.png" alt="Menu" title="Menu" width="25">
        </summary>
        <nav class="menu">
            ${navHTML}
        </nav>
    </details>

    <nav class="desktop-menu">
        ${navHTML}
    </nav>
    `;
}

function renderFooter() {
    return `
    <div class="promotions">
        <a href="https://www.instagram.com/nirobjarvis/" target="_blank">
            <strong>INSTAGRAM</strong>
        </a>
        <strong>  /  </strong>
        <a href="https://www.linkedin.com/in/nirob-miazee-048749390/" target="_blank">
            <strong>LINKEDIN</strong>
        </a>
    </div>

    <div class="credit">
        Copyright &copy; 2026 Nirob Miazee
    </div>

    <div class="location">
        📍Singapore
    </div>
    `;
}

function highlightActiveLink() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("header nav a").forEach(a => {
        const href = a.getAttribute("href");
        if (href === current) {
            a.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const headerEl = document.querySelector("header");
    const footerEl = document.querySelector("footer");

    if (headerEl) headerEl.innerHTML = renderHeader();
    if (footerEl) footerEl.innerHTML = renderFooter();

    highlightActiveLink();
});
