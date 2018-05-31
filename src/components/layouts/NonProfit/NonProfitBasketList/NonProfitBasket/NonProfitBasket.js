import React from 'react';

class NonProfitBasket extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };

    this.resizeCard = this.resizeCard.bind(this);
  }

  resizeCard() {
    const { expanded } = this.state;
    let resize;

    if (expanded) {
      resize = false;
    } else {
      resize = true;
    }

    this.setState({
      expanded: resize
    });
  }

  render() {
    const { expanded } = this.state;
    const { currentBasket, _showContactInfo } = this.props;

    const expandCard = expanded ? (
      <ExpandedCard currentBasket={currentBasket} />
    ) : (
      <DisplaySomeItems items={currentBasket.items} />
    );

    return (
      <section>
        <button>Reserve</button>
        <p>{currentBasket.company_name}</p>
        <p>{currentBasket.operating_hrs}</p>
        {expandCard}
        <button onClick={this.resizeCard}>
          {expanded ? 'Collapse' : 'Expand'}
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
      <DisplayContactInfo _contactInfo={contactInfo} />
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

const DisplayContactInfo = ({ _contactInfo }) => {
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
};

export default NonProfitBasket;
