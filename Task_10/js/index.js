function calculation() {
  let num_1 = Number(document.getElementById("num_1").value);
  let num_2 = Number(document.getElementById("num_2").value);
  let option = document.getElementById("option").value;
  let result = null;

  switch (option) {
    case "+":
      result = num_1 + num_2;
      break;
    case "-":
      result = num_1 - num_2;
      break;
    case "*":
      result = num_1 * num_2;
      break;
    case "/":
      if (num_2 == 0) {
        result = "error";
      } else {
        result = num_1 / num_2;
      }
      break;
  }
  document.getElementById("out").innerHTML = result;
}
