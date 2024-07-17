// While Loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let a = 1;
let sum = 0;
while (a < 100) {
  sum = sum = a;
  a = a + 1;
}
console.log(sum);

let b = 1;
while (b <= 10) {
  console.log(b);
  b = b + 1;
}

let c = 1;
while (c <= 10) {
  if (c % 2 == 1) {
    console.log(c);
  }
  c++;
}

let d = 1;
let total = 0;
while (d <= 10) {
  total = total + d;
  d = d + 2;
}
console.log(total);

let e = 10;
while (e <= 100) {
  if (e === 50) {
    console.log("halfway there");
  } else if (e === 100) {
    console.log("You made it");
  } else {
    console.log("Checkpoint");
  }
  e = e + 10;
}
// For Loop

for (let f = 10; f <= 100; f = f + 10) {
  console.log(f);
}
for (let g = 1; g <= 10; g = g + 10) {
  console.log(g);
}
for (let h = 1; h <= 20; h = h + 2) {
  console.log(h);
}

for (let k = 10; k >= 1; k--) {
  console.log(k);
}

function printNumbers(start, end) {
  for (let num = start; num <= end; num++) {
    console.log(start, end);
  }
}

// Example usage:
printNumbers(1, 10);

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
let num = 5;
console.log(`${num}! = ${factorial(num)}`);

//SpellLetters ("Joy")
function SpellLetters(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
}

//Homework
//task1

function transformString(str) {
  let transformed = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      // check if index is even
      transformed += str[i].toUpperCase();
    } else {
      transformed += str[i];
    }
  }
  return transformed;
}

// Example usage:
let input = "hello";
let output = transformString(input);
console.log(output); // Output: "hElLo"

//task2

function changeUpperCase(input) {
  let newWord = "";
  for (let i = 0; i < input.length; i++) {
    if (i % 2 == 1) {
      newWord = newWord + input[i].toUpperCase();
    } else {
      newWord = newWord + input[i];
    }
  }

  console.log(newWord);
}
changeUpperCase("hello");

//task3

function checkForY(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "y") {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
checkForY("why");

//task4

function findLongerWord(word1, word2) {
  if (word1.length > word2.length) {
    return word1;
  } else {
    return word2;
  }
}

// Example usage:
let longerWord = findLongerWord("coffee", "water");
console.log(longerWord); // Output: "coffee"
