const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return "Your notes..."
}

const addNote = (title, body) => {
  // Load data
  const notes = loadNotes()
  const dupeNotes = notes.filter(note => note.title === title)

  if (dupeNotes.length === 0) {
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
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
}