import React from 'react';
import ContactInfoCard from '../../../../components/NonProfit/ContactInfoCard';
import DateTimePicker from '../../../../components/NonProfit/DateTimePicker';
import * as timeConversion from '../../../../../config/timeConversion';

class ScheduleBasket extends React.Component {
  constructor() {
    super();
    this.state = {
      update: false
    };

    this.toggleReservationCard = this.toggleReservationCard.bind(this);
  }

  toggleReservationCard() {
    const { update } = this.state;
    let state;

    if (update) {
      state = false;
    } else {
      state = true;
    }

    this.setState({
      update: state
    });
  }

  render() {
    const { update, scheduledDate, scheduledTime } = this.state;
    const { scheduledBasket, _scheduleBasket, _cancelBasket } = this.props;

    let formattedTime = timeConversion.fromEpoch(
      scheduledBasket.scheduled_time,
      'ddd, MMM Do, h:mm a'
    );

    const contactInfo = {
      address: scheduledBasket.street_address,
      city: scheduledBasket.city,
      state: scheduledBasket.state,
      zipCode: scheduledBasket.zip_code,
      phoneNumber: scheduledBasket.phone_number,
      adminFirstName: scheduledBasket.admin_first_name,
      adminLastName: scheduledBasket.admin_last_name
    };

    const basketID = scheduledBasket.basket_id;

    const reserveCard = update ? (
      <DateTimePicker
        _basketID={basketID}
        _scheduleBasket={_scheduleBasket}
        _toggleReservationCard={this.toggleReservationCard}
      />
    ) : null;

    return (
      <section>
        {reserveCard}
        <button onClick={() => this.toggleReservationCard()}>Update</button>
        <button onClick={() => _cancelBasket(scheduledBasket.basket_id)}>
          Remove
        </button>
        <p>{formattedTime}</p>
        <p>{scheduledBasket.company_name}</p>
        <ContactInfoCard _contactInfo={contactInfo} />
      </section>
    );
  }
}

export default ScheduleBasket;
