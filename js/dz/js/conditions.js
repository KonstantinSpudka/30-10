// const isNumber = Number(prompt("Введіть чило = 10"));

// if (isNumber === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Не ВІРНО");
// }

//---------

const test = true;

if (test) {
  console.log("Вірно");
} else {
  console.log("Не ВІРНО");
}

const test1 = true;

if (!test1) {
  console.log("Не ВІРНО");
} else {
  console.log("Вірно");
}

const isNumber = Number(prompt("Введіть СУММУ коштів"));
const a = (isNumber / 100) * 3;
const b = (isNumber / 100) * 5;

if (isNumber > 500) {
  console.log("Сума зі знижкою дорівнює :>> ", isNumber - a);
} else if (isNumber > 800) {
  console.log("Сума зі знижкою дорівнює :>> ", isNumber - b);
} else {
  console.log("Знижки не має. До сплати :>> ", isNumber);
}
