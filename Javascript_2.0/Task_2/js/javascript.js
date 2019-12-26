let button = document.querySelector(".btn1");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let firstname = document.querySelector(".firstname");
let lastname = document.querySelector(".lastname");
button.onclick = function() {
  //   console.log(input.value);
  //   input.value = "";
  let b = input1.value;
  let c = input2.value;
  firstname.innerHTML = b;
  lastname.innerHTML = c;
  console.log("Hello" + " " + b + " " + c);
  input1.value = "";
  input2.value = "";
};

let input3 = document.querySelector(".input3");
let btn2 = document.querySelector(".btn2");

btn2.onclick = function() {
  let t = input3.value;
  t = parseInt(t);
  console.log(t);
};

let btn3 = document.querySelector(".btn3");
let firstnumber = document.querySelector(".firstnumber");

let lastnumber = document.querySelector(".lastnumber");

let sum = document.querySelector(".sum");

btn3.onclick = function() {
  let g = +firstnumber.value;
  let h = +lastnumber.value;
  sum.innerHTML = g + h;
  firstnumber.value = "";
  lastnumber.value = "";
};
