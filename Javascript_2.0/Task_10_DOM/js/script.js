const one = document.querySelector(".one");

one.style.width = "150px";

one.style.paddingBottom = "40px";

one.classList.add("two", "three"); //

one.classList.remove("three");

const toggle = document.querySelector(".toggle");

toggle.onclick = function() {
  this.classList.toggle("three");
};

//атрибути data

console.log(one.getAttribute("data"));
console.log(document.querySelector("link").getAttribute("href"));

one.setAttribute("data-num", 6);

let gas = document.querySelectorAll(".gas");

for (let i = 0; i < gas.length; i++) {
  gas[i].onclick = function() {
    let gallons = document.querySelector(".gallons").value;
    let amount = this.getAttribute("data");
    console.log(gallons * amount);
  };
}

let a = document.createElement("div");

a.innerHTML = "Hello!";
a.classList.add("four");
a.onclick = function() {
  alert("hello");
};

document.querySelector(".test").appendChild(a);

// Home_Task
// Task_1
// Створити функцію при натисканні на текст "Color", текст і зона width = 200px та paddingBottom = 40px; буде зафарбовуватись в червоний колір

let p = document.createElement("div");
p.innerHTML = "Color";
p.classList.add("u-1");
p.onclick = function() {
  p.style.width = "200px";
  p.style.paddingBottom = "40px";
  p.style.background = "red";
};

document.querySelector(".test_1").appendChild(p);

let tog = document.createElement("button");
tog.classList.add("css_1");
tog.innerHTML = "Green";
tog.onclick = function() {
  tog.style.width = "200px";
  tog.style.paddingBottom = "40px";
  tog.style.background = "green";
};

document.querySelector(".test_2").appendChild(tog);
