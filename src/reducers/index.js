import { combineReducers } from 'redux'
import hotelsReducer from './hotelsReducer'

const reducer = combineReducers({
	data : hotelsReducer
})

export default reducer