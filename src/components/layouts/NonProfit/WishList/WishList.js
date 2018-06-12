import React from 'react';
import '../../../../assets/styles/Wishlist.css';

class WishList extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      edit: false,
      editItemIdx: '',
      editItem: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addWishListItem = this.addWishListItem.bind(this);
    this.editWishListItem = this.editWishListItem.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  toggleEdit(editItemIdx) {
    const { edit } = this.state;
    let state;

    if (edit) {
      state = false;
    } else {
      state = true;
    }

    this.setState({
      edit: state,
      editItemIdx: editItemIdx
    });
  }

  addWishListItem(e) {
    const { newItem } = this.state;

    this.props._addWishListItem(e, newItem);
    this.setState({
      newItem: ''
    });
  }

  editWishListItem(e, idx) {
    const { editItem } = this.state;

    this.props.parent_editWishListItem(e, idx, editItem);
    this.setState({
      editItem: '',
      edit: false
    });
  }

  render() {
    const { newItem, edit, editItemIdx, editItem } = this.state;
    const {
      _wishList,
      _createWishList,
      _addWishListItem,
      _removeWishListItem
    } = this.props;

    const wishlist = _wishList ? (
      <div>
        <div className="wishlist-add-container">
          {/* <button onClick={() => this.addWishListItem()}>Add Item</button> */}
          <form onSubmit={(e) => this.addWishListItem(e)}>
            <input
              value={newItem}
              type="text"
              placeholder="Add Items..."
              onChange={(e) => this.handleChange('newItem', e.target.value)}
            />
          </form>
        </div>
        <DisplayWishList
          _edit={edit}
          _editItemIdx={editItemIdx}
          _editItem={editItem}
          _items={_wishList.items}
          _handleChange={this.handleChange}
          _toggleEdit={this.toggleEdit}
          child_editWishListItem={this.editWishListItem}
          _removeWishListItem={_removeWishListItem}
        />
      </div>
    ) : (
      <div className="wishlist-empty-container">
        <p>Your Wish List is Empty :(</p>
        <button onClick={() => _createWishList()}>Create Wish List</button>
      </div>
    );

    return <div>{wishlist}</div>;
  }
}

const DisplayWishList = ({
  _edit,
  _editItemIdx,
  _editItem,
  _items,
  _handleChange,
  _toggleEdit,
  child_editWishListItem,
  _removeWishListItem
}) => {
  if (_items) {
    return _items.map((elem, idx) => {
      if (_edit && idx === _editItemIdx) {
        return (
          <div className="editable-wishlist-container" key={idx}>
            <div className="editable-wishlist-input">
              {/* <button onClick={() => child_editWishListItem(idx)}>
                Submit
              </button> */}
              <form onSubmit={(e) => child_editWishListItem(e, idx)}>
                <input
                  type="text"
                  placeholder={elem.item}
                  onChange={(e) => _handleChange('editItem', e.target.value)}
                />
              </form>
              <button onClick={() => _toggleEdit(idx)}>Cancel</button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="wishlist-items-container" key={idx}>
            <p>{elem.item}</p>
            <div className="wishlist-items-container-btns">
              <button onClick={() => _toggleEdit(idx)}>Edit</button>
              <button onClick={() => _removeWishListItem(idx)}>Delete</button>
            </div>
          </div>
        );
      }
    });
  } else {
    return null;
  }
};

export default WishList;
