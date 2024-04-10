//Average Calculator

//Evenet listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);

//Event function
function calcAverage() {
  //Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  //Process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let round2Places = num1.toFixed(2);
  let tanget = Math.tan(num3);
  let random = Math.random() * (num1 - num2) + num2;

  //Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum3").innerHTML = sum;
  document.getElementById("pro3").innerHTML = product;
  document.getElementById("remainder").innerHTML = remainder;
  document.getElementById("power").innerHTML = power;
  document.getElementById("decimal").innerHTML = round2Places;
  document.getElementById("tangent").innerHTML = tanget;
  document.getElementById("random").innerHTML = random;
}
