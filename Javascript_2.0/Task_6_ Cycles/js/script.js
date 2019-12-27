// // for, while
// let out = document.querySelectorAll(".out");
// console.log(out);
// // out.style.background = "red";

// for (let i = 0; i < out.length; i = i + 1) {
//   console.log(out[i]);
//   out[i].style.background = "red";
//   out[i].onclick = two;
// }

// function two() {
//   console.log("YES");
// }

// let b = document.getElementsByClassName("out");
// console.log(b);

// for (let i = 0; i < b.length; i++) {
//   b[i].style.border = "3px solid black";
// }

// document.querySelector("button").onclick = () => {
//   let r = document.querySelectorAll('input[type="radio"]');
//   console.log(r);
//   for (let i = 0; i < r.length; i++) {
//     if (r[i].checked) {
//       console.log(r[i].value);
//     }
//   }
// };

// let out = "";
// for (let i = 0; i < 10; i++) {
//   if (i == 6) continue;
//   out += i + " ";
//   if (i == 6) break;
// }

// document.querySelector("#out").innerHTML = out;
// Home task
// Task_1

document.querySelector(".btn1").onclick = () => {
  for (let i = 0; i <= 50; i++) {
    document.querySelector(".out1").innerHTML += i + " ";
  }
};

// Task_2

document.querySelector(".btn2").onclick = () => {
  for (let i = 0; i <= 122; i = i + 2) {
    document.querySelector(".out2").innerHTML += i + " ";
  }
};

// Task_3

document.querySelector(".btn3").onclick = () => {
  for (let i = 25; i >= 7; i--) {
    document.querySelector(".out3").innerHTML += i + " ";
  }
};
// Task_4

document.querySelector(".btn4").onclick = () => {
  for (let i = 77; i >= 35; i = i - 3) {
    document.querySelector(".out4").innerHTML += i + "_";
  }
};

// Task_5

document.querySelector(".btn5").onclick = () => {
  for (let i = 1; i <= 17; i++) {
    document.querySelector(".out5").innerHTML += i + "_*";
  }
};
// Task_6
document.querySelector(".btn6").onclick = () => {
  for (let i = 1; i <= 3; i++) {
    document.querySelector(".out6").innerHTML += "******" + "<br />";
  }
};
