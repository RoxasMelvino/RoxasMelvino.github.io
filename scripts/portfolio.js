import projects from "../projects.json" with { type: "json" };

export default function renderProjects() {
    const categoriesContainer = document.querySelector("article.main__categories");
    const categoryItemsContainer = document.querySelector("article.category");
    const closeCategoryBtn = document.querySelector("button.close-category-btn");
    const modal = document.querySelector("div.modal");
    const modalCloseBtn = document.querySelector("button.modal--close");

    // Functions
    function openCategory(categoryName) {     
        
        // add display none to the categories container so we can show a category's items when a user clicks on one. 
        categoriesContainer.classList.add("display-none"); 

        // remove the display none so we can see the category items
        categoryItemsContainer.classList.remove("display-none");
        
        // match the class name 
        document.querySelectorAll("button.category__item").forEach((item) => {
            if (!item.classList.contains(categoryName)) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        })
    }

    function closeCategory() {
        // console.log("closed");
        
        categoryItemsContainer.classList.add("display-none");
        categoriesContainer.classList.remove("display-none");
    }

    function closeCategoryItem()  {
        console.log("closing project...");
        modal.classList.add("display-none");
    }

    function openCategoryItem(projectObj) {
        // console.log("opening project...");
        // console.log("project object: ", projectObj);
        // console.log("container: ", modal);
        
        modal.innerHTML = ''; // clear the container
        modal.classList.remove("display-none");
        
        const exitBtn = document.createElement("button");
        exitBtn.classList.add('modal--close');
        exitBtn.textContent = "x";
        exitBtn.addEventListener('click', closeCategoryItem);
        
        const projectName = document.createElement("header");
        projectName.classList.add("modal__proj-name");
        projectName.textContent = `${projectObj.name}`
        
        const link = document.createElement("a");
        link.textContent = "Link to project";
        link.href = `${projectObj.link}`;
        
        modal.append(exitBtn, projectName, link)
    }


    function createCategoryItems(categoryItems, categoryName) {
        console.log(categoryItems, categoryName);
        
        categoryItems.forEach((projectObj) => {
            let item = document.createElement('button');
            
            item.textContent = projectObj.name;
            item.classList.add(categoryName, "category__item", "project");
            item.addEventListener("click", (event) => openCategoryItem(projectObj));
            
            categoryItemsContainer.append(item);
        })
    }
    // ---

    // Display categories, and add event listeners
    projects.forEach((elem, i) => {
        const category = document.createElement("button");
        console.log("category: ", elem.category_name, elem);
        
        category.textContent = elem.category_name;
        category.classList.add('main__categories-category');
        category.value = `${elem.id}`;
        category.addEventListener("click", () => openCategory(elem.category_name))  // pass the category name
        
        categoriesContainer.append(category); // category is a specific category (e.g. CMS, or Content Management System)
        createCategoryItems(elem.category_items, elem.category_name);
    })


    closeCategoryBtn.addEventListener("click", closeCategory);
    modalCloseBtn.addEventListener("click", closeCategoryItem);

    // console.log(categories);
    // console.log(projects);
    // console.log(categoryItemsContainer);
}
