/*Question 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

let guestlist=["Syed","Mesum",'Muhammad']
for(let name of guestlist){

    let message=(`Hello ${name},\n"I'm hosting a dinner party tonight and it would be an honor to have you there!"`)
    console.log(message)
}

