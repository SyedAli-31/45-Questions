/*Question 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
function dinnerinvitation(guestlist) {
    //  for(let guest of guestlist){
    //     console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`)
    //  }
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
        { name: "Munawwar" },
        { name: "Bilal" },
        { name: "Ayesha" }
    ];
    guestlist.unshift(newguest[0]);
    guestlist.splice(2, 0, newguest[1]);
    guestlist.push(newguest[2]);
    // guestlist.push(...newguest)
    for (let guest of guestlist) {
        console.log(`Hello ${guest.name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`);
    }
    //Dinner table won't arrive
    // remove all guests until only 2 remaining
    console.log(`Really sorry, new dinner table won't arrive in time for the dinner, so i have space for only two guests.`);
    while (guestlist.length > 2) {
        const removeGuest = guestlist.pop();
        if (removeGuest) {
            console.log(`\nUnfortunately,${removeGuest.name} my new dinner table won't arrive on time. I can only invite two guests.`);
        }
    }
    // invitation for remaing guest
    console.log(`\n remaining guest who are still invited`);
    for (let guest of guestlist) {
        console.log(`Hello ${guest.name} you are still invited for today's dinner party`);
    }
    // remove all guest and print empty list
    console.log(`\n Remove all guest and print empty list\n`);
    guestlist.length = 0;
    console.log("Empty list", guestlist);
}
let guestlist = [
    { name: "Syed" },
    { name: "Muhammad" },
    { name: "Mesum" }
];
dinnerinvitation(guestlist);
export {};
