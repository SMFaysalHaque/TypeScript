"use strict";
/**
==================================================
 TypeScript Learning Notes
 Topic: Object, Type Alias & Interface
==================================================

Author: Your Name
File: object-type-alias-interface.ts

Conversation Reference: https://chatgpt.com/share/6ae826e9-e260-83e8-a049-33b72fbd96ce
*/
// ================================================
// 1. OBJECT
// ================================================
const userr = {
    name: "Rahim",
    age: 25,
    email: "rahim@gmail.com",
    isActive: true,
};
// Access Object Properties
console.log(userr.name);
console.log(userr.age);
// Optional Property
console.log(userr.phone);
// Readonly Object Property
const personn = {
    id: 101,
    name: "Karim",
};
personn.name = "Hasan";
const user11 = {
    name: "Rahim",
    age: 25,
    email: "rahim@gmail.com",
};
const user22 = {
    name: "Karim",
    age: 30,
    email: "karim@gmail.com",
};
const myName = "Rahim";
const myAge = 25;
let currentStatus = "success";
currentStatus = "loading";
const employeee = {
    name: "Rahim",
    salary: 30000,
};
const myUser = {
    name: "Rahim",
    age: 25,
    email: "rahim@gmail.com",
};
const studentt = {
    name: "Karim",
    age: 22,
};
const account = {
    id: 101,
    username: "rahim123",
};
account.username = "karim123";
const developer = {
    name: "Rahim",
    age: 25,
    salary: 50000,
    position: "Frontend Developer",
};
const customerr = {
    name: "Hasan",
    age: 28,
    email: "hasan@gmail.com",
};
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
const order = {
    user: {
        id: 1,
        name: "Rahim",
        email: "rahim@gmail.com",
    },
    product: {
        id: 101,
        title: "Laptop",
        price: 75000,
    },
    status: "success",
};
console.log(order);
// ================================================
// 8. TYPE ALIAS VS INTERFACE
// ================================================
/*
TYPE ALIAS:
- Uses type keyword.
- Supports primitive types.
- Supports Union Types.
- Supports Intersection Types.
- Cannot use Declaration Merging.

INTERFACE:
- Uses interface keyword.
- Mainly describes object structures.
- Supports extends.
- Supports Declaration Merging.
- Can be implemented by classes.

NOTE:
Both Type Alias and Interface can describe
object structures.
*/
// ================================================
// 9. QUICK SUMMARY
// ================================================
/*
OBJECT:
Stores data using key-value pairs.

TYPE ALIAS:
Creates a custom name for a type using type.

INTERFACE:
Defines the structure of an object using interface.

OPTIONAL PROPERTY:
Uses ? to make a property optional.

READONLY:
Prevents reassignment of a property.

UNION:
Uses | to allow multiple possible types.

INTERSECTION:
Uses & to combine multiple types.

EXTENDS:
Allows an interface to inherit another interface.
*/
// ================================================
// 10. CONVERSATION LINK
// ================================================
/*
To add this conversation to GitHub:

1. Open this ChatGPT conversation.
2. Click the Share button.
3. Copy the conversation link.
4. Paste the link below.
*/
const CONVERSATION_URL = "PASTE_YOUR_CHATGPT_SHARE_LINK_HERE";
console.log("Learning Notes:", CONVERSATION_URL);
// ================================================
// OBJECT WITH FUNCTION (METHOD)
// ================================================
const studenttt = {
    name: "Rahim",
    age: 22,
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    },
    getAge: function () {
        return this.age;
    },
};
studenttt.greet();
console.log("My Age:", studenttt.getAge());
// ================================================
// OBJECT METHOD WITH PARAMETERS
// ================================================
const calculator = {
    add: function (a, b) {
        return a + b;
    },
};
console.log("Addition:", calculator.add(10, 20));
// ================================================
// END OF NOTES
// Happy Learning TypeScript!
// ================================================
