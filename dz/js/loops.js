//1

for (let i = 25; i >= 1; i--) {
  console.log(i);
}

// АБО
// let a = 0;
// const b = 25;

// for (let a = b; a >= 1; a--) {
//   console.log(a);
// }

let i = 25;
while (i <= 25 && i > 0) {
  console.log(i);
  i--;
}

//2
for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

let j = 10;
while (j >= 10 && j <= 50) {
  if (j % 5 === 0) {
    console.log(j);
  }
  j++;
}

//3

let sum1 = 0;
const fin = 100;

for (let i = 1; i <= fin; i++) {
  sum1 += i;
}
console.log(sum1);

let sum2 = 0;
let s = 1;
const fin2 = 100;
while (s > 0 && s <= fin2) {
  sum2 += s;
  s++;
}
console.log(sum2);
