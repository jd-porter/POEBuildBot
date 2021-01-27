'use strict';
const randomItem = require('./randomItem.js');

var preambles = [
    "Your next build is going to be a",
    "A youtuber recommended this to me, sounds legit:",
    "Did you see Rodent got to lv 85 in SSFHC with a",
    "Elentor's latest Final Fantasy themed meme build was a",
    "I cobbled this together just for you",
    "I drank a bunch of cough syrup and put this together in POB:",
    "this isn't a levelling build, but it's *pretty good*!!!",
    "Erulisse played a hybrid Animate Weapon-",
    "boo recommended a flask heavy Cobra Lash-",
    "NotOats said the current meta is an aura stacking",
    "this build came to me while revisiting my old MCR myspace page ;-;",
    "You'd be an idiot if you didn't play a chaos ignite",
    "You'd be an idiot if you didn't play a bleed",
    "You'd be an idiot if you didn't play a lacerate",
    "Time to make a 2H",
    "The spiciest build of all is a Wise Oak",
    "You'd be an idiot if you didn't play a dual wield",
    "Time to run a Bigass Thundercubed",
    "NotOats asked me a bunch of probing questions and said this:"
];


function randomPreamble() {
    return randomItem.randomItem(preambles);
} 

module.exports= {randomPreamble};