import { images } from "./scripts/config";

// Afficher tout les éléments sur la page
fillBox(images);

let form = document.querySelector(".search-app__form");
// console.log(form);
let searchInput = document.querySelector(".search-app__input");
// console.log(searchInput);

form.addEventListener("submit", (event) => {
  event.preventDefault();
//   console.log(event);
  console.log(searchInput.value);
  
  if (searchInput.value) {
    let items = searchKey(searchInput.value);
    console.log("The result ", items);
    fillBox(items);
  } else {
    fillBox(images);
  }
})