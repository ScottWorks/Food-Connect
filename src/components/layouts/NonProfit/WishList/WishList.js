import React from 'react';

class WishList extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addWishListItem = this.addWishListItem.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  addWishListItem() {
    const { newItem } = this.state;

    this.props._addWishListItem(newItem);
    this.setState({
      newItem: ''
    });
  }

  render() {
    const { newItem } = this.state;
    const { _wishlist, _addWishListItem, _removeWishListItem } = this.props;

    return (
      <div>
        <button onClick={() => this.addWishListItem()}>Add Item</button>
        <input
          value={newItem}
          name="addtowishlist"
          type="text"
          onChange={(e) => this.handleChange('newItem', e.target.value)}
        />
        <DisplayWishList
          _items={_wishlist.items}
          _removeWishListItem={_removeWishListItem}
        />
      </div>
    );
  }
}

const DisplayWishList = ({ _items, _removeWishListItem }) => {
  if (_items) {
    return _items.map((elem, idx) => {
      return (
        <div key={idx}>
          <p>{elem.item}</p>
          <button>Edit</button>
          <button onClick={() => _removeWishListItem(idx)}>Delete</button>
        </div>
      );
    });
  } else {
    return null;
  }
};

export default WishList;
