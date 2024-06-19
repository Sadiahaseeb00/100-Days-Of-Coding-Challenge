"use strict";
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
// Question 48
let laptop1Price = [10000, 20000, 55000];
let laptop2Price = [40000, 60000, 80000];
let combinedLaptopPrices = [...laptop1Price, ...laptop2Price].sort();
console.log(combinedLaptopPrices); // first sort then print the new array
