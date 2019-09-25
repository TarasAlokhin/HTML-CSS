function getResult() {
  const string = document.getElementById("input").value;
  let values = string.split(" ");
  let result = null;

  for (let i = 0; i < values.length; i++) {
    if (i === 2) {
      result = calculation(Number(values[0]), Number(values[2]), values[1]);
    }
    if (i % 2 === 1) {
      result = calculation(result, Number(values[i + 1]), values[i]);
    }
  }
  document.getElementById("input").value = result;

  //   const result = calculation(num1, num2, option);
  //   document.getElementById("input").value = result;
}

function btnClick(value) {
  let string = document.getElementById("input").value;
  if (value === "clear")
    return (document.getElementById("input").value = string.slice(0, -1));
  document.getElementById("input").value += value;
}

function calculation(num1, num2, option) {
  let result = null;
  switch (option) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      if (num2 === 0) return "Can`t divide by 0";
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "+":
      result = num1 + num2;
      break;
  }
  return result;
}

window.onkeypress = function pressKeys(event) {
  if (document.getElementById("input").value.split(" ")) {
    switch (event.keyCode) {
      case 8:
        alert("fsd");
        break;
      case 43:
        document.getElementById("input").value += " + ";
        break;
      case 45:
        document.getElementById("input").value += " - ";
        break;
      case 42:
        document.getElementById("input").value += " * ";
        break;
      case 47:
        document.getElementById("input").value += " / ";
        break;
      case 49:
        document.getElementById("input").value += "1";
        break;
      case 50:
        document.getElementById("input").value += "2";
        break;
      case 51:
        document.getElementById("input").value += "3";
        break;
      case 52:
        document.getElementById("input").value += "4";
        break;
      case 53:
        document.getElementById("input").value += "5";
        break;
      case 54:
        document.getElementById("input").value += "6";
        break;
      case 55:
        document.getElementById("input").value += "7";
        break;
      case 56:
        document.getElementById("input").value += "8";
        break;
      case 57:
        document.getElementById("input").value += "9";
        break;
      case 48:
        document.getElementById("input").value += "0";
        break;
      case 46:
        document.getElementById("input").value += ".";
        break;
      case 127:
        document.getElementById("input").value = document
          .getElementById("input")
          .value.slice(0, -1);
        break;
      case 13:
        this.getResult();
        break;
      default:
        break;
    }
  }
};
