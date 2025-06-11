import aboutPage from "./pages/about.js";
import projectsPage from "./pages/projects.js";
import journalsPage from "./pages/journal.js";
import homepage from "./pages/homepage.js";

homepage();
aboutPage();
projectsPage();
journalsPage();

const navbar = document.querySelector(".navbar");
const ctaButtons = document.querySelector(".about-header-CTAs");

function openPage(section) {
    
    //we need to check if a page is already active
    // if it is active, remove the section--active class and add section--inactive class, which sets the style to display none ;
    document.querySelectorAll("section").forEach(elem => {
        console.log(elem, section);
        if (elem.classList.contains(`${section}`)) {
            elem.classList.add("section--active");
            elem.classList.remove("section--inactive");
        } else {
            elem.classList.remove('section--active');
            elem.classList.add('section--inactive');
        }
    })
    
}

function openLink(e) {
    if (e.target.classList.contains("navbar__link")) {
        // remove the styling for links that were already active
        document.querySelectorAll(".navbar__link").forEach((elem) => elem.classList.remove('navbar__link--active'));
        
        if (!e.target.classList.contains("navbar__logo")) { // this is to prevent the navbar logo from having this style
            e.target.classList.add("navbar__link--active");
        }
        
        openPage(e.target.value);  // e.target.value is the name of a class, which also represents a section
    }
    
}

navbar.addEventListener('click', openLink);



console.log(ctaButtons);
