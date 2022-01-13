const Item = ({ item }) => {
	const updateItem = (_id) => {
		const userInput = prompt('Update Text', item.text);
		console.log(userInput);
	};
	const deleteItem = (_id) => {};
	return (
		<li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
			<span className="item-text">{item.text}</span>
			<div>
				<button
					onClick={() => updateItem(item._id)}
					className="edit-me btn btn-secondary btn-sm mr-1"
				>
					Edit
				</button>
				<button
					onClick={() => deleteItem(item._id)}
					className="delete-me btn btn-danger btn-sm"
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Item;
