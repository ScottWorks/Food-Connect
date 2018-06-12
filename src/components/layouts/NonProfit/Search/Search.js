import React from 'react';
import '../../../../assets/styles/Search.css'

function Search(props) {
  const {
    _searchInput,
    _initializeComponent,
    _handleChange,
    _searchBaskets
  } = props;

  return (
    <div className='search-container'>
      <form onSubmit={(e) => _searchBaskets(e)}>
        <input
          value={_searchInput}
          type="text"
          placeholder="Search an Item..."
          onChange={(e) => _handleChange('searchInput', e.target.value)}
        />
      </form>
      <button onClick={() => _initializeComponent()}>Reset</button>
    </div>
  );
}

export default Search;
