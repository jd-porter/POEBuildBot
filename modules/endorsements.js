'use strict';
const randomItem = require('./randomItem.js');

var endorsements = [
    "Looks legit",
    "Good luck with that!",
    "Totally Acts Viable!",
    "10M DPS Sirus damage guaranteed!",
    "Get on it before it goes meta!",
    "20c to get started, viability only goes up the more you spend!",
    "movespeed might be a problem",
    "Great clearspeed on this one, imo",
    "ah fuck, that can't be right 😿",
    "This build recommendation is legally binding in Florida and New Zealand.",
    "I think rodent did this two leagues ago, so it's probably great.", 
    "I think pok did this two leagues ago, so it's probably great.", 
    "I think Vas did this two leagues ago, so it's probably great.",
    "GGG will have to nerf it mid-league after it gets out.",
    "You're going to love running it!",
    "but you'll probably just use your starter skill the whole league",
    "McFrugal isn't very impressed. ",
    "Might be ok, but you'll spend most of your money on krangling your gear"
];


function randomEndorsement() {
    return randomItem.randomItem(endorsements);
} 

module.exports= {randomEndorsement};