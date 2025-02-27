

/**
 * verify if a word is a plalindrom
 * @param {*} word 
 * @returns boolean
 */
function isPalindrom(word) {
  for(let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - (i + 1)]) {
        return false;
    }
  }
  return true;
}


/**
 * Show the result in a specific box
 * @param {*} result 
 * @param {*} word
 */ 
function showResult(result, word) {
  let resultSentence = document.querySelector(".palindrom-checker");
  let form = document.querySelector(".palindrom");

  if (result) {
    resultSentence.innerHTML = `The word <strong class="text-primary">${word}</strong> is a palindrome`;
  } else {
    resultSentence.innerHTML = `The word <strong class="text-danger">${word}</strong> is not a palindrome`
  }

  form.appendChild(resultSentence);
}