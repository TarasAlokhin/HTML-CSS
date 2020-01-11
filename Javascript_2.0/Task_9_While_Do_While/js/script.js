let k = 0;

while (k < 5) {
  console.log("k: " + k);
  k++;
}

let z = 0;
let sum = 0;
while (z < 15) {
  sum = sum + z;
  z++;
}
console.log("sum = " + sum);
//****
//****
//****

let out = document.querySelector(".out");
let p = 0;
let outStr = "";
while (p < 4) {
  let p1 = 0;
  while (p1 < 4) {
    outStr += "*";
    p1++;
  }
  outStr += "<br>";
  p++;
}
out.innerHTML = outStr;

let out1 = document.querySelector(".out1");
let y = 0;
let flag = 3;
let outStr1 = "";

while (y < 4) {
  let y1 = 0;
  while (y1 < 4) {
    if (y1 < flag) {
      outStr1 += "&nbsp";
    } else {
      outStr1 += "()";
    }
    y1++;
  }
  flag--;
  outStr1 += "<br>";
  y++;
}

out1.innerHTML = outStr1;

// Home tasks
// Task_1
// Кнопка btn2 запускає функцію. Функція повинна виводити в out2 рядок виду:

// 1 2 3 4 5 6 7 8 9 ... 49 50

let out2 = document.querySelector(".out2");
let btn2 = document.querySelector(".btn2");
let out_2 = "";
let j = 0;
btn2.onclick = () => {
  while (j <= 50) {
    out_2 += j + "&nbsp";
    j++;
  }
  out2.innerHTML = out_2;
};

// Task_2
// Кнопка btn3 запускає функцію . Функція повинна виводити в out3 рядок виду:

// 2 4 6 ... 122
let out3 = document.querySelector(".out3");
let btn3 = document.querySelector(".btn3");
let out_3 = "";
let q = 2;

btn3.onclick = () => {
  while (q <= 122) {
    if (q % 2 == 0) {
      out_3 += q;
    } else {
      out_3 += "&nbsp";
    }
    q++;
  }
  out3.innerHTML = out_3;
};

// Task_3
// Кнопка btn4 запускает функцию. Функция должна выводить в out4 строку вида:

// 25 24 23 22 . . 7
let out_4 = "";
let t = 25;

document.querySelector(".btn4").onclick = () => {
  while (t >= 7) {
    out_4 += t + " ";
    t--;
  }
  document.querySelector(".out4").innerHTML += out_4;
};

// Task_4
// Кнопка btn5 запускає функцію. Функція повинна виводити в out5 рядок виду:

// 77_74_71_68_65_62_ ... _38_35_

// від 77 до 35 c кроком 3. Роздільник - знак підкреслення. Завдання вирішується за допомогою циклу while.
let btn5 = document.querySelector(".btn5");
let out5 = document.querySelector(".out5");
let out_5 = "";
let m = 77;
btn5.onclick = () => {
  while (m >= 35) {
    out_5 += m + "_";
    m = m - 3;
  }
  out5.innerHTML = out_5;
};
