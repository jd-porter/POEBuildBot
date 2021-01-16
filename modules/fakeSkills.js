'use strict';

const randomItem = require('./randomItem.js');

var fakeskills = [
    "Arctic Blast", 
    "Armageddon", 
    "Blade Fury", 
    "Blade Sentinel", 
    "Blade Shield ", 
    "Blades of Ice", 
    "Burst of Speed", 
    "Carrion Vine", 
    "Charged Bolt Sentry", 
    "Claw Mastery", 
    "Claws of Thunder", 
    "Cloak of Shadows", 
    "Cobra Strike", 
    "Cyclone Armor", 
    "Death Sentry", 
    "Dragon Claw", 
    "Dragon Flight", 
    "Dragon Tail", 
    "Dragon Talon", 
    "Fade", 
    "Feral Rage", 
    "Fire Blast", 
    "Fire Claws", 
    "Firestorm", 
    "Fissure", 
    "Fists of Fire", 
    "Fury", 
    "Heart of Wolverine", 
    "Hunger", 
    "Hurricane", 
    "Lightning Sentry", 
    "Lycanthropy", 
    "Maul", 
    "Mind Blast", 
    "Molten Boulder", 
    "Oak Sage", 
    "Phoenix Strike", 
    "Poison Creeper", 
    "Psychic Hammer", 
    "Rabies", 
    "Raven", 
    "Shadow Master", 
    "Shadow Warrior", 
    "Shock Wave", 
    "Shock Web", 
    "Solar Creeper", 
    "Spirit of Barbs", 
    "Summon Dire Wolf", 
    "Summon Grizzly ", 
    "Summon Spirit Wolf", 
    "Tiger Strike", 
    "Tornado", 
    "Twister", 
    "Venom", 
    "Volcano", 
    "Wake of Fire", 
    "Wake of Inferno", 
    "Weapon Block", 
    "Werebear", 
    "Werewolf"
];


function randomSkill() {
    return randomItem.randomItem(fakeskills);
} 

module.exports= {randomSkill};