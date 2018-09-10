import {  CHANGE_SEARCH_FIELD } from './constansts.js'


export const setSearchField = (text) => ({


	type: 'CHANGE_SEARCH_FIELD',
	payload: text
})