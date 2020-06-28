import { createStore } from 'redux'
import takeNoteApp from '../reducers'

const store = createStore(takeNoteApp);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default store
