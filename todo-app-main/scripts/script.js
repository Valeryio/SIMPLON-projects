

function saveToLocalStorage(newTask, taskInfos) {
  let task = {
    taskDesc: newTask,
    taskStatus: false,
    taskKey: ""
  }

  if (!taskInfos) {
    let key = new Date().getTime();
    task.taskKey = key;
    window.localStorage.setItem(`${key}`, JSON.stringify(task));
    console.log(key);
  } else {
    task.taskKey = taskInfos.key;
    task.taskStatus = taskInfos.status;
    window.localStorage.setItem(`${task.taskKey}`, JSON.stringify(task));
  }
}

function getLocalStorage() {
  let values = [];
  keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    
    if (localStorage[keys[i]] !== "INFO") {
      values.push(localStorage[keys[i]]);
    }
  }

  values = values.map((element) => JSON.parse(element));
  return values;
}

function addTask(task, status) {
  // console.log("Appelé");
  let taskBoxContainer = document.querySelector(".task-container");

  let taskBox = document.createElement("li");
  taskBox.classList.add("task-box");

  let taskBoxHiddenCheck = document.createElement("input");
  taskBoxHiddenCheck.setAttribute("type", "checkbox");
  taskBoxHiddenCheck.classList.add("hidden-check");
  // taskBoxHiddenCheck.checked = false;

  let taskBoxCheck = document.createElement("span");
  taskBoxCheck.classList.add("checkbox-mark");

  let taskDesc = document.createElement("p");
  taskDesc.classList.add("task__desc");

  let taskDeleteIcon = document.createElement("img");
  taskDeleteIcon.classList.add("task__delete-icon");
  taskDeleteIcon.setAttribute("src", "./images/icon-cross.svg");

  
  let taskList = getLocalStorage();
  // console.log("Taille de la liste précédente : ", taskList.length);

  taskBox.appendChild(taskBoxHiddenCheck);

  let emptyMessage = document.querySelector(".default-task-box");

  if (emptyMessage) {
    console.log("Il y a empty message oh !");
    taskBoxContainer.innerHTML = "";
  }

  if (status) {
    taskDesc.classList.add("line-through");
    taskBoxCheck.classList.add("active-check");
  }

  taskBox.appendChild(taskBoxCheck);
  taskDesc.innerHTML = task;
  taskBox.appendChild(taskDesc);
  taskBox.appendChild(taskDeleteIcon);

  taskBoxContainer.appendChild(taskBox);

  completeTask();
  updateNumberTask();
  activeClearButtons();
}

function deleteTask(specificTask) {
  let AllStorage = getLocalStorage();

  AllStorage.forEach((element) => {
    if(element.taskDesc === specificTask) {
      localStorage.removeItem(element.taskKey);
    }
  });

  updateNumberTask();
}

function setEmptyTodo() {
//  console.log("You called me !");
  let taskBoxContainer = document.querySelector(".task-container");

  let taskBox = document.createElement("li");
  taskBox.classList.add("task-box");

  let taskBoxHiddenCheck = document.createElement("input");
  taskBoxHiddenCheck.setAttribute("type", "checkbox");
  taskBoxHiddenCheck.classList.add("hidden-check");

  let taskDesc = document.createElement("p");
  taskDesc.classList.add("task__desc");
  taskDesc.innerHTML = "They have no task added to this list";

  taskBox.appendChild(taskBoxHiddenCheck);
  taskBox.classList.add("default-task-box");
  taskBox.appendChild(taskDesc);
  
  taskBoxContainer.innerHTML = "";
  taskBoxContainer.appendChild(taskBox);
}

function updateNumberTask() {
  let numberTaskBox = document.querySelector(".todo-items-count");
  let taskList = getLocalStorage();
  let defaultTaskBox = document.querySelectorAll(".defaut-task-box");

  if (defaultTaskBox.length)
  {
    numberTaskBox.innerHTML = "0 item left";
  } else if (taskList.length === 1) {
    numberTaskBox.innerHTML = `${taskList.length} item list`;
  }  else {
    numberTaskBox.innerHTML = `${taskList.length} items list`;
  }
}

function completeTask() {
  let allTasks = document.querySelectorAll(".checkbox-mark");

  allTasks.forEach(taskCheckBoxMark => {
    // console.log(taskCheckBoxMark);

    taskCheckBoxMark.addEventListener("click", () => {
      // console.log(taskCheckBoxMark);
      let taskHiddenCheckBox = taskCheckBoxMark.previousElementSibling;
      console.log("Hidden check : ", taskHiddenCheckBox.checked);

      let specificTask = taskCheckBoxMark.nextElementSibling;
      specificTask.classList.toggle("line-through");
      taskCheckBoxMark.classList.toggle("active-check");
      // console.log(specificTask);
      

      if (taskCheckBoxMark.checked) {
        console.log("Il est checked");
        taskCheckBoxMark.checked = false;
        setCheckBoxStatus(specificTask.textContent, false);
        console.log("Normalement il a du changer");
      } else {
        console.log("Il est unchecked");
        taskCheckBoxMark.checked = true;
        setCheckBoxStatus(specificTask.textContent, true);
        console.log("C'est clair qu'il a changé");
      }
    });
  });
}

function setCheckBoxStatus(specificTask, state) {
  let AllStorage = getLocalStorage();
  console.log("The keys : ", Object.keys(AllStorage));

  AllStorage.forEach((element) => {
    if(element.taskDesc === specificTask) {
      saveToLocalStorage(element.taskDesc, {key: element.taskKey, status: state});
    }
  });
}


function fillContainer(allTasks) {
  let taskBoxContainer = document.querySelector(".task-container");
  taskBoxContainer.innerHTML = "";

  if (allTasks.length === 0) {
    setEmptyTodo();
  } else {
    for (let i = 0; i < allTasks.length; i++) {
      addTask(allTasks[i].taskDesc, allTasks[i].taskStatus);
    }
  }
}

function activeClearButtons() {
  let clearButtons = document.querySelectorAll(".task__delete-icon");
  console.log(clearButtons);

  clearButtons.forEach((button) => {  
    button.addEventListener("click", (event) => {
        let specificTask = button.previousElementSibling;
        specificTask = specificTask.textContent;
  
        deleteTask(specificTask);
        
        allStorage = getLocalStorage();
        console.log(allStorage);
        fillContainer(allStorage);
      });
  });

}
