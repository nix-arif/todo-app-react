import {
	LIST_ITEM_FAILURE,
	LIST_ITEM_REQUEST,
	LIST_ITEM_SUCCESS,
} from './itemTypes';
import axios from 'axios';

const itemListRequest = () => {
	return {
		type: LIST_ITEM_REQUEST,
	};
};

const itemListSuccess = (items) => {
	return {
		type: LIST_ITEM_SUCCESS,
		payload: items,
	};
};

const itemListFailure = (error) => {
	return {
		type: LIST_ITEM_FAILURE,
		payload: error.message,
	};
};

export const fetchItemList = () => {
	return function (dispatch) {
		dispatch(itemListRequest());
		axios
			.get('/items')
			.then((response) => {
				const items = response.data;
				dispatch(itemListSuccess(items));
			})
			.catch((error) => {
				dispatch(itemListFailure(error));
			});
	};
};
