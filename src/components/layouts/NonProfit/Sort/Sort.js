import React from 'react';

class Sort extends React.Component {
  constructor() {
    super();
    this.state = {
      active: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props._sortBaskets('wishlist');
  }

  handleChange(sortBy) {
    this.props._sortBaskets(sortBy);
  }

  render() {
    const { active } = this.state;
    return (
      <div>
        <h3>Sort By:</h3>
        <button onClick={() => this.handleChange('wishlist')}>Wish List</button>
        <button onClick={() => this.handleChange('newestFirst')}>
          Newest First
        </button>
      </div>
    );
  }
}

export default Sort;
