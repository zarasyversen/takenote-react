import { createStore } from 'redux'
import takeNoteApp from '../reducers'

const store = createStore(takeNoteApp);

export default store
