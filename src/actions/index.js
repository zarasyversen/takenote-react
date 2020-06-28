let newNoteId = 0
export const addNote = text => ({
  type: 'ADD_NOTE',
  id: newNoteId++,
  text
})

export const editNote = (id, text) => ({
  type: 'EDIT_NOTE',
  id: id,
  text
})

export const deleteNote = id => ({
  type: 'DELETE_NOTE',
  id: id
})


