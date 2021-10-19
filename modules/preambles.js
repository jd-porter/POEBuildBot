'use strict';
const randomItem = require('./randomItem.js');

var preambles = [
    "Your next build is going to be a",
    "A vtuber recommended this to me, sounds legit:",
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
    "After spending some time playing Wolcen, it's time to go back to a lacerate",
    "Time to make a 2H",
    "The spiciest build of all is a Wise Oak",
    "You'd be an idiot if you didn't play a dual wield",
    "Time to run a Bigass Thundercubed",
    "NotOats asked me a bunch of probing questions and said this:",
    "Whip up this one-button Headhunter Spellslinger -",
    "Since your favorite explode chest melee build got nerfed, why not try a",
    "I think my lil pogchamp needs to try a",
    "beephole got up to act 8 with this",
    "Slow POE enthusiasts are enamored with this","Mathil's next cosplay is gonna be based on a",
    "Cutedog mispronounced this",
    "it's a decent build but it ain't no cactuar.",
    "Slow POE enthusiasts are enamored with this",
    "Salutations Exile! Let's try crashing an instance with this",
    "Time to farm A10 Kitava with a Low Life",
    "When I'm not playing Hades, I like to chill with a",
    
    "Beep thinks you're an idiot for trying a "
];


function randomPreamble() {
    return randomItem.randomItem(preambles);
} 

module.exports= {randomPreamble};