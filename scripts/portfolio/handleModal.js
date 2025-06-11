export function closeCategoryItem(modal)  {
    // console.log("closing project...");
    modal.parentElement.classList.add("display-none");
}

export function openCategoryItem(projectObj, modal) {
    // console.log("opening project...");
    // console.log("project object: ", projectObj);
    // console.log("container: ", modal);
    
    modal.innerHTML = ''; // clear the container
    modal.parentElement.classList.remove("display-none"); // the parent element has this class, so it must be removed. See projects.js
    
    const projectName = document.createElement("header");
    projectName.classList.add("modal-content__header");
    projectName.textContent = `${projectObj.name}`
    
    console.log(projectObj.image);
    
    const link = document.createElement("a");
    link.style.backgroundImage = `url("https://raw.githubusercontent.com/RoxasMelvino/RoxasMelvino.github.io/refs/heads/main/images/${projectObj.image}")`;
    link.classList.add("modal-content__link");
    link.href = `${projectObj.link}`;
    
    modal.append(projectName, link);
    // document.querySelector("section.projects-section").classList.add("blur-background"); add blur later. some how this thing won't blur
}
