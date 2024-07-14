// /*Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/



// let favPlaces=["yistralia","zubai","nz","switz","uae"]
// console.log("original order")
// favPlaces.forEach((locations)=>(console.log(locations)))
// // favPlaces.forEach(function(favPlaces){
// //     console.log(favPlaces)
// // })
// console.log("alphabetical order")
// let newOrder=[...favPlaces].sort()
// newOrder.forEach((locations)=>(console.log(locations)))

// //showinjg array is in original order
// favPlaces.forEach((locations)=>(console.log(locations)))


// //Reverse the order of your list
// let revorder=[...favPlaces].sort((a,b)=>b.localeCompare(a))
// //show that its order has changed
// console.log("reverse alphabetical order")
// revorder.forEach((location)=>(console.log(location)))

// //reverse to show back to original order
// console.log("back to original order")
// revorder.reverse()
// revorder.forEach((location)=>(console.log(location)))



















// // // store 5 places
// // let myPlaces=[
// //     "Turkiye",
// //     "Switzerland",
// //     "Saudia Mekka",
// //     "Australia",
// //     "Canada",
// // ]
// // //print array in its original order
// // console.log("original order:",)
// // myPlaces.forEach((destination)=>(console.log(destination)))

// // // Print your array in alphabetical order without changing order
// // console.log("\nAlphabetical Order :");
// // const neworder = [...myPlaces].sort(); // Create copy and sort
// // neworder.forEach((destination) => console.log(destination));

// // //showing array is in original order
// // console.log("original order")
// // myPlaces.forEach((destination)=>(console.log(destination)))

// // // reverse alphabetical order
// // // Print your array in alphabetical order without changing order
// // console.log("\n reverse Alphabetical Order :");
// // const sortedPlaces = [...myPlaces].sort((a,b)=>b.localeCompare (a)); // Create copy and sort
// // sortedPlaces.forEach((destination) => console.log(destination));

// // //showing array is in original order
// // console.log("\noriginal order")
// // myPlaces.forEach((destination)=>(console.log(destination)))

let myplace: string[] = ['karachi','hyd','sukkur','badin','larkana','dadu'] // store location in arr
console.log(myplace)//1. print original arr 
// making a copy of array
let copyofarr =myplace.slice();
//alphabetical
console.log('alphabetical order')//2. alphabetcal arr
let sortedarr = copyofarr.sort();
console.log(sortedarr)
//original arr
console.log('still in original order') // 3. still original
console.log(myplace)
//reverse arr
console.log('reverse order')
let reverserarr=myplace.reverse();
console.log(reverserarr);
//again reverse order
console.log('again reverse order')
let reverserarr1=myplace.reverse();
console.log(reverserarr);
