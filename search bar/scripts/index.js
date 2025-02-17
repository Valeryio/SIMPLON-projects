let images = [
  {
      name: "Lion",
      path: "./../assets/img/lion.jpg",
      keyword: ["King", "Lion", "Jungle"],
      description: "It is the King of the Jungle!"
  },
  {
      name: "Apple",
      path: "./../assets/img/apple.jpg",
      keyword: ["fruit", "apple", "red"],
      description: "It is the small juicy fruit!"
  },
  {
      name: "Diamond",
      path: "./../assets/img/diamond.jpg",
      keyword: ["red", "expensive", "stone", "diamond"],
      description: "It is one of the most expensive stone in the entire world!"
  },
  {
      name: "Book",
      path: "./../assets/img/book.jpg",
      keyword: ["book", "reading", "black", "pages"],
      description: "It is a set of knowledges written on a lot of pages!"
  },
  {
      name: "Microphone",
      path: "./../assets/img/microphone.jpg",
      keyword: ["record", "microphone", "son", "music"],
      description: "It is the vocal tool used to sing or record a voice!"
  }
]




// Afficher tout les éléments sur la page
fillBox(images);

let form = document.querySelector(".search-app__form");
let searchInput = document.querySelector(".search-app__input");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (searchInput.value) {
    let items = searchKey(searchInput.value);
    fillBox(items);
  } else {
    fillBox(images);
  }
})