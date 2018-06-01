import React from 'react';

function ContactInfoCard(props) {
  const { _contactInfo } = props;

  return (
    <div>
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
