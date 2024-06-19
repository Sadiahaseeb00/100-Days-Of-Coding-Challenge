// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

// Question 47

let laptops = [
    {make: "Dell", model: "XPS 13", year: 2021},
    {make: "HP", model: "Spectre x360", year: 2023},
    {make: "Lenovo", model: "ThinkPad X1", year: 2023}
];

let [firstLaptop, secondLaptop] = laptops;

console.log(firstLaptop);
console.log(secondLaptop);