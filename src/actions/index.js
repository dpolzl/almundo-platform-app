import { FETCHING_DATA,
		 FETCHING_DATA_SUCCESS,
		 FETCHING_DATA_FAILURE
		} from '../constants/index'
import { fetchSchedule } from '../api'

export const getData = () => {
	return {
		type : FETCHING_DATA	
	}
}

export const getDataSuccess = ( data ) => {
	return {
		type : FETCHING_DATA_SUCCESS,
 		data
	}
}

export const getDataFailure = ( data ) => {
	return {
		type : FETCHING_DATA_FAILURE
	}
}

export const fetchData = () => {
	return ( dispatch ) => {
		dispatch(getData())
		
		fetchSchedule()
		.then( ( [response, json ] ) => {
			dispatch(getDataSuccess(json))
		} )
		.catch( (error) => console.log(error) ) 	
	}
}








