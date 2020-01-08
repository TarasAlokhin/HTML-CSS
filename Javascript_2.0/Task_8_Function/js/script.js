// function one() {
//   console.log(5);
// }

// one();

// function two(x, y) {
//   console.log(x * y);
// }

// two(6, 7);

// Hoeme work
// Task_1
// Написати функцію , яка при натисканні кнопки виводить на сторінку змінну а
let a = 10;
let out1 = document.querySelector(".out1");
let btn1 = document.querySelector(".btn1");

function one() {
  out1.innerHTML = a;
}
btn1.onclick = one;
// Task_2
// Змінимо Task_1. Зараз вона тільки виводить змінну в заздалегідь заданий блок. Давайте зробимо так, щоб функція, була більш гнучкою. Нехай тепер функція t2 повертає змінну a2. Оскільки функція повертає змінну, то ім'я функції з дужками (виклик функції) можна вбудовувати в вирази. Зверніть увагу, як змінився виклик функції.
let b = 12;
let out2 = document.querySelector(".out2");
let btn2 = document.querySelector(".btn2");

function two() {
  return b;
}
btn2.onclick = function() {
  out2.innerHTML = two();
};
// Task_3
// Наша попередня функція, сильно все ще залежна від зовнішніх змінних. Давайте зробимо її більш універсальною. Нехай функція  приймає 2 параметра і виводить їх множення. Допишіть код функції так, щоб вона повертала множення двох чисел, переданих їй як параметр x, y. Протестуємо функцію на двох прикладах, за допомогою кнопок btn3 і btn3_1.

let out3 = document.querySelector(".out3");
let btn3 = document.querySelector(".btn3");
let btn3_1 = document.querySelector(".btn3_1");

let three = (x, y) => {
  return x * y;
};

btn3.onclick = () => {
  out3.innerHTML = three(3, 4);
};
btn3_1.onclick = () => {
  out3.innerHTML = three(5, 6);
};

// Task_4
// Напишіть функцію, яка приймає ваш рік народження і обчислює ваш вік.
let inp4 = document.querySelector(".inp4");
let out4 = document.querySelector(".out4");
let btn4 = document.querySelector(".btn4");
let i = 0;
let four = () => {
  let year = inp4.value;
  return year;
};
btn4.onclick = four1 = () => {
  out4.innerHTML = 2019 - four() + " years";
};
