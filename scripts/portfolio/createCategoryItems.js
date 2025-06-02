import { openCategoryItem } from "./handleModal.js";

export default function createCategoryItems(categoryItems, categoryName, categoryItemsContainer, modal) {
    console.log(categoryItems, categoryName);
        
    categoryItems.forEach((projectObj) => {
        let item = document.createElement('button');
        
        item.textContent = projectObj.name;
        item.classList.add(categoryName, "category__item", "project");
        item.addEventListener("click", (event) => openCategoryItem(projectObj, modal));
        
        categoryItemsContainer.append(item);
    })
}
