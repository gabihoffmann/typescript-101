"use strict";
const inputOne = document.getElementById("num1");
const inputTwo = document.getElementById("num2");
const button = document.getElementById("sum");
const result = document.getElementById("result");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    let addResult = sum(Number(inputOne.value), Number(inputTwo.value));
    console.log(addResult);
    result.innerHTML = String(addResult);
});
