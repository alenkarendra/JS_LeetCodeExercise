// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/692/challenge-problems/4424/

function fizzbuzz(maxN) {
  var n = maxN;
  let answer = [];

  for (let i = 0; i <= n; i++) {
    // Start from 1 to match the FizzBuzz logic
    let divisibleBy3 = i % 3 === 0;
    let divisibleBy5 = i % 5 === 0;
    let divisibleBy7 = i % 7 === 0;

    let currentStr = "";

    if (divisibleBy3) {
      currentStr += "Fizz";
    }

    if (divisibleBy5) {
      currentStr += "Buzz";
    }

    if (divisibleBy7) {
      currentStr += "Tozz";
    }

    if (currentStr.length === 0) {
      currentStr += i.toString();
    }

    answer.push(currentStr);

    // if (divisibleBy3 && divisibleBy5) {
    //   answer.push("FizzBuzz");
    // } else if (divisibleBy3) {
    //   answer.push("Fizz");
    // } else if (divisibleBy5) {
    //   answer.push("Buzz");
    // } else {
    //   answer.push(i.toString());
    // }
  }

  console.log(answer);
}

fizzbuzz(200);
