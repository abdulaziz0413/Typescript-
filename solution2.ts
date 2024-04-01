//Write a TypeScript program that declares a variable 'result' that can hold either a 'string' or a 'number'.
// Now write a function that takes an argument of type 'string | number | boolean' and logs its type.
// Declare a variable 'result' with a broader union type
let result: string | number | boolean;

// Function that logs the type of the argument
function logType(arg: string | number | boolean): void {
  if (typeof arg === "string") {
    console.log("Type: string");
  } else if (typeof arg === "number") {
    console.log("Type: number");
  } else if (typeof arg === "boolean") {
    console.log("Type: boolean");
  } else {
    console.log("Type: unknown");
  }
}

// Testing the function with different argument types
result = "TypeScript ";
logType(result); // Output: Type: string

result = 100;
logType(result); // Output: Type: number

result = true; // Assigning a boolean value
logType(result); // Output: Type: boolean
