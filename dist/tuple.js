"use strict";
/**
 * ================================================================
 *                  TYPESCRIPT TUPLE - COMPLETE GUIDE
 * ================================================================
 *
 * Learning Resource:
 * ChatGPT Conversation: https://chatgpt.com/share/6ae75237-a24c-83ee-9206-fe5d308a2c85
 *
 * TABLE OF CONTENTS
 *
 * 01. What is a Tuple?
 * 02. Tuple vs Array
 * 03. Tuple Declaration
 * 04. Tuple Initialization
 * 05. Accessing Tuple Elements
 * 06. Updating Tuple Elements
 * 07. Optional Tuple Elements
 * 08. Readonly Tuple
 * 09. Named Tuple
 * 10. Rest Elements in Tuple
 * 11. Tuple Destructuring
 * 12. Tuple with Functions
 * 13. Tuple with Union Types
 * 14. Tuple with Objects
 * 15. Practical Example: User Management
 * 16. Practical Example: API Response
 * 17. Practical Example: Coordinates
 * 18. Practical Example: Key-Value Pair
 * 19. Tuple Length
 * 20. Common Tuple Errors
 * 21. When Should We Use Tuples?
 * 22. Tuple Best Practices
 *
 * ================================================================
 */
// ================================================================
// 01. WHAT IS A TUPLE?
// ================================================================
/**
 * A tuple is a special type of array in TypeScript.
 *
 * It allows us to store a fixed number of elements,
 * where each element has a specific data type and position.
 *
 * In a tuple, the order of elements is important.
 *
 * Example:
 */
let user = [
    "Rahim",
    25,
    true
];
console.log("01. Basic Tuple:", user);
/**
 * Explanation:
 *
 * user[0] = string
 * user[1] = number
 * user[2] = boolean
 *
 * Each position has a predefined data type.
 */
// ================================================================
// 02. TUPLE VS ARRAY
// ================================================================
/**
 * ARRAY:
 *
 * An array stores multiple elements.
 * The number of elements can usually change.
 */
let fruits = [
    "Apple",
    "Banana",
    "Mango"
];
fruits.push("Orange");
console.log("02. Array Example:", fruits);
/**
 * TUPLE:
 *
 * A tuple defines specific data types for each position.
 */
let person = [
    "Karim",
    30
];
console.log("Tuple Example:", person);
/**
 * Main Differences:
 *
 * Array:
 * - Usually stores elements of the same type.
 * - Length can change.
 * - Element positions are not assigned different types.
 *
 * Tuple:
 * - Each position can have a different type.
 * - Length is defined by its type.
 * - Element order is important.
 */
// ================================================================
// 03. TUPLE DECLARATION
// ================================================================
/**
 * Syntax:
 *
 * let variableName: [Type1, Type2, Type3];
 *
 * Each type represents a specific position.
 */
let student;
student = ["David", 22, true];
console.log("03. Tuple Declaration:", student);
// ================================================================
// 04. TUPLE INITIALIZATION
// ================================================================
/**
 * We can declare and initialize a tuple at the same time.
 */
let employee = [
    "Michael",
    28,
    "Software Engineer"
];
console.log("04. Tuple Initialization:", employee);
// ================================================================
// 05. ACCESSING TUPLE ELEMENTS
// ================================================================
/**
 * We can access tuple elements using their index.
 *
 * Important:
 * Array and tuple indexing starts from 0.
 */
let studentInfo = [
    "Alex",
    24,
    true
];
console.log("05. Student Name:", studentInfo[0]);
console.log("Student Age:", studentInfo[1]);
console.log("Student Active:", studentInfo[2]);
/**
 * Index:
 *
 * studentInfo[0] = string
 * studentInfo[1] = number
 * studentInfo[2] = boolean
 */
// ================================================================
// 06. UPDATING TUPLE ELEMENTS
// ================================================================
/**
 * Tuple elements can be updated.
 *
 * However, the new value must match the original data type.
 */
let customer = [
    "John",
    35
];
customer[0] = "Robert";
customer[1] = 40;
console.log("06. Updated Customer:", customer);
let userInfo1 = ["Rahim"];
let userInfo2 = ["Karim", 25];
console.log("07. Optional Tuple 1:", userInfo1);
console.log("Optional Tuple 2:", userInfo2);
let person1 = [
    "Alice",
    26
];
let person2 = [
    "Bob",
    30,
    true
];
console.log("Person 1:", person1);
console.log("Person 2:", person2);
// ================================================================
// 08. READONLY TUPLE
// ================================================================
/**
 * The readonly keyword prevents modification of tuple elements.
 *
 * Once initialized, the tuple cannot be modified.
 */
let colors = [
    "Red",
    "Green",
    "Blue"
];
console.log("08. Readonly Tuple:", colors);
let product = [
    "Laptop",
    75000,
    true
];
console.log("09. Product Information:", product);
let studentScores = [
    "Rahim",
    80,
    85,
    90,
    95
];
console.log("10. Student Scores:", studentScores);
/**
 * Explanation:
 *
 * The first element must be a string.
 * All remaining elements must be numbers.
 */
// ================================================================
// 11. TUPLE DESTRUCTURING
// ================================================================
/**
 * Destructuring allows us to extract tuple elements
 * into separate variables.
 */
let userData = [
    "David",
    32,
    true
];
const [userName, age, isActive] = userData;
console.log("11. Name:", userName);
console.log("Age:", age);
console.log("Active:", isActive);
/**
 * Instead of accessing each element using its index,
 * we can extract all values into separate variables.
 */
// ================================================================
// 12. TUPLE WITH FUNCTIONS
// ================================================================
/**
 * A function can return multiple values using a tuple.
 */
function getUser() {
    return ["Rahim", 25, true];
}
const returnedUser = getUser();
console.log("12. Function Return:", returnedUser);
function getCoordinates() {
    return [23.8103, 90.4125];
}
const [latitude, longitude] = getCoordinates();
console.log("Latitude:", latitude);
console.log("Longitude:", longitude);
let admin = [
    "Rahim",
    "admin"
];
let regularUser = [
    "Karim",
    "user"
];
console.log("13. Admin:", admin);
console.log("Regular User:", regularUser);
const userRecord = [
    101,
    {
        name: "Rahim",
        email: "rahim@example.com"
    }
];
console.log("14. User Record:", userRecord);
const user1 = [
    "Rahim",
    25,
    "rahim@example.com",
    true
];
const user2 = [
    "Karim",
    30,
    "karim@example.com",
    false
];
/**
 * Function to display user information.
 */
function displayUser(user) {
    const [name, age, email, isActive] = user;
    console.log("--------------------------------");
    console.log("USER INFORMATION");
    console.log("--------------------------------");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Email:", email);
    console.log("Active:", isActive);
    console.log("--------------------------------");
}
displayUser(user1);
displayUser(user2);
function getApiResponse() {
    return [
        200,
        "Data fetched successfully"
    ];
}
const [statusCode, message] = getApiResponse();
console.log("16. API Status Code:", statusCode);
console.log("API Message:", message);
const dhakaLocation = [
    23.8103,
    90.4125
];
console.log("17. Dhaka Coordinates:", dhakaLocation);
const userEmail = [
    "email",
    "rahim@example.com"
];
console.log("18. Key:", userEmail[0]);
console.log("Value:", userEmail[1]);
// ================================================================
// 19. TUPLE LENGTH
// ================================================================
/**
 * We can access the length property of a tuple.
 *
 * It returns the number of elements currently present.
 */
let book = [
    "TypeScript Handbook",
    2026,
    "English"
];
console.log("19. Tuple Length:", book.length);
// ================================================================
// 20. COMMON TUPLE ERRORS
// ================================================================
/**
 * COMMON ERROR 1:
 *
 * Assigning values in the wrong order.
 */
let personData = [
    "Rahim",
    25
];
// Invalid:
// personData = [25, "Rahim"];
/**
 * COMMON ERROR 2:
 *
 * Assigning an incorrect data type.
 */
// Invalid:
// personData[0] = 100;
/**
 * COMMON ERROR 3:
 *
 * Providing fewer required elements.
 */
// Invalid:
// let employeeData: [string, number] = ["John"];
/**
 * COMMON ERROR 4:
 *
 * Providing additional elements to a fixed-length tuple.
 */
// Invalid:
// let studentData: [string, number] = ["Alex", 20, true];
/**
 * Always follow the tuple's predefined structure.
 */
// ================================================================
// 21. WHEN SHOULD WE USE TUPLES?
// ================================================================
/**
 * Tuples are useful when:
 *
 * 1. The number of elements is known in advance.
 *
 * 2. The order of elements is important.
 *
 * 3. Each position requires a specific data type.
 *
 * 4. A function needs to return multiple values.
 *
 * 5. We need to represent coordinates or key-value pairs.
 *
 * 6. We need a compact fixed-position data structure.
 *
 *
 * Examples:
 *
 * - Coordinates
 * - API status and message
 * - Key-value pairs
 * - Function return values
 * - Fixed-format records
 */
// ================================================================
// 22. TUPLE BEST PRACTICES
// ================================================================
/**
 * BEST PRACTICES:
 *
 * 1. Use named tuples for better readability.
 *
 * 2. Use readonly when values should not be modified.
 *
 * 3. Use optional elements only when necessary.
 *
 * 4. Avoid using tuples for large and complex objects.
 *
 * 5. Use interfaces or object types when property names
 *    make the data easier to understand.
 *
 * 6. Keep tuple structures simple and meaningful.
 *
 * 7. Avoid confusing tuples with regular arrays.
 */
// ================================================================
// ARRAY VS TUPLE VS OBJECT
// ================================================================
/**
 * ARRAY:
 *
 * Best for storing collections of similar data.
 *
 * Example:
 */
let arrayNumbers = [10, 20, 30, 40];
/**
 * TUPLE:
 *
 * Best for storing fixed-position data
 * with different data types.
 *
 * Example:
 */
let personTuple = [
    "Rahim",
    25
];
/**
 * OBJECT:
 *
 * Best for storing structured data
 * with meaningful property names.
 *
 * Example:
 */
let personObject = {
    name: "Rahim",
    age: 25
};
console.log("Array:", arrayNumbers);
console.log("Tuple:", personTuple);
console.log("Object:", personObject);
// ================================================================
// FINAL SUMMARY
// ================================================================
/**
 * WHAT WE HAVE LEARNED:
 *
 * 1. A tuple is a special type of array in TypeScript.
 *
 * 2. Each tuple position has a predefined data type.
 *
 * 3. Tuple elements are accessed using indexes.
 *
 * 4. Tuple values can be updated if they are not readonly.
 *
 * 5. Optional elements are declared using ?.
 *
 * 6. Readonly tuples prevent modification.
 *
 * 7. Named tuples improve code readability.
 *
 * 8. Rest elements allow multiple elements of a specific type.
 *
 * 9. Destructuring extracts tuple elements into variables.
 *
 * 10. Functions can return tuples.
 *
 * 11. Union types can be used inside tuples.
 *
 * 12. Tuples can also contain objects.
 *
 *
 * FINAL NOTE:
 *
 * Use arrays when you need a collection of similar values.
 *
 * Use tuples when you need a fixed structure with
 * specific data types at specific positions.
 *
 * Use objects or interfaces when you need descriptive
 * property names and more complex data structures.
 *
 * ================================================================
 *                   END OF TUPLE DOCUMENTATION
 * ================================================================
 */
