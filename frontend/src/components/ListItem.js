import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItemList } from '../redux';
import Item from './Item';

const ListItem = (props) => {
	console.log('render ListItem');
	const { loading, items, error, fetchItemList } = props;

	useEffect(() => {
		console.log('run');
		fetchItemList();
	}, []);

	console.log('items:', items);

	////////////////////////////////////////////////////////////
	////////////////Double check items array////////////////////

	return (
		<ul className="list-group pb-5">
			{/* {items.map((item) => (
				<Item key={item._id} item={item} />
			))} */}
		</ul>
	);
};

const mapStateToProp = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProp = (dispatch) => {
	return {
		fetchItemList: () => dispatch(fetchItemList()),
	};
};

export default connect(mapStateToProp, mapDispatchToProp)(ListItem);
