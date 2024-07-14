/* Quesion 20
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.*/
let Mymountains = ["k2 mountain", "mount everest", "nanga parbat"];
// use for each
Mymountains.forEach(element => { console.log(element); });
// use for loop
for (let arr of Mymountains) {
    console.log(arr);
}
// use while loop
let i = 0;
while (i < Mymountains.length) {
    console.log(Mymountains[i]);
    i++;
}
// use do while
let index = 0;
do {
    console.log(Mymountains[index]);
    index++;
} while (i < Mymountains.length);
export {};
