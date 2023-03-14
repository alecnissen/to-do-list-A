document.getElementById("add-project-btn").addEventListener("click", function(){
    
    const inputField = document.createElement("input"); 

    inputField.classList.add("input-field-text");

    const btnContainer = document.createElement("container"); 

    btnContainer.classList.add("btn-container");

    const addBtn = document.createElement("button"); 

    addBtn.textContent = "Add Book";

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
}) 