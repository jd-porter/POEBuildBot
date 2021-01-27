'use strict';

const randomItem = require('./randomItem.js');

var fakeascendancies = [
    "Amazon",
    "Assassin",
    "Barbarian",
    "Druid",
    "Necromancer",
    "Paladin",
    "Sorceress",
    "Bard",
    "Monk",
    "Rogue",
    "Sorcerer",
    "Warrior"
]

function randomAscendancy() {
    return randomItem.randomItem(fakeascendancies);
} 

module.exports= {randomAscendancy};