"use strict";
// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Question 46
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "Dell",
    model: "XPS 13",
    year: 2022,
    describe: function () {
        console.log(`\nThis laptop is a ${this.make} ${this.model} ${this.year}.`);
    }
};
laptop.describe();
