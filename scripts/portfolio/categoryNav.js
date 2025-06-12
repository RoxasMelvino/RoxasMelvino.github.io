export function openCategory(categoriesContainer, categoryItemsContainer, categoryName) {     
    
    // add display none to the categories container so we can show a category's items when a user clicks on one. 
    categoriesContainer.classList.add("display-none"); 

    // remove the display none so we can see the category items
    categoryItemsContainer.classList.remove("display-none");
    
    // match the class name to display the correct items 
    document.querySelectorAll(".category-item").forEach((item) => {
        if (!item.classList.contains(categoryName)) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
            document.querySelector(".projects-header").textContent = categoryName; // change the header to the category name;
        }
    })
}

export function closeCategory(categoriesContainer, categoryItemsContainer) {
    // console.log("closed");
    
    categoryItemsContainer.classList.add("display-none");
    categoriesContainer.classList.remove("display-none");
    document.querySelector(".projects-header").textContent = "PROJECTS";
}
