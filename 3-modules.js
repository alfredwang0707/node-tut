  
// __dirname - path to current directory  
// __filename - file name
// require - function to use modules
// module - info about current module(file)
// process -info about env where is probram is being executed

// modules - Encapsulated code (only share minimum)
// every file is module by default


const names = require('./names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenade')
// console.log(data)

// sayHi('susan')
// sayHi(names.john)

