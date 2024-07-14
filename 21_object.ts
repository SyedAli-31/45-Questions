/* Question 21
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items*/


interface Student{
    name: string;
    age?: number;
    education?: string;
}

let students:Student=
    {name:"syed",age:22,education:"bachelor"}

console.log(students)    

interface book extends Student{
    author:string,
  };
let books:book={
    name: "The Lord of the Rings",
    author:"Elon musk"
}
  
