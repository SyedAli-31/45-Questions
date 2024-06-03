/*Question 12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.*/
// 1st mehod 

let friendsName=["Syed","mesum","Asif"]

for(let i=0;i<friendsName.length;i++){
    console.log(`My friend ${friendsName[i]}, How are you ? Everything okay? `)
}


// 2nd method

const people = ["Alice", "Bob", "Charlie", "Diana"];

for (const name of people) {
    // let message=`My friend ${name}, How are you ? Everything okay?`
  console.log(`My friend ${name}, How are you ? Everything okay?`);
}

