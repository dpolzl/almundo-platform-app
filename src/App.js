import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore/configureStore'
import Hotels from './component/hotels/Hotels'


const store = configureStore()

const App = () => (  

		<Provider store = { store }>
			<Hotels />
		</Provider>

)  

export default App