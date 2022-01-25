/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
//without the spread operator if we delcare an array and then another array linked to the first one and change the second
//the original array will be alterated.

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

//console.log("Array 2: ", arr2);
//console.log("Array 1: ", arr1);

// Copying an array
//using the "spread operator" to copy the array into a new one

let arr3 = [5, 6, 7];
let arr4 = [...arr3];

//when the alteration is done the original will be intact
arr4.push(8);

//console.log("Array 3: ", arr3);
//console.log("Array 4: ", arr4);

// Copying an object
//The same is applied to objects

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4}

//console.log("Object 1: ", obj1);
//console.log("Object 2: ", obj2);


// Copying only part of an array/object

let arr5 = [...arr2, {...obj2}, ...arr4, "x", "y", 23];
console.log(arr5);
