let i_5 = document.querySelector(".i_5");
let b_5 = document.querySelector(".b_5");
let out_5 = document.querySelector(".out_5");

b_5.onclick = () => {
  let a = i_5.value;
  if (a < 0) {
    out_5.innerHTML = "m";
  } else if (a == 0) {
    out_5.innerHTML = "0";
  } else {
    out_5.innerHTML = "1";
  }
};
