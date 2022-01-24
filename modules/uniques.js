'use strict';
const randomItem = require('./randomItem.js');

var uniques = [
    "ugh pathfinder leapslam looking too good :star:",
    "Hexblast Occultist has been buffed. Take it to Malachai and try yourself! :star: ",
    "I listen to Paris by Paris Hilton on repeat, appreciating the nuances of the hip-hop influence into what can only be described as a post-trip-hop, soul-infused electropop, heavily moving away from the then dominant aggressive power pop, as I drink some Portuguese white wine, legs crossed, appreciating the subtle qualities of life. As I do that, lifestyle magazines by my side, I scroll on my tablet to read the latest vanguard content on the Internet - 'try flicker strike on endless delve'. :star:",
    "I can't recommend a build to suit your terrible, terrible playstyle :star:",
    "new meta is a no-equipment empty hand build :star:",
    "get your friends together for a Destructive Link/ Protective Link/ Vampiric Link/ Flame Link/ Soul Link/ Intuitive Link circle jerk! :star:",
    "After playing too much D2R, you gotta get on a cyclone- tornado build :star:",
    "Defy Death with a Cast on Death Temporal Rift build :star:",
    "piss in your own jug and be the Poisonous Concoction build you want to see in the world :star:",
    "G E T  E Q U I P P E D \nW I T H\n D I S A P P O I N T M E N T\n and Energy Blade :star:",
    "you can ignite just about anything now, it owns. OWN Elementalist :star:",
    "get in touch with your inner Silk by playing an Arakaali's Fang Necromancer :star:",
    "Any build you play will be good and viable, we believe in u :star:",
    "I think you should stop brewing POE builds and get back to work 🐚",
    "Does theorycrafting a build even mean anything anymore 😭",
    "Krangle up a sexy hypothermia bleed build ❄️",
    "Second wind knockback Chainhook is king shit right now ⛓️",
    "slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead slinger dead :salt:",
    "VHPG's General Cry+Ice Crash Bow build looking good. minimum 200Ex investment, but they know a guy who can help with that 💰",
    "DERVISH RAMPAGE SUPREMACY :star:",
    "Carados has a super-illegal General's Cry-Chain Hook POB, 32M damage *minimum* ⛓ :star:"
]


function randomUnique() {
    return randomItem.randomItem(uniques);
} 

module.exports= {randomUnique};