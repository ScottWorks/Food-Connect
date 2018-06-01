import React from 'react';
import moment from 'moment';
import * as utilFunc from '../../../../../config/timeConversion';
import ContactInfoCard from '../../../../components/NonProfit/ContactInfoCard';

class ScheduleBasket extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { scheduledBasket } = this.props;

    // const scheduledTime = moment(Number(scheduledBasket.scheduled_time));

    // const formattedPickupTime = moment(scheduledTime._d).format(
    //   'ddd, MMM Do, h:mm a');

    let formattedTime = utilFunc.fromEpoch(
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
        <p>Scheduled Baskets</p>
        <p>{formattedTime}</p>
        <p>{scheduledBasket.company_name}</p>
        <ContactInfoCard _contactInfo={contactInfo} />
      </section>
    );
  }
}

export default ScheduleBasket;
