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
        {/* <ExpandedCard currentBasket={currentBasket} /> */}
        {expandCard}
        <button onClick={this.resizeCard}>Show All</button>
        <button onClick={() => _showContactInfo(currentBasket)}>Contact</button>
      </section>
    );
  }
}

const ExpandedCard = ({ currentBasket, expanded }) => (
  <DisplayAllItems items={currentBasket.items} />
);

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

      {() => {
        if (basketSize > 3) {
          return <p>{basketSize - 3} more item(s) in basket...</p>;
        } else if (basketSize <= 3) {
          return <p>No more item(s) in basket...</p>;
        }
      }}
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

// const DisplayItems = ({ items, expanded }) =>
//   items.map((elem, idx) => {
//     if (!expanded) {
//       if (idx < 3) {
//         return (
//           <p>
//             {elem.item} - {elem.weight} lbs
//           </p>
//         );
//       }
//     } else {
//       return (
//         <p>
//           {elem.item} - {elem.weight} lbs
//         </p>
//       );
//     }
//   }
//   );

export default NonProfitBasket;
