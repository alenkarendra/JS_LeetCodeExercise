// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    // Classic Syntax
    // if (charMap[char]) {
    //   charMap[char] = charMap[char] + 1;
    // } else {
    //   charMap[char] = 1;
    // }

    // Simple Syntax
    charMap[char] = ++charMap[char] || 1;
  }

  //   Old Syntax
  //   for (const [key, value] of Object.entries(charMap)) {
  //     if (value > max) {
  //       max = value;
  //       maxChar = key;
  //     }
  //   }

  // Newer Syntax
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }

  //   return maxChar;
  return charMap;
}

console.log(maxChar("abbbbcccccccccccd"));
