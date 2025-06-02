import renderProjects from "../scripts/portfolio.js";

export default function projects() {
    document.querySelector(".projects-section").innerHTML = `
        <header><h1>Projects</h1></header>
        <hr>
        <article class="main__categories">
            <!-- <button class="main_categories-category"></button> -->
        </article>
        <article class="category display-none">
            <button class="close-category-btn">X</button>
            <!-- <button class="category__item"></button> -->
        </article>
        
        <div class="modal display-none">
            <button class="modal--close">X</button>
            <!-- <header><h2 class="modal__proj-name"></h2></header>
            <a href="" > <p>Go to project</p> </a> -->
        </div>    
    `;
    
    renderProjects();
}
