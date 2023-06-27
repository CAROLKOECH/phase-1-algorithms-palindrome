function isPalindrome(word) {
  const lowercaseWord = word.toLowerCase();
  let start = 0;
  let end = lowercaseWord.length - 1;
  
  while (start < end) {
    if (lowercaseWord[start] !== lowercaseWord[end]) {
      return false;
    }
    
    start++;
    end--;
  }
  
  return true;
}

// Test Cases
console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("a"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("ab"));
