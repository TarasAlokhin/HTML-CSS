//Змнні та способи виведення даних

console.log("Taras");
alert("Taras");
document.getElementById("name").innerHTML = "Taras";
document.querySelector("#one").innerHTML = 25;

let b;
let a = document.querySelector("#one");
let c;
c = document.querySelector(".header");

a.innerHTML = 99999;

c.innerHTML = 666;

document.getElementById("one").innerHTML = "Hello World";
document.getElementById("two").innerHTML = 12 * 12;

document.querySelector("span").innerHTML = " " + "world";
document.querySelector(".three").innerHTML = "<h3>taras</h3>";

document.querySelector(".four").innerHTML = "<h4>Taras</h4>" + "<p>Alokhin</p>";

let y1 = 6;
let y2 = 3;

document.querySelector(".division").innerHTML = y1 / y2;

let d2 = 5;

console.log(d2);
