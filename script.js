
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function () {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    // Create LI
    const li = document.createElement("li");
    li.className = "list-group-item";

    // Task text
    const span = document.createElement("span");
    span.textContent = taskValue;

    // Toggle complete
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-warning btn-sm mx-1";

    editBtn.addEventListener("click", function () {
        const newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", function () {
        li.remove(); // remove task
    });

    // Button container
    const btnGroup = document.createElement("div");
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    // Append to li
    li.appendChild(span);
    li.appendChild(btnGroup);

    // Add to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});