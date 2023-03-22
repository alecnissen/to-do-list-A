
// call a function which handles DOM logic
// export then import within another file 

import "./eventListenerModule"; 

import { checkForDOMValue } from "./conditionalLogic";

export function addProjectFormInput() {
  const inputField = document.createElement("input");

  inputField.classList.add("input-field-text");

  inputField.placeholder = "Name your project";

  const btnContainer = document.createElement("container");

  btnContainer.classList.add("btn-container");

  const addBtn = document.createElement("button");

  addBtn.textContent = "Add";

  const cancelBtn = document.createElement("button");

  cancelBtn.textContent = "Cancel";

  addBtn.classList.add("add-btn");

  cancelBtn.classList.add("cancel-btn");

  const inputContainer = document.getElementById("input-field-container");

  inputContainer.classList.add("project-input-field-container");

  inputContainer.appendChild(inputField);

  btnContainer.appendChild(addBtn);

  btnContainer.appendChild(cancelBtn);

  inputContainer.appendChild(btnContainer);
} 


export function appendProjectNameToDOM(value) { 

  let userInputValue = value;  

  let projectContainer = document.querySelector(".navbar-your-projects-container"); 

  let mainContentProjectContainer = document.querySelector(".main-content-section-container"); 

  let projectNameElement = document.createElement("div"); 

  let projectNameElementMain = document.createElement("div");

   projectNameElement.innerText = userInputValue;

   projectNameElementMain.innerText = userInputValue;

  projectContainer.appendChild(projectNameElement);

  mainContentProjectContainer.appendChild(projectNameElementMain); 

  checkForDOMValue();

} 






// I'm able to get the user value, I am able to log out it's value, I am able to grab the projects container section,

// it still returns and HTML element, I can turn it into an array, but I am unsure of how to append to the DOM. 


// what I want, the user will enter project name, I want that name to appear in the project's section and main content section(blue part); 

// Problem: I am confused on how to append this project name to the DOM. 

// What I've tried: Once the add btn is pressed, the value/name of project will be saved, and passed to a function which takes that 

// value and prints to the DOM. 

// I am able to access the project container, and the main section but it's an HTML collection, I can convert it into an array, 

// but how can I append an array to the DOM? 