const randomSkill = require('../modules/skills.js').randomSkill;
const randomSupport = require('../modules/supports.js').randomSupport;
const randomFakeSkill = require('../modules/fakeSkills.js').randomSkill;
const randomAscendancy = require('../modules/ascendancies.js').randomAscendancy;
// no more diablo 2 gibberish
//const randomFakeAscendancy = require('../modules/fakeAscendancies.js').randomAscendancy;
const randomPreamble = require('../modules/preambles.js').randomPreamble;
const randomEndorsement = require('../modules/endorsements.js').randomEndorsement;
const randomUnique = require('../modules/uniques.js').randomUnique;

const messageRarity = {
    unique: 0.1,
    rare: 0.4
};

function createMessage(message, args) {
    var selectedMessageRarity = Math.random();

    if (selectedMessageRarity < messageRarity.rare)  { 
        return(`${randomUnique()}`);
    } 
    
// no more diablo 2 gibberish
    // else if (selectedMessageRarity < messageRarity.rare)
    // { 
    //     return(`Deckard Cain says you should play a ${randomFakeAscendancy()} ${randomFakeSkill()}`);
    // }
    else
    {  
        if (Math.random() <0.5)
        {
            return(`${randomPreamble()} ${randomSkill()} ${randomAscendancy()}! ${randomEndorsement()}`);
        }
        else 
        {
            return(`${randomPreamble()} ${randomSupport()} ${randomSkill()} ${randomAscendancy()}! ${randomEndorsement()}`);
        }
    }
}

module.exports = {
    name: "recommend",
    aliases: ["rec"],
    description: "description",
    category: "category",
    guildOnly: false,
    cooldown: 2, 
    usage: "<usage>",
    execute(message, args) {
        message.reply(createMessage());
    },
};