function isPalindrome(word) {
  // Write your algorithm here
  if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')){
    return true;
  }else{
    return false;
  }
}

/* 
  once the word passed in, it will be splitted into letters. Then, it will be reversed
  and will be joined back as a string. 
*/

/*
  if the passed word and splitted/reversed/joined word are the same, the function
  will return true, otherwise false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
