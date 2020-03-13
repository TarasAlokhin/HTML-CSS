// if (вираз) інструкція

if (true) console.log("Its true");
if (false) console.log("Its true");

var n = 5;
if (n > 3) {
  console.log(n);
}

if (n < 3) {
  console.log(n);
  console.log("hello");
} else if (n > 4) {
  console.log("n is more than 4");
}

var name = "Taras",
  homecity;

if (name === "John") {
  homecity = "Boston";
} else if (name === "Taras") {
  homecity = "Smyha";
} else if (name === "Bill") {
  homecity = "LA";
}

console.log(homecity);

switch (name) {
  case "John":
    homecity = "Boston";
    break;
  case "Taras":
    homecity = "Smyha";
    break;
  case "Bill":
    homecity = "LA";
  default:
    homecity = "Kiev";
}

console.log(homecity);

// вираз1 ? вираз2 : вираз3

var x = 10;

var text = x > 10 ? "x більше 10" : x < 10 ? "х менше 10" : "x рівно 10";

console.log(text);

if (x > 10) {
  text = "x більше 10";
} else if (x < 10) {
  text = "х менше 10";
} else {
  text = "x рівне 10";
}

console.log(text);
