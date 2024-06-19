"use strict";
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Question 49
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function with rest parameters that accept multiples hobbies as arguments
function loghobbies(...hobbies) {
    // using loop through each hobby in the array
    hobbies.forEach(hobby => {
        // log a statement
        console.log(`I enjoy ${hobby}.`);
    });
}
;
// call the function with 3 hobbies
loghobbies("Coding", "Painting", "Reading");
