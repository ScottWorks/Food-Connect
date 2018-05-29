import React from 'react';
import ScheduleBasket from './ScheduleBasket/ScheduleBasket';

class ScheduleList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <section>
        <ScheduleBasket />
      </section>
    );
  }
}

export default ScheduleList;
