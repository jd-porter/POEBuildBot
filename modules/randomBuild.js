const randomSkill = require('./modules/skills.js').randomSkill;
const randomFakeSkill = require('./modules/fakeSkills.js').randomSkill;
const randomAscendancy = require('./modules/ascendancies.js').randomAscendancy;
const randomFakeAscendancy = require('./modules/fakeAscendancies.js').randomAscendancy;
const randomPreamble = require('./modules/preambles.js').randomPreamble;
const randomEndorsement = require('./modules/endorsements.js').randomEndorsement;
const randomUnique = require('./modules/uniques.js').randomUnique;
var selectedMessageRarity = Math.random();

if (selectedMessageRarity < messageRarity.unique)  { 
    msg.reply(`${randomUnique()}`);
} 
else if (selectedMessageRarity < messageRarity.rare)
{ 
    msg.reply(`Deckard Cain says you should play a ${randomFakeSkill()} ${randomFakeAscendancy()}`);
}
else
{  
    msg.reply(`${randomPreamble()} ${randomSkill()} ${randomAscendancy()}! ${randomEndorsement()}`);
}


module.exports = {
    name: "recommend",
    aliases: ["rec"],
    description: "description",
    category: "category",
    guildOnly: false,
    cooldown: 2,
    args: args,
    usage: "<usage>",
    execute(message, args) {
        message.reply("template command")
    },
};