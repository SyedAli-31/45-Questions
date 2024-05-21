/* Question 3
Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.*/


 let Namecases="Syed Ali"
 console.log("Lowercase:" ,Namecases.toLowerCase())
 console.log("Uppercase:", Namecases.toUpperCase())
 console.log("Titlecase:",Namecases.replace(/\b\w/g,c=>c.toUpperCase()))