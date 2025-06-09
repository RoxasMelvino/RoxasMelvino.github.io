import renderProjects from "../scripts/portfolio/renderProjects.js";

export default function projects() {
    document.querySelector(".projects-section").innerHTML = `
        <header class="projects-header">Projects</header>
        <hr class="divider">
        <article class="main__categories">
            <!-- <button class="main_categories-category"></button> -->
        </article>
        <article class="categories display-none">
            <button class="close-category-btn"><i class="fa-solid fa-chevron-left"></i></button>
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
