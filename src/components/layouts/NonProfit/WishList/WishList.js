import React from 'react';

class WishList extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { newItem } = this.state;
    const { _wishlist, _addWishListItem } = this.props;

    return (
      <div>
        <button onClick={() => _addWishListItem(newItem)}>Add Item</button>
        <input
          name="addtowishlist"
          type="text"
          onChange={(e) => this.handleChange('newItem', e.target.value)}
        />
        <DisplayWishList _items={_wishlist.items} />
      </div>
    );
  }
}

const DisplayWishList = ({ _items }) => {
  if (_items) {
    return _items.map((elem, idx) => {
      return (
        <div key={idx}>
          <p>{elem.item}</p>
        </div>
      );
    });
  } else {
    return null;
  }
};

export default WishList;
