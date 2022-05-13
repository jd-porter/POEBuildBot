const Discord = require('discord.js');
const titlecase = require('title-case').titleCase;
const heist = 
{
    
"Lockpicking":["Currency","Jewelry","Fragments"],
"Brute Force":["Fossils","Uniques","Weapons"],
"Engineering":["Essences","Uniques","Maps"],
"Agility":["Harbinger","Essences","Fossils","Currency","Armour"],
"Counter-Thaumaturgy":["Gems","Currency","Jewelry"],
"Perception":["Divination Cards","Prophecies", "Jewelry"],
"Demolition":["Metamorph","Delirium","Random","Blight"],
"Trap Disarmament":[
    "Weapon",
"Abyss",
"Breach",
"Talismans",
"Legion",
"Armour"
],
"Deception":["Divination Cards","Harbinger","Armour"]
}


var members = {
    "Karst": 
    {
        name:"Karst, the Lockpick",
        perk:"(15-35)% less raising of Alert Level from opening Reward Chests",
        skills:"Lockpicking (5)\nPerception (3)\nAgility (2) ",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/6/6f/Karst_icon.png"
    },
    "Tibbs": 
    {
        name:"Tibbs, the Giant",
        perk:"Can unlock (1-1.8) Mechanical Chest after Lockdown per Wing",
        skills:"Brute Force (5)\nDemolition (4) ",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/a/a9/Tibbs_icon.png"
    },
    "Isla": 
    {
        name:"Isla, the Engineer",
        perk:"(25-45)% increased time before Lockdown",
        skills:"Engineering (5)\nTrap Disarmament (4) ",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/a/ad/Isla_icon.png"
    },
    "Tullina": 
    {
        name:"Tullina, the Catburglar",
        perk:"(6-22)% chance to find additional Heist Targets from Secret Reward Rooms\n(4-12)% less raising of Alert Level",
        skills:"Agility (5)\nLockpicking (3)\nTrap Disarmament (2)",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/a/ae/Tullina_icon.png"
    },
    "Niles": 
    {
        name:"Niles, the Interrogator",
        perk:"Can unlock 1 Magical Chest after Lockdown per Wing\nDiscovers a Blueprint Reveal upon completion of a Heist Contract Mission\nReveals additional wings and rooms in blueprints at a 10% discounted price. ",
        skills:"Counter-Thaumaturgy (5)\nDeception (4) ",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/3/38/Niles_icon.png"
    },
    "Nenet": 
    {
        name:"Nenet, the Scout",
        perk:"Can Scout nearby Enemy Patrols and Elite Patrols during Heists\n(5-17)% less raising of Alert Level",
        skills:"Perception (5)\nCounter-Thaumaturgy (4)",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/9/9e/Nenet_icon.png"
    },
    "Vinderi": 
    {
        name:"Vinderi, the Dismantler",
        perk:"Heist Chests have a (4-12)% chance to Duplicate their contents\n(10-26)% more raising of Alert Level",
        skills:"Demolition (5)\nTrap Disarmament (5)\nEngineering (2)",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/5/5e/Vinderi_icon.png"
    },
    "Huck": 
    {
        name:"Huck, the Soldier",
        perk: "Is a powerful Combatant and provides strong Buffs to Allies\nPlayers have (5-25)% increased Experience gain",
        skills: "Lockpicking (3)\nBrute Force (3)\nDemolition (3)\nEngineering (3) ",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/5/51/Huck_icon.png"

    }  ,
     "Gianna": 
    {
        name:"Gianna, the Master of Disguise",
        perk: "(5-25)% reduced Blueprint Revealing Cost\nDiscovers a Blueprint Reveal upon completion of a Heist Contract Mission\nReveals additional wings and rooms in blueprints at a (15-35)% discounted price. ",
        skills: "Deception (5)\nCounter-Thaumaturgy (3)\nPerception (2)",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/e/ec/Gianna_icon.png"

    }
};
const heistKeys = Object.keys(heist);

const membersKeys = Object.keys(members);

function createMessage(message, args) {
    
    var memberEmbed = null;
    var rewardEmbed = null; 
    if (args.length ==1 && args[0]=="rogues"){
        message.reply(`\`\`\`HEIST ROGUES
Name   | Skills                                                    | Attack Type
Karst  | Lockpicking[5] Perception[3] Agility[2]                   | Projectiles
Tibbs  | Brute Force[5] Demolition[4]                              | Melee
Isla   | Engineering[5] Trap Disarmament[4]                        | Spell
Tullina| Agility[5] Lockpicking[3] Trap Disarmament[2]             | Melee
Niles  | Counter-Thaumaturgy[5] Deception[4]                       | Spell
Nenet  | Perception[5] Counter-Thaumaturgy[4]                      | Projectiles
Vinderi| Demolition[5] Trap Disarmament[5] Engineering[2]          | Melee
Gianna | Deception[5] Counter-Thaumaturgy[3] Perception[2]         | Spell
Huck   | Lockpicking[3] Brute Force[3] Demolition[3] Engineering[3]| Melee

UNLOCKS:
Tibbs → Tullina → Nenet
Karst → Huck → Niles → Vinderi → Gianna\`\`\``
        );
        return;
    }
    if (args.length >= 1) {
        args.forEach(thisKey => {
            thisKey = titlecase(thisKey);
            if (membersKeys.includes(thisKey))
            { //we're dealing with a member  
                memberEmbed = new Discord.MessageEmbed(); 
                memberEmbed.setTitle(members[thisKey].name)
                .setColor("#79302F") 
                .setThumbnail(members[thisKey].image)
                .addFields(
                    { name: 'Perks', value: members[thisKey].perk  },
                    { name: 'Skills', value: members[thisKey].skills  }, 
                );
                message.reply(memberEmbed);
            }
            else 
            { // we're dealing with a reward
                
                if (rewardEmbed === null) {
                    rewardEmbed = new Discord.MessageEmbed();  
                    rewardEmbed.setTitle("Heist Rewards")
                    .setColor("#79302F")
                    .setDescription("[Heist](https://pathofexile.fandom.com/wiki/Heist)");
                }
                console.log("finding rewards");
              
                if (heistKeys.includes(thisKey))
                {
                    rewardEmbed.addField(thisKey,heist[titlecase(thisKey)].join(", "));
                }
                else
                {
                    // reward type
                    rewardEmbed.addField(thisKey, 
                        Object.entries(heist).filter(e=> e[1].includes(thisKey)).flatMap(e=>e[0]).join(", ")
                    );
                }  
            }
        }); 
    }
    else {
        // no args specified, dump out rewards
        let embed = new Discord.MessageEmbed();
        heistKeys.forEach(thisKey => {
            embed.addField(thisKey,heist[thisKey].join(", "));
        }); 
        
         message.reply(embed);
    }
    if (rewardEmbed !==null)
    {
         message.reply(rewardEmbed);
        
    }
}


module.exports = {
    name: "heist",
    description: "Heist members and rewards",
    category: "category",
    guildOnly: false,
    cooldown: 2, 
    usage: "!heist Vinderi\n!heist currency\n!heist (lists all rewards)",
    execute(message, args) {
        createMessage(message, args);
    },
};