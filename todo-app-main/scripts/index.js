
// Try to load last task saved in the local storge
let lastTaskList = getLocalStorage();

// Fill the todo list with the saved tasks
if (!lastTaskList.length) {
  setEmptyTodo();
} else {
  for (let i = 0; i < lastTaskList.length; i++) {
    addTask(lastTaskList[i].taskDesc, lastTaskList[i].taskStatus);
  }
}

// Adding task with the form
let addForm = document.querySelector(".task-form");
let taskInput = document.querySelector(".task__input");

addForm.addEventListener("submit", (e) => { 
  e.preventDefault();
  console.log(taskInput.value );
  console.log("Form submited");

  saveToLocalStorage(taskInput.value);
  addTask(taskInput.value);
  updateNumberTask();
  completeTask();
  activeClearButtons();

  // activeClearButtons();
  taskInput.value = "";
});


// Update the status of a specific task even if it's not
// after the trigger of the form
// completeTask();



// Filter specific tasks
let filterBtnList = document.querySelectorAll(".todo-btn");
// console.log(filterBtnList);

filterBtnList.forEach((filterBtn) => {
  filterBtn.addEventListener("click", (e) => {
    if (filterBtn.textContent === "All") {
      let allTasks = getLocalStorage();
      fillContainer(allTasks);
    }
    
    if (filterBtn.textContent === "Active") {
      let activeTasks = getLocalStorage();
      activeTasks = activeTasks.filter((task) => task.taskStatus === false);
      fillContainer(activeTasks);
    }
    
    if (filterBtn.textContent === "Complete") {
      let completedTasks = getLocalStorage();
      completedTasks = completedTasks.filter((task) => task.taskStatus === true);
      fillContainer(completedTasks);
    }
    
    if (filterBtn.textContent === "Clear Completed") {
      let completedTasks = getLocalStorage();
      let allStorage = getLocalStorage();
      completedTasks = completedTasks.filter((task) => task.taskStatus === true);

      for(let i = 0; i < completedTasks.length; i++) {
        deleteTask(completedTasks[i].taskDesc);
      }
      fillContainer(allStorage);  
    }
  });

});

let taskContainer = document.querySelector(".task-container");
taskContainer.addEventListener("click", (event) => {

  activeClearButtons();
});


// Clear tasks from the list

let body = document.querySelector("body");
let themeButton = document.querySelector(".theme-icon");
let todoFooter = document.querySelector(".todo__footer");


themeButton.addEventListener("click", (event) => {

  if(themeButton.src.slice(-7) === "sun.svg") {
    themeButton.src =  "./images/icon-moon.svg";
  } else {
    themeButton.src =  "./images/icon-sun.svg";
  }

  body.classList.toggle("white-theme");
  body.classList.toggle("white-backgroud");
  addForm.classList.toggle("white-theme");
  taskInput.classList.toggle("white-theme");
  taskContainer.classList.toggle("white-theme");
  todoFooter.classList.toggle("white-theme");
});


activeClearButtons();