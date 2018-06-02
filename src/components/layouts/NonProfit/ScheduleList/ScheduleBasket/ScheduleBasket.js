import React from 'react';
import ContactInfoCard from '../../../../components/NonProfit/ContactInfoCard';
import * as timeConversion from '../../../../../config/timeConversion';

class ScheduleBasket extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { scheduledBasket, _cancelBasket } = this.props;

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

    return (
      <section>
        <button>Update</button>
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
