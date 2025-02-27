
let user = {
  firstName: "",
  lastName: "",
  mail: "",
  password: "",
  address: "",
  phone: "",
  profile: ""
};

// API CALLING


async function getValuesFromApi() {
    
  const url = "https://randomuser.me/api/";
    let response;

    try {
        response = await fetch(url);
        console.log(response);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
      
        response = await response.json();
        response = response.results[0];
        console.log(response);

        return response;
      
      } catch (error) {
        console.error(error.message);
      }
      
}

let response = await getValuesFromApi();

// Filling the Object fields of the user
user.address = response.location;
user.phone = response.phone;
user.profile = response.picture.medium;



// Updating the object with the form
let form = document.querySelector(".sign-up-form");

let firstNameInput = document.querySelector(".input__firstname");
let lastNameInput = document.querySelector(".input__lastname");
let mailInput = document.querySelector(".input__mail");
let passwordInput = document.querySelector(".input__pwd");


let mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// console.log(firstNameInput, lastNameInput, mailInput, passwordInput);
// console.log(form);

form.addEventListener("submit", (event => {
  event.preventDefault();

  if (!mailRegex.test(mailInput.value)) {
    console.log("Entrez les bonnes informations");
  }
  else {
    user.mail = mailInput.value;
  }

  if(!pwdRegex.test(passwordInput.value)) {
    console.log("Entrez un mot de passe avec 8 caractères min., majuscule, minuscule, chiffre et caractère spécial");
  } else {
    user.password = passwordInput.value;
  }

  if (pwdRegex.test(passwordInput.value) && mailRegex.test(mailInput.value)) {
    user.firstName = firstNameInput.value;
    user.lastName = lastNameInput.value;

    // Saving to the localStorage

    let userId = "user-"+user.lastName;
    window.localStorage.setItem(`${userId}`, JSON.stringify(user));
    // window.location = "http://localhost:5500/user.html";
  }

}));



// console.log(response);
// console.log(user);