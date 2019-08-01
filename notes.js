const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  // Load data
  const notes = loadNotes()
  const dupeNote = notes.find(note => note.title === title)

  if (!dupeNote) {
    // Add data to array
    notes.push({
      title: title,
      body: body
    })
    // Write to file
    saveNotes(notes)
    console.log(chalk.bgGreen(' New note added. '))
  } else {
    console.log(chalk.bgRed(' Note title taken! '))
  }
}

const removeNote = (title) => {
  // Load data
  const notes = loadNotes()
  // Remove note
  const notesToKeep = notes.filter(note => note.title !== title)
  notes.length === notesToKeep.length ? console.log(chalk.bgRed(' No note found ')) : console.log(chalk.bgGreen(' Note removed! '))
  saveNotes(notesToKeep)
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.blueBright.inverse(' Your notes: '))
  notes.forEach(note => console.log(chalk.yellow.inverse(` ${note.title} `)))
}

const readNote = (title) => {
  const notes = loadNotes()
  const noteToRead = notes.find(note => note.title === title)
  noteToRead ? console.log(chalk.cyan.inverse(` ${noteToRead.title}: ${noteToRead.body} `)) : console.log(chalk.red.inverse(' No note found '))
}

const saveNotes = (notesArray) => {
  const dataJSON = JSON.stringify(notesArray)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  // Try catch for defensive code
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}