let a = 0;
let b = false;

console.log(a == b ? true : false);

let arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.pop(0);
console.log(arr);

let arr = [1, 2, 3, 4, 5];

arr.push(6);
let lastItem = arr.pop();
arr.unshift(0);
let firstItem = arr.shift();
//
// console.log('lastItem', lastItem);
// console.log('firstItem', firstItem);
// console.log('array', arr);

let arr3 = [];
let x = 0;

for (let i = 0; i < 3; i++) {
  arr3.push([]);
  for (let j = 0; j < 3; j++) {
    if (j === x) {
      arr3[i].push(1);
    } else {
      arr3[i].push(0);
    }
  }
  x++;
}

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

arr3.forEach(row => console.log(row));

for (let row of arr3) {
  console.log(row);
}

arr3.map(row => {
  console.log(row);
});

Міша Шевчук, [11.01.20 22:25]
let ANIMAL = Object.freeze({cat: 'cat', dog: 'dog', chicken: 'chicken'});

function makeVoice(animal) {
    let voice;
    switch (animal) {
        case "dog":
            voice = 'wof';
            break;
        case "cat":
            voice = 'meow';
            break;
        case "chicken":
            voice = 'co-co-co';
            break;
    }
    console.log(voice);
}

function makeVoice1(animal) {
    let voice;
    if (animal === 'dog') {
        voice = 'wof'
    } else if (animal === 'cat') {
        voice = 'meow'
    } else if (animal === 'chicken') {
        voice = 'co-co-co'
    } else {
        voice = 'default'
    }
    console.log(voice);
}

makeVoice(ANIMAL.dog);
makeVoice1(ANIMAL.cat);