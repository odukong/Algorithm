let fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim();
let result = true;
let i = 0; // 문자열 인덱스

while (i < input.length && result) {
  if (input[i] === "p" && input[i + 1] === "i") {
    i += 2;
  } else if (input[i] === "k" && input[i + 1] === "a") {
    i += 2;
  } else if (input[i] === "c" && input[i + 1] === "h" && input[i + 2] === "u") {
    i += 3;
  } else {
    result = false;
  }
}

if (result) {
  console.log("YES");
} else {
  console.log("NO");
}
