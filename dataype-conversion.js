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