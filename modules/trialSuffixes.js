'use strict';

const randomItem = require('./randomItem.js');


const trialSuffix = 
[
    'Truth',
    'accuracy',         'ail',             'anger',
    'angriness',        'anguish',         'annoyance',
    'awe',              'bereaved',        'bereavement',
    'bereft',           'bother',          'botheration',
    'care',             'choler',          'concern',
    'crow',             'dread',           'exuberance',
    'exult',            'fear',            'fearfulness',
    'fright',           'gloat',           'grief-stricken',
    'grieving',         'hating',            'hatred',
    'hurt',             'hurting',         'infliction',
    'ire',              'jubilate',
    'lamentation',      'mourning',        
    'nuisance',         'pain',    
    'painfulness',      'prevail',         'rejoicing',
    'revere',           'reverence',       
    'Trials',
    'tribulation',      'triumph',         'trouble',
    'trueness',        'truth',        
    'veneration',      'verity',
    'victory',          'visitation',      'wallow',
    'wrath',
    'emojis', 'goons',
    'concern', "celebration", "update",
    "patching"
  
]

function randomTrialSuffix() {
    
    var retval= randomItem.randomItem(trialSuffix);
    return retval[0].toUpperCase() + retval.substring(1);
} 

module.exports= {randomTrialSuffix};