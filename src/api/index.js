const URL = 'http://localhost:5000/hotels'

export const fetchSchedule = () => {
	return fetch(URL)
	.then( Response => { 
    console.log(Response)
		return Promise.all( [Response, Response.json()] )
	}) 
}



