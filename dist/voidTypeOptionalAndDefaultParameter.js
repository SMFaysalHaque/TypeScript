"use strict";
/*
====================================================
 TypeScript Learning Notes
 Topic: Void Type, Optional & Default Parameters
 File: void-optional-default.ts
====================================================

1. VOID TYPE
----------------------------------------------------
- void is a return type.
- It means a function does not return a specific value.
- A function can still perform tasks like console.log().
*/
// Example:
function sayHello() {
    console.log("Hello World!");
}
sayHello();
// Output: Hello World!
/*
2. OPTIONAL PARAMETER
----------------------------------------------------
- Optional parameters are not mandatory.
- Use (?) to make a parameter optional.
- If no value is provided, it becomes undefined.
*/
// Example:
function studentInfoo(name, age) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}
studentInfoo("Rahim");
studentInfoo("Karim", 25);
// Output:
// Name: Rahim
// Age: undefined
// Name: Karim
// Age: 25
/*
3. DEFAULT PARAMETER
----------------------------------------------------
- A default parameter has a predefined value.
- If no value is provided, the default value is used.
- Use (=) to assign a default value.
*/
// Example:
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
greet();
greet("Rahim");
// Output:
// Hello Guest
// Hello Rahim
/*
4. OPTIONAL VS DEFAULT PARAMETER
----------------------------------------------------

Optional Parameter:
    age?: number

Default Parameter:
    age: number = 18

Main Difference:

Optional:
    If omitted, value becomes undefined.

Default:
    If omitted, predefined value is used.
*/
/*
5. COMBINED EXAMPLE
----------------------------------------------------
- Required Parameter
- Optional Parameter
- Default Parameter
*/
// Example:
function userInfo(name, age, country = "Bangladesh") {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age ?? "Not provided"}`);
    console.log(`Country: ${country}`);
}
userInfo("Rahim");
userInfo("Karim", 25, "USA");
// Output:
// Name: Rahim
// Age: Not provided
// Country: Bangladesh
//
// Name: Karim
// Age: 25
// Country: USA
/*
6. IMPORTANT RULES
----------------------------------------------------

1. void means no specific return value.
2. (?) makes a parameter optional.
3. (=) assigns a default value.
4. Required parameters must come before optional parameters.
5. Optional parameters return undefined when omitted.
6. Default parameters use their default value when omitted.
7. You can use Optional and Default parameters together.
*/
/*
7. QUICK REVISION
----------------------------------------------------
*/
// Void
function test1() { }
// Optional
function test2(age) { }
// Default
function test3(age = 18) { }
/*
====================================================
 GITHUB LEARNING RESOURCE
====================================================

Topic: TypeScript - Void, Optional & Default Parameters

*/
// export {};
/*
Paste your ChatGPT Share Link below.

Example: https://chatgpt.com/share/6ae766ca-79f8-83ec-91bc-8cfb4649f018

====================================================
 END OF NOTES
====================================================
*/ 
