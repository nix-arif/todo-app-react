import { connect } from "react-redux";
import { deleteItem, updateItem } from "../redux";

const Item = (props) => {
  const { item, updateItem, deleteItem } = props;
  const handleClickUpdateItem = (_id) => {
    const userInput = prompt("Update Text", item.text);
    if (userInput) {
      updateItem(_id, userInput);
    }
  };
  const handleClickDeleteItem = (_id) => {
    deleteItem(_id);
  };
  return (
    <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
      <span className="item-text">{item.text}</span>
      <div>
        <button
          onClick={() => handleClickUpdateItem(item._id)}
          className="edit-me btn btn-secondary btn-sm mr-1"
        >
          Edit
        </button>
        <button
          onClick={() => handleClickDeleteItem(item._id)}
          className="delete-me btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (_id, text) => dispatch(updateItem(_id, text)),
    deleteItem: (_id) => dispatch(deleteItem(_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
