// if - розгалуження

// if (умова){
// гілка true;
// }
// else{
// гілка false;
// }

// Булевськи змінні пишуться з is

// const isLogged = true;

// if (isLogged) {
//   console.log("You are logged in )))) ");
// } else {
//   console.log("Try again (((");
// }

// const isEnougMoney = true;

// if (isEnougMoney) {
//   console.log("Операцію схвалено! :) ");
// } else {
//   console.log("Операцію не схвалено! ;(");
// }

// // Перевірити чи скінченне число ввів користувач і вивести повідомлення

// const imputValue = Number(prompt("Input number")); // =>55, Infinity, NaN

// if (Number.isFinite(imputValue)) {
//   console.log("number  ");
// } else {
//   console.log("not a finite number  ");
// }

// const age = 18;

// // Умовні операції
// console.log("age > 18 :>> ", age > 18);
// console.log("age < 18 :>> ", age < 18);
// console.log("age >= 18 :>> ", age >= 18);
// console.log("age <= 18 :>> ", age <= 18);

// // Не срога рівність / Не рівність - ПОГАНО!
// console.log("age == 18 :>> ", age == 18);
// console.log("age == 18 :>> ", age == "18");

// console.log("age != 18 :>> ", age != 18); // Не рівність
// console.log("age != 18 :>> ", age != "18");

// // Строга рівність
// console.log("age === 18 :>> ", age === 18);
// console.log("age === 18 :>> ", age === "18");
// console.log("age !== 18 :>> ", age !== "18");

// Якщо користувач повнолітній, то привітати, як що ні - доступ заборонено

// const age = 20;

// if (age >= 18) {
//   console.log("Wellcome!");
// } else {
//   console.log("Accece is denied");
// }

// Скорочена форма if

// При вході перевірити, чи користувач повнолітній
// Як що ні - то видати попередження про обмеженний доступ
// Вивисти привітання

// if(умова){
//   гілка true
// }

// const age = 18;

// if (age < 18) {
//   console.log("Деякі функції будуть обмеженні");
// }

// console.log("Вітаємо на сайтті!");

// Якщо не повнолітній Wellcome
// Іначе є сертификат, то Wellcome
// Іначе - вакцініровитися

const age = 20;
const isVaction = true;

// if (age < 18) {
//   console.log("Wellcome");
// }
// else {
//   if (isVaction) {
//     console.log("Wellcome");
//   }
//   else {
//     console.log("Please go to Vakcine");
//   }
// }

// if (умова){
// гілка true;
// }
// else if (умова){
// else if (умова){
// гілка false;
// }

if (age < 18) {
  console.log("Wellcome");
} else if (isVaction) {
  console.log("Wellcome");
} else {
  console.log("Please go to Vakcine");
}

// Ввести 2 числа. Вивести більше

const imputValue = Number(prompt("Input number"));
const imputValue2 = Number(prompt("Input number 2"));

if (imputValue > imputValue2) {
  console.log("Більше число = ", imputValue);
} else if (imputValue < imputValue2) {
  console.log("Більше число = ", imputValue2);
} else if (imputValue === imputValue2) {
  console.log("Введенні числа рівні", imputValue + "=" + imputValue2);
}
