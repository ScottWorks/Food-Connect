import React from 'react';

class Sort extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(sortBy) {
    this.props._sortBaskets(sortBy);
  }

  render() {
    return (
      <div>
        <h3>Sort By:</h3>
        <button onClick={() => this.props._sortBaskets('wishlist')}>
          Wish List
        </button>
        <button onClick={() => this.props._sortBaskets('latest')}>
          Latest
        </button>
        <button onClick={() => this.props._sortBaskets('oldest')}>
          Oldest
        </button>
      </div>
    );
  }
}

export default Sort;
