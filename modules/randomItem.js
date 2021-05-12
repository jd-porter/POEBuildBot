const random = require('random')
function randomItem(arr) {
   //return arr[Math.floor((Math.random() * arr.length))];
   return arr [random.int(min=0, max=arr.length-1)];
}

module.exports = {randomItem}