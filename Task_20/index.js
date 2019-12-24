let person = {
  name: "Taras",
  lastName: "Alokhin",
  age: 22
};

console.log(person);

person.name = "Misha";

console.log(person);

// let persons = [
//   {
//     name: "Taras",
//     lastName: "Alokhin",
//     age: 22,
//     hobbies: ["IT", "Unicycle", "Sport", "Walking"]
//   },
//   {
//     name: "Misha",
//     lastName: "Shevchuk",
//     age: 21,
//     hobbies: ["IT", "Unicycle", "Sport", "Walking"]
//   },
//   {
//     name: "Volodya",
//     lastName: "Repetskuy",
//     age: 23,
//     hobbies: ["IT", "Unicycle", "Sport", "Walking"]
//   }
// ];
// persons.forEach(person => {
//   let object = `Hello, my name is ${person.name} ${person.lastName}, I am ${
//     person.age
//   } years old.
//   I have hobbies: ${person.hobbies.join(", ")}.`;
//   console.log(object);
// });

// console.log(
//   `Hello, my name is ${person.name} ${person.lastName}, I am ${person.age} years old`
// );
