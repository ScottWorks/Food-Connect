import React from 'react';
import ScheduleBasket from './ScheduleBasket/ScheduleBasket';

function ScheduleList(props) {
  const { scheduledBaskets } = props;

  const displaySchedule = scheduledBaskets.map((elem, idx) => {
    return (
      <div key={idx}>
        <ScheduleBasket scheduledBasket={elem} />
      </div>
    );
  });
  return <section>{displaySchedule}</section>;
}

export default ScheduleList;
