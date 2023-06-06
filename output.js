// const x = "1";
// const y = "2";
// console.clear();
// console.log(x, y);

// Format specifiers
// %s format variable to string
// %d
// %i
// %0
// console.log("I am %s and my age is %d", "Madan", 28);
// console.count("I am Madan");
// console.count("I am Mohan");
// console.count("I am Madan");
// console.countReset("I am Madan");
// console.count("I am Madan");

// Stack Trace
// const function1 = () => console.trace();
// const function2 = () => function1();
// function2();

// Time takes to execute the function
// const sum = () => console.log(`Sum of 2 and 3 is ${2 + 3}`);
// const multiply = () => console.log(`Multiplication of 2 and 3 is ${2 * 3}`);
// const measureTime = () => {
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("multiply()");
//   multiply();
//   console.timeEnd("multiply()");
// };
// measureTime();

const progressBar = require("progress");
const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20,
});
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
const chalk = require("chalk");
console.log(chalk.bgRedBright("This is nodejs tutorial"));
