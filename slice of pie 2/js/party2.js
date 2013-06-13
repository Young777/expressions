//Shaylen Young - 06 - 12 - Determine Amount of Pizza and Guests
var pizzas = 8;
var slicesperpizza = 12;
var guests = 20;
//Calculate the Slices of Pizza per person
var slicestotal = pizzas * slicesperpizza;
var results = (slicestotal / guests );
//Sparky wants the left overs
var leftovers = slicestotal - 90
console.log(leftovers)
Slice of Pie part II

At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?
    Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
Given:
    Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.
    Result Variables:
    Number of slices Sparky gets to eat.
    Result to Print:
    “Sparky got X slices of pizza.”