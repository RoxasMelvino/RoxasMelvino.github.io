import renderProjects from "../scripts/portfolio/renderProjects.js";

export default function projects() {
    document.querySelector(".projects-section").innerHTML = `
        <header class="projects-header">PROJECTS</header>
        <p class="projects-desc">View a plethora of projects that I am proud of!</p>
        <button class="close-category-btn display-none"><i class="fa-solid fa-arrow-left-long"></i> Back</button>
        <hr class="divider">
        <article class="main__categories">
            <!-- <button class="main_categories-category"></button> -->
        </article>
        <article class="category-items display-none">
            <!-- <button class="category__item"></button> -->
        </article>
        
        <div class="modal display-none">
            <button class="modal--close">X</button>
            <div class="modal-content">
                <!-- items are appended here from handleModal.js -->
            </div>
        </div>    
    `;
    
    renderProjects();
}
