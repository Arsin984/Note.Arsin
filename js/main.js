/* =========================================================
   NOTE.ARSIN — MAIN JAVASCRIPT
   Version: 1.0
   ========================================================= */

"use strict";


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const searchButton = document.getElementById("searchButton");
const currentYear = document.getElementById("currentYear");

const navLinks = document.querySelectorAll(".nav-link");
const learnButtons = document.querySelectorAll(".learn-button");


/* =========================================================
   CURRENT YEAR
   ========================================================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

if (menuButton && mainNav) {

    menuButton.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu when clicking a navigation link */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";
        }

    });

}


/* =========================================================
   SEARCH
   ========================================================= */

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const searchTerm = window.prompt(
            "What would you like to search for?"
        );

        if (!searchTerm) {
            return;
        }

        const cleanSearchTerm =
            searchTerm.trim().toLowerCase();

        if (!cleanSearchTerm) {
            return;
        }


        /* Search through the visible page */

        const searchableElements =
            document.querySelectorAll(
                "h1, h2, h3, p, .nav-link"
            );

        let foundElement = null;

        searchableElements.forEach((element) => {

            if (foundElement) {
                return;
            }

            const text =
                element.textContent.toLowerCase();

            if (text.includes(cleanSearchTerm)) {
                foundElement = element;
            }

        });


        if (foundElement) {

            foundElement.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            foundElement.style.transition =
                "background-color 0.3s ease";

            foundElement.style.backgroundColor =
                "#ede9fe";

            setTimeout(() => {

                foundElement.style.backgroundColor =
                    "";

            }, 1600);

        } else {

            window.alert(
                `No results found for "${searchTerm}".`
            );

        }

    });

}


/* =========================================================
   NOTE BUTTONS
   ========================================================= */

learnButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const note =
            button.dataset.note;

        if (!note) {
            return;
        }

        window.alert(
            `${note}\n\nDetailed information about this note will be available in the next version of Note.Arsin.`
        );

    });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll("main section[id]");


const updateActiveNavigation = () => {

    const scrollPosition =
        window.scrollY + 160;

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        const href =
            link.getAttribute("href");

        link.classList.toggle(
            "active",
            href === `#${currentSection}`
        );

    });

};


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* =========================================================
   HEADER SHADOW ON SCROLL
   ========================================================= */

const header =
    document.querySelector(".site-header");


const updateHeader = () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.06)";

    } else {

        header.style.boxShadow =
            "none";

    }

};


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }

        if (
            mainNav &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.textContent = "☰";
            }

        }

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

updateActiveNavigation();
updateHeader();

console.log(
    "Note.Arsin initialized successfully 🎵"
);
