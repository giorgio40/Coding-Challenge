import { SEARCH_NEWS, FETCH_NEWS } from "../actions/actions";

const initialState = {
	text: "",
	search: [],
	isSearching: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_NEWS:
			return {
				...state,
				text: action.payload,
				isSearching: false,
			};

		case FETCH_NEWS:
			return {
				...state,
				search: action.payload,
			};

		default:
			return state;
	}
};
