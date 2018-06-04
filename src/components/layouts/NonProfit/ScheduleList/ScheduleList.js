import React from 'react';
import ScheduleBasket from './ScheduleBasket/ScheduleBasket';
import './../../../../assets/styles/ScheduleList.css'

function ScheduleList(props) {
  const { scheduledBaskets } = props;

  const displaySchedule = scheduledBaskets.map((elem, idx) => {
    return (
      <div className='scheduled-list-container' key={idx}>
        <ScheduleBasket scheduledBasket={elem} />
      </div>
    );
  });
  return <section>{displaySchedule}</section>;
}

export default ScheduleList;
