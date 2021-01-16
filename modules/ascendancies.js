'use strict';

const randomItem = require('./randomItem.js');
var ascendancies = [
    "Ascendant",
    "Assassin",
    "Berserker",
    "Champion",
    "Chieftain",
    "Deadeye",
    "Elementalist",
    "Gladiator",
    "Guardian",
    "Hierophant",
    "Inquisitor",
    "Juggernaut",
    "Necromancer",
    "Occultist",
    "Pathfinder",
    "Raider",
    "Saboteur",
    "Trickster"
]

function randomAscendancy() {
    return randomItem.randomItem(ascendancies);
} 

module.exports= {randomAscendancy};