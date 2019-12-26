let a = 19;

if (a != 9) {
  //true
  console.log("Yes");
} else {
  console.log("else");
}

const button = document.querySelector("button");
const input = document.querySelector(".age");

button.onclick = () => {
  let num = +input.value;
  if (num >= 16 && num <= 60) {
    console.log("Welcome");
  } else if (num > 60) {
    console.log("What??");
  } else {
    console.log("No, You can't come");
  }

  switch (num) {
    case 15:
      console.log("потерпи рік");
      break;
    case 16:
      console.log("YESS!");
      break;
    default:
      console.log("ok");
  }
};

let c = 3;
console.log(c == 3 || c == 7);

//Home task
// Task_1
let i = 5;

let b = document.querySelector(".b");

let out = document.querySelector(".out");

b.onclick = () => {
  if (i == 4) {
    out.innerHTML = "true";
  } else {
    out.innerHTML = "false";
  }
};

// Task_2;

let z = 225;
let d = 226;

let out_1 = document.querySelector(".out_1");
let out_2 = document.querySelector(".out_2");

out_1.onclick = () => {
  if (z > d) {
    console.log(z);
    out_2.innerHTML = z + " " + "це число більше з двох";
  } else {
    console.log(d);
    out_2.innerHTML = d + " " + "це число більше за" + " " + z;
  }
};
