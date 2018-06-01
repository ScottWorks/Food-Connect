import moment from 'moment';

function fromEpoch(epochTime, timeFormat) {
  let time = moment(Number(epochTime));
  return moment(time).format(timeFormat);
}

export { fromEpoch };
