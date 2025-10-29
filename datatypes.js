// new javascript version is all about classes, objects, modules, arrow functions, promises, async/await and much more.
// so, javascript community has introduced many new features in javascript language to make it more powerful and easier to use.
// but still, the basic building blocks of javascript remain the same.
// Hence, commettee decided to keep the older code as well as introduce new features.
// So, when we use "use strict"; at the top of our javascript file, it tells the javascript engine to use the latest code/features and discard the older ones.

"use strict";

// let's try to use older version features of javascript

///alert("This is an alert box!"); // this will work in web browsers but not in node.js environment, so give error in node.js

console.log("Welcome to JavaScript Datatypes Detailed Explanation");

let fullName = "Ali Zia"; // string datatype
let age = 25; // number datatype, range of number in javascript is from -(2^53 -1) to (2^53 -1)
let salary = 45000.50; // float datatype, range of float in javascript is same as number datatype
let isStudent = true; // boolean datatype
let address = null; // null datatype
let phoneNumber; // undefined datatype
let hobbies = ["reading", "traveling", "coding"]; // array datatype
let person = { firstName: "Ali", lastName: "Zia", age: 25 }; // object datatype

console.log("Name:", fullName);

// Objects and Arrays are complex datatypes in javascript

console.log(typeof null); // this will print "object" because null is considered as an object in javascript
console.log(typeof phoneNumber); // this will print "undefined" because phoneNumber is not initialized
console.log(typeof hobbies); // this will print "object" because arrays are considered as objects in javascript
console.log(typeof person); // this will print "object" because person is an object datatype








