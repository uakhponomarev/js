// function goUp(str) {
//     return str.charAt(0).toUpperCase()+str.slice(1);
// }
// console.log(goUp("вася")=='Вася');
// console.log(goUp('')=='');
// function checkSpam(str) {
//     if (str.toLowerCase().indexOf('viagra') > 0 || str.toLowerCase().indexOf('xxx') > 0) {
//         return true;
//     }
//     return false;
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// var person = {};
// person.age = 25;
// var key = 'age';

// console.log( person[key] ,person); 

// function isEmpty(obj) {
//     for (var key in obj)return false;   
//     return true;
// }

// var schedule = {};

// console.log(isEmpty(schedule)); // true
// schedule.age=34;
// ShadowRoot.name='name';
// schedule["8:30"] = "подъём";

// console.log(isEmpty(schedule)); // false
// "use strict";

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// var salaries={};
// function sumSalaries(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }
// console.log(sumSalaries(salaries));
// "use strict";

// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };

// // ... ваш код выведет "Петя"
// function countBigSalary(obj) {
//     let name = 'нет сотрудников', salary = 0;
//     for (let key in obj) {
//         if (obj[key] > salary) {
//             name = key;
//             salary = obj[key];
//         }
//     }
//     return name;
// }
// salaries={}
// console.log(countBigSalary(salaries));

// до вызова
// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);

// // после вызова
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function multiplyNumeric(obj) {
//     for (const key in obj) {
//         if (isNumeric(obj[key])) {
//             obj[key] *= 2;
//         }
//     }
// }
// var name = 'Bill';
// var lastName='Gates';
// var ob = {
//     name,
//     lastName
// }
// console.log(ob);



// console.log(Math.floor(Math.random() * 5));


// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

// console.log(arr[getRndInteger(0, arr.length - 1)]);

// function calc() {
//     let arr = [], sum = 0;
//     while (prompt('Enter number')) {
//         arr.push(+prompt('Enter number'));3455
//     }
//     console.log(arr);
// }
// calc();
// function filterRange(inputArr, a, b) {
//     let arr = [];
//     for (let index = 0; index < inputArr.length; index++) {
//         let el = inputArr[index];
//         if (a <= el && el <= b) {
//             arr.push(el);
//         }
//     }
//     return arr;
// }

// var arr = [5, 4, 3, 8, 0];

// var filtered = filterRange(arr, 3, 5);
// console.log(arr);
// console.log(filtered);
// console.log(arr);
// // теперь filtered = [5, 4, 3]
// // arr не изменился
// function createArr(n) {
//     let array = [];
//     for (let index = 0; index < n - 1; index++) {
//         array[index] = index + 2;
//     }
//     return array;
// }

// function erat(arr) {
//     let el;
//     for (let index = 0; index < arr.length; index++) {
//         el = arr[index];
//         for (let j = index + 1; j < arr.length; j++) {
//             if (arr[j] % el === 0) {
//                 arr[j]='';
//             }
//         }
//     }
//     return arr;
// }

// function sum(array) {
//     let sum = 0;
//     for (let index = 0; index < array.length; index++) {
//         if (array[index]) sum += array[index];
//     }
//     return sum;
// }

// let arrr = createArr(100);
// let er = erat(arrr);
// let s = sum(er);

// console.log(arrr);
// console.log(er);
// console.log(s);
// function getMaxSubSum(array) {
//     let sum = 0, temp = [];
//     for (let index = 0; index < array.length; index++) {
//         let element = array[index];
//         if (isNeg(element)) {
//             temp.push(sum);
//             sum = 0;
//             continue;
//         }
//         else {
//             sum += element;
//         }

//     }

//     function isNeg(el) {
//         if (el <= 0) return true;
//     }
//     function max(arr) {
//         let max = 0;
//         for (let index = 0; index < arr.length; index++) {
//             if (max < arr[index]) max = arr[index];
//         }
//         return max;
//     }
// console.log('ARRRAAAYYYY : ' + temp);
//     console.log(max(temp));
// }


// function getMaxSubSum(arr) {
//     var maxSum = 0,
//       partialSum = 0;
//     for (var i = 0; i < arr.length; i++) {
//       partialSum += arr[i];
//       maxSum = Math.max(maxSum, partialSum);
//       if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
//   }

//   console.log(( getMaxSubSum([-1, 2, 3, -9]) )); // 5
//   console.log(( getMaxSubSum([-1, 2, 3, -9, 11])) ); // 11
//   console.log(( getMaxSubSum([-2, -1, 1, 2]) )); // 3
//   console.log(( getMaxSubSum([100, -9, 2, -3, 5]) )); // 100
//   console.log(( getMaxSubSum([1, 2, 3]) )); // 6
//   console.log(( getMaxSubSum([-1, -2, -3]) )); // 0

// var user = {
//     name: "Петя",
//     age: 30
//   }

//   var keys = Object.keys(user);

//   console.log(( keys ));

// var obj = {
//     className: 'open menu'
// }
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'

// // console.log((obj.className)); // "open menu new me"

// function addClass(obj, cls) {
//     let tmp = obj.className.split(' ');
//     if (tmp.indexOf(cls) < 0){
//         obj.className = obj.className.concat(' ' + cls);
//     } 
//     console.log(obj.className);
// }
// function camelize(str) {
//     strArray = str.split('-');
//     for (let i = 1; i < strArray.length; i++) {
//         strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
//     }
//     return strArray.join('');
// }

// console.log(camelize("background-color") == 'backgroundColor');
// console.log(camelize("list-style-image") == 'listStyleImage');
// console.log(camelize("-webkit-transition") == 'WebkitTransition');
// var obj = {
//     className: 'open menu'
// };

// function removeClass(obj, cls) {
//     arr = obj.className.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === cls) {
//             arr.splice(i--, 1);
//         }
//     }
//     obj.className = arr.join(' ');
// };
// // console.log(obj.className);
// // removeClass(obj, 'open');
// console.log(obj.className);
// removeClass(obj, 'open'); // obj.className='menu'
// console.log(obj.className);
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// console.log(obj.className);
// var list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };


// function printList(list) {
//     for (let i = 0; i < 2; i++) {
//         if (list) {
//             console.log(list.value);
//             list = list.next;
//             i = 0;
//             continue;
//         }
//     }
// }
// printList(list);

// var list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printList2(list) {
//     console.log(list.value);
//     if (list.next) {
//         printList2(list.next);
//     }

// }
// printList2(list);

// var list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printReverseList(list) {
//     let i=0;
//     if (list.next) {
//         console.log('REVERSE '+i);
//         printReverseList(list.next);
//     }
//     console.log((list.value));
// }



// function printList(list) {
//     let i=0;
//     console.log((list.value)); // (1)  
//     if (list.next) {
//         console.log('US '+i);
//         printList(list.next); // (2)
//     }
// }

// printList(list);
// printReverseList(list);
// function aclean(array) {
//     let tmp = [], newAr = [];
//     for (let i = 0; i < array.length; i++) {
//         let el = array[i].toLowerCase().split('').sort().join('');
//         if (tmp.indexOf(el) < 0) {
//             tmp.push(el);
//             newAr.push(array[i]);
//         }
//     }

//     return newAr;
// }


// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// console.log((aclean(arr))); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

// function aclean(arr) {
//     // этот объект будем использовать для уникальности
//     var obj = {};

//     for (var i = 0; i < arr.length; i++) {
//       // разбить строку на буквы, отсортировать и слить обратно
//       var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

//       obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
//     }

//     var result = [];

//     // теперь в obj находится для каждого ключа ровно одно значение
//     for (var key in obj) result.push(obj[key]);

//     return result;
//   }

//   var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

//   console.log( aclean(arr) );

// function unique(array) {
//     let newAr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (newAr.indexOf(array[i]) < 0) newAr.push(array[i]);
//     }
//     return newAr;
// }

// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];

// console.log((unique(strings))); // кришна, харе, 8-()

// function unique(array) {
//     let obj = {};
//     for (let i = 0; i < array.length; i++) {
//         obj[array[i]] = 0;
//     }
//     return Object.keys(obj);
// }

// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];

// console.log((unique(strings))); // кришна, харе, 8-()
// let arr = [1,2,3,4,5,6,,7,8], i=0;

// arr.forEach(function callback(currentValue, index, array) {
//     console.log( this === window );
//     i++;
//     this[currentValue]=currentValue;
// });
// console.log(i);

// var v = [5, 2, 16, 4, 3, 18, 20];
// v={a:23,b:33};
//   console.log( Object.getOwnPropertyDescriptor(v,'b') );
// var arr = [1, -1, true, 2, -2, 3, 'df', false];
// var n = 0;
// var positiveArr = arr.filter(() => (n++ % 2 !== 0));
// function name(params) {
//     return params>0;
// }
// let arr2= arr.filter(name);
// console.log(arr2); 
// console.log((positiveArr)); // 1,2,3
// var arr = [1, 2, 3, 4, 5],i=0;
// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function (sum, current) {
//     console.log(' SUM : '+sum + ' VAL : '+ current);
//     i++;
//     return sum + current;
// },'ddd');
// console.log(i);
// console.log((result)); // 15
// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }

// arrLength = arr.map((val)=>val.length);
// console.log((arrLength));
// let arr = [1, 2, 3, 4, 5];


// function getSums(arr) {
//     let arr2 = [];
//     arr.reduce(
//         (sum, val) => {
//             sum += val;
//             arr2.push(sum);
//             return sum;
//         }
//         , 0);
//     return arr2;
// }
// console.log(getSums(arr));
// console.log(getSums([-2,-1,0,1]));
// function f(x) {
//     // "use strict"; // для браузеров с поддержкой строгого режима
//   console.log(arguments instanceof Array);
//     arguments[0] = 5;
//     console.log( x ); // не 5, а 1! Переменная "отвязана" от arguments
//   }

//   f(1);
// var vasya = {
//     age: 21,
//     name: 'Вася',
//     surname: 'Петров'
//   };

//   var user = {
//     isAdmin: false,
//     isEmailConfirmed: true
//   };

//   var student = {
//     university: 'My university'
//   };

//   // добавить к vasya свойства из user и student
//   copy(vasya, user, student);

//   console.log( vasya.isAdmin ); // false
//   console.log( vasya.university ); // My university

//   function copy() {
//     var dst = arguments[0];

//     for (var i = 1; i < arguments.length; i++) {
//       var arg = arguments[i];
//       for (var key in arg) {
//         dst[key] = arg[key];
//       }
//     }

//     return dst + arguments.callee.caller;
//   }
// console.log(vasya);
// f1();

// function f1() {
//   console.log( arguments.callee.caller ); // null, меня вызвали из глобального кода
//   f2();
// }

// function f2() {
//   console.log( arguments.callee.caller ); // f1, функция, из которой меня вызвали
//   f3();
// }

// function f3() {
//   console.log( arguments.callee.caller ); // f2, функция, из которой меня вызвали
// }
// function f(x) {
//     console.log(arguments.length);
// }
// f(undefined); // 1
// f(); // 0
// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// };
// sum();
// sum(1);
// sum(1,2);
// sum(1,2,3);
// sum(1,2,3,4);
// console.log( new Date().getTimezoneOffset());
// console.log(Math.floor(performance.now()));
// console.log(Date.now());
// let t = performance.now();
// let arr = [];
// for (let i = 0; i < 1000000; i++) {
//     arr[i] = {};
// }
// console.time('1');
// console.log(arr);
// console.timeEnd('1');
// console.log(arr);
// console.log(performance.now() - t);
// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;

// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }

// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }

// function bench(f) {
//   for (var i = 0; i < 10000; i++) f(arr);
// }

// console.time("All Benchmarks");

// console.time("walkIn");
// bench(walkIn);
// console.timeEnd("walkIn");

// console.time("walkLength");
// bench(walkLength);
// console.timeEnd("walkLength");

// console.timeEnd("All Benchmarks");
// var date = new Date(2014, 11, 31, 12, 30, 0);

// var options = {
//   era: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   weekday: 'long',
//   timezone: 'UTC',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric'
// };
// console.log(date.toLocaleString('ya',options));
// console.log(date.toDateString());
// console.log(date.toUTCString());
// console.log(date.toISOString());
// console.log(Date.now());
// let date = new Date(1987, 5, 5,16,00);
// console.log(date);
// function getWeekDay(obDate) {
//     switch (obDate.getDay()) {
//         case 0:
//             return 'ВС';
//         case 1:
//             return 'ПН';
//         case 2:
//             return 'ВТ';
//         case 3:
//             return 'СР';
//         case 4:
//             return 'ЧТ';
//         case 5:
//             return 'ПТ';
//         case 6:
//             return 'СБ';
//     }
// }
// console.log(getWeekDay(date));
// var date = new Date(2014, 0, 3); // 3 января 2014
// console.log(date.toLocaleString('ru', { weekday: 'long',era:'short'}));
// var date = new Date(2012, 0, 3);  // 3 янв 2012
// console.log(date);
// function getLocalDay(date) {
//     var days = [,'пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];

//     return days[date.getDay()];
//   }
// console.log( getLocalDay(date) ); 
// var date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 января 2014)
// function getDateAgo(date, day) {
//     const msInDay = 86400000;
//     let ms = date.getTime() - msInDay * day;
//     return new Date(ms).getDate();
// }
// function getDateAgo(date, days) {
//     var dateCopy = new Date(date);

//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
//   }
// function getLastDayOfMonth(year, month) {
//     let dt;
//     dt = new Date(year, month + 1, 0);

//     console.log(dt.getDate());
// }
// getLastDayOfMonth(2012, 1);
// getLastDayOfMonth(2011, 1);
// getLastDayOfMonth(2016, 7);
// let f = 3;
// const g = 4;
// var h = 5;
// console.log(window.f,window.g,window.h);
// console.log("a" in window); // true,  т.к. есть свойство window.a
// console.log(a); // равно undefined,  присваивание будет выполнено далее
// console.log(f); // function ...,  готовая к выполнению функция
// console.log(g); // undefined, т.к. это переменная, а не Function Declaration
// console.log(k);
// var a = 5;
// function f() { /*...*/ }
// var g = function() { /*...*/ };
// k=9;
// {
//     var k;
// }
// console.log("a" in window); // true,  т.к. есть свойство window.a
// console.log(a); // равно undefined,  присваивание будет выполнено далее
// console.log(f); // function ...,  готовая к выполнению функция
// console.log(g);
// console.log(k);
// if ("a" in window) {
//     a = 1;
//   }
//   var a;

//   console.log( a );
// function name(params) {
//     let g = 1;
//     return () => g++;
// }
// let i = name();
// console.log(i());
// console.log(i());
// console.log(i());
// console.log(i());
// console.log(i());
// console.log(i());
// // console.log(name.g);
// say('Вася'); // Что выведет? Не будет ли ошибки? 

// var phrase = 'Привет';

// function say(name) {
//   console.log( name + ", " + phrase );
// }
// var value = 0;

// function f() {
//   if (1) {
//     value = true;
//   } else {
//     value = false;
//   }

//   console.log( value );
// }

// f();
// console.log(value);
// function test() {

//     console.log( window );

//     var window = 5;

//     console.log( window );
//   }

//   test();
// var a = 5;

// (function() {
//   console.log(a)
// })()
// function makeCounter() {
//     var currentCount = 1;

//     return function() {
//       var currentCount;
//     //   console.log(curentCount);
//       // можно ли здесь вывести currentCount из внешней функции (равный 1)?
//       return 1;
//     };
//   };
//   var g=makeCounter();
//   console.log(g());
// var currentCount = 1;

// function makeCounter() {
//   return function() {
//     return currentCount++;
//   };
// }

// var counter = makeCounter();
// var counter2 = makeCounter();

// console.log( counter() ); // 1
// console.log( counter() ); // 2

// console.log( counter2() ); // 3
// console.log( counter2() ); //4
// var a = 1;

// function getFunc() {
//   var a = 2;

//   var func = new Function('', 'console.log(a)');

//   return func;
// }

// console.log(getFunc()()); // 1, из window
// function count() {
//     var cont = 1;
//     return {
//         next: function () {
//             return cont++;
//         },
//         set: function (val) {
//             cont = val;
//         },
//         reset: function () {
//             cont = 1;
//         }
//     }
// }
// var counter = count();
// console.log(counter.next()); // 1
// console.log(counter.next()); // 2

// counter.set(5);
// console.log(counter.next()); // 5
// counter.reset();
// function sum(a) {
//     return (b) => a + b;
// }

// console.log(sum(1)(2));
// console.log(sum(5)(-1));
// function makeBuffer() {
//     var arr = [];
//     return function (params) {
//         if (arguments.length == 0) return arr.join('');
//         arr.push(arguments[0] + '');
//     };
// }
// function makeBuffer() {
//     var txt = '';
//     return function(val){
//         if (arguments.length === 0) return txt;
//         txt += val;
//     };
// }
// var buffer = makeBuffer();
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// // получить текущее значение
// console.log(buffer()); // Замыкания Использовать Нужно!
// var buffer2 = makeBuffer();
// buffer2(0);
// buffer2(1);
// buffer2(0);
// console.log(buffer2()); // '010'
// function makeBuffer() {
//     var txt = '';
//     function res(val) {
//         if (arguments.length === 0) return txt;
//         txt += val;
//     };
//     res.clear = function () {
//         txt = '';
//     }
//     return res;
// }
// var buffer = makeBuffer();
// buffer("Тест");
// buffer(" тебя не съест ");
// console.log(buffer()); // Тест тебя не съест
// buffer.clear();
// console.log(buffer()); // ""
// var users = [{
//     name: "Вася",
//     surname: 'Иванов',
//     age: 20
// }, {
//     name: "Петя",
//     surname: 'Чапаев',
//     age: 25
// }, {
//     name: "Маша",
//     surname: 'Медведева',
//     age: 18
// }];

// function byField(par) {
//     return (a, b) => a[par] > b[par] ? 1 : -1;

// }
// users.sort(byField('name'));
// users.forEach(function (user) {
//     console.log(user.name);
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function (user) {
//     console.log(user.name);
// }); // Маша, Вася, Петя
// function filter(arr, fn) {
//     var newArr = [], copy;
//     copy = arr;
//     console.log();
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i];
//         if (fn(el)) newArr.push(el);
//     }
//     return newArr;
// }


// function inBetween(a, b) {
//     return function (x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(arr) {
//     return (el) => {
//         let newAr = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (el === arr[i]) return true;
//         }
//     };
// }

// /* .. ваш код для filter, inBetween, inArray */
// var arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(filter(arr, function (a) {
//     return a % 2 == 0
// })); // 2,4,6

// console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6

// console.log(filter(arr, inArray([1, 2, 10]))); // 1,2

// function makeArmy() {

//     var shooters = [];

//     for (var i = 0; i < 10; i++) {

//         var shooter = function my() { // функция-стрелок
//             console.log(my.i); // выводит свой номер
//         };
//         shooter.i = i;
//         shooters.push(shooter);
//     }

//     return shooters;
// }
// function makeArmy() {

//     var shooters = [];

//     for (var i = 0; i < 10; i++) {

//         var shooter = (function (x) {

//             return function () {
//                 console.log(x);
//             };

//         })(i);

//         shooters.push(shooter);
//     }

//     return shooters;
// }
// function makeArmy() {

//     var shooters = [];

//     for (var i = 0; i < 10; i++)(function (i) {

//         var shooter = function () {
//             console.log(i);
//         };

//         shooters.push(shooter);

//     })(i);

//     return shooters;
// }

// var army = makeArmy();

// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...
//   // .. все стрелки выводят 10 вместо 0,1,2...9
// var user = {
//   name: "Вася",
//   hi: function () { console.log(this.name); },
//   bye: function () { console.log("Пока"); }
// };

// user.hi(); // Вася (простой вызов работает)

// // а теперь вызовем user.hi или user.bye в зависимости от имени
// user.name == "Вася" ? user.hi : user.bye; // undefined
// (user.bye)();
// user.bye();
// var arr = ["a", "b"];

// arr.push(function() {
//   console.log( this ===arr );
// })

// arr[2](); // console.log(window)+=> this ===arr
// var obj = {
//   go: function() { console.log(this) }
// }

// obj.go()
// "use strict"

// var obj, method;

// obj = {
//   go: function() { console.log(this); }
// };

// obj.go();            // (1) object

// (obj.go)();          // (2) object

// (method = obj.go)();      // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined

// var user = {
//   firstName: "Василий",

//   export: this
// };

// console.log(user.export.firstName);
// console.log(user.export);
// console.log(user.firstName);
// var name = "";

// var user = {
//   name: "Василий",

//   export: function() {
//     return this;
//   }

// };

// console.log( user.export().name );
// var name = "";

// var user = {
//   name: "Василий",

//   export: function () {
//     var ob = {
//       name: 'Me',
//       value: this
//     };
//     return ob;
//   }
// };

// console.log(user.export().value.name);//Высилий
// var calculator = {

//   read: function () {
//     this.a = +prompt('a?');
//     this.a = this.a || 0;
//     this.b = +prompt('b?');
//     this.b = this.b || 0;
//   },
//   sum: function () {
//     return this.a + this.b;
//   },
//   mul: function () {
//     return this.a * this.b;
//   },
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());
// var ladder = {
//   step: 0,
//   up: function () { // вверх по лестнице
//     this.step++;
//     return this;
//   },
//   down: function () { // вниз по лестнице
//     this.step--;
//     return this;
//   },
//   showStep: function () { // вывести текущую ступеньку
//     console.log(this.step);
//   }
// };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1

// ladder.up().up().down().up().down().showStep(); // 1
// let ob = {
//   a:333,
//   b:'OB',
//   valueOf:function () {
//     console.log('ValueOf');
//     return this.a;
//   },
//   toString: function(){
//     console.log('Tostring');
//     return this.b;
//   }
// }
// // document.write(new Date);
// // document.write('<br>');
// document.write(+ob);
// document.write('<br>');
// document.write(ob+'');
// console.log( ['x,t'] == 'x,t' );
// console.log( [1] == 1 );
// console.log([,]=='');
// console.log([]=='');
// var foo = {
//   toString: function() {
//     return 'foo';
//   },
//   valueOf: function() {
//     return 2;
//   }
// };
// console.log( foo.toString() );//foo
// console.log( foo + 1 );//3
// console.log( foo + "3" );//23
// console.log( [] == [] ); // false
// console.log( [] == ![] ); // true
// new Date(0) - 0     //0
// new Array(1)[0] + ""//undefined''
// ({})[0]             //[0]
// [1] + 1             //2
// [1,2] + [3,4]       //error
// [] + null + 1       //''null1
// [[0]][0][0]         //0
// ({} + {})           //NaN

// new Date(0) - 0 = 0 // (1)
// new Array(1)[0] + "" = "undefined" // (2)
// ({})[0] = undefined // (3)
// [1] + 1 = "11" // (4)
// [1,2] + [3,4] = "1,23,4" // (5)
// [] + null + 1 = "null1" // (6)
// [[0]][0][0] = 0 // (7)
// ({} + {}) = "[object Object][object Object]" // (8)
// function sum(first) {
//   let total = first;
//   function inner(sec) {
//     total += sec;
//     return inner;
//   }
//   inner.toString = () => total;
//   return inner;
// }
// console.log(sum(1)(2));//== 3; // 1 + 2
// console.log(sum(1)(2)(3)); //== 6; // 1 + 2 + 3
// console.log(sum(5)(-1)(2)); //== 6
// console.log(sum(6)(-1)(-2)(-3)); //== 0
// console.log(sum(0)(1)(2)(3)(4)(5));// == 15
// function NameIS(a) {
//   this.a = a;
//   this.toString=()=>'NAME OBJECT';
//   toString=()=>'NAME STATIC';
// }
// var ob = new NameIS(777);
// console.log(ob);
// console.log(NameIS.toString);
// function BigAnimal() {

//   this.name = "Мышь";
//   this.toString = () => 'ONJ';
//   // <-- возвратим примитив
// }

// console.log(new BigAnimal().name); // Мышь, получили this (а Годзилла пропал)
// console.log(new BigAnimal()); // Мышь, получили this (а Годзилла пропал)

// function squareDigits(num) {
//   var arrNumber = num.toString().split(''), res = '', i;
//   for (i = 0; i < arrNumber.length; i++)res += arrNumber[i] * arrNumber[i];
//   return +res;
// }
// console.log(squareDigits(9119));
// let ob ={};
// function A() { 
//   return ob;
//  }
// function B() { 
//   return ob;
//  }

// var a = new A;
// var b = new B;

// console.log(a == b); // true
// function Calculator() {

//   this.read = function () {
//     this.a = +prompt('a?');
//     this.b = +prompt('b');
//   }
//   this.sum = function () {
//     return this.a + this.b;
//   }
//   this.mul = function () {
//     return this.a * this.b;
//   }

// }
// var calculator = new Calculator();
// calculator.read();

// console.log("Сумма=" + calculator.sum());
// console.log("Произведение=" + calculator.mul());
// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('enter value');
//   }
// }
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// console.log(accumulator.value); // выведет текущее значение
// function Calc() {

//   var methods = {
//     '+': (a, b=0) => a + b,
//     '-': (a, b) => a - b,
//   }
//   this.calculate = function (str) {
//     let arr = str.split(' ');
//     let a = +arr[0], b = +arr[2], sign = arr[1];
//     return methods[sign](a, b);
//   }
//   this.addMethod = function (sign, fn) {
//     methods[sign] = fn;
//   }
// }
// let calc = new Calc;
// calc.addMethod("*", function (a, b) {
//   return a * b;
// });
// calc.addMethod("/", function (a, b) {
//   return a / b;
// });
// calc.addMethod("**", function (a, b) {
//   return Math.pow(a, b);
// });
// console.log(calc.calculate("2 ** 3")); // 8
// console.log(calc.calculate("3 + 5")); // 8
// console.log(calc.calculate("11 - 3")); // 8
// console.log(calc.calculate("2 * 4")); // 8
// console.log(calc.calculate("16 / 2")); // 8
// console.log(parseInt('0000101', 2));
// const binaryArrayToNumber = arr => {
//   return parseInt(arr.join(''), 2);
// };
// var arr = [0, 1, 1, 1,0,1];
// console.log(binaryArrayToNumber(arr));
// "use strict";

// var user = {
//   name: 'Vasya',
//   last: 'Petrov',
//   get lastName() {
//     return this.name + ' ' + this.last;
//   },
//   set lastName(val) {
//     this.last = val;
//   },
//   dad: 'Ivan',

// };

// Object.defineProperty(user, "gName", {
//   get: function () {
//     return this.name;
//   }
// });

// // Теперь попытаемся изменить это свойство.

// // в strict mode присвоение "user.name=" вызовет ошибку
// user.name;// = "Петя";
// console.log(user.gName);
// console.log(new Date(1987, 6, 1));
// console.log(user.lastName);
// user.lastName='Petr';
// console.log(user.lastName);
// let ob = { a: 777 };
// for (let el in ob) console.log(el);
// console.log(ob);
// Object.defineProperties(ob, {
//   lastName: {
//     value: 'Ivanov'
//   },
//   name: {
//     value: 'Ivan'
//   },
//   fullName: {
//     get: function () { return this.name + ' ' + this.lastName }
//   }
// });
// console.log(ob);
// // console.log(ob.fullName);
// // for (let el in ob) console.log(el);
// console.log(Object.getOwnPropertyDescriptor(ob, 'name'));
// console.log(ob);
// let desc = Object.getOwnPropertyDescriptor(ob, 'name');
// desc.writable = true;
// desc.value = 'maks';
// console.log(desc);
// delete ob.name;
// Object.defineProperty(ob, 'name', desc);
// console.log(Object.getOwnPropertyDescriptor(ob, 'name'));
// console.log(ob);
// var obj = {
//   test: 5
// };
// var descriptor = Object.getOwnPropertyDescriptor(obj, 'test');

// // заменим value на геттер, для этого...
// delete descriptor.value; // ..нужно убрать value/writable
// delete descriptor.writable;
// descriptor.get = function() { // и поставить get
//   console.log( "Preved :)" );
// };

// // поставим новое свойство вместо старого

// // если не удалить - defineProperty объединит старый дескриптор с новым
// delete obj.test;

// Object.defineProperty(obj, 'test', descriptor);

// obj.test; // Preved :)
// "use strict";
// function User(fullName) {
//   this.fullName = fullName;
//   this.fName = this.fullName.split(' ')[0];
//   this.lName = this.fullName.split(' ')[1];

// }

// var vasya = new User("Василий Попкин");
// var firn = vasya.fullName.split(' ')[0];
// var last = vasya.fullName.split(' ')[1];
// Object.defineProperty(vasya, 'firstName', {
//   get: function () {
//     return this.fName;
//   },
//   set: function (val) {
//     this.fName = val
//   },
// });
// Object.defineProperty(vasya, 'lastName', {
//   get: function () {
//     return this.lName
//   },
//   set: function (val) {
//     this.lName = val
//   },

// });
// Object.defineProperty(vasya, 'fullName', {
//   get: function () {
//     return this.fName + ' ' + this.lName;
//   }

// });
// console.log(vasya.firstName); // Василий
// console.log(vasya.lastName); // Попкин
// // запись в lastName
// vasya.lastName = 'Сидоров';
// console.log(vasya.fullName); // Василий Сидоров
// function User(fullName) {
//   this.fullName = fullName;
//   Object.defineProperties(this, {
//     firstName: {
//       get: function () {
//         return this.fullName.split(' ')[0];
//       },
//       set: function (val) {
//         this.fullName = val + ' ' + this.fullName.split(' ')[1];
//       }
//     },
//     lastName: {
//       get: function () {
//         return this.fullName.split(' ')[1];
//       },
//       set: function (val) {
//         this.fullName = this.fullName.split(' ')[0] + ' ' + val;
//       }
//     },
//   });
// }
// var vasya = new User("Василий Попкин");

// // чтение firstName/lastName
// console.log(vasya.firstName); // Василий
// console.log(vasya.lastName); // Попкин

// // запись в lastName
// vasya.lastName = 'Сидоров';
// console.log(vasya.fullName); // Василий Сидоров
// function Article() {
//   Article.count++;

//   //...
// }
// Article.count = 0;

// Article.showCount = function() {
//   console.log( this.count ); // (1)
// }

// // использование
// new Article();
// new Article();
// Article.showCount(); // (2)
// function Article() {
//   this.created = new Date();
//   Article.arr.push(this.created);
// }
// Article.arr = [];
// Article.showStats = function () {
//   console.log('Всего: ' + Article.arr.length + ', Последняя: ' + Article.arr[Article.arr.length - 1]);
// }
// new Article();
// new Article();
// Article.showStats(); // Всего: 2, Последняя: (дата)
// new Article();
// Article.showStats(); // Всего: 3, Последняя: (дата)

// function Articles() {
//   this.created = new Date();

//   Articles.count++; // увеличиваем счетчик при каждом вызове
//   Articles.last = this.created; // и запоминаем дату
// }
// Articles.count = 0; // начальное значение
// // (нельзя оставить undefined, т.к. Article.count++ будет NaN)

// Articles.showStats = function() {
//   console.log( 'Всего: ' + this.count + ', Последняя: ' + this.last );
// };

// new Articles();
// new Articles();

// Articles.showStats(); // Всего: 2, Последняя: (дата)

// new Articles();

// Articles.showStats(); // Всего: 3, Последняя: (дата)
// let ob = {
//   0: 'Some text',
//   1: 'second',
//   length: 5

// }
// console.log(ob);
// ob.join = [].join;
// console.log(ob);
// console.log(ob.join(' '));
// function print() {
//   return [].join.call(arguments, ' ');
// }
// console.log(print(1, 3, 4, null, undefined, NaN, 90, 'SOME TEXT'));
// function sumArgs() {
//   return [].reduce.call(arguments, (a, b) => a + b);
// }

// console.log(sumArgs(1, 2, 3, 4, 5));
// function applyAll(fn, arg1) {
//   return fn.apply(null, [].slice.call(arguments, 1));
// }

// // Применить Math.max к аргументам 2, -2, 3
// console.log(applyAll(Math.max, 2, -2, 3)); // 3

// // Применить Math.min к аргументам 2, -2, 3
// console.log(applyAll(Math.min, 2, -2, 3)); // -2

// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//   return [].reduce.call(arguments, function (a, b) {
//     return a + b;
//   });
// };

// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//   return [].reduce.call(arguments, function (a, b) {
//     return a * b;
//   });
// };
// console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
// console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24
// function sayHi() {
//   console.log( this.name );
// }
// sayHi.test = 5;
// console.log( sayHi.test ); // 5

// var bound = sayHi.bind({
//   name: "Вася"
// });

// console.log( bound.test ); // что выведет? почему?   undefined
// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function () {
//     console.log(this.login + ' вошёл в сайт');
//   },

//   loginFail: function () {   
//     console.log(this.login + ': ошибка входа');
//   },

//   checkPassword: function () {

//     ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//   }
// };

// user.checkPassword();
// var vasya = user;
// user = null;
// vasya.login='Petr';
// vasya.checkPassword();
// "use strict";

// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }

// var user = {
//     login: 'Василий',
//     password: '12345',

//     // метод для вызова из ask
//     loginDone: function (result) {
//         console.log(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
//     },

//     checkPassword: function () {
//         ask("Ваш пароль?", this.password,
//             this.loginDone.bind(this, true)
//             ,
//             this.loginDone.bind(this, false)
//         );
//     }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();
// "use strict";

// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }

// var user = {
//     login: 'Василий',
//     password: '12345',

//     // метод для вызова из ask
//     loginDone: function (result) {
//         console.log(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
//     },

//     checkPassword: function () {
//         var ob=this;
//         ask("Ваш пароль?", this.password,
//             function () {

//                 ob.loginDone(true);
//             },
//             function () {
//                 ob.loginDone(false);
//             }
//         );
//     }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();
// var timers = {};

// // прибавит время выполнения f к таймеру timers[timer]
// function timingDecorator(f, timer) {
//   return function() {
//     var start = performance.now();

//     var result = f.apply(this, arguments); // (*)

//     if (!timers[timer]) timers[timer] = 0;
//     timers[timer] += performance.now() - start;

//     return result;
//   }
// }

// // функция может быть произвольной, например такой:
// var fibonacci = function f(n) {
//   return (n > 2) ? f(n - 1) + f(n - 2) : 1;
// }

// // использование: завернём fibonacci в декоратор
// fibonacci = timingDecorator(fibonacci, "fibo");

// // неоднократные вызовы...
// console.log( fibonacci(10) ); // 55
// console.log( fibonacci(20) ); // 6765
// // ...

// // в любой момент можно получить общее количество времени на вызовы
// console.log( timers.fibo + 'мс' );
// var uniqueInOrder = function (iterable) {
//     var resArr = [];
//     for (var i = 0; i < iterable.length; i++) {
//         if (iterable[i] == resArr[resArr.length - 1]) {
//             continue;
//         }
//         resArr.push(iterable[i]);
//     }
//     return resArr;
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));  
// var timers = {};
// function addTimer(fn, nameT) {
//     return function () {
//         if (timers[nameT]) timers[nameT] = 0;
//         var start = performance.now();
//         var result = fn.apply(this, arguments);
//         timers[nameT] += performance.now() - start;
//         console.log(timers.nameT);
//         return result;
//     }
// }
// var fibonacci = function f(n) {
//     return (n > 2) ? f(n - 1) + f(n - 2) : 1;
// }
// fibonacci = addTimer(fibonacci, 'fiboo');
// console.log(null + null + '');
// function chkArgs(fn, arrChkFns) {
//     return function () {
//         for (let i = 0; i < arrChkFns.length; i++) {
//             for (let j = 0; j < arguments.length; j++) {
//                 if (!arrChkFns[i](arguments[j])) {
//                     console.log('ERROR : '+ arguments[j]);
//                     return;
//                 }
//             }
//         }
//         return fn.apply(this, arguments);
//     }
// };
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, 4));
// function chkNum(val) {
//     return typeof val == 'number';
// };
// function chkStr(val) {
//     return typeof val == 'string';
// };
// sum = chkArgs(sum, [chkNum]);
// console.log(sum(23, 555,3,'4',56,456,));
// function work(a) {
//     console.log('FUN WORK, a : ' + a);
// }

// function makeLogging(f, log) {
//     return function (val) {
//         log.push(val);
//         return f.apply(this, arguments);
//     }
// }

// var log = [];
// work = makeLogging(work, log);

// work(1); // 1, добавлено в log
// work(5); // 5, добавлено в log

// for (var i = 0; i < log.length; i++) {
//     console.log('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
// }
// function work(a, b) {
//     console.log(a + b); // work - произвольная функция
// }

// function makeLogging(f, log) {
//     return function () {
//         log.push(Array.from(arguments));
//         return f.apply(this, arguments);
//     }
// }
// var log = [];
// work = makeLogging(work, log);
// work(1, 2); // 3
// work(4, 5); // 9
// work(4, 5, 2, 5, 76, 7, '', 8, '', null, 'dfdf'); // 9
// for (var i = 0; i < log.length; i++) {
//     var args = log[i]; // массив из аргументов i-го вызова
//     console.log('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
// }
// function f(x) {
//     return Math.random() * x; // random для удобства тестирования
// }

// function makeCaching(f) {
//     var arr = [];
//     return function (val) {
//         if (arr.valueOf(val) > -1) return val;
//         return f.call(this, val);
//     }
// }

// f = makeCaching(f);

// var a, b;

// a = f(1);
// b = f(1);
// console.log(a == b); // true (значение закешировано)

// b = f(2);
// console.log(a == b); // false, другой аргумент => другое значение
// console.log(document.body.style);
// let box = document.getElementById('bx');
// box.style.height = '100px';
// box.style.width = '100px';
// box.style.backgroundColor = '#f00';
// box.style.backgroundColor = '#f00';
// document.body.style.backgroundColor = '#a4c7d8';
// console.log(navigator.userAgent);
// console.log(navigator.platform);
// console.log(location.href);
// box.innerHTML='<b><i>TEXT inside box</i></b>';
// console.log(box.textContent);
// // box.textContent='<p>Some text</p>';
// console.log(box.textContent);
// console.log(document.getElementsByTagName('head').length);
// let nd = document.createElement('div');
// document.body.appendChild(nd);
// nd.id = 'dev';
// nd.className = 'clDev';
// let els = document.body.childNodes;
// let els2 = document.body.children;
// console.log(els instanceof Array);
// console.log(els2 instanceof Array);
// let arEls = []
// els.forEach((el)=>console.log(el));
// els = [].slice.call(els);
// els.forEach((el)=>console.log(el));
// console.log(els instanceof Array);
// console.log(document.querySelector('.box').getElementsByTagName('label'));
// console.log(document.getElementsByTagName('table'));

// let colEl = document.querySelectorAll('ul>li');
// for (let el of colEl)
//     console.log(el.textContent);
// var lis = document.getElementsByTagName('li');
// let ind = 0;
// for (i = 0; i < lis.length; i++) {
//     console.log(lis[i].firstChild);
//     if (lis[i].querySelectorAll('li').length > 0) {
//         console.log(lis[i].firstChild + ' : ' + lis[i].querySelectorAll('li').length);
//     }
// }
// var lis = document.getElementsByTagName('li');

// for (i = 0; i < lis.length; i++) {
//   // получить название из текстового узла
//   var title = lis[i].firstChild.data;

//   title = title.trim(); // убрать лишние пробелы с концов

//   // получить количество детей
//   var childCount = lis[i].getElementsByTagName('li').length;

//   console.log(title + ': ' + childCount);
// }
// let dev = document.getElementById('bx');
// let pp = document.getElementsByTagName('p');
// console.log(dev, pp, pp.length);
// document.body.innerHTML = '';
// console.log(dev, pp, pp.length);
// console.dir(dev, pp, pp.length);
// for (let i = 0; i < document.body.childNodes.length; i++) {
//   let e = document.body.childNodes[i];
//   console.log(e + ' ==== ' + e.nodeType + ' ==== ' + e.nodeName + ' ==== ' + e.tagName);
// }
// document.body.innerHTML = "<div> TExt </div><a href='https://google.com'>Link</a>";
// document.body.style.backgroundColor = 'lightgreen';
// document.body.innerHTML += '<div>new</div>';
// document.body.getElementsByTagName('div')[1].style.cursor='pointer';
// console.log(document.body.firstChild.nodeValue);
// for (let i = 0; i < document.body.childNodes.length; i++) {
//   console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^');
//   console.log(document.body.childNodes[i]);
//   console.log(document.body.childNodes[i].data);
//   console.log(document.body.childNodes[i].nodeValue);
//   console.log('______________________________');  
// }
// console.log(window.bx.textContent);
// console.log(document.body.firstChild.nextSibling);
// console.log(document.body.firstElementChild);
// Element.prototype.newF=function(){
// console.log('NEW F DOING');
// }
// document.body.newF();
// console.log(document.getElementById('bx').matches('.box'));
// console.dir(document.querySelector.name););
// window.ida.setAttribute('href','#!!!');
// console.log(window.ida .attributes.class);
// console.log(document.getElementById('bx').innerHTML);
// document.getElementById('bx').firstElementChild.setAttribute('class','paragraf');
// console.log(document.getElementById('bx').innerHTML);
// console.log(ida.href);
// console.log(bx.className);
// bx.className += ' newName';
// bx.setAttribute('order-state', 'canceled');
// console.log( document.getElementById('bx').compareDocumentPosition(par) );
// console.log(document.body.insertBefore(dv,ida));
// let dv = document.body.appendChild(document.createElement('div'));
// dv.innerHTML = 'new DIV';
// console.log(dv);
// console.log(dv.parentElement);
// document.body.replaceChild(dv1, dv2);
// document.parentElement.nextSibling;
// console.log('FINE AFTER');
// var ul = document.createElement('ul');
// document.body.appendChild(ul);

// while (true) {
//   var data = prompt("Введите текст для пункта списка", "");

//   if (!data) {
//     break;
//   }

//   var li = document.createElement('li');
//   li.appendChild(document.createTextNode(data));
//   ul.appendChild(li);
// }
// var data = {
//     "Рыбы": {
//         "Форель": {},
//         "Щука": {}
//     },

//     "Деревья": {
//         "Хвойные": {
//             "Лиственница": {},
//             "Ель": {}
//         },
//         "Цветковые": {
//             "Берёза": {},
//             "Тополь": {}
//         }
//     }
// };
// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
//   }

//   function createTreeText(obj) { // отдельная рекурсивная функция
//     var li = '';
//     for (var key in obj) {
//       li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//       var ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
//   }

// var container = document.getElementById('container');
// createTree(container, data); // создаёт
// var data = {
//     "Рыбы": {
//         "Форель": {},
//         "Щука": {}
//     },

//     "Деревья": {
//         "Хвойные": {
//             "Лиственница": {},
//             "Ель": {}
//         },
//         "Цветковые": {
//             "Берёза": {},
//             "Тополь": {}
//         }

//     }
// };
// function createTree(container, obj) {
//     container.appendChild(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//     // если нет детей, то рекурсивный вызов ничего не возвращает
//     // так что вложенный UL не будет создан
//     if (isObjectEmpty(obj)) return;

//     var ul = document.createElement('ul');

//     for (var key in obj) {
//         var li = document.createElement('li');
//         li.innerHTML = key;
//         var childrenUl = createTreeDom(obj[key]);
//         if (childrenUl) li.appendChild(childrenUl);
//         ul.appendChild(li);
//     }
//     return ul;
// }
// function isObjectEmpty(obj) {
//     for (var key in obj) {
//         return false;
//     }
//     return true;
// }
// var container = document.getElementById('container');
// createTree(container, data);
// let el = document.createElement('div');
// el.textContent = '<span>div3</span>';
// let td = document.querySelectorAll('td');
// for (let i = 0; i < td.length; i++) {
//     td[i].style.padding = '10px';
// }
// let div4 = document.createElement('div');
//         div4.textContent = '<b>DIV4</b>';
//         div4.id = 'dv4';
//         // console.log(div4);
//         dv3.insertAdjacentElement('afterEnd', div4);
//         dv3.insertAdjacentHTML('afterBegin', '<i>Some Text   </i>  ');
//         container.prepend(div4);
//         console.log(dv1.replaceWith(dv4));
//         document.getElementsByTagName('ul')[0].insertAdjacentHTML('beforeEnd', '<li>3</li><li>4</li><li>5</li>');
// <table>
{/* <tr>
    <th>Name</th>
    <th>LastName</th>
    <th>PastName</th>
    <th>Age</th>
</tr>
<tr>
    <td>I34van</td>
    <td>I34vanov</td>
    <td>I34vanivi4</td>
    <td>34</td>
</tr>
<tr>
    <td>I12van</td>
    <td>I12vanov</td>
    <td>I12vanivi4</td>
    <td>12</td>
</tr>
<tr>
    <td>I25van</td>
    <td>I25vanov</td>
    <td>I25vanivi4</td>
    <td>25</td>
</tr>
<tr>
    <td>I4van</td>
    <td>I4vanov</td>
    <td>I4vanivi4</td>
    <td>4</td>
</tr>
<tr>
    <td>I56van</td>
    <td>I56vanov</td>
    <td>I56vanivi4</td>
    <td>56</td>
</tr>
<tr>
    <td>I43van</td>
    <td>I43vanov</td>
    <td>I43vanivi4</td>
    <td>43</td>
</tr>
<tr>
    <td>I77van</td>
    <td>I77vanov</td>
    <td>I77vanivi4</td>
    <td>77</td>
</tr>
</table>
let arr = [];

let td = document.querySelectorAll('td');
for (let i = 0; i < td.length; i++) {
    td[i].style.padding = '10px';
}
let targetTd = document.querySelectorAll('tr>td:nth-child(4)');
for (let i = 0; i < targetTd.length; i++) {
    arr.push(+targetTd[i].textContent);
}
let tr = document.querySelectorAll('tr');
tr = Array.from(tr);
tr.sort(function (a, b) {
    return +a.children[3].textContent - +b.children[3].textContent;
});
let table = document.getElementsByTagName('table')[0];

for (let i = 0; i < tr.length; i++) {
    table.appendChild(tr[i]);
}

let arr = [];

let tr = document.querySelectorAll('tr');
tr = Array.from(tr);
tr.sort(function (a, b) {
    return +a.children[3].textContent - +b.children[3].textContent;
});
let table = document.getElementsByTagName('table')[0];

for (let i = 0; i < tr.length; i++) {
    table.appendChild(tr[i]);
}
var ll = getComputedStyle(dv1, ':before'); */}
// console.log(ll.display);
// dv1.display='block';
// console.log(ll.fontSize);
// console.log(document.body.clientWidth);
// console.log(document.documentElement.clientWidth);
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(document.body.offsetWidth);
// for (let i = 0; i < 10; i++) {
//     let intt=Math.floor(Math.random()*279);
//     console.log(intt);
//     console.log(ll[intt]);

// }
// console.log(dv1.getBoundingClientRect());
// let bc = sp.getBoundingClientRect();
// console.log(bc);
// bc.x = 122;
// console.log(bc);
// var centerX = document.documentElement.clientWidth / 2;
// var centerY = document.documentElement.clientHeight / 2;

// var elem = document.elementFromPoint(1, 1);

// elem.style.background = "red";
// console.log(elem.tagName);
// elem.style.background = "";
// <span id="elem">Sweets</span>
// function hideText() {

//     var el = document.getElementsByTagName('ul')[0];
//     el.classList.toggle('text');
// };

// elem.addEventListener("click", hideText);
// document.addEventListener('click', (e) => {
//     if(e.target.style.visibility!='hidden'){
//         e.target.style.visibility = 'hidden';
//     }
//     e.target.style.visibility = 'hidden';

//     console.log(e.target.style.visibility);

// });
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     let dvv = document.createElement('div');
//     dvv.style.width = '100px';
//     dvv.style.height = '100px';
//     dvv.style.backgroundColor = '#f00';
//     document.body.appendChild(dvv);
// });
// link.addEventListener('click', (e) => {
//     e.clientX=200;
//     e.clientY=200;

//     e.target.innerHTML++;
//     console.log(e);
//     return false;
// });
// let newEvent = new Event('click');
// for (let i = 0; i < 100; i++) {
//     setTimeout(() => link.dispatchEvent(newEvent), 1000 + i*100);
//     ;
// }
// let ev = Event;
// console.log(new ev('click',{isTrusted:true}));
// <input type="button" value="Нажми меня" id="elem">
// <input type="button" onclick='console.log(event);' value="Нажми меня2" id="elem2">
// <div id="field">
//     <img src="https://js.cx/clipart/ball.svg" id="ball">
// </div>
// <div id="pa">
//     <div id="p2">
//         <div id="p3"></div>
//         <div id="p32"></div>
//     </div>
// </div>
// <!-- <a href="https://google.com" onclick="return undefined">LINK</a> -->
// <style>
//     #pa,
//     #p2,
//     #p3,
//     #p32 {
//         border: 1px solid black;
//     }

//     #pa {
//         width: 300px;
//         height: 300px;
//         background-color: #f00;
//     }

//     #p2 {
//         width: 200px;
//         height: 200px;
//         background-color: #0f0;
//     }

//     #p3,
//     #p32 {
//         width: 100px;
//         height: 100px;
//         background-color: #00f;
//     }

//     #link {
//         float: right;
//         font-size: 50px;
//         padding: 30px;
//         margin-right: 150px;
//         margin-bottom: 150px;
//         border: 3px solid black;
//         color: #f00;
//     }
// </style>
// <b id="link">1</b>
// <script>s
// </script>
// var user = {
//     name: "Вася",
//     hi: function() { console.log(this); },
//     bye: function() { console.log("Пока"); }
//   };

//   user.hi(); // Вася (простой вызов работает)

//   // а теперь вызовем user.hi или user.bye в зависимости от имени
//   console.log(user.name == "Вася");
//   (user.name == "Вася" ? user.hi : user.bye)(); // undefined
// var arr = ["a", "b"];

// arr.push(function () {
//     console.log(this);
// })

// arr[2](); // ?
// var obj = {
//     name:'VVV',
//     go: function() { console.log(this.name) }
//   };

//   (obj.go)(); //undefined, context is lost
// var user = {
//     firstName: "Василий",  
//     export: this // (*)
//   };  
//   console.log( user.export.firstName );
//   console.log( user );
//   console.log( user );
// var name = "FFF";
// var user = {
//   name: "Василий",
//   export: function() {
//     return window;
//   }
// };
// console.log( user.export().name );
// console.log( user.export().name );
// var name = "";
// var user = {
//   name: "Василий",
//   export: function() {    
//     let ob=new Object();
//     ob.value=this  
//     return ob;


//   }
// };
// console.log( user.export().value );//
// console.log( user.export().value.name );//
// function formatDate(date) {
//     if (typeof date == 'number') {
//         date = new Date(date * 1000);
//     } else if (typeof date == 'string') {
//         date = new Date(date);
//     } else if (Array.isArray(date)) {
//         date = new Date(date[0], date[1], date[2]);
//     }
//     return date.toLocaleString("ru", { day: '2-digit', month: '2-digit', year: '2-digit' });
// }

// console.log(formatDate('2011-10-02')); // 02.10.11
// console.log(formatDate(1234567890)); // 14.02.09
// console.log(formatDate([2014, 0, 1])); // 01.01.14
// console.log(formatDate(new Date(2014, 0, 1))); // 01.01.14
// var event = {
//     title: "Конференция",
//     date: "сегодня"
//   };

//   var str = JSON.stringify(event,'','      ');
//   console.log( str ); // {"title":"Конференция","date":"сегодня"}

//   // Обратное преобразование.
//   event = JSON.parse(str);
// let c= setTimeout("document.body.innerHTML=''",1000);
// let c2= setTimeout("document.body.innerHTML='fdfsf'",2000);
// clearTimeout(1);
// let c= setInterval("document.body.innerHTML=''",1000);
// let c2= setInterval("document.body.innerHTML='<b>DDDD</b>'",2000);
// console.log(c,c2);
// clearInterval(1)
// clearInterval(2)
// let set1 = setTimeout(function sF() {
//     console.log('F1');
//     set1=setTimeout(sF,5000);
// },2000);

// let f = setTimeout(function tmr() {
//     console.log('Call 1');
//     f = setTimeout(tmr,2000);
//     // location.reload();
//     console.log('Call 2');
// },1000);
// setTimeout(()=>clearTimeout(f),10000);
// let i = 1;
// let tm = setInterval(() => console.log(i++), 100);
// setTimeout(() => clearInterval(tm), 2000);
// let i = 1;
// let tm = setTimeout(function fn() {
//     console.log(i++);
//     tm=setTimeout(fn,100);
// }, 100);
// setTimeout(() => clearTimeout(tm), 2000);
// setTimeout(function() {
//     console.log( i );
//   }, 100);


//   var i,ar=[];

//   function hardWork() {
//     // время выполнения этого кода >100 мс, сам код неважен
//     for (i = 0; i < 3000000; i++) {
//         hardWork[i % 2] = i;
//         ar.push(new Object(i));

//     }
//     console.log(i+'FOR');
//   }  
//   hardWork();
// try{
//     console.log('FFF');
//     return name();
// }catch(e){
//     console.log(e.stack);

// }finally{
//     console.log('FINALLY');
//     // return;
// }
// function name() {
//     console.log('FUNCTION');
// }
// window.onerror = function(message, url, lineNumber) {
//     console.log( message,  url , lineNumber );
//   };
//   function readData() {
//     error(); // ой, что-то не так
//   }
//   readData();
// function CoffeeMachine(power) {
//     var self = this;
//     self.waterAmount = 0;
//     let stopRun;
//     var WATER_HEAT_CAPACITY = 4200;
//     function getBoilTime() {
//         return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//     function onReady() {
//         console.log('Кофе готово!');
//     }
//     this.run = function () {
//         stopRun = setTimeout(onReady, getBoilTime());
//     };
//     this.stop = function () {
//         clearTimeout(stopRun);
//     };
// }
// var coffeeMachine = new CoffeeMachine(50000);
// coffeeMachine.waterAmount = 200;
// coffeeMachine.run();
// coffeeMachine.stop(); // кофе приготовлен не будет
// function CoffeeMachine(power, capacity) {
//     var waterAmount = 0;

//     this.waterAmount = function(amount) {

//       if (!amount) {          
//           return waterAmount; 
//       } 
//       // иначе режим сеттера
//       if (amount < 0) {
//         throw new Error("Значение должно быть положительным");
//       }
//       if (amount > capacity) {
//         throw new Error("Нельзя залить воды больше, чем " + capacity);
//       }

//       waterAmount = amount;
//     };

//   }

//   var coffeeMachine = new CoffeeMachine(1000, 500);

//   // пример использования
//   coffeeMachine.waterAmount(450);
//   console.log( coffeeMachine.waterAmount() ); // 450
// function User() {
//     let firstName;
//     let surName;
//     this.getFirstName = function () {
//         return firstName;
//     }
//     this.setFirstName = function (val) {
//         firstName = val;
//     }
//     this.getSurName = function () {
//         return surName;
//     }
//     this.setSurname = function (val) {
//         surName = val;
//     }
//     this.getFullName = function () {
//         return firstName + ' ' + surName;
//     }

// }

// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");
// console.log(user.getFirstName());
// console.log(user.getSurName());


// console.log(user.getFullName()); // Петя Иванов
// function CoffeeMachine(power, capacity) {
//     this.getPower = function () {
//         return power;
//     }
//     this.setWaterAmount = function (amount) {
//         if (amount < 0) {
//             throw new Error("Значение должно быть положительным");
//         }
//         if (amount > capacity) {
//             throw new Error("Нельзя залить воды больше, чем " + capacity);
//         }

//         waterAmount = amount;
//     };

//     this.getWaterAmount = function () {
//         return waterAmount;
//     };

// }
// let cm = new CoffeeMachine(22, 444);
// console.log(cm.getPower());
// window.onerror = function () {
//     console.log('SOme error');
//     location.reload();
// }
// setTimeout(() =>{throw new Error}, 3000);
// function Elec() {
//     var me = this;
//     me.getElectric = function () {
//         console.log('GO ELECTRIC : ' + this);
//     };
// }
// function Machine() {
//     var me = this;
//     me.enabled = false;
//     this.enable = function () {
//         me.enabled = true;
//         console.log('EN ' + me.enabled);

//     };

//     this.disable = function () {
//         me.enabled = false;
//         console.log('DIS ' + me.enabled);
//     };
// }
// function CoffeeMachine(power) {
//     Machine.call(this); // отнаследовать
//     Elec.call(this); // отнаследовать
//     var elc = this.getElectric;
//     elc();
//     var waterAmount = 0;

//     this.setWaterAmount = function (amount) {
//         waterAmount = amount;
//     };

// }

// var coffeeMachine = new CoffeeMachine(10000);

// coffeeMachine.enable();
// coffeeMachine.setWaterAmount(100);
// coffeeMachine.disable();
// // coffeeMachine.getElectric();
// // Elec.getElectric();
// function Machine(power) {
//     this._enabled = false;

//     var self = this;

//     this.enable = function () {
//         // используем внешнюю переменную вместо this
//         self._enabled = true;
//     };

//     this.disable = function () {
//         self._enabled = false;
//     };

//     this.getState = function () {
//         return self._enabled;
//     }

// }

// function CoffeeMachine(power) {
//     Machine.apply(this, arguments);
//     var waterAmount = 0;
//     var timeId;

//     this.setWaterAmount = function (amount) {
//         waterAmount = amount;
//     };

//     function onReady() {
//         console.log('Кофе готово!');
//     }

//     this.run = function () {
//         if (!this.getState()) {
//             return;
//         }
//         timeId = setTimeout(onReady, 1000);
//     };
//     let parentDisable = this.disable;
//     this.disable = function () {
//         parentDisable();
//         clearTimeout(timeId);
//     }

// }

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.enable();
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.run(); // ошибка, кофеварка выключена!
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run(); // ...Кофе готов!
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable(); // остановит работу, ничего не выведет
// var user = {
//     firstName: "Василий",  
//     export: this // (*)
//   };  
//   console.log( user.export );
// function Ob() {
//     this.a = 32;
// }

// function name(params) {
//     this.b=44;    
// }
// let obj = new Ob;
// console.log(obj.a);
// let rt = new obj.constructor;
// console.log(rt.a);
// console.log(Ob.__proto__);
// console.log(Ob.prototype);
// Ob.prototype=new name();
// console.log(Ob.prototype);
function name(params) {
    arguments.forEach = [].forEach;
    arguments.reduce = [].reduce;
    arguments.reduce((a,le,i)=>console.log(a,le,i),5);
}
name(1,2,4,4,3,5,null,'434234dfsdf');