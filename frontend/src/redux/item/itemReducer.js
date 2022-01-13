import {
	LIST_ITEM_FAILURE,
	LIST_ITEM_REQUEST,
	LIST_ITEM_SUCCESS,
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
		default:
			return state;
	}
};

export default itemReducer;
