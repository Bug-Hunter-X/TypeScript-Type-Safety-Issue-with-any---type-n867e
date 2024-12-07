# TypeScript Type Safety Issue with any[] type

This repository demonstrates a subtle type safety issue in TypeScript related to using the `any[]` type for function parameters.  While `any[]` might seem flexible, it can mask type errors, especially when dealing with arrays of objects. The code examples highlight a scenario where the function works correctly for simple arrays but throws an error when used with an array of objects. The solution demonstrates how to use a generic type to enforce type safety effectively and elegantly. 

## Bug
The `printArray` function in `bug.ts` accepts `any[]` as a parameter which seems flexible but this can lead to runtime errors or unexpected behaviour if the array contains objects. The `bug.ts` file contains a demonstration of this issue.

## Solution
The `bugSolution.ts` file provides a solution demonstrating how to correctly handle arrays of objects using a generic type parameter. This solution enforces compile time type checking, preventing the runtime error shown in `bug.ts`.

## How to run
1. Clone this repository
2. Navigate to the repository's root directory.
3. Compile the TypeScript files using `tsc bug.ts bugSolution.ts` 
4. Run the compiled JavaScript file using `node bug.js bugSolution.js`
