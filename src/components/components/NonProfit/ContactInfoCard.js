import React from 'react';
import '../../../assets/styles/ContactInfoCard.css'

function ContactInfoCard(props) {
  const { _contactInfo } = props;

  return (
    <div className='contact-info-card-container'>
      <p>{_contactInfo.address}</p>
      <p>
        {_contactInfo.city}, {_contactInfo.state} {_contactInfo.zipCode}
      </p>
      <p>{_contactInfo.phoneNumber}</p>
      <p>
        {_contactInfo.adminFirstName} {_contactInfo.adminLastName}
      </p>
    </div>
  );
}

export default ContactInfoCard;
