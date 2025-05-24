import aboutPage from "./pages/about.js";
import projectsPage from "./pages/projects.js";
import journalsPage from "./pages/journal.js";

const navbar = document.querySelector(".navbar");

function App() {
    aboutPage();
    projectsPage();
    journalsPage();
}

function openPage(section) {
    console.log("opening page...");
    
    //we need to check if a page is already active
    // if it is active, remove the section--active class and add section--inactive class, which sets the style to display none ;
    console.log(section);
    document.querySelectorAll("section").forEach(elem => {
        
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
        
        e.target.classList.add("navbar__link--active");
        openPage(e.target.value);  // e.target.value is the name of a class, which also represents a section
    }
    
}

navbar.addEventListener('click', openLink)

App()


