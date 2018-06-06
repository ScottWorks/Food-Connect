import React from 'react';

function Search(props) {
  const { _searchInput } = props;

  return (
    <div>
      <h3>Search:</h3>
      <input
        value={_searchInput}
        type="text"
        onChange={(e) => props._handleChange('searchInput', e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
