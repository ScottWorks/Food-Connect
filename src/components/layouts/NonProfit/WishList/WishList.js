import React from 'react';
import '../../../../assets/styles/Wishlist.css'

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

  addWishListItem() {
    const { newItem } = this.state;

    this.props._addWishListItem(newItem);
    this.setState({
      newItem: ''
    });
  }

  editWishListItem(idx) {
    const { editItem } = this.state;

    this.props.parent_editWishListItem(idx, editItem);
    this.setState({
      editItem: '',
      edit: false
    });
  }

  render() {
    const { newItem, edit, editItemIdx, editItem } = this.state;
    const {
      _wishlist,
      _createWishList,
      _addWishListItem,
      _removeWishListItem
    } = this.props;

    const wishlist = _wishlist ? (
      <div>
        <button onClick={() => this.addWishListItem()}>Add Item</button>
        <input
          value={newItem}
          type="text"
          onChange={(e) => this.handleChange('newItem', e.target.value)}
        />
        <DisplayWishList
          _edit={edit}
          _editItemIdx={editItemIdx}
          _editItem={editItem}
          _items={_wishlist.items}
          _handleChange={this.handleChange}
          _toggleEdit={this.toggleEdit}
          child_editWishListItem={this.editWishListItem}
          _removeWishListItem={_removeWishListItem}
        />
      </div>
    ) : (
      <div>
        <p>Your Wish List is Empty : (</p>
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
          <div key={idx}>
            <p>{elem.item}</p>
            <button onClick={() => child_editWishListItem(idx)}>Submit</button>
            <input
              value={_editItem}
              type="text"
              onChange={(e) => _handleChange('editItem', e.target.value)}
            />
            <button onClick={() => _toggleEdit(idx)}>Cancel</button>
          </div>
        );
      } else {
        return (
          <div key={idx}>
            <p>{elem.item}</p>
            <button onClick={() => _toggleEdit(idx)}>Edit</button>
            <button onClick={() => _removeWishListItem(idx)}>Delete</button>
          </div>
        );
      }
    });
  } else {
    return null;
  }
};

export default WishList;
