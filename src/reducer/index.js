import { SEARCH_NEWS, FETCH_NEWS } from "../actions/actions";

const initialState = {
	text: "",
	search: []
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_NEWS:
			return {
				...state,
				text: action.payload
			};

		case FETCH_NEWS:
			return {
				...state,
				search: action.payload
			};

		default:
			return state;
	}
};
