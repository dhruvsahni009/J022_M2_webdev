// Setup
let stringCont = document.getElementById("str-var");
let intCont = document.getElementById("int-var");
let sumFuncAns = document.getElementById("sum-func-answer");
let if_elseAns = document.getElementById("if-else-header-answer");

// Variables
let stringVar = "Dhruv";
stringCont.innerHTML = stringVar;
let integerVar = 22;
stringCont.innerHTML = integerVar;

// Sum function
let sumFunc = (num1, num2) => {
  return num1 + num2;
};

sumFuncAns.innerHTML = sumFunc(1, 2);

// Decision making
let age = 21;
if (age >= 21) {
  if_elseAns.innerHTML = "Yes!";
} else {
  if_elseAns.innerHTML = "No!";
}

// Loops
for (let i = 1; i < 11; i++) {
  document.write(i * 3 + "<br>");
}
