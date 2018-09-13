import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants.js'


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => (dispatch) => {                      //action-returns a function through dispatch
																		//redux expects object return but in this case
																		//action returns a function.By adding redux-thunk
																		//middleware we are listening to actions passing 
																		//functions
  dispatch({ type: REQUEST_ROBOTS_PENDING});
  	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
	.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))

}