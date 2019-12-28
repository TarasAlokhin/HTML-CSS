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
