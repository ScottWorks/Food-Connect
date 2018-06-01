module.exports = {
  timeAndDateToEpoch: function(time, date) {
    let momentTime = moment(time),
        momentDate = moment(date),
        hours = addZeroToFrontHelper(momentTime.hours()),
        minutes = addZeroToFrontHelper(momentTime.minutes()),
        months = addZeroToFrontHelper(momentDate.month() + 1),
        days = addZeroToFrontHelper(momentDate.daysInMonth()),
        years = addZeroToFrontHelper(momentDate.year()),
        timeString = `${years}-${months}-${days} ${hours}:${minutes}`

    return moment(timeString).format('x')
  },
  addZeroToFrontHelper: function(num) {
    if(num < 10) {
      return `0${num}`
    } else {
      return `${num}`
    }
  }
}