import { openCategoryItem } from "./handleModal.js";

export default function createCategoryItems(categoryItems, categoryName, categoryItemsContainer, modal) {
    // category items is an array of objects
    // console.log(categoryItems, categoryName);
        
    categoryItems.forEach((projectObj) => {
        const itemCard = document.createElement('div');
        const itemImage = document.createElement('img');
        const itemName = document.createElement('h3');
        const itemDesc = document.createElement('p');
        const itemInfo = document.createElement("div");
        const itemBtn = document.createElement("button");
        
        console.log(projectObj);
        
        itemImage.className = "category-item__image";
        itemImage.src = `https://raw.githubusercontent.com/RoxasMelvino/RoxasMelvino.github.io/refs/heads/main/images/${projectObj.image}`;
        
        itemName.className = "category-item__name";
        itemName.textContent = projectObj.name;
        
        itemDesc.className = "category-item__desc";
        itemDesc.textContent = projectObj.description;
        
        itemInfo.className = "category-item__info";
        itemInfo.append(itemName, itemDesc, itemBtn);    
        
        itemCard.append(itemImage, itemInfo)
        itemCard.classList.add(categoryName, "category-item", "project");
        
        itemBtn.className = "category-item__btn";
        itemBtn.textContent = "See more";
        itemBtn.addEventListener("click", () => openCategoryItem(projectObj, modal));
        
        categoryItemsContainer.append(itemCard);
    })
}
