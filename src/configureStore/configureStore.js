import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/index'

export default configureStore = () => {
	return createStore(reducer, applyMiddleware(thunk))
}