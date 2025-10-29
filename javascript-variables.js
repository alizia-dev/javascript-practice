const userId = 55341
let userName = "JohnDoe"
var userEmail = "johndoe@email.com"
userCity = "New York"

// console.log("User ID:", userId)
// console.log("User Name:", userName)

// Now trying to reassign values
// userId = 12345 // This will throw an error because userId is a constant
userName = "AliZia" // This is valid since userName is declared with let
userEmail = "ali@email.com" // This is valid since userEmail is declared with var
userCity = "Los Angeles" // This is valid since userCity is implicitly global

// console.log("User ID:", userId)
// console.log("User Name:", userName)
// console.log("User Email:", userEmail)
// console.log("User City:", userCity) 

// Displaying all user information in a table format
console.table([userId, userName, userEmail, userCity])

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Explanation of variable declarations:
// 1. const: Used to declare variables that cannot be reassigned. They must be initialized at the time of declaration.
// 2. let: Used to declare block-scoped variables that can be reassigned.
// 3. var: Used to declare function-scoped variables that can be reassigned. It is hoisted to the top of its scope.
// 4. Implicit global variable (no keyword): When a variable is assigned a value without any declaration keyword, it becomes a global variable. This is generally discouraged as it can lead to unintended consequences.

//////////////////////////////////////////////////////////////////////////////////////////////////////////  

// 1. const userAge; // This will throw an error because const variables must be initialized at the time of declaration

// 2. let: is used to declare block-scoped variables that can be reassigned.
{
    let userName = "BlockUser"
    console.log("User Name:", userName) // This will print "BlockUser"
    if (true) {
        let userName = "InnerBlockUser"
        console.log("Inner Block User Name:", userName) // This will print "InnerBlockUser"
    }
}

// console.log("Block User Name:", userName) // This will throw an error because userName is not defined outside the block
console.log("User Name:", userName) // This will print "AliZia"

// 3. var: is function-scoped and can be reassigned.
function varTest() {

    var userEmail = "ecma@email.com"
    console.log("User Email inside function:", userEmail) // This will print "ecma@email.com"

    if (true) {
        var userEmail = "new@email.com"
        console.log("User Country inside if block:", userEmail) // This will print "new@email.com"
    }

    console.log("User Email after if block inside function:", userEmail) // This will print "new@email.com" because var is function-scoped
}
varTest()



