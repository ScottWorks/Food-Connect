import React from 'react';

function Sort(props) {
  return (
    <div>
      <button onClick={() => props._sortBaskets('wishlist')}>Wish List</button>
      <button onClick={() => props._sortBaskets('latest')}>Latest</button>
      <button onClick={() => props._sortBaskets('oldest')}>Oldest</button>
    </div>
  );
}

export default Sort;
