const chalk = require('chalk')
const getNotes = require('./notes.js')

// Process.argv returns an array with path to node executable, path to app.js file and then value(s) after script in command line.  node app.js value(s)
const command = process.argv[2]

if (command === 'add') {
  console.log('Adding note!')
} else if (command === 'remove') {
  console.log('Removing note!')
}

