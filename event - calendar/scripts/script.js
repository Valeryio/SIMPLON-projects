

/**
 * It converts a single digit number to a second
 * a number with two digit
 * @param {number} value - parameter to add 
 * @returns {string}
 */
function setTwoDigitNumber(value) {
  if (value < 10) {
    let result = "0" + String(value);
    return result;
  }
  return String(value);
}

function getDaysFromDate(month, year) {

  // verify for february
  if (month === 1) {
    if (!(year % 4)) {
        return 29;
    }
    return 28;
  }

  // verify for July and August
  if (month === 6 || month === 7) {
    return 31;
  }

  if (month < 8) {
    if (!(month % 2)) {
        return 31;
      } else {
        return 30;
      }
  } else {
    if ((month % 2)) {
      return 31;
    } else {
      return 30;
    }
  }
}

/**
 * Updates the calendar through the calendar
 * @param {date} currentDate 
 */
function calendar(currentDate) {

  let dayContainer = document.querySelector(".calendar__days-container");
  let calendarMonth = document.querySelector(".calendar__month");
  let calendarYear = document.querySelector(".calendar__year");

  // console.log(dayContainer);
  dayContainer.innerHTML = "";
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  let firstDayOfCurrentMonth = new Date(currentDate);
  firstDayOfCurrentMonth.setDate(1);
  let blankDays = firstDayOfCurrentMonth.getDay();
  let dayDatesArray = [];
  
    // Get the number of days
  let currentMonthDays = getDaysFromDate(currentMonth, currentYear);
  console.log("Affichons : blanck", blankDays);
  calendarMonth.innerHTML = monthNames[currentDate.getMonth()];
  calendarYear.innerHTML = currentDate.getFullYear();

  for (let i = 0; i < blankDays - 1; i++) {
    console.log("herre")
    let dayDate = document.createElement("button");
    dayDate.classList.add("calendar__day");
  
    dayDate.innerText = " ";
    dayDate.style.width = "38px";
    dayDate.style.background = "white"
    
    // dayDatesArray.push(dayDate);
    // console.log(dayDatesArray);

    dayContainer.appendChild(dayDate);
  }

    // Display the calendar days !
  for (let i = 1; i <= currentMonthDays; i++)
  {
    let dayDate = document.createElement("button");
    dayDate.classList.add("calendar__day");
  
    dayDate.innerText = setTwoDigitNumber(i);
    dayDatesArray.push(dayDate);
    dayContainer.appendChild(dayDate);
  }

  return dayDatesArray;
}

/**
 * retrieves all the current objects in the local storage
 * @returns values - An array of object
 */
function allStorage() {
  let values = [];
  keys = Object.keys(localStorage);
  
  for (let i = 0; i < keys.length; i++) {
    
    values.push(localStorage[keys[i]]);
  }

  values.shift();
  values = values.map((element) => JSON.parse(element));
  return values;
}

/**
 * Loads all the tasks of a specific day
 * @param {array} allStoredData 
 */
function loadTasks(allStoredData) {
  let taskList = document.querySelector(".tasks__list");
  taskList.innerHTML = "";

  if (allStoredData.length === 0) {
    let noTasks = document.createElement("p");
    noTasks.classList.add("error-tasks");
    noTasks.innerHTML = "Vous n'avez programmé aucune tâche pour la journée!";
    taskList.appendChild(noTasks);
  }

  for(let i = 0; i < allStoredData.length; i++) {
    let taskName = document.createElement("li");
    taskName.classList.add("task__name");
    
    taskName.innerHTML = allStoredData[i].name;
    taskList.appendChild(taskName);
    console.log(taskName);
  }
}

/**
 * Get all the specific tasks of the main day from the local storage
 * @param {Date} mainDate 
 * @returns 
 */
function getTasksByDay(mainDate) {

  let allStoredData = allStorage();
  let allStringDates = [];

  // console.log("The main date : ", mainDate);
  // console.log("All the events : ", allStoredData);
  
  for (let i = 0; i < allStoredData.length; i++) {
    let currentDate = new Date(allStoredData[i].date);

    if (currentDate.getDate() === mainDate.getDate() && 
        currentDate.getMonth() === mainDate.getMonth() &&
        currentDate.getFullYear() === mainDate.getFullYear()) {

          // console.log(currentDate.getDay(), mainDate.getDay());

      allStringDates.push(allStoredData[i]);
      // console.log("YEAAAAHHH : ", allStoredData[i]);
      // console.log("Yeah, the right day!");
    }
  }

  return allStringDates;
}
