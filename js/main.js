'use strict';




// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

// const arr = [`a`, `b`, `c`, `d`];
// let string = arr.toString();
// let str1 = string.replace(/\,/g,"+");
// let str2 = str1.replace(/\+c/,",c");
//
// console.log(str2);



// 2. Создайте массив arr с элементами 2, 5, 3, 9.
// Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

// const arr = [`2`, `5`, `3`, `9`];
// let mult1 = arr[0]*arr[1];
// let mult2 = arr[2]*arr[3];
// let result = mult1 + mult2;
// console.log(result);



// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// const arr2 = arr.flat();
// console.log(arr2[3]);

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

// const obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj.js.shift());


// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

// const arr = [];
// arr.push('x');
// arr.push('xx');
// arr.push('xxx');
// arr.push('xxxx');
// console.log(arr);


// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

// const arr = [];
// arr.push('1');
// arr.push('22');
// arr.push('333');
// arr.push('4444');
// console.log(arr);



// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив,
// а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].



// function  arrayFill(value,kolVo){
//     let arr = [];
//     for (let i = 0; i<kolVo; i++){
//         arr.push(value);
//     }
//     console.log(arr);
// }
//
// arrayFill('x',5);


// 8. Дан массив с числами. Узнайте сколько элементов
// с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.


// const arr = [2,4,1,3,6,7,10,9,20,15,20,21,11,2,12];
//
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) {
//         console.log(i+1);
//         break;
//     }
// }


// let nameLengths = arr.map(function(value,index,array) {
//
//     let arrSumElements =  arr.reduce(function(accum, current) {
//     return accum + current;
//     }, 0);
//
//     return console.log(arrSumElements);
// });





// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//
// function arrReverse(arr){
//     let arrReversed = [];
//     for (let i = 14; i>=0;i--){
//         arrReversed.push(arr[i]);
//     }
//     console.log(arrReversed);
// }
// arrReverse(arr);




// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const arr = [[3, 2, 3], [7, 2], [6,2]];
//
// let summArrElements = arr.flat().reduce(function(accum, current) {
//     return accum + current;
// }, 0);
//
// console.log(summArrElements);


// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
//
// let arrSumElements =  arr.flat(2).reduce(function(accum, current) {
//     return accum + current;
// }, 0);
//
// console.log(arrSumElements);





