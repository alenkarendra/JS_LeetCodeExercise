// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false  //yenomgnidoc

function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(palindrome("codingmoney"));
console.log(palindrome("katak"));
