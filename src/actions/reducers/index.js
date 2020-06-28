import { combineReducers } from 'redux'

const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'EDIT_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    case 'DELETE_NOTE':
      return [
        ...state,
        {
          id: action.id
        }
      ]
    default:
      return state
  }
}

const takeNoteApp = combineReducers({
  notes
})
  
export default takeNoteApp;
