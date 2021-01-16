const Discord = require('discord.js');
const randomSkill = require('./modules/skills.js').randomSkill;
const randomFakeSkill = require('./modules/fakeSkills.js').randomSkill;
const randomAscendancy = require('./modules/ascendancies.js').randomAscendancy;
const randomFakeAscendancy = require('./modules/fakeAscendancies.js').randomAscendancy;
const randomPreamble = require('./modules/preambles.js').randomPreamble;
const randomEndorsement = require('./modules/endorsements.js').randomEndorsement;
const randomUnique = require('./modules/uniques.js').randomUnique;

const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const messageRarity = {
    unique: 0.1,
    rare: 0.2
}

client.on('message', msg => {
    if (msg.content === '!recommend' || msg.content === "!rec") { 
        var selectedMessageRarity = Math.random();

        if (selectedMessageRarity < messageRarity.unique)  { 
            msg.reply(`${randomUnique()}`);
        } 
        else if (selectedMessageRarity < messageRarity.rare)
        { 
            msg.reply(`Deckard Cain says you should play a ${randomFakeAscendancy()} ${randomFakeSkill()}`);
        }
        else
        {  
            msg.reply(`${randomPreamble()} ${randomSkill()} ${randomAscendancy()}! ${randomEndorsement()}`);
        }
    }
});

client.login('Nzk4Njk1NjAyNTY1MDIxNzE2.X_4xPg.JrGALt2OJjzxv59tm8dbhLwAems');