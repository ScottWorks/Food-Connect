import moment from 'moment';

module.exports = {
  fromEpoch(epochTime, timeFormat) {
    let time = moment(Number(epochTime));
    return moment(time).format(timeFormat);
  }
};
