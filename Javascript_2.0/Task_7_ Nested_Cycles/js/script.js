// let out = document.querySelector(".out");

// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 10; k++) {
//     out.innerHTML += k;
//   }
//   out.innerHTML += "<br>";
// }

// for (let i = 1; i <= 10; i++) {
//   //   out.innerHTML += "3*" + i + "=" + i * 3 + "<br>";
//   for (let k = 1; k <= 10; k++) {
//     out.innerHTML += `${i}*${k}=${k * i}<br>`;
//   }
//   out.innerHTML += "<hr>";
// }

// Home task
// Task_1
//За допомогою вкладених циклів,вивести на сторінку наступне: "***_***_***_"

let out1 = document.querySelector(".out1");

for (i = 0; i < 3; i++) {
  for (k = 0; k < 3; k++) {
    out1.innerHTML += "*";
  }
  out1.innerHTML += "_";
}
// Task_2
// За допомогою вкладеного циклу вивесети на сторінку наступне:
// "1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_"
let out2 = document.querySelector(".out2");

for (i = 1; i < 4; i++) {
  out2.innerHTML += i + "<br>";
  for (k = 1; k < 4; k++) {
    out2.innerHTML += "*" + "_";
  }
  out2.innerHTML += "<br>";
}

out2.innerHTML += "<hr>";

// додатково зробив ту саму задачу за допомогою просто циклу

for (i = 1; i < 4; i++) {
  out2.innerHTML += i + "<br>";
  out2.innerHTML += "*_*_*_" + "<br>";
}

// Task_3
// За допомогою вкладених циклів висести
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
let out3 = document.querySelector(".out3");

for (i = 1; i < 5; i++) {
  for (k = 1; k < 4; k++) {
    out3.innerHTML += "*_";
  }
  out3.innerHTML += "<br>";
}

// Task_4
// // С помощью вложенных циклов, нарисуйте строку:
// зроблено за допопмогою простого циклу

// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
let out4 = document.querySelector(".out4");

for (i = 0; i <= 10; i++) {
  out4.innerHTML += i + "_" + (10 - i) + "_";
}
// Task_5
// За допомогою вкладених циклів вивести:
// 101010
// 101010
// 101010
let out5 = document.querySelector(".out5");

for (i = 0; i < 3; i++) {
  for (k = 0; k < 3; k++) {
    out5.innerHTML += 1;
    out5.innerHTML += 0;
  }
  out5.innerHTML += "<br>";
}
