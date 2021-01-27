const randomTrialPrefix = require('../modules/triaPrefixes.js').randomTrialPrefix;
const randomTrialSuffix = require('../modules/trialSuffixes.js').randomTrialSuffix;


module.exports = {
    name: "trial",
    aliases: ["t"],
    description: "Generates a plausible Path of Exile Ascenancy Trial for your enjoyment",
    execute(message, args) {
        message.reply(`Your next trial is the Trial of ${randomTrialPrefix()} ${randomTrialSuffix()}`);
    },
};