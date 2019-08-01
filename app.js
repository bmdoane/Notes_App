const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// node app.js --help to see commands
// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  // On methods in objs, no arrow functions
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note!')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler() {
    console.log('Listing a note.')
  }
})

// add, remove, read, list
yargs.parse()

