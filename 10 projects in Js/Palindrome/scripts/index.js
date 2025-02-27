
console.log("Connected");

let palindromSubmit = document.querySelector(".palindrom");
let palindromInput = document.querySelector(".palindrom-input")
console.log(palindromSubmit);


palindromSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  let word = palindromInput.value;
  let result;
  
  word = word.split(" ");
  word = word.join("");


  result = isPalindrom(word);
  showResult(result, palindromInput.value);

  console.log("The result ", result);
  palindromInput.value = "";
});
