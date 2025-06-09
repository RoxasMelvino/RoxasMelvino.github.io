export function closeCategoryItem(modal)  {
    console.log("closing project...");
    modal.classList.add("display-none");
}

export function openCategoryItem(projectObj, modal) {
    // console.log("opening project...");
    // console.log("project object: ", projectObj);
    // console.log("container: ", modal);
    
    modal.innerHTML = ''; // clear the container
    modal.classList.remove("display-none");
    
    const exitBtn = document.createElement("button");
    exitBtn.classList.add('modal--close');
    exitBtn.textContent = "x";
    exitBtn.addEventListener('click', () => closeCategoryItem(modal));

    const projectName = document.createElement("header");
    projectName.classList.add("modal__proj-name");
    projectName.textContent = `${projectObj.name}`
    
    const link = document.createElement("a");
    link.textContent = "Link to project";
    link.href = `${projectObj.link}`;
    
    modal.append(exitBtn, projectName, link);
    // document.querySelector("section.projects-section").classList.add("blur-background"); add blur later. some how this thing won't blur
}
