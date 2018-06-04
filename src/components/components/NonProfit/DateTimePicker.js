import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import * as timeConversion from '../../../config/timeConversion';

class DateTimePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      scheduledDate: {},
      scheduledTime: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.reserveBasket = this.reserveBasket.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  reserveBasket() {
    const { scheduledDate, scheduledTime } = this.state;
    const { _basketID, _phoneNumber, _message, _parentToggle } = this.props;
    const fakePhoneNumber = '13033496264';

    let time = timeConversion.toEpoch(scheduledDate, scheduledTime);

    let twilio_formattedTime = timeConversion.fromEpoch(
      time,
      'ddd, MMM Do, h:mm a'
    );

    let twilio_message = _message.concat(twilio_formattedTime);

    this.props._scheduleBasket(
      time,
      fakePhoneNumber,
      twilio_message,
      _basketID
    );

    this.setState({
      scheduledDate: {},
      scheduledTime: {}
    });

    this.props._toggleReservationCard();
  }

  render() {
    const { scheduledDate, scheduledTime } = this.state;

    return (
      <div>
        <button onClick={() => this.reserveBasket()}>Submit</button>
        <DatePicker
          value={scheduledDate}
          onChange={(x, date) => this.handleChange('scheduledDate', date)}
          hintText="Date"
        />
        <TimePicker
          value={scheduledTime}
          onChange={(x, time) => this.handleChange('scheduledTime', time)}
          hintText="Time"
        />
      </div>
    );
  }
}
export default DateTimePicker;
