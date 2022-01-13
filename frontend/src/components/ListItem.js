import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItemList } from '../redux';
import Item from './Item';

const ListItem = (props) => {
	const { loading, items, error, fetchItemList } = props;
	console.log(items);

	useEffect(() => {
		fetchItemList();
	}, []);

	return (
		<ul className="list-group pb-5">
			{items.map((item) => (
				<Item key={item._id} item={item} />
			))}
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
