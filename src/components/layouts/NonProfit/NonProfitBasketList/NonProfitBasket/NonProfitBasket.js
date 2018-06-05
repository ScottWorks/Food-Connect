import React from 'react';
import ContactInfoCard from '../../../../components/NonProfit/ContactInfoCard';
import DateTimePicker from '../../../../components/NonProfit/DateTimePicker';
import * as timeUtil from '../../../../../config/timeUtil';
import '../../../../../assets/styles/NonProfitBasket.css';

class NonProfitBasket extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
      reserve: false
    };

    this.toggleReservationCard = this.toggleReservationCard.bind(this);
  }

  toggleDetailedCard() {
    const { expanded } = this.state;
    let state;

    if (expanded) {
      state = false;
    } else {
      state = true;
    }

    this.setState({
      expanded: state
    });
  }

  toggleReservationCard() {
    const { reserve } = this.state;
    let state;

    if (reserve) {
      state = false;
    } else {
      state = true;
    }

    this.setState({
      reserve: state
    });
  }

  render() {
    const { expanded, reserve } = this.state;
    const { currentBasket, _scheduleBasket } = this.props;

    let formattedTime = timeUtil.fromEpoch(
      currentBasket.pick_up_time,
      'ddd, MMM Do'
    );

    const expandCard = expanded ? (
      <ExpandedCard currentBasket={currentBasket} />
    ) : (
      <DisplaySomeItems items={currentBasket.items} />
    );

    const basketID = currentBasket.basket_id;

    const reserveCard = reserve ? (
      <DateTimePicker
        _basketID={basketID}
        _message={`Basket ${basketID} is scheduled for pickup on `}
        _phoneNumber={currentBasket.phone_number}
        _scheduleBasket={_scheduleBasket}
        _toggleReservationCard={this.toggleReservationCard}
      />
    ) : null;

    return (
      <section className="np-basket">
        {reserveCard}
        <button
          className="reserve-btn"
          onClick={() => this.toggleReservationCard()}
        >
          RESERVE
        </button>
        <p>{currentBasket.company_name}</p>
        <p>{currentBasket.operating_hrs}</p>
        <p>Pick-Up By: {formattedTime}</p>
        {expandCard}
        <button
          className="details-collapse-btn"
          onClick={() => this.toggleDetailedCard()}
        >
          {expanded ? 'COLLAPSE' : 'DETAILS'}
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
      <DisplayAllItems _items={currentBasket.items} />
      <ContactInfoCard _contactInfo={contactInfo} />
    </div>
  );
};

const DisplayAllItems = ({ _items }) =>
  _items.map((elem, idx) => {
    return (
      <p key={idx}>
        {elem.item} - {elem.weight} lbs
      </p>
    );
  });

export default NonProfitBasket;
