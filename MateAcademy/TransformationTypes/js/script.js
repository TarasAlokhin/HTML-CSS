console.log(Number("555"));
console.log(typeof Number("555"));
console.log(String(444));
console.log(typeof String(444));
console.log(Boolean(1));
console.log(typeof Boolean(1));

console.log(!!5);
console.log(!!0);
console.log(typeof (345 + ""));
console.log(typeof +"454");

var number = 22;
console.log(typeof number.toString());
number = 45;
console.log(typeof number.toString(3));
number = 5;
console.log(typeof number.toString(2));

console.log(typeof false.toString());

console.log(parseInt("45 px", 10));
console.log(parseFloat("12.45 em"));

console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(+"");

console.log(!!"");

var n = 6;
console.log(n.value);
n = "hello";
console.log(n.value);
n = null;
console.log(n.value);
