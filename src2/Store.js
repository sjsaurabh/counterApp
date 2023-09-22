import{ legacy_createStore } from 'redux'
import rootReducer from './REDUCERS/RootReducer'

const store =legacy_createStore(rootReducer)
export default store