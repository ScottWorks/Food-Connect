import React from 'react';
import '../../../../assets/styles/Sort.css'

function Sort(props) {
  return (
    <div className='sort-btns'>
      <button onClick={() => props._sortBaskets('wishlist')}>Wish List</button>
      <button onClick={() => props._sortBaskets('latest')}>Latest</button>
      <button onClick={() => props._sortBaskets('oldest')}>Oldest</button>
    </div>
  );
}

export default Sort;
