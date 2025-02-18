
let mainDate = new Date();
let dayDatesArray;
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", (event) => {

  // Updates the date with the left Arrow
  if (mainDate.getMonth() > 0) {
    mainDate.setMonth(mainDate.getMonth() - 1);
  } else if(mainDate.getMonth() === 0) {
    mainDate.setMonth(11);
    mainDate.setFullYear(mainDate.getFullYear() - 1);
  }

  // Update the calendar
  dayDatesArray = calendar(mainDate);
})

rightArrow.addEventListener("click", (event) => {

  // Updates the date with the right arrow
  if (mainDate.getMonth() < 11) {
    mainDate.setMonth(mainDate.getMonth() + 1);
  } else if(mainDate.getMonth() === 11) {
    mainDate.setMonth(0);
    mainDate.setFullYear(mainDate.getFullYear() + 1);
  }

  // Update the calendar
  dayDatesArray = calendar(mainDate);
})

// Load the dynamic calendar
dayDatesArray = calendar(mainDate);

// Event listening on different dates
dayDatesArray.forEach(element => {
  
  element.addEventListener("click", (event) => {

    mainDate.setDate(element.innerHTML);
    let dailyTasks = getTasksByDay(mainDate);

    // console.log("The current Tasks :  ", currentTasks);

    loadTasks(dailyTasks);

    console.log(mainDate);
    // console.log(element);
  });
});

// Modal Code
let modal = document.querySelector(".modal");
let modalClose = document.querySelector(".modal__close");
let modalInput = document.querySelector(".modal__input");

modalClose.addEventListener("click", (event) => {
  modal.style.display = "none";
  modalInput.value = "";
});

// Open the pop up
let taskAddBtn = document.querySelector(".task__add-btn");
taskAddBtn.addEventListener("click", (event) => {
  modal.style.display = "block";
});

// Save a task in the local storage
modal.addEventListener("submit", (event) => {

  event.preventDefault();

  let dateObj = {
    date: mainDate,
    name: modalInput.value
  };

  dateObj = JSON.stringify(dateObj);
  window.localStorage.setItem(String(mainDate), dateObj);

});

// Load the tasks of the main date
let dailyTasks = getTasksByDay(mainDate);
loadTasks(dailyTasks);




