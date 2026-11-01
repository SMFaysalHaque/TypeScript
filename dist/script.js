"use strict";
const totalSum = (a, b) => {
    return a + b;
};
console.log(totalSum(800, 500));
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [1, 2, 3, 4, 5];
/**
 * ==========================================
 * TypeScript Generics: T vs. <T>
 * ==========================================
 *
 * Topic Discussion:
 * [https://chatgpt.com/share/6ae71d0d-da50-83ee-baf4-d3133e020cfb]
 *
 * 1. Correct Syntax: Generic Type Declaration
 *
 * <T> declares a generic type parameter.
 * It tells TypeScript that T is a type variable
 * that can be used throughout the function.
 */
function getItems(items) {
    return items;
}
// Example 1: Using number type
const numbers = getItems([1, 2, 3, 4, 5]);
// Example 2: Using string type
const names = getItems(["Rahim", "Karim", "John"]);
/**
 * 2. Incorrect Syntax: Missing Generic Declaration
 *
 * function getItems(items: Array<T>): Array<T> {
 *   return items;
 * }
 *
 * This code produces a TypeScript error because T
 * has not been declared.
 *
 * TypeScript does not recognize T as a generic type
 * parameter unless it is declared first.
 */
/**
 * Key Takeaways:
 *
 * - <T> declares a generic type parameter.
 * - T represents the declared generic type parameter.
 * - You cannot use T without declaring it first.
 * - T can be replaced with names like Type, Item, or Value.
 * - TypeScript can also infer the type automatically.
 */
// Type inference (without explicitly passing the type)
const scores = getItems([10, 20, 30]);
const users = getItems(["Alice", "Bob"]);
