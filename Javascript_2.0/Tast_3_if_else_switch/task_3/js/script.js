//Task_3
let button = document.querySelector(".btn1");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let first = document.querySelector(".first");

button.onclick = function() {
  let b = input1.value;
  let c = input2.value;

  if (b > c) {
    first.innerHTML = b;
  } else {
    first.innerHTML = c;
  }
  input1.value = "";
  input2.value = "";
};
