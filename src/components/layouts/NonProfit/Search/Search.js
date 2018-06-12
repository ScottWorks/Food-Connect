import React from 'react';

function Search(props) {
  const {
    _searchInput,
    _initializeComponent,
    _handleChange,
    _searchBaskets
  } = props;

  return (
    <div>
      <form onSubmit={(e) => _searchBaskets(e)}>
        <input
          value={_searchInput}
          type="text"
          placeholder="Search an Item..."
          onChange={(e) => _handleChange('searchInput', e.target.value)}
        />
        <button onClick={() => _initializeComponent()}>Reset</button>
      </form>
    </div>
  );
}

export default Search;
