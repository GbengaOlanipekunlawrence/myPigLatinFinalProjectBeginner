/*
function pigLatin(word) {
  // The translator  to convert text to lowercase (Tranlator)
  word = word.toLowerCase();
  // Initialize array of vowels to know the characters that are  vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // Initialize vowel index to 0 to declare the pointer the reference point
  let vowelIndex = 0;

  if (vowels.includes(word[0])) {
    // If first letter is a vowel
    return word + "way";
  } else {
    // If the first letter isn't a vowel i.e is a consonant
    for (let char of word) {
      // Loop through until the first vowel is found
      if (vowels.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = word.indexOf(char);
        break;
      }
    }
    // write out the final word
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "acedu";
  }
}
*/

function treatQu(word) {
    if (word.slice(0, 2).toLowerCase() === "qu") {
      return word.slice(2) + "qu" + "ayac";
    }
    return "";
  }
  
  function firstVowelIndex(word) {
    let vowels = "aeiou";
    let vIndex = -1;
    let flag = false;
    let wordCharacters = word.split("");
    wordCharacters.forEach(function (element, index) {
      if (vowels.includes(element.toLowerCase()) && flag === false) {
        vIndex = index;
        flag = true;
      }
    });
    return vIndex;
  }
  
  function treatVowel(word) {
    let vIndex = firstVowelIndex(word);
    if (vIndex === 0) {
      return word + "acedu";
    } else {
      return "";
    }
  }
  
  function treatConsonant(word) {
    let vIndex = firstVowelIndex(word);
    if (vIndex > 0 || vIndex === -1) {
      let firstPart = word.slice(0, vIndex);
      let secondPart = word.slice(vIndex);
      return secondPart + firstPart + "ayac";
    } else {
      return "";
    }
  }
  
  function wPigLatin(word) {
    let result = treatQu(word);
    if (result === "") {
      result = treatConsonant(word);
    }
    if (result === "") {
      result = treatVowel(word);
    }
    return result;
  }
  
  
  function pigLatin(sentence) {
      let sentenceWords = sentence.split(" ");
      let wordResult = "";
      sentenceWords.forEach(function(element){
          wordResult += wPigLatin(element) + " ";
  
      });
      return wordResult.trim();
  }
  
  // UI Logic:
  
  $(document).ready(function(){
      $("form#word-counter").submit(function(event){
          event.preventDefault();
          const text = $("#text-passage").val();
          const encrypt = pigLatin(text);
          $("#word").val(encrypt);
      })
  })