import React from 'react';

function WishList(props) {
  const { _wishlist } = props;

  return (
    <div>
      <DisplayWishList _items={_wishlist.items} />
    </div>
  );
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
