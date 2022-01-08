const inputOne = document.getElementById("num1") as HTMLInputElement;
const inputTwo = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("sum")!;
const result = document.getElementById("result") as HTMLSpanElement;

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", function () {
  let addResult = sum(Number(inputOne.value), Number(inputTwo.value));
  console.log(addResult);
  result.innerHTML = String(addResult);
});
