
const Discord = require('discord.js');
var members = {
    aisling: {
        name:"Aisling Laffrey, The Silent Butcher",
        overall: "Best in intervention, but weak for intervention",
        mod: "#% increased Global Physical Damage\n#% increased Global Chaos Damage",
        transport: "weak - veiled weapons & jewellery",
        fortification: "weak - veiled armour & jewellery",
        research: "medium -  add veiled mods",
        intervention: "medium - metamorph scarab",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/b/b2/Aisling_Laffrey%2C_The_Silent_Butcher.png"
    },
    cameria:  {
        name: "Cameria the Coldblooded",
        overall: "Best in Intervention",
        mod: "#% increased Global Critical Strike Chance\n+#% to Critical Strike Multiplier if you've Shattered an Enemy Recently",
        transport: "weak - timeworn item",
        fortification: "no - harbinger currency",
        research: "medium - sextants",
        intervention: "strong - sulphite scarab",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/b/b9/Cameria_the_Coldblooded.png"
    },
    elreon:  {
        name: "*Elreon, Light's Judge*",
        overall: "Useful mod, terrible safehouse rewards",
        mod:"Channeling/Non-Channeling Skills have -# to Total Mana Cost",
        transport: "no - unique weapon",
        fortification: "no - unique armor",
        research: "no - unique jewellery",
        intervention: "no - reliquiary scarab",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/f/f2/Elreon%2C_Light%27s_Judge.png"
    },
    gravicius:  {
        name: "*Gravicius Reborn*",
        overall: "Overall: offers div cards",
        mod:"Gain #% of Maximum Life as Extra Maximum Energy Shield",
        transport: "medium - full stack of div cards",
        fortification: "no - random div cards",
        research: "weak - swap div cards",
        intervention: "medium - div card scarab",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/1/14/Gravicius_Reborn.png"
    },
    guff:  {
        name: "*Guff 'Tiny' Grenn*",
        overall: "Overall: 🗑️ good for fans of disappointment",
        mod:"#% increased Damage during any Flask Effect",
        transport: "no - chaos crafting table",
        fortification: "no - essence crafting table",
        research: "no - annul & exalt craft",
        intervention: "no - alteration spam",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/8/82/Guff_Tiny_Grenn.png"
    },
    haku:  {
        name: "*Haku, Warmaster*",
        overall: "Overall: very weak - generates rare items & strongboxes",
        mod: "+#% to Quality of Socketed Gems",
        transport: "no - rare items",
        fortification: "weak - Unique Strongboxes at tier 3",
        research: "no - rare items *with quality*",
        intervention: "no - strongbox scarab",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/0/0b/Haku%2C_Warmaster.png"
    },
    hillock:  {
        name: "*Hillock, the Blacksmith*",
        overall: "useful in transportation or fortification. Signature veiled mod good for attribute stacking",
        mod: "#% increased Attributes",
        transport: "weak - 28% weapon quality ",
        fortification: "weak - 28% armor quality",
        research: "weak - 28% flask quality",
        intervention: "weak - 28% map quality, overlevel your juicest maps for slightly more vendor trash",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/6/67/Hillock%2C_the_Blacksmith.png"

    },
    "itf":  {
        name: "**It That Fled**",
        overall: "Make research head to upgrade breachstones ",
        mod:"Gain #% of Fire/Cold/Lightning Damage as extra Chaos Damage",
        transport: "Weak - drops abyss splinters",
        fortification: "Weak - drops abyss jewels",
        research: "🌟 Best as research head for upgraded breachstones",
        intervention: "Weak - Breach scarab",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/9/9b/It_That_Fled.png"
    }, 
    "janus":  {
        name: "Janus Perandus",
        overall: "Noble failson. Can drop interesting currency shards in fortification",
        mod: "#% increased Rarity of Items Dropped by Slain Rare or Unique Enemies",
        transport: "Weak - drops Quality Currency",
        fortification: "Weak - Currency Shards",
        research: "Medium - Drops Perandus coins, can spawn Perandus",
        intervention: "Weak - Perandus scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/4/4d/Janus_Perandus.png"
    }, 
    "jorgin":  {
        name: "Thane Jorgin the Banished",
        overall: "Failed Nobleson. Big into talismans, best (but mediocre) in Research.",
        mod: "10% Chance to Trigger Level 10 Summon Spectral Wolf on Kill",
        transport: "Weak - drops talismans",
        fortification: "Weak - drops items with bestiary affixes",
        research: "Medium - Turns an un-influenced amulet into a talisman",
        intervention: "Weak - Bestiary scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/1/1e/Thane_Jorgin_the_Banished.png"
    }, 
    "korell":  {
        name: "Korell Goya, Son of Stone",
        overall: "Mediocre. OK in fortification if you need Map Fragments. ",
        mod: "#% of Physical Damage from Hits taken as Fire Damage",
        transport: "Weak - drops essences",
        fortification: "Medium - drops Map Fragments",
        research: "Medium - Drops fossils",
        intervention: "Weak - Elder scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/5/53/Korell_Goya%2C_Son_of_Stone.png"
    }, 
    "leo":  {

        name:"Leo, Wolf of the Pits",
        overall: "Best in Research to use currency on items.\n \n #% increased Damage",
        mod: "#% increased Damage",
        transport: "No - drops *silver coins*. Why would you do this.",
        fortification: "Weak - drops random currency",
        research: "Best - Use Currency on items",
        intervention: "No - Torment Scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/c/c7/Leo%2C_Wolf_of_the_Pits.png"
    }, 
    "riker" : {
        name: "Riker Maloney, Midnight Tinkerer",
        overall: "Mediocre rewards for gambling addicts",
        mod: "#% increased Fire Damage\n#% increased Lightning Damage",
        transport: "Weak - Pick a currency",
        fortification: "Weak - Pick a unique",
        research: "Garbage - Pick a rare veiled item",
        intervention: "Weak - Pick a div card",
        image:"https://static.wikia.nocookie.net/pathofexile_gamepedia/images/5/5f/Riker_Maloney%2C_Midnight_Tinkerer.png"
    },
    "rin" : {
        name:"Rin Yuushu",
        overall: "Maps and more maps.",
        mod: "#% chance to Avoid being Frozen/Cannot be Frozen",
        transport: "Weak - drops normal maps",
        fortification: "Weak - drops rare maps",
        research: "Weak - drops unique maps",
        intervention: "Weak - drops carto scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/a/ab/Rin_Yuushu.png"
    },
    "tora" : {
        name:"Tora, the Culler",
        overall: "Alpha Hunter for Research & Intervention.",
        mod: "Adds # to # Physical Damage\n#% chance to cause Bleeding on Hit",
        transport: "Weak - Timed Item Traps",
        fortification: "Garbage - Random Enchanted Items",
        research: "Strong - Grants Gem Experience",
        intervention: "Strong - Harbinger Scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/1/11/Tora%2C_the_Culler.png"

    },
    "vagan" : {
        name:"Vagan, Victory's Herald",
        overall: "Legion shit.",
        mod: "Hits can't be Evaded",
        transport: "Best - drops splinters",
        fortification: "Weak - has random legion chests",
        research: "Weak - incubators",
        intervention: "Decent - legion scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/c/c4/Vagan%2C_Victory%27s_Herald.png"
    },
    "vorici" : {
        name:"Vorici, Silent Brother",
        overall: "Socket crafting a specialty.",
        mod: "#% increase Damage while Leeching",
        transport: "Garbage - drops quality gems",
        fortification: "Weak - drops socket currencies",
        research: "Good - Reforges socket colors to white",
        intervention: "Weak - shaper scarabs",
        image: "https://static.wikia.nocookie.net/pathofexile_gamepedia/images/7/7f/Vorici%2C_Silent_Brother.png"
    }
}


module.exports = {
    name: "syn",
    aliases: ["s"],
    description: "how to optimize your syndicate members",
    execute(message, args) {
        console.log(args.length);
        if (args.length == 1) {
            if ([args[0]].toString().toLowerCase() =="who")
            {
                const memberList = Object.keys(members).join (", ");
                result = `I know about: ${memberList}`;
                message.reply(result);
            } else {

                if ('image' in members[args[0]]) { 
                    console.log ('attaching image');
                    var embed = new Discord.MessageEmbed()
                        .setTitle(members[args[0]].name)
                        .setColor("#79302F")
                        .setDescription(members[args[0]].overall) 
                        .setThumbnail(members[args[0]].image)
                        .addFields(
                            { name: 'Transport', value: members[args[0]].transport, inline:true },
                            { name: 'Fortification', value: members[args[0]].fortification, inline:true },
                            { name: '\u200B', value: '\u200B' },
                            { name: 'Research', value: members[args[0]].research, inline:true },
                            { name: 'Intervention', value: members[args[0]].intervention, inline:true },                    
                            { name: 'Signature Mod', value: members[args[0]].mod, inline:false }
                        )
                        ;
                        message.reply(embed);
                    }

            }
        } else {
            result = members[args[0]][args[1]];
        // attach portrait, if any
       
        }
        // 
       // message.reply(`${result}`);
    },
};