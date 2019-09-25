function main() {
  let string = document.getElementById("string").value;
  let arr = string.split(" ");
  let num1 = Number(arr[0]);
  let num2 = Number(arr[2]);
  let option = arr[1];
  let res = calculation(num1, num2, option);

  document.getElementById("string").value = string + " = " + res;
}

function number(element) {
  document.getElementById("string").value += element.id;
}

function option(element) {
  document.getElementById("string").value += ` ${element.id} `;
}

function calculation(num_1, num_2, option) {
  let result;
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
  return result;
}
