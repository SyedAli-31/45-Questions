/*Question 24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// Test 1.Inequality and Equality
// Equality
console.log('Equality');
let appleColor = 'Red';
console.log("Is appleColor == 'Red'?");
console.log(appleColor == 'Red');
// Inequality
console.log('Inequality');
console.log(appleColor != 'Red');
// Test 2. Lower case function
console.log('Equality');
let FirstName = 'Syed Ali'.toLowerCase;
console.log('Is FirstName =="Syed Ali".toLowerCase?');
console.log(FirstName == 'Syed Ali'.toLowerCase);
console.log('Inequality');
console.log(FirstName != 'Syed Ali'.toLowerCase);
// Test 3. Numerical Test
// Greater than
console.log('greater than');
let x1 = 5;
let x2 = 10;
console.log("Is x2>x1?");
console.log(x2 > x1);
//Less than
console.log('less than');
console.log(x2 < x1);
// Equal To
console.log('Equal to');
console.log(x2 == x1);
// Test Using And and Or Operators
console.log('Using && Operator');
let a1 = 24;
let a2 = 42;
console.log("Is a1<a2 && a1>=a2?");
console.log(a1 < a2 && a1 >= a2);
console.log('Using || Operator');
console.log(a1 < a2 || a1 >= a2);
// Test. Weather an item is an array
console.log("Array testing");
let arr = ["mango", "banana", "strawberry"];
let item1 = "banana";
let item2 = "Apple";
console.log("Does arr have", item1, "?");
console.log(arr.includes(item1));
//Test. Weather an item is not in array
console.log("Does arr have", item2, "?");
console.log(arr.includes(item2));
export {};
