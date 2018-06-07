import React from 'react';
import ContactInfoCard from '../../../../components/NonProfit/ContactInfoCard';
import DateTimePicker from '../../../../components/NonProfit/DateTimePicker';
import Dialog from 'material-ui/Dialog';

import * as timeUtil from '../../../../../config/timeUtil';

import '../../../../../assets/styles/ScheduleBasket.css';

class ScheduleBasket extends React.Component {
  constructor() {
    super();
    this.state = {
      update: false,
      open: false
    };

    this.handleModal = this.handleModal.bind(this);
    this.sendConfirmation = this.sendConfirmation.bind(this)
    this.toggleReservationCard = this.toggleReservationCard.bind(this);
  }

  handleModal(state) {
    this.setState({
      open: state
    });
  }

  sendConfirmation() {
    const {
      scheduledBasket,
      _confirmPickup
    } = this.props;

    const fakePhoneNumber = '13033496264';
    const basketID = scheduledBasket.basket_id;

    _confirmPickup(fakePhoneNumber, basketID)

    this.handleModal(false)
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
    const {
      scheduledBasket,
      _confirmPickup,
      _scheduleBasket,
      _cancelBasket
    } = this.props;

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
        <div>
        <button onClick={() => this.handleModal(true)}>
          Confirm Pickup
        </button>
          <Dialog
            modal={false}
            open={this.state.open}
            onRequestClose={() => this.handleModal(false)}
          >
            <h3>Are you sure?</h3>
            <button onClick={() => this.handleModal(false)}>Cancel</button>
            <button onClick={() => this.sendConfirmation()}>Submit</button>
          </Dialog>
            </div>
          {reserveCard}
        <button onClick={() => this.toggleReservationCard()}>Update</button>
        <button onClick={() => _cancelBasket(fakePhoneNumber, basketID)}>
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
