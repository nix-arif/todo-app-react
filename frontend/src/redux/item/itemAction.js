import {
	DELETE_ITEM_FAILURE,
	DELETE_ITEM_REQUEST,
	DELETE_ITEM_SUCCESS,
	INSERT_ITEM_FAILURE,
	INSERT_ITEM_REQUEST,
	INSERT_ITEM_SUCCESS,
	LIST_ITEM_FAILURE,
	LIST_ITEM_REQUEST,
	LIST_ITEM_SUCCESS,
	UPDATE_ITEM_FAILURE,
	UPDATE_ITEM_REQUEST,
	UPDATE_ITEM_SUCCESS,
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

const insertItemRequest = () => {
	return {
		type: INSERT_ITEM_REQUEST,
	};
};

const insertItemSuccess = (item) => {
	return {
		type: INSERT_ITEM_SUCCESS,
		payload: item,
	};
};

const insertItemFailure = () => {
	return {
		type: INSERT_ITEM_FAILURE,
	};
};

//////////////////////////////////////////////////////////////
////////////Please check back this code///////////////////////

export const insertItem = (text) => {
	return function (dispatch) {
		dispatch(insertItemRequest());
		axios
			.post('/create-item', { text })
			.then((response) => {
				console.log(response.data);
				dispatch(fetchItemList());
				dispatch(insertItemSuccess(response.data));
			})
			.catch(() => {
				console.log('Please try again later');
				dispatch(insertItemFailure());
			});
	};
};

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

const updateItemRequest = () => {
	return {
		type: UPDATE_ITEM_REQUEST,
	};
};

const updateItemSuccess = (item) => {
	return {
		type: UPDATE_ITEM_SUCCESS,
		payload: item,
	};
};

const updateItemFailure = (error) => {
	return {
		type: UPDATE_ITEM_FAILURE,
	};
};

export const updateItem = (_id, text) => {
	return function (dispatch) {
		console.log('jalan');
		dispatch(updateItemRequest());
		axios
			.post('/update-item', { _id, text })
			.then((response) => {
				console.log('From axios then:', response.data);
				dispatch(updateItemSuccess(response.data));
			})
			.catch(() => {
				console.log('Please try again later');
				dispatch(updateItemFailure());
			});
	};
};

const deleteItemRequest = () => {
	return {
		type: DELETE_ITEM_REQUEST,
	};
};

const deleteItemSuccess = (_id) => {
	return {
		type: DELETE_ITEM_SUCCESS,
	};
};

const deleteItemFailure = () => {
	return {
		type: DELETE_ITEM_FAILURE,
	};
};

export const deleteItem = (_id) => {
	return function (dispatch) {
		dispatch(deleteItemRequest());
		axios
			.post('/delete-item', { _id })
			.then((response) => {
				const { data } = response;
				console.log(_id);
				dispatch(deleteItemSuccess(_id));
			})
			.catch(() => {
				console.log('Try again later');
				dispatch(deleteItemFailure());
			});
	};
};
