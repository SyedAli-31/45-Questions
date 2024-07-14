// /* Question 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
let myNumbers = [1, 2, 3];
let index = 12; // Assuming the value comes from user input or another source
// This might cause an error if the actual value of 'index' is greater than the array length
console.log(myNumbers[index]);
if (index >= 0 && index < myNumbers.length) {
    console.log(myNumbers[index]);
}
else {
    console.error("Index out of bounds!");
}
// Another scenerio
let mixArray = ["Ali", 28, "Aziz", 56, "Imran", 30, "Burhan", 3, "array"];
// index                 [            0       1     2     3     4    5     6    7   8-undeifined  9 ]
console.log(`Print an array index 0`, mixArray[0]);
console.log(`Print an array index 8`, mixArray[8]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(`Print an array index 1`, mixArray[1]); //array index-1  print
console.log(`Print an array index 9`, mixArray[9]);
mixArray[0]; //
export {};
