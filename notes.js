const fs = require('fs')

const getNotes = () => {
  return "Your notes..."
}

const addNote = (title, body) => {
  // Load data
  const notes = loadNotes()
  const dupeNotes = notes.filter((note) => {
    return note.title === title
  })

  if (dupeNotes.length === 0) {
    // Add data to array
    notes.push({
      title: title,
      body: body
    })
    // Write to file
    saveNotes(notes)
    console.log('New note added.')
  } else {
    console.log('Note title taken!')
  }
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
  addNote: addNote
}