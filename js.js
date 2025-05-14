'use strict';

// function test(num1, num2, func) {
//   return num1 + num2 + func(5);
// }
// const func = function (num) {
//   return num * 10;
// };
// console.log(test(1, 2, func));

//arrow function
//task1
// function greet(name) {
//   return 'Hello, ' + name + '!';
// }
// let greet1 = name => 'hello,' + name +'!';
// console.log(greet1('Bar'))

//task2
// const formatName = function (firstName, lastName) {
//   return (
//     lastName.toUpperCase() +
//     ', ' +
//     firstName[0].toUpperCase() +
//     firstName.slice(1)
//   );
// };

// console.log(formatName('bar', 'rose'));

// let formatName1 = (firstName, lastName) =>
//   lastName.toUpperCase() +
//   ', ' +
//   firstName[0].toUpperCase() +
//   firstName.slice(1);

// console.log(formatName1('bar', 'rose'));

//task3
// let func1 = function () {
//   console.log('!!!');
// };
// func1()

// let func2 = () => console.log('!!!')
// func2();

//task4
// let result = filter([1, 2, 3, 4, 5], function (elem) {
//   if (elem > 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// let result1= filter([1,2,3,4,5], (elem)=>elem>);

//task5
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// let doubledNumbers1 = numbers.map(elem => elem*2)

// console.log(doubledNumbers1)

//task6
// const ages = [18, 21, 16, 30, 25];

// const adults = ages.filter(function (age) {
//   return age >= 18;
// });

// let adults1 = ages.filter(age => age>=18)
// console.log(adults1)

//task7
// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// fruits.forEach(fruit => console.log(fruit))

//task8
// const greetings = ['hello', 'world', 'javascript'];
// let greetings1 = greetings.map(elem => elem.toUpperCase());
// console.log(greetings1);
