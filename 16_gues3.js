/* Question 16
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
function dinnerinvitation(guestlist) {
    for (let guest of guestlist) {
        console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`);
    }
    // guest who cant make dinner
    let absentguest = guestlist[1];
    console.log(`\nunfortunately ${absentguest.name} cant make it to the dinner`);
    // add new guest
    guestlist[1] = { name: "Areeba" };
    //sending new invitaion
    console.log(`\n sending new invitation! by adding new guest\n`);
    for (let guest of guestlist) {
        console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`);
    }
    // found more bigger table
    console.log("\n we just found bigger dinner table\n New invitation by adding more guests");
    let newguest = [
        { name: "Elon musk" },
        { name: "Billgates" },
        { name: "Jeff bezos" }
    ];
    guestlist.unshift(newguest[0]);
    guestlist.splice(2, 0, newguest[1]);
    guestlist.push(newguest[2]);
    // guestlist.push(...newguest)
    for (let guest of guestlist) {
        console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`);
    }
}
let guestlist = [
    { name: "Syed" },
    { name: "Muhammad" },
    { name: "Mesum" }
];
dinnerinvitation(guestlist);
export {};
