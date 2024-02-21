// 경로와 require라는 내장함수로 불러올 수 있다.
// const calc = require("./calc");

// console.log(calc);
// console.log(calc.add(1,2));
// console.log(calc.sub(1,2));

// console.log("hello nodejs package")

const randomColor = require("randomcolor");

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);

