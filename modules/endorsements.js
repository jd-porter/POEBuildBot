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
    "Might be ok, but you'll spend most of your money on krangling your gear",
    "Keep it quiet - Carados threatened me with a 500 word essay if I ever revealed the secret of this build.",
    "Path of Matth canceled his boycott when he heard about this build.",
    "zizaran ripped his build so he could switch to this one.",
    "Chris smashed a keyboard and nerfed Talismans again when this got meta.", 
    "ziggy rejected this build for being too unethical",
    "This build is what Project PT warned us about",
    "It's a good beginner build as long as you watch the 70 minute youtube explainer.",
    "reddit cried that this build was nerfed, so it's probably going to be meta next league",
    "ziz only facepalmed a little bit talking this one out"
];


function randomEndorsement() {
    return randomItem.randomItem(endorsements);
} 

module.exports= {randomEndorsement};