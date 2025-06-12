import projects from "../../projects.json" with { type: "json" };
import createCategoryItems from "./createCategoryItems.js";
import { openCategory, closeCategory } from "./categoryNav.js";
import { closeCategoryItem } from "./handleModal.js";

export default function renderProjects() {
    const categoriesContainer = document.querySelector("article.main__categories");
    const categoryItemsContainer = document.querySelector("article.category-items");
    const closeCategoryBtn = document.querySelector("button.close-category-btn");
    const modal = document.querySelector("div.modal-content");
    
    // console.log(modal);
    
    // Display categories, and add event listeners
    projects.forEach((elem) => {
        // console.log("category: ", elem.category_name, elem);
        const category = document.createElement("div");
        const categoryHeader = document.createElement("h2");
        const categoryDesc = document.createElement("p");
        const categoryCtaBtn = document.createElement("button");
        const categoryCtaBlock = document.createElement("div");
        const categoryImage = document.createElement("div");
        
        category.classList.add('main__categories-category');
        category.value = `${elem.id}`;
        
        categoryHeader.textContent = elem.name;
        categoryDesc.textContent = elem.description;
        
        categoryCtaBtn.textContent = "Look inside";
        categoryCtaBtn.addEventListener("click", () => openCategory(categoriesContainer, categoryItemsContainer, elem.category_name)); // pass the category name
        
        categoryImage.className = "category-image";
        categoryImage.style.backgroundImage = `url(${elem.category_image})`;
        
        categoryCtaBlock.className = "cta-block";
        categoryCtaBlock.append(categoryHeader, categoryDesc, categoryCtaBtn)
        
        category.append(categoryCtaBlock, categoryImage)
        categoriesContainer.append(category); // category is a specific category (e.g. CMS, or Content Management System)
        
        createCategoryItems(elem.category_items, elem.category_name, categoryItemsContainer, modal);
    })


    closeCategoryBtn.addEventListener("click", () => closeCategory(categoriesContainer, categoryItemsContainer));
    document.querySelector(".modal--close").addEventListener("click", () => closeCategoryItem(modal)); 
}
