let i_4 = document.querySelector(".i_4");
let b_4 = document.querySelector(".b_4");
let out_4 = document.querySelector(".out_4");

b_4.onclick = () => {
  let a = i_4.value;
  if (a >= 18) {
    out_4.innerHTML = 1;
  } else {
    out_4.innerHTML = 0;
  }
  i_4.value = "";
};
