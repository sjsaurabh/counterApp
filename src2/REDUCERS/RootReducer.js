import { combineReducers } from 'redux'
import todosReducer from './Todoreducer'

const rootReducer=combineReducers({
   todoReducer:todosReducer
})
export default rootReducer