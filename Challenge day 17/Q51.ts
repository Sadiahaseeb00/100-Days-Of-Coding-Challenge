// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Question 51

// calculate the area of rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// refactor into an arrow function
let rectangleAreaArrow = (width: number, height: number) => width * height;
console.log("Area of rectangle:");
console.log(rectangleAreaArrow(4, 5));  // log the area of the rectangle 