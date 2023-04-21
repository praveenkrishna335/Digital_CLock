// 15/03/2023
// console.log("This is JavaScript...");
// document.write("Say Hi...");

// var str = 'a';
// console.log(str);
// console.log(typeof str);
// var str1 = "Smith";
// console.log(str1);
// console.log(typeof str1);
// var str2 = `mooron`;
// console.log(str2);
// console.log(typeof str2);

// console.log("This is str : '\n'"  + str);

// console.log(`This is character : ${str}
// This is string : ${str1}
// This is backtics : ${str2}`);

// console.log(`"This is PK's string"`);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(9007199254740991n + 3n);
// console.log("Range in JS : " + (2 ** 53 - 1));

// var str = true;
// var a = 10;
// // if (a>5) {
// //     console.log("Am True block");
// // }
// if (a>5)console.log("Am True block");
// console.log(typeof str);

// var priya = 95;
// var ram = 0;
// var sekar = null;
// console.log(typeof sekar);

// var a;
// console.log(a);
// console.log(typeof a);

// var person = {age : 21, gender : "male"};
// console.log(person);
// console.log(typeof person);

// 16/03/2023

// console.log(typeof(Object));

// const love; 
//declaration cannot be done...
// initialization cannot be done...
// Re - initialization cannot be done...
// const love = "marriage";//declaration & Initialization can be done...
// console.log(love);
// const love = "marriage2"; //Re - declaration & Re - Initialization cannot be done...

// let love; //declaration...
// console.log(love);
// love = "priya";//Initialization...
// love = "sheela";
// console.log(love);
// // let love = "priya";Re - declaration & Re - Initialization cannot be done...
// let love2 = "marriage"; // declaration & Initialization can be done...
// console.log(love2);

// var a; //declaration can be done...
// console.log(a);
// a = 10; // Initialization can be done...
// console.log(a);
// a = 40; // Re - Initialization can be done...
// console.log(a);
// var a = 60; // Re - declaration & Re - Initialization can be done...
// console.log(a);
// var b = 60; // declaration & Initialization can be done...
// console.log(b);

// Understanding the Execution of JS...

// console.log("Start");
// var a = 10;
// console.log(a);
// let b = 20;
// console.log(b);
// console.log(a);
// console.log(c);
// console.log(b);
// console.log(a);
// console.log("End");

// // 16/03/2023

// // Type Cohersion...

// var a = 5;
// console.log(typeof a);

// var b = "5";
// console.log(typeof b);

// var res = a + b; // Number converted into String...
// console.log(typeof res);

// var a = 5;
// var b = "4";
// var res = a - b;
// console.log(res);
// console.log(typeof res);

// var a = 5;
// var b = "4a";
// var res = a - b;
// console.log(res);
// console.log(typeof res);

// var a = alert("Please turn on location")
// console.log(a);

// var a = confirm("Please turn on location")
// console.log(a);

// var UserName = prompt("Please enter username")
// console.log(UserName);
// console.log(typeof UserName);

// var MobileNumber = Number(prompt("Please enter Mobile Number"));
// console.log(MobileNumber);
// console.log(typeof MobileNumber);

// console.log(Number( 10 + 10 ));
// console.log(Number( 10 + "5" ));
// console.log(Number( 10 + "smith" ));
// console.log(Number(true));
// console.log(Number(""));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number("t"));
// console.log(String(""));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean("ygu"));

// 21/03/2023

// //Scope...

// var global = "global";

// {
//     let a = 20 ;
//     console.log(global);
//     console.log(a);
// }
// console.log(a);

// var global = "global";
// {
//     let a = 20 ;
//     {
//         console.log(a);
//         {
//             console.log(global);
//             console.log(a);
//         }
//     }
//     console.log(a);
// }
// console.log(a);

// console.log("Start");

// let b = 20 ;
// {
//     console.log(b);
//     {
//         console.log(b);
//     }
// }
// console.log(b);
// console.log("End");

// var global = "global";
// console.log(global);
// let global = "script";
// console.log(global);

// console.log(a);
// let a;
// a = 10;

// var global = "global";
// {
//     console.log(global);
//     let global = "script";
//     console.log(global);
// }
// console.log(global);

// var global = "global";
// {
//     var global = "script1";
//     {
//         let global = "script";
//         console.log(global);
//         {
//             console.log(this.global);
//         }
//     }
// }
// console.log(global);

// 22/03/2023...

// Operators...

// var a = "smith";
// var str = new String("smith");
// console.log(typeof a);
// console.log(typeof str);
// console.log(a==str);
// console.log(a===str);

// var a = "smith";
// var b = "smith1";

// console.log(a===b);

// var a = "smith";
// var b = new String("smith");
// var c = new String("smith");
// console.log(c);
// // console.log(b==c);
// console.log( b.valueOf() == c );
// console.log(typeof (b.valueOf()));

// var bool = true;
// var bool1 = true;
// console.log(bool == bool1);

// var bool = 1; // true --> 1, false --> 0...
// var bool1 = true;
// console.log(bool == bool1);

// var bool = true;
// var bool1 = new Boolean( true );
// console.log(bool == bool1);

// var bool = 0; // false
// var bool1 = new Boolean( true );
// console.log(bool == bool1);

// var bool = 1;
// var bool1 = new Boolean( true );
// console.log(bool == bool1);

// var str = "smith";
// console.log(typeof str);
// var str1 = new String("smith");
// console.log(typeof str1);
// console.log(str1 instanceof String);

// var student = "joys";
// var student1 = "smith";
// var student2 = "sam";
// console.log(typeof student);
// console.log(student," ".concat(student1, " ", student2));
// console.log(student.length);
// console.log(student.toUpperCase());
// console.log(student.toLowerCase());
// console.log(student.repeat(5));

// var student = "smith";
// console.log(student.slice(2, 5));
// console.log(student.charAt(0));

// var student = "smith";
// var student1 = "kenny";
// console.log(student.startsWith("sm"));
// console.log(student.endsWith("th"));

// var a = "pune to bangalore";
// console.log(a);
// console.log(a.replace("pune", "chennai"));

// var student = "janith raj";
// var b = student.split(" ");
// console.log(b);
// console.log(student);
// console.log(student.split("").reverse().join(""));

// // 23/03/2023...

// // Function...
// console.log("Start...");
// function sum(a, b) {
//     console.log(a+b);
// }
// sum(10, 20);
// console.log("End...");

// function sum() {
//     var a = 10;
//     var b = 20;
//     console.log(a + b);
// }
// sum();

// console.log("Start...");
// function fire() {
//     console.log("An Fire...");
//     water();
// }
// function water() {
//     console.log("An Water...");
// }
// fire();
// console.log("End...");

// console.log("Start...");
// var global = "global";

// function xy() {
//     console.log(global);
//     var a = 10;
//     var b = 20;
//     console.log(a + b);
//     z1();
// }
// function z1() {
//     console.log("Hey Hii...");
//     console.log(global);
// }
// xy();
// console.log("End...");

// console.log("Start...");
// function sum(a, b) {
//     console.log(a+b);
// }
// console.log(sum);
// console.log("End...");

// // exp(10, 20); // It will not support Hoisting...
// var exp = function sum(a, b) {
//     console.log(a+b);
// }
// exp(10, 20);

// // sum(10, 20); // It will not support Hoisting...
// function sum(a, b) {
//     console.log(a+b);
// }
// sum(10, 20);

// // 24/03/2023...

// 1 . create a function to get a value from line by line using function...

// var value = prompt("Enter a value");

// function string(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//     }
// }
// string(value)

// 2 . count the letters...

// var value = prompt("Enter the value");
// var count = 0;
// function string(str) {
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] == 'p') || (str[i] == 'P')) {
//         count++
//         }
//     }
// }
// string(value)
// console.log(count);

// 3 . count even number b/w ranges...

// var value1 = Number(prompt("Enter the 1st value"));
// var value2 = Number(prompt("Enter the 2nd value"));

// function string(a, b) {
//     if (a>b) {
//         alert("Please enter correct range...");
//         return;
//     } else {
//         for (let i = a; i <= b; i++) {
//             if(i % 2 == 0)
//             {
//                 console.log(i);
//             }
//         }
//     }
// }
// string(value1, value2);

// 4 . sum of two numbers...

// var value1 = Number(prompt("Enter the 1st value"));
// var value2 = Number(prompt("Enter the 2nd value"));

// function string(a, b) {
//     console.log(a + b);
// }
// string(value1, value2)

// 5 . product of two numbers...

// var value1 = Number(prompt("Enter the 1st value"));
// var value2 = Number(prompt("Enter the 2nd value"));

// function string(a, b) {
//     console.log(a * b);
// }
// string(value1, value2)

// 6 . print odd numbers in given range...

// var value1 = Number(prompt("Enter the 1st value"));
// var value2 = Number(prompt("Enter the 2nd value"));

// function string(a, b) {
//     if (a>b) {
//         alert("Please enter correct range...");
//         return;
//     } else {
//         for (let i = a; i <= b; i++) {
//             if(i % 2 != 0)
//             {
//                 console.log(i);
//             }
//         }
//     }
// }
// string(value1, value2);

// 7 . even word in paragraph...

// var value = prompt("Enter the value");
// var count = 0;
// function string(str) {
//     var store = str.split
// }
// string(value)
// console.log(count);

// 27/03/2023...

// /// Nested Function...

// function outer(a, b) {
//     return a + b;
// }
// console.log(outer(10, 20));

// // Break...

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (i == j) {
//             console.log("IF Executed....");
//             break;
//         }
//         console.log("An Inner Loop...");
//     }
//     console.log("An Outer Loop...");
// }

// // Continue...

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (i == j) {
//             console.log("IF Executed...");
//             continue;
//         }
//         console.log("An Inner Loop...");
//     }
//     console.log("An Outer Loop...");
// }

// // Return...

// function method() {
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (i == j) {
//                 console.log("IF Executed....");
//                 return i;
//             }
//             console.log("An Inner Loop...");
//         }
//         console.log("An Outer Loop...");
//     }    
// }
// // method();
// console.log(method());

// // Nested FUnction...

// function outer() {
//     var a = 10;
//     console.log(a);
//     function inner() {
//         var b = 20;
//         console.log(b);
//     }
//     return inner;
// }
// outer()();

// function outer() {
//     var a = 10;
//     console.log(a);
//     function inner() {
//         var b = 20;
//         console.log(a);
//         console.log(b);
//         function innerMost() {
//             var c = 30;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//         return innerMost;
//     }
//     return inner;
// }
// outer()()();

// // We can't access 'a' from outside...

// function name1() {
//     var a = 10;
// }
// name1();
// console.log(a);

//  // 28/03/2023...

// Functional programming...

// function teamLead(task, a, b) {
//     return task(a, b);
// }
// function dev(a, b) {
//     return a + b;
// }
// console.log(teamLead(dev, 10, 20));

// var work = Number(prompt(`Select 0 : Sum
// Select 1 : Sub
// Select 2 : Product
// Select 3 : Division`));
// if (work>=0 && work<=3) {
// var a = Number(prompt("Enter the 1st number : "));
// var b = Number(prompt("Enter the 2nd number : "));

// function master(work, a, b) {
//     return work(a, b);
// }
// function sum(a, b) {
//     return "Sum is : " + (a + b);
// }
// function sub(a, b) {
//     return "Sub is : " + (a - b);
// }
// function product(a, b) {
//     return "product is : " + (a * b);
// }
// function division(a, b) {
//     return "division is : " + (a / b);
// }

// var options = [sum, sub, product, division];

// alert(master(options[work], a, b));
// } else {
//     alert("Please Enter 0 to 3")
// }


// var a = Number("er");
// var b = Number(prompt("Enter the 2nd number : "));

// // var c = isNaN(a)
// // console.log(c)

// var a = document.getElementById("num1")
// var b = document.getElementById("num2")

// if ((a != 0 && b != 0) && (!isNaN(a) && !isNaN(b))) {
//     console.log(a)
//     let flag = true;

//     while (flag) {
//         var work = prompt(`Type sum       : SUMMATION / ADDITION
// Type sub        : SUBTRACTION
// Type product : PRODUCT
// Type division : DIVISION`);
//         if (work != "") {
//             work = work.toLowerCase();
//             function master(work, a, b) {
//                 return work(a, b);
//             }
        
//             switch (work) {
//                 case "sum":function sum(a, b) { return "Sum is : " + (a + b);}
//                     alert(master(sum, a, b)); break;
//                 case "sub":function sub(a, b) { return "Sub is : " + (a - b);}
//                     alert(master(sub, a, b)); break;
//                 case "product":function product(a, b) { return "Product is : " + (a * b);}
//                     alert(master(product, a, b)); break;
//                 case "division":function division(a, b) { return "Division is : " + (a / b);}
//                     alert(master(division, a, b)); break;
//                 default:
//                     alert("Please enter valid format..."); flag = false;
//             }
//         } else {
//             alert("Please enter work..."); flag = false;
//         }    
//     }
// } else {
//     alert("Please enter 1st or 2nd Value...");
// }


// // 29/03/2023...

// // Immediate Invoke Function...

// var exp = function sum(a, b) {
//     console.log(a + b);
// } (10, 20);

// // Arrow Function...

// var sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(10, 20));

// var sum = (a, b) => a + b;
// console.log(sum(10, 20));

// var sum = a => a + 10
// console.log(sum(30));

// var sum = (a, b) => a - b;
// console.log(sum(10, 20));

// var sum = (a, b) => a * b;
// console.log(sum(10, 20));

// var sum = (a, b) => a / b;
// console.log(sum(10, 20));

// function outer() {
//     var a = 10;
//     console.log(a);
//     // inner1();
//     // inner2();
//     function inner1() {
//         var b = 20;
//         console.log(b);   
//     }
//     function inner2() {
//         var c = 30;
//         console.log(c);
//     }
//     // return inner1, inner2;
// }
// outer();


// function outer() {
//     var a = 10;
//     console.log(a);
//     // inner1();
//     // inner2();
//     inner1 = () => console.log(20);
//     inner2 = () => console.log(30);
//     return inner1, inner2;
// }
// outer();

// // 30/03/2023...

// // Arrays...

// var arr = [1, 2, 3, 4, "smith"];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//         count++;
//     }
// }
// console.log(count);

// var x1 = ["java", "sql", "webtech"];
// console.log(x1);
// x1[0] = "javascript";
// console.log(x1[0]);
// x1[3] = "html";
// console.log(x1);
// var y2 = x1;
// x1[0] = "java";
// y2[1] = "mock";
// console.log(x1);
// console.log(y2);

// // for-of => values...
// var x1 = ["java", "sql", "webtech"];

// for (const value of x1) {
//     console.log(value);
// }

// var x = ['smith', 99, 1n, true, false, null, undefined, 
// {
//     ename : 'smith',
// }, 
// function sum() {
//     console.log(a + b);
// }
// ];

// var str = 0;
// var num = 0;
// var bi = 0;
// var bool = 0;
// var nu = 0;
// var un = 0;
// var ob = 0;
// var func = 0;
// console.log(typeof x[8]);
// for (i = 0; i < x.length; i++) {
//     if (typeof x[i] == "string") {
//         str++;
//     }
//     else if (typeof x[i] == "number") {
//         num++;
//     }
//     else if (typeof x[i] == "bigint") {
//         bi++;
//     }
//     else if (typeof x[i] == "boolean") {
//         bool++;
//     }
//     // else if (typeof x[i] == "null") {
//     //     nu++;
//     // }
//     else if (typeof x[i] == "undefined") {
//         un++;   
//     }
//     else if (typeof x[i] == "object") {
//         ob++;
//     }
//     else if (typeof x[i] == "function") {
//         func++;
//     }
// }
// console.log(`Total Number of String is : ${str}`);
// console.log(`Total Number of number is : ${num}`);
// console.log(`Total Number of bigint is : ${bi}`);
// console.log(`Total Number of boolean is : ${bool}`);
// // console.log(`Total Number of null is : ${nu}`);
// console.log(`Total Number of undefined is : ${un}`);
// console.log(`Total Number of object is : ${ob}`);
// console.log(`Total Number of function is : ${func}`);

// console.log("");

// var place = ["bangalore", "chennai", "pune"];

// for (const val of place) {
//     if (val.length % 2 == 0) {
//         console.log("Even Letters : " + val);
//     }
// }

// for (const val in place) {
//     if (val % 2 == 0) {
//         console.log("Even Place : " + val);
//     }    
// }

// // 31/03/2023...

// // Array Methods...

// // Array Literals...

// var arr = [1, 2, 3, 4];
// console.log(arr);

// // // new Keyword...

// var arr1 = new Array();
// arr1[0] = "java";
// console.log(arr1[0]);

// // // new Keyword with Initializing value in Constructor call...

// var arr2 = new Array("html", "css");
// console.log(arr2);

// var hobbies = [
//     "football",
//     "singing",
//     "cooking",
//     "travelling",
//     "sleeping",
//     "house keeping",
//     "driving",
//     "cycling",
//     "trekking",
//     "reading",
// ];
// console.log("Array length is : ", hobbies.length);

// // adding elements in tail...

// console.log("Before pushing : ", hobbies);
// hobbies.push("swimming", "eating");
// console.log("After pushing : ", hobbies);
// console.log("Array length is : ", hobbies.length);

// // removing elements from last index...

// console.log("Before pop : ", hobbies);
// hobbies.pop();
// console.log("After pop : ", hobbies);
// console.log("Array length is : ", hobbies.length);

// // add element in first index...

// console.log("Before unshift : ", hobbies);
// hobbies.unshift("painting", "dancing");
// console.log("After unshift : ", hobbies);
// console.log("Array length is : ", hobbies.length);

// // remove element in first index...

// console.log("Before shift : ", hobbies);
// hobbies.shift();
// console.log("After shift : ", hobbies);
// console.log("Array length is : ", hobbies.length);

// // To check, it is an Array or not...

// var isHobbiesArray = Array.isArray(hobbies);
// console.log("Hobbies is an Array ? ", isHobbiesArray);

// // To check whether the element is present or not...

// var hasReading = hobbies.includes("reading");
// console.log("Hobbies has reading in it ? ", hasReading);

// // To search for a particular element index value...

// var indexOfElement = hobbies.indexOf("reading");
// console.log("index of reading is : ", indexOfElement);

// // lastIndexOf...
// console.log(hobbies.lastIndexOf("trekking"));

// // To reverse the element inside the array...

// var elementsJoined = hobbies.reverse().join(",");
// console.log(elementsJoined);

// // // splice... ==> splice(start count, delete count, items)...
// // // It will modify your Original Array...
// // // It will not accept Negative Values...

// var afterSplice = hobbies.splice(2, 4, "smith");
// console.log("removed elements : ", afterSplice);
// console.log("After Splice : ", hobbies);

// // slice... ==> splice(start index, end index)...
// // It will not modify your Original Array...
// // It will not accept Negative Values...

// var afterSlice = hobbies.slice(2, 4);
// console.log("removed elements : ", afterSlice);
// console.log("After Slice : ", hobbies);

// var afterSlice = hobbies.slice(-4, -2);
// console.log("removed elements : ", afterSlice);
// console.log("After Slice : ", hobbies);

// // 04/04/2023...

// // Map --> it accepts Call Back...
// // To Map elements inside Array...

// var x = [1, 2, 3, 4, 5];

// var x2 = x.map(function (element, index, array) {
//     return element + 1;

// });
// console.log(x2);

// var x = [1, 2, 3, 4, 5];

// var x2 = x.map((element) => {
//     return element + 1;
// });
// console.log(x2);

// var x = [1, 2, 3, 4, 5];

// var x2 = x.map(element =>  element + 1);
// console.log(x2);

// // Add --> multiply 100, Odd --> multiply 10...

// var x = [1, 2, 3, 4, 5];

// var x2 = x.map(element => {
//         if (element % 2 == 0) {
//             return element * 10;
//         } else {
//             return element * 100;
//         }
//     });
// console.log(x2);

// // Filter --> It is an Array method, it can accept Call Back...
// // To Filter the Array...

// var x = [100, 20, 300, 40, 500];

// var x2 = x.filter(element =>{
//     return element > 40;
// });
// console.log(x2);

// // Reduce --> To Addition...

// var x = [1, 2, 3, 4, 5];

// var x2 = x.reduce( function (acc, element, index, array) {
//     return acc += element;
// }, 0);
// console.log(x2);

// var basicPay = 1000;
// var expenseOfEmp = [200, 300, 400];

// var res = expenseOfEmp.reduce(function (sal, element) {
//     return sal += element;
// }, basicPay);

// console.log(res);

// var x1 = [1, 1, 2, 3, 4, 5, 5];

// var x2 = x1.reduce(function (acc, element) {
//     if (!acc[element]) {
//         acc[element] = 1;
//     } else {
//         acc[element]++;
//     }
//     return acc;
// },{});
// console.log(x2);

// var pets = ["chicken", "cats", "dogs", "chicken", "cats", "dolphin"];

// var x2 = pets.reduce(function (acc, element) {
//     if (!acc[element]) {
//         acc[element] = 1;
//     } else {
//         acc[element]++;
//     }
//     return acc;
// },{});
// console.log(x2);

// var arr = [1, 2, 3, 4, 5];
// var firstIndex = arr[0];

// var res = arr.reduce(function (max, element) {
    
//     if (element > max)
//         {
//            return max = element;
//         }
// }, firstIndex);
// console.log(res);

// 05/04/2023...

// // Object... --> Any entity which is existing in the real world considered as object...
// // Object in JS will be in the form of key & value pair, which is nothing but property of an object...
// // object is a non - primitive datatype in JS...

// var person = {
//     ename : "smith",
//     empno : 29
// }

// // // To add property for an object...

// person.color = "Red";
// person["gender"] = "male";

// console.log(person);

// // // Delete an property...

// delete person.empno;

// console.log(person);

// // To add an Expression in object...

// var student_1 = {
//     sname : "Pk",
//     grade : "S"
// }

// var student_2 = {
//     sname : "Nk",
//     grade : "S"
// }

// var class_second = {
//     s_no1 : student_1,
//     s_no2 : student_2
// }
// console.log(class_second.s_no1);

// // To add an Function in object...

// // var global = "Global";
// var person = {
//     ename : "Pk",
//     behaviour : function () {
//         console.log(this.ename +" can swim...");
//         // console.log(this.global +" can swim...");
//     }
// }
// person.behaviour();

// var books = {
//     java : ["intro", "tokens", "datatypes", "typecasting"],
//     webtech : [
//     {
//         intro : "OOPS..."
//     },
//     {
//         tokens : "Smallest unit of programming language..."
//     },
//     {
//         datatypes : "Type of data..."
//     },
//     {
//         typecasting : "Convert one Datatype into Another Datatype..."
//     }]
// }
// console.log(books.java[0]);
// console.log(books.webtech[0].intro);
// console.log(books.webtech[1].tokens);
// console.log(books.webtech[2].datatypes);
// console.log(books.webtech[3].typecasting);

// var students = [
//     {
//         name : "Pk",
//         mark : 20
//     },
//     {
//         name : "Nk",
//         mark : 25
//     },
//     {
//         name : "Sk",
//         mark : 30
//     }
// ]

// var res1 = students.map(function (element) {
//     return element.mark * 5;
// });
// console.log("Multiplied by 5 : "+ res1);

// var res2 = students.filter(function (element) {
//     return element.mark > 20;
// });
// console.log("Student name --> Above 20 : "+ res2[0].name);
// console.log("Student name --> Above 20 : "+ res2[1].name);

// var res3 = students.reduce(function (total, element) {
//     return total += element.mark;
// }, 0);
// console.log("Total marks : "+ res3);

// // 06/04/2023...

// // Creating an Object...

// // Object Literal...

// var person = {
//     ename : "Pk"
// };
// console.log(person);

// // // new Keyword...

// var obj1 = new Object();
// obj1.ename = "Nk";
// obj1.lastName = "Sk";
// console.log(obj1);
// delete obj1.lastName;
// console.log(obj1);

// // Constructor Function...

// function Person(name, color, age) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
// }

// var obj1 = new Person("Pk", "Red", 25);
// console.log(obj1.name);

// function Person(name, color, age) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
// }
// console.log(Person.companyName = "IT");
// console.log(Person.prototype);
// var obj1 = new Person("Pk", "Red", 25);
// console.log(obj1.name); // Instance Method : Instance can have the access of particular method...
// console.log(obj1.companyName); // Static Method : Instance can not have the access of static method...

// The Object.assign() method is used to copy the values...

// const obj = {
//     name : "Pk",
//     age : 25,
//     profession : "Software Engineer"
// };

// let source = {
//     living : "Chennai",
//     company : "Microsoft"
// };

// console.log(Object.assign(obj, source));

// // After Modification ( Target will be in same Object...)...

// console.log(obj.living);

// // values() : Get Values from the Object...

// console.log(Object.values(obj));
// console.log(obj);

// // keys() : Get Keys from the Object...


// console.log(Object.keys(obj));
// console.log(obj);

// seal() : It will not allow to Add any more Object Keys & Values...

// console.log(Object.seal(obj));
// obj.salary = 2000; // It will not allow to modify...
// console.log(obj.salary);
// obj.age = 24;
// console.log(obj);

// // entries() : It will convert Object into Array...

// console.log(Object.entries(obj));

// flat() : It will Merge the Array...

// var arr = Object.entries(obj);
// console.log(arr.flat());

// freeze() : 

// console.log(Object.freeze(obj));
// console.log(obj.profession = "Developer");
// console.log(obj.color = "Blue");
// console.log(obj);

// var inp = [1, 2, 3 ,4,[[[[5]]]]];
// var arr = Object.entries(inp);
// console.log(arr);
// var out = arr.flat();
// console.log(out)
// let res = [];
// for (let i = 0; i < out.length; i++) {
//       if (i % 2 != 0) {
//         res += out[i];
//       }
// }
// console.log(res);
// console.log(res.split(''));

// // 07/04/2023...

// // Prototype : Every Function & Objects will associate with an attribute called Prototype...

// String.prototype.heyHi = function (a) {
//     for (let i = 0; i< a.length; i++) {
//       console.log(a.charAt(i));
       
//     }
// }
// var str = new String("Pk");
// console.log(str);
// String.prototype.heyHi(str);
// String.prototype.heyHi("Nk");

// Boolean.prototype.heyHi = function (a) {
//     console.log(a);
// }
// var str = new Boolean(true);
// console.log(str);
// Boolean.prototype.heyHi(14);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.schoolName = "ty";

// var student = new Person("pk", 25);
// student.s_no = 1;
// console.log(student);
// console.log(student.schoolName);

// var student1 = new Person("Jenisha", 23);
// student1.__proto__.gender = "Female";
// console.log(student1);
// console.log(student1.gender);

// var student2 = new Person("Nk", 23);
// console.log(student2.gender);

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Student.prototype.gender = "Male";

// function Student_id(s_no) {
//     this.s_no = s_no;
// }
// Student_id.prototype.sub = "Math";

// var student1 = new Student("Pk", 25);
// var exam_id = new Student_id(30);

// student1.__proto__ = exam_id;
// // exam_id.__proto__ = student1; // cyclic __proto__ not Available in JS...

// console.log(student1.s_no);
// // console.log(student1.gender);
// console.log(student1.sub);
// console.log(student1.__proto__ == exam_id);
// console.log(student1.__proto__ == Student.prototype);

// function Employee(name, age, designation) {
//     this.name = name;
//     this.age = age;
//     this.designation = designation;
// }

// function Abroad(location) {
//     this.location = location;
// }

// var emp1 = new Employee("Pk", 25, "Chennai");
// emp1.s_no = 1;
// var emp2 = new Employee("Nk", 23, "Madurai");
// emp2.s_no = 2;

// var opportunity = new Abroad("USA");

// console.log(emp1);
// console.log(emp2);

// 10/04/2023...
