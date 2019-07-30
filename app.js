const fs = require('fs')

// Will create and write to file.  Changing text will overwrite.
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
// Will append to original text.
fs.appendFileSync('notes.txt', ' And then this guy added to it')