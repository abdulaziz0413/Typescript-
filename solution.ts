//Write a TypeScript program that declares an array containing both numbers and strings. 
//Use type assertions to extract number, string and boolean values from the array.
// Declare an array 'mixedData' with numbers and strings
const mixedData: (number | string | boolean)[] = [-12, "one", 10, false, "two", 34, true, "three"];
console.log("Original array elements:", mixedData);

// Use type assertion to extract only numbers
const numbersOnly: number[] = mixedData.filter((item): item is number => typeof item === "number");
// Print the extracted numbers
console.log("Numbers Only:", numbersOnly);

// Use type assertion to extract only booleans
const booleanOnly: boolean[] = mixedData.filter((item): item is boolean => typeof item === "boolean");
// Print the extracted numbers
console.log("Boolean Only:", booleanOnly);

// Use type assertion to extract only booleans
const stringOnly: string[] = mixedData.filter((item): item is string => typeof item === "string");
// Print the extracted numbers
console.log("String Only:", stringOnly);
