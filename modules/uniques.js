'use strict';
const randomItem = require('./randomItem.js');

var uniques = [
    "ugh pathfinder leapslam looking too good :star:",
    "Hexblast Occultist has been buffed. Take it to Malachai and try yourself! :star: ",
    "I listen to Paris by Paris Hilton on repeat, appreciating the nuances of the hip-hop influence into what can only be described as a post-trip-hop, soul-infused electropop, heavily moving away from the then dominant aggressive power pop, as I drink some Portuguese white wine, legs crossed, appreciating the subtle qualities of life. As I do that, lifestyle magazines by my side, I scroll on my tablet to read the latest vanguard content on the Internet - 'try flicker strike on endless delve'. :star:",
    "I can't recommend a build to suit your terrible, terrible playstyle :star:",
    "new meta is a no-equipment empty hand build :star:",
    "you can ignite just about anything now, it owns. OWN Elementalist :star:",
    "get in touch with your inner Silk by playing an Arakaali's Fang Necromancer :star:",
    "Any build you play will be good and viable, we believe in u :star:",
    "I think you should stop brewing POE builds and get back to work 🐚"
]


function randomUnique() {
    return randomItem.randomItem(uniques);
} 

module.exports= {randomUnique};