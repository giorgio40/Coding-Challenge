import axios from "axios";

import { SEARCH_NEWS, FETCH_NEWS } from "../actions/actions";

export const searchNews = (text) => (dispatch) => {
	dispatch({
		type: SEARCH_NEWS,
		payload: text,
	});
};

export const fetchNews = (text) => (dispatch) => {
	axios
		.get(`http://hn.algolia.com/api/v1/search?query=${text}`)
		.then((res) =>
			dispatch({
				type: FETCH_NEWS,
				payload: res.data.hits,
			})
		)
		.catch((err) => {
			console.log(err);
		});
};
