// document.querySelector("button").onclick = () => {
//   console.log(document.querySelector("#one").value);
//   document.querySelector(
//     "button"
//   ).style.backgroundColor = document.querySelector("#one").value;
// };

// document.querySelector("#one").oninput = () => {
//   console.log(document.querySelector("#one").value);
//   document.querySelector("span").innerHTML = document.querySelector(
//     "#one"
//   ).value;
// };

// document.querySelector("#btn_1").onclick = () => {
//   console.log(document.querySelector("#i_2").value);
//   let myCheckbox = document.querySelector("#i_2");
//   console.log(myCheckbox.checked);
//   if (myCheckbox.checked) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// };

// document.querySelector("#btn_2").onclick = event => {
//   event.preventDefault();
//   //   let text = document.querySelector("#two");
//   //   console.log(text.value);
//   let form = document.querySelector("form");
//   console.log(form);
//   console.log(form.elements.two.value);
//   console.log(form.elements.n2.value);
// };
// Home task
// Task_1
let btn1 = document.querySelector(".btn1");

btn1.onclick = () => {
  alert("Task_1");
};

// Task_2
let inp_1 = document.querySelector(".inp_1");

inp_1.onclick = () => {
  alert("Task_2");
};
// Task_3
let p = document.querySelector(".paragraph");

p.onclick = () => {
  alert("Task_3");
};
// Task_4
document.querySelector(".btn_2").onclick = () => {
  let myCheckbox = document.querySelector(".check");
  if (myCheckbox.checked) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};
// Task_5
let check_5 = document.querySelector(".check_5");
document.querySelector(".btn_5").onclick = () => {
  let myCheckbox = document.querySelector(".check_5");
  if (myCheckbox.checked) {
    console.log(check_5.value);
  } else {
    console.log("False");
  }
};

// Task_6
document.querySelector(".btn_6").onclick = () => {
  let hidden = document.querySelector(".inp_6");
  alert(hidden.value);
};
// Task_7
let password = document.querySelector(".inp_7");

document.querySelector(".btn_7").onclick = () => {
  alert(password.value);
  if (password <= 6) {
    console.log("Палоль повинен бути 6 і більше символів");
  } else {
    console.log("YES");
  }
};
