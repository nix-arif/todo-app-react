import { fetchItemList, insertItem } from '../redux';
import { connect } from 'react-redux';
import { useState } from 'react';

const Form = (props) => {
	const { insertItem } = props;

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		insertItem(inputValue);
	};
	return (
		<div className="jumbotron p-3 shadow-sm">
			<form onSubmit={handleSubmit}>
				<div className="d-flex align-items-center">
					<input
						autoFocus
						autoComplete="off"
						className="form-control mr-3"
						type="text"
						style={{ flex: 1 }}
						value={inputValue}
						onChange={handleInputChange}
					/>
					<button className="btn btn-primary">Add New Item</button>
				</div>
			</form>
		</div>
	);
};

const mapStateToProp = (state) => {
	return {
		...state,
	};
};

const mapDispatchToProp = (dispatch) => {
	return {
		insertItem: (text) => dispatch(insertItem(text)),
		fetchItemList: () => dispatch(fetchItemList()),
	};
};

export default connect(mapStateToProp, mapDispatchToProp)(Form);
