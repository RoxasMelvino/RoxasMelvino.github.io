import { openCategoryItem } from "./handleModal.js";

export default function createCategoryItems(categoryItems, categoryName, categoryItemsContainer, modal) {
    // category items is an array of objects
    // console.log(categoryItems, categoryName);
        
    categoryItems.forEach((projectObj) => {
        let item = document.createElement('button');
        
        item.textContent = projectObj.name;
        item.classList.add(categoryName, "category__item", "project");
        item.addEventListener("click", () => openCategoryItem(projectObj, modal));
        
        categoryItemsContainer.append(item);
    })
}
