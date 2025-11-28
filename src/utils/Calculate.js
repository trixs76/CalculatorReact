// ---------------------------------------------------------------------
// Calculate.js
// Utility functions for calculator operations.
// Exports:
//   - operations: list of supported operations
//   - calculate(a, b, operation): performs arithmetic based on operation
// ---------------------------------------------------------------------

export const operations = [
    { value: "+", label: "Addition" },
    { value: "-", label: "Subtraction" },
    { value: "*", label: "Multiplication" },
    { value: "/", label: "Division" },
];

export function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return null;
    }
}