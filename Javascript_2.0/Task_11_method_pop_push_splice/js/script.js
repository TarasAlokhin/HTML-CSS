const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const b = ["a", "b", "c", "d", "e", "f"];

console.log(a.length);

console.log(a.push(10, 11, 12, 14, 15, 16, 19));

console.log(a);

b.push("j", "e");

console.log(b);

console.log(b.pop());

console.log(b.pop());

console.log(b);

delete a[3]; // залишає empty, не зменшує довжину масиву

console.log(a);

a.splice(3, 4, "h1");

console.log(a);

//shift  unshift

a.shift();

console.log(a);

a.unshift(0, 1);

console.log(a);

// Home task
// Task_1
// Є масив j, кнопка btn_1, input inp_1. Напишіть функцію , яка при натисканні читає inp_1 і додає його в масив. Після чого виводить масив в .out-1.
let j = [];
let inp_1 = document.querySelector(".inp_1");
let btn_1 = document.querySelector(".btn_1");
let out_1 = document.querySelector(".out_1");
btn_1.onclick = function() {
  j.push(inp_1.value);
  console.log(j);
  out_1.innerHTML = j;
  inp_1.value = "";
};
// Task_2
// Напишіть функцію, яка застосовує метод pop до масиву d1, а потім виводить його в .out_2
let btn_2 = document.querySelector(".btn_2");
let out_2 = document.querySelector(".out_2");
btn_2.onclick = function() {
  j.pop();
  console.log(j);
  out_2.innerHTML = j;
};
// Task_3
// Напишіть функцію , яка застосовує метод shift до масіви j, і забуте виводить його в .out_3
let btn_3 = document.querySelector(".btn_3");
let out_3 = document.querySelector(".out_3");
btn_3.onclick = function() {
  j.shift();
  console.log(j);
  out_3.innerHTML = j;
};
