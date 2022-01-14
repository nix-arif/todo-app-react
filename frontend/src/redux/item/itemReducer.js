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

const initialItemState = {
	loading: false,
	items: [],
	error: '',
};

const itemReducer = (state = initialItemState, action) => {
	switch (action.type) {
		case LIST_ITEM_REQUEST:
			return {
				...state,
				loading: true,
			};
		case LIST_ITEM_SUCCESS:
			return {
				loading: false,
				items: action.payload,
				error: '',
			};
		case LIST_ITEM_FAILURE:
			return {
				loading: false,
				items: [],
				error: action.payload,
			};
		case INSERT_ITEM_REQUEST:
			return {
				...state,
			};
		case INSERT_ITEM_SUCCESS:
			return {
				...state,
				items: [...state.items, action.payload],
			};
		case INSERT_ITEM_FAILURE:
			return {
				...state,
			};
		case UPDATE_ITEM_REQUEST:
			return {
				...state,
			};
		case UPDATE_ITEM_SUCCESS:
			const { _id, text } = action.payload;
			const newItems = state.items.map((item) =>
				item._id === _id ? { ...item, text } : item
			);
			console.log(newItems);
			return {
				...state,
				items: newItems,
			};
		case UPDATE_ITEM_FAILURE:
			return {
				...state,
			};
		case DELETE_ITEM_REQUEST:
			return {
				...state,
			};
		case DELETE_ITEM_SUCCESS:
			const deletedId = action.payload;
			const newItemsDeleted = state.items.filter((item) => {
				console.log(item._id === action.payload);
				return item._id !== deletedId;
			});
			console.log(newItemsDeleted);
			return {
				...state,
				items: newItemsDeleted,
			};
		case DELETE_ITEM_FAILURE:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default itemReducer;
