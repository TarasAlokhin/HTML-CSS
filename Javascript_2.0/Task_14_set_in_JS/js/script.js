let a = new Set();
a.add(1);
a.add(2);
a.add("Hello");
a.add(1);
a.add("1"); // ===
// a.clear();
// a.delete("Hello"); // delete element
console.log(a);
console.log(a[0]); //!!!no!!!
console.log(a.length); //!!!no!!!
console.log(a.size); // кількість елементів
// Перевіряємо вміст
console.log(a.has(2)); //+
console.log(a.has("2")); // -

// for(let i = 0 ; i< a.size) a[i]

// for (let i in a)

for (let item of a) {
  console.log(item);
}

let arr = [1, 2, 3, 4, 5, 6, 7, "hello", 5, 3, 2, 1];

let b = new Set(arr); //!!!
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);
console.log(bArr[2]);
