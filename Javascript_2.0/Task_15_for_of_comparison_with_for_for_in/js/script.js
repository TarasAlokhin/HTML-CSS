let arr = [4, 7, 9];

let allP = document.getElementsByTagName("p");

let qP = document.querySelectorAll("p");
console.log(arr);

console.log(allP);

console.log(qP);
//Method_1

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Method_2

// for (let key in arr) {
//   console.log(arr[key]);
// }

// Method_3

// for (let item of arr) {
//   console.log(item);
// }

// Перебираємо колекцію за допомогою циклу for

//Method_1

// for (let i = 0; i < allP.length; i++) {
//   console.log(allP[i]);
// }

//Method_2
// for (let key in allP) {
//   console.log(allP[key]);
// } не підходить для перебору колекції

//Method_3
for (let item of allP) {
  console.log(item);
}
