const envoyLines = require('../data/envoy.js').lines;
const kiracLines = require('../data/kirac.js').lines;
const daressoLines = require('../data/kirac.js').lines;
const montyLines = require('../data/montyPython.js').lines;
//const genesisLines = require('../data/genesis.js').lines;
const revelationLines = require('../data/revelation.js').lines;
const izaroLines = require('../data/izaro.js').lines;
const Markov = require( 'markov-strings').default;
const markov = new Markov({ stateSize:3 });

markov.addData(kiracLines);
markov.addData(izaroLines);
markov.addData(envoyLines);
markov.addData(envoyLines);
markov.addData(kiracLines); 
markov.addData(envoyLines);
markov.addData(daressoLines);
markov.addData(montyLines);
markov.addData(montyLines);
markov.addData(montyLines);
markov.addData(montyLines);
//markov.addData(genesisLines);
markov.addData(revelationLines);
//
const options = {
    maxTries: 255, // Give up if I don't have a sentence after 20 tries (default is 10) 
    // You'll often need to manually filter raw results to get something that fits your needs.
    filter: (result) => {
      return   result.refs.length >2  &&
                result.string.split(' ').length >=5 &&
                result.score >1  
    //         // At least 5 words
    //          result.string.endsWith('.');            // End sentences with a dot.
    }
  }
   
 
// let's prime the gibberish pump



function createMessage(message, args) {
    const result = markov.generate(options);
    markov.addData( [ result]);
    console.log (result);
    return result.string;  
}

module.exports = {
    name: "envoy",
    aliases: ["lore"],
    description: "deranged babble from a weirdo",
    category: "category",
    guildOnly: false,
    cooldown: 2, 
    usage: "<usage>",
    execute(message, args) {
        message.reply(createMessage(message, args));
    },
};