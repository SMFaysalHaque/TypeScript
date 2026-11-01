
/**
 * ==========================================
 * Topic: Rest Parameters in Function
 * Language: TypeScript
 * File: rest-parameters.ts
 * ==========================================
 *
 * Definition:
 * Rest Parameters allow a function to accept
 * multiple arguments and store them in an array.
 *
 * Syntax:
 * function functionName(...parameter: type[]) {}
 *
 * Note:
 * Rest Parameters must always be the last
 * parameter in a function.
 *
 * Learning Reference:
 * ChatGPT Conversation:
 * [https://chatgpt.com/share/6ae76f52-2e5c-83ec-808e-d299330d5109]
 */

// ==========================================
// 1. Basic Rest Parameters
// ==========================================

function showNumbers(...numbers: number[]): void {
    console.log("Numbers:", numbers);
}

showNumbers(10, 20, 30, 40);


// ==========================================
// 2. Sum of Multiple Numbers
// ==========================================

function addNumbers(...numbers: number[]): number {
    let total: number = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
}

console.log("Sum:", addNumbers(10, 20, 30, 40));


// ==========================================
// 3. Rest Parameters with Normal Parameters
// ==========================================

function studentInfooo(
    name: string,
    age: number,
    ...subjects: string[]
): void {
    console.log("Student Name:", name);
    console.log("Student Age:", age);
    console.log("Subjects:", subjects);
}

studentInfooo(
    "Rahim",
    22,
    "JavaScript",
    "TypeScript",
    "React"
);


// ==========================================
// 4. Find Maximum Number
// ==========================================

function findMaximum(...numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("At least one number is required.");
    }

    return Math.max(...numbers);
}

console.log("Maximum:", findMaximum(10, 50, 30, 90, 20));


// ==========================================
// 5. Rest Parameters with Strings
// ==========================================

function printNames(...names: string[]): void {
    names.forEach((name) => {
        console.log("Name:", name);
    });
}

printNames("Rahim", "Karim", "Jamal", "Hasan");


// ==========================================
// 6. Rest Parameters with Tuple
// ==========================================

function userDetails(
    ...details: [string, number, boolean]
): void {
    console.log("User Name:", details[0]);
    console.log("User Age:", details[1]);
    console.log("Is Active:", details[2]);
}

userDetails("Rahim", 25, true);


// ==========================================
// 7. Rest Parameters with Arrow Function
// ==========================================

const multiplyNumbers = (...numbers: number[]): number => {
    return numbers.reduce((result, num) => result * num, 1);
};

console.log("Multiplication:", multiplyNumbers(2, 3, 4));


// ==========================================
// 8. Spread Syntax Example
// ==========================================

const myNumbers: number[] = [10, 20, 30, 40];

console.log("Spread Result:", Math.max(...myNumbers));


// ==========================================
// END OF REST PARAMETERS
// ==========================================
