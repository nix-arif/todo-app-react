import { fetchItemList } from '../redux';
import { connect } from 'react-redux';

const Form = (props) => {
	return (
		<div className="jumbotron p-3 shadow-sm">
			<form>
				<div className="d-flex align-items-center">
					<input
						autoFocus
						autoComplete="off"
						className="form-control mr-3"
						type="text"
						style={{ flex: 1 }}
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
		fetchItemList: () => dispatch(fetchItemList()),
	};
};

export default connect(mapStateToProp, mapDispatchToProp)(Form);
