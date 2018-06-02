import React from 'react';
import ScheduleBasket from './ScheduleBasket/ScheduleBasket';

function ScheduleList(props) {
  const { scheduledBaskets, _cancelBasket } = props;

  const displaySchedule = scheduledBaskets.map((elem, idx) => {
    return (
      <div key={idx}>
        <ScheduleBasket scheduledBasket={elem} _cancelBasket={_cancelBasket} />
      </div>
    );
  });
  return <section>{displaySchedule}</section>;
}

export default ScheduleList;
