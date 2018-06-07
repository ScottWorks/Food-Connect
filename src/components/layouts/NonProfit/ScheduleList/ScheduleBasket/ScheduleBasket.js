import React from 'react';
import ContactInfoCard from '../../../../components/NonProfit/ContactInfoCard';
import DateTimePicker from '../../../../components/NonProfit/DateTimePicker';
import * as timeUtil from '../../../../../config/timeUtil';
import '../../../../../assets/styles/ScheduleBasket.css';

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
    console.log(this.state.update)
    const { update, scheduledDate, scheduledTime } = this.state;
    const { scheduledBasket, _scheduleBasket, _cancelBasket } = this.props;

    const fakePhoneNumber = '13033496264';

    let formattedTime = timeUtil.fromEpoch(
      scheduledBasket.scheduled_time,
      'ddd, MMM Do, h:mm a'
    );

    // let twilio_formattedTime = timeUtil.fromEpoch(
    //   scheduledBasket.scheduled_time,
    //   'ddd, MMM Do'
    // );

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
        _message={`Basket ${basketID} has been re-scheduled for pickup to `}
        _phoneNumber={scheduledBasket.phone_number}
        _scheduleBasket={_scheduleBasket}
        _toggleReservationCard={this.toggleReservationCard}
      />
    ) : null;

    return (
      <section className="basket">
        {reserveCard}
        <div className='schedule-basket-btns'>
        <button onClick={() => this.toggleReservationCard()}>Update</button>
          <button
            onClick={() =>
              _cancelBasket(fakePhoneNumber, scheduledBasket.basket_id)
            }
        >
          Remove
        </button>
        </div>
        <div className='sched-basket-info-container'>
        <p>{formattedTime}</p>
        <p>{scheduledBasket.company_name}</p>
        <ContactInfoCard _contactInfo={contactInfo} />
        <hr/>
        </div>
      </section>
    );
  }
}

export default ScheduleBasket;
