// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstname="Laura";
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastname="Burbank";
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullname = firstname + lastname;
// 4 - Console log the value of `fullName`
console.log(firstname, lastname);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckynumber= 3
// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if syou need help with this one.
console.log( 'My name is', firstname, lastname, 'and I think', luckynumber, 'is a winner!' );

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = false;
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "sushi"
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 1
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendspets = 4
// 11 - Add two pets to your `pets` variable
pets +=2
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedpets = 3
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"
if (adventurous == true) {console.log( "Adventures are great!");}
else {console.log( "How about we just stay home?");}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if (luckynumber == 2 && adventurous == true) {console.log ("Roll the dice!");}

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
if (pets < allowedpets) {console.log("I can have more pets!");}
else if(pets == allowedpets) {console.log("I have enough pets");}
else if(pets > allowedpets) {console.log("Oh no, I have too many pets!");}
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

//if pets greater than friends pets mostpets equals pets 
//if pets is equal to freinds pets most pets equals pets
//if pets is less than friends pets most pets equals friends pets

if (pets >= friendspets) {mostpets = pets;}  
else {mostpets = friendspets;}
console.log (mostpets);


// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!
switch (true) {
    case pets >= friendspets:
        console.log (mostestpets = pets)
        break;
    case pets < friendspets:
        console.log (moestestpets = friendspets)
      break;
    default: 
        console.log ("no pets for you.")
  }

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?"

adventuretime = true;
var adventuretime = (adventuretime == true)? console.log('Adventures are great!'): console.log('How about we stay home?');
