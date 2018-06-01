import moment from 'moment';

function fromEpoch(epochTime, timeFormat) {
  let time = moment(Number(epochTime));
  return moment(time).format(timeFormat);
}

function toEpoch(_time, _date) {
  let momentTime = moment(_time),
    momentDate = moment(_date),
    hours = addZeroToFrontHelper(momentTime.hours()),
    minutes = addZeroToFrontHelper(momentTime.minutes()),
    months = addZeroToFrontHelper(momentDate.month() + 1),
    days = addZeroToFrontHelper(momentDate.daysInMonth()),
    years = addZeroToFrontHelper(momentDate.year()),
    timeString = `${years}-${months}-${days} ${hours}:${minutes}`;

  return moment(timeString).format('x');
}

function addZeroToFrontHelper(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

export { fromEpoch, toEpoch, addZeroToFrontHelper };
