//CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-name");

const sayHi = require("./5-utils");
const personData = require("./6-alternative-flavor");

require('./7-mind-grenades')

// console.log(names)
// console.log(sayHi)
// console.log(personData)


// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);
