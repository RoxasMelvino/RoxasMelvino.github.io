import projects from "../../projects.json" with { type: "json" };
import createCategoryItems from "./createCategoryItems.js";
import {  openCategory, closeCategory } from "./categoryNav.js";

export default function renderProjects() {
    const categoriesContainer = document.querySelector("article.main__categories");
    const categoryItemsContainer = document.querySelector("article.categories");
    const closeCategoryBtn = document.querySelector("button.close-category-btn");
    const modal = document.querySelector("div.modal");
    
    // Display categories, and add event listeners
    projects.forEach((elem, i) => {
        const category = document.createElement("button");
        console.log("category: ", elem.category_name, elem);
        
        category.textContent = elem.category_name;
        category.classList.add('main__categories-category');
        category.value = `${elem.id}`;
        category.addEventListener("click", () => openCategory(categoriesContainer, categoryItemsContainer, elem.category_name))  // pass the category name
        
        categoriesContainer.append(category); // category is a specific category (e.g. CMS, or Content Management System)
        createCategoryItems(elem.category_items, elem.category_name, categoryItemsContainer, modal);
    })


    closeCategoryBtn.addEventListener("click", () => closeCategory(categoriesContainer, categoryItemsContainer));
}
