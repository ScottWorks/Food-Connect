import React from 'react';
import ContactInfoCard from '../../../../components/NonProfit/ContactInfoCard';
import * as timeConversion from '../../../../../config/timeConversion';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class NonProfitBasket extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      reserve: false,
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

  buttonState(key) {
    const { expanded, reserve } = this.state;
    let resize, state;

    if (key === 'expanded') {
      state = expanded;
    } else if (key === 'reserve') {
      state = reserve;
    }

    if (state) {
      resize = false;
    } else {
      resize = true;
    }

    this.setState({
      [key]: resize
    });
  }

  reserveBasket() {
    const { scheduledDate, scheduledTime } = this.state;
    const { currentBasket } = this.props;
    const basketID = currentBasket.basket_id;

    let time = timeConversion.toEpoch(scheduledDate, scheduledTime);

    this.props._updateBasket(basketID, time);

    this.setState({
      reserve: false,
      scheduledDate: {},
      scheduledTime: {}
    });
  }

  render() {
    const { expanded, reserve, scheduledDate, scheduledTime } = this.state;
    const { currentBasket } = this.props;

    let formattedTime = timeConversion.fromEpoch(
      currentBasket.pick_up_time,
      'ddd, MMM Do'
    );

    const expandCard = expanded ? (
      <ExpandedCard currentBasket={currentBasket} />
    ) : (
      <DisplaySomeItems items={currentBasket.items} />
    );

    const reserveCard = reserve ? (
      <DateTimePicker
        _scheduledDate={scheduledDate}
        _scheduledTime={scheduledTime}
        _reserveBasket={this.reserveBasket}
        _handleChange={this.handleChange}
      />
    ) : null;

    return (
      <section>
        {reserveCard}
        <button onClick={() => this.buttonState('reserve')}>Reserve</button>
        <p>{currentBasket.company_name}</p>
        <p>{currentBasket.operating_hrs}</p>
        <p>Pick-Up By: {formattedTime}</p>
        {expandCard}
        <button onClick={() => this.buttonState('expanded')}>
          {expanded ? 'Collapse' : 'Details'}
        </button>
      </section>
    );
  }
}

const DisplaySomeItems = ({ items }) => {
  const basketSize = items.length;

  return (
    <div>
      {items.map((elem, idx) => {
        if (idx < 3) {
          return (
            <p key={idx}>
              {elem.item} - {elem.weight} lbs
            </p>
          );
        }
      })}

      {(() => {
        if (basketSize > 3) {
          return <p>{basketSize - 3} more item(s) in basket...</p>;
        }
      })()}
    </div>
  );
};

const ExpandedCard = ({ currentBasket, expanded }) => {
  const contactInfo = {
    address: currentBasket.street_address,
    city: currentBasket.city,
    state: currentBasket.state,
    zipCode: currentBasket.zip_code,
    phoneNumber: currentBasket.phone_number,
    adminFirstName: currentBasket.admin_first_name,
    adminLastName: currentBasket.admin_last_name
  };

  return (
    <div>
      <DisplayAllItems items={currentBasket.items} />
      <ContactInfoCard _contactInfo={contactInfo} />
    </div>
  );
};

const DisplayAllItems = ({ items }) =>
  items.map((elem, idx) => {
    return (
      <p key={idx}>
        {elem.item} - {elem.weight} lbs
      </p>
    );
  });

const DateTimePicker = ({
  _scheduledDate,
  _scheduledTime,
  _reserveBasket,
  _handleChange
}) => {
  return (
    <div>
      <button onClick={() => _reserveBasket()}>Submit</button>
      <DatePicker
        value={_scheduledDate}
        onChange={(x, date) => _handleChange('scheduledDate', date)}
        hintText="Date"
      />
      <TimePicker
        value={_scheduledTime}
        onChange={(x, time) => _handleChange('scheduledTime', time)}
        hintText="Time"
      />
    </div>
  );
};

export default NonProfitBasket;
