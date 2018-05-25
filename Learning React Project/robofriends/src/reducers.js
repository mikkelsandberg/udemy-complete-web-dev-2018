import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
	searchTerm: ''
};

export const searchRobots = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...state, searchTerm: action.payload };
		default:
			return state;
	}
};
