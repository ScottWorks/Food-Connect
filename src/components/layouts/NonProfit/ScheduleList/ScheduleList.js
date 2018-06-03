import React from 'react';
import ScheduleBasket from './ScheduleBasket/ScheduleBasket';

function ScheduleList(props) {
  const { _scheduledBaskets, _scheduleBasket, _cancelBasket } = props;

  return (
    <section>
      <DisplaySchedule
        _scheduledBaskets={_scheduledBaskets}
        _scheduleBasket={_scheduleBasket}
        _cancelBasket={_cancelBasket}
      />
    </section>
  );
}

const DisplaySchedule = ({
  _scheduledBaskets,
  _scheduleBasket,
  _cancelBasket
}) => {
  return _scheduledBaskets.map((elem, idx) => {
    return (
      <div key={idx}>
        <ScheduleBasket
          scheduledBasket={elem}
          _scheduleBasket={_scheduleBasket}
          _cancelBasket={_cancelBasket}
        />
      </div>
    );
  });
};

export default ScheduleList;
