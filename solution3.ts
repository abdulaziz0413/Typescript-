//Write a TypeScript generic function that accepts an argument of any type and returns the same value. 
//Test the function with various data types.

// Generic function 'identity' that accepts an argument of any type and returns the same value
function identity<T>(arg: T): T {
    return arg;
   }
   // Test the 'identity' function with various data types
   const num: number = 100;
   const str: string = "TypeScript!";
   const bool: boolean = true;
   const arr: number[] = [1, 2, 3];
   const obj: { key: string } = { key: "value" };
   const resultNum: number = identity(num);
   const resultStr: string = identity(str);
   const resultBool: boolean = identity(bool);
   const resultArr: number[] = identity(arr);
   const resultObj: { key: string } = identity(obj);
   console.log("Result for num: " + resultNum);
   console.log("Result for str: " + resultStr);
   console.log("Result for bool: " + resultBool);
   console.log("Result for arr: " + resultArr);
   console.log("Result for obj: " + resultObj);
   