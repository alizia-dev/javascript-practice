let age = 33;

console.log("Age:", age);
console.log("Type of Age:", typeof age); // number

// Converting number to string
let ageAsString = String(age);
console.log("Age as String:", ageAsString);
console.log("Type of Age as String:", typeof ageAsString); // string

// Converting string to boolean
let isActive = "true";
console.log("Is Active:", isActive);
console.log("Type of Is Active:", typeof isActive); // string
// Converting string to boolean
let isActiveAsBoolean = (isActive === "true");
console.log("Is Active as Boolean:", isActiveAsBoolean);
console.log("Type of Is Active as Boolean:", typeof isActiveAsBoolean); // boolean

// Converting boolean to number
let score = "85.5";
console.log("Score:", score);
console.log("Type of Score:", typeof score); // string 
// Converting string to number
let scoreAsNumber = Number(score);
console.log("Score as Number:", scoreAsNumber);
console.log("Type of Score as Number:", typeof scoreAsNumber); // number

// Converting boolean to string
let isMember = false;
console.log("Is Member:", isMember);
console.log("Type of Is Member:", typeof isMember); // boolean
// Converting boolean to string
let isMemberAsString = String(isMember);
console.log("Is Member as String:", isMemberAsString);
console.log("Type of Is Member as String:", typeof isMemberAsString); // string



//////////////////////////////////  Operations  ////////////////////////////////////////////////////////////

// 1. String Concatenation
let firstName = "Ali";
let lastName = "Zia";
let fullName = firstName + " " + lastName;  // Concatenating two strings
console.log("Full Name:", fullName); // Output: Ali Zia

// 2. Numeric Addition
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;  // Adding two numbers
console.log("Sum:", sum); // Output: 30

// 3. Mixed Addition (String + Number)
let mixedAddition = "The total is: " + 50;  // String concatenation with number
console.log("Mixed Addition:", mixedAddition); // Output: The total is: 50
// Note: In mixed addition, the number is converted to string and concatenated.
// explanation: When a string is added to a number, JavaScript converts the number to a string and concatenates them. Hence, the result is a string.

// 4. Numeric Addition after Conversion
let strNum1 = "15";
let strNum2 = "25";
let numericSum = Number(strNum1) + Number(strNum2);  // Converting strings to numbers before addition
console.log("Numeric Sum after Conversion:", numericSum); // Output: 40
// explanation: Here, we explicitly convert the string representations of numbers to actual numbers using the Number() function before performing the addition. This ensures that the addition is numeric rather than string concatenation.

// 5. Boolean Addition
let bool1 = true;  // true is treated as 1
let bool2 = false; // false is treated as 0
let boolSum = bool1 + bool2;  // Adding boolean values
console.log("Boolean Sum:", boolSum); // Output: 1
// explanation: In JavaScript, when boolean values are used in arithmetic operations, true is treated as 1 and false is treated as 0. Hence, true + false results in 1. 

// 6. String Concatenation with Template Literals
let city = "New York";
let country = "USA";
let location = `${city}, ${country}`;  // Using template literals for string concatenation
console.log("Location:", location); // Output: New York, USA
// explanation: Template literals (enclosed by backticks ``) allow for easier string interpolation and multi-line strings. Variables can be embedded directly within the string using ${variableName} syntax.

// 7. Numeric Addition with Unary Plus
let strNum3 = "30";
let strNum4 = "40";
let unaryPlusSum = +strNum3 + +strNum4;  // Using unary plus to convert strings to numbers
console.log("Unary Plus Sum:", unaryPlusSum); // Output: 70
// explanation: The unary plus operator (+) is a quick way to convert a string representation of a number into an actual number. Here, it converts strNum3 and strNum4 to numbers before performing the addition.   











