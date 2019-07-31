const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(chalk.green('Monty\'s money is green'))
console.log(chalk.blue.inverse.bold('Homer loves Spider Pig'))

