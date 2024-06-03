// // /* Question 15
// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// // • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// // • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// // • Print a second set of invitation messages, one for each person who is still in your list.*/
// // //1s method
// // interface guest{
// //     name:string
// // }
// // let guestlist:guest[]=[
// //     {name:"Syed"},
// //     {name:"Mesum"},
// //     {name:'Muhammad'}
// // ]
// // for(let guest of guestlist){
// //     console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`)
// // }
// // // guest who cant make it
// // let absentguest=guestlist[1]
// // console.log(`unfortnately ${absentguest.name} can't make it to the dinner`)
// // // adding new guest
// // guestlist[1] = { name: "Areeba" }
// // console.log("\nsending new invitation")
// // // sending new invitation
// // for(let guest of guestlist)
// // console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`)
// // // by using function
// interface Guestlist{
//     name:string;
// }
// function dinnerinvitation(guestlists:Guestlist[]){
// for(let guest of guestlists){
//     console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`)
// }
// // guest who cant make it
// let absentguest=guestlists[1]
// console.log(`unfortnately ${absentguest} can't make it to the dinner`)
// // adding new guest
// guestlists.splice(1,1,{name:"Areeba"})
// console.log("\nsending new invitation")
// // sending new invitation
// for(let guest of guestlists)
// console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`)
// }
// let guestlists=[
//     {name:"Syed"},
//     {name:"Mesum"},
//     {name:'Muhammad'},
// ]
// dinnerinvitation(guestlists)
const dinnerguest = ["Aisha", "Samreen", "Marvi", "Jamila"];
console.log('i have invited these guest to dinner:');
console.log(dinnerguest);
console.log('i have bigger space for dinner table so i have to decide inivite more 3 guest to dinner \n');
//Add one new guest to the beginning of your array
console.log('I inivited to Sahiba 1st of the array');
dinnerguest.unshift('Sahiba');
console.log(dinnerguest);
//  Add one new guest to the middle of your array.
console.log('\n i inivited in middle of array to sara');
dinnerguest.splice(3, 0, "Sara");
console.log(dinnerguest);
//Use append() to add one new guest to the end of your list.
console.log('\n in the end i invited to Mr Burhan');
dinnerguest.push('Burhan');
console.log(dinnerguest);
console.log('********');
//Print a new set of invitation messages, one for each person in your list.
for (let b = 0; b < dinnerguest.length; b++) {
    console.log(`Mrs. ${dinnerguest[b]} you are invited to my dinner`);
}
export {};
