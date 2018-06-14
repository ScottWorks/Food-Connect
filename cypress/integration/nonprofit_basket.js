describe('Non-Profit', function() {
  it('Create Wishlist Item', function() {
    cy.visit('https://www.food-connect.net');
    cy.get('.landing_login_button').click();
    cy.get('input[name=username]').type('joe');
    cy.get('input[type=password]').type('test');
    cy.get('button[type=submit]').click();
    cy.get('.wishlist-add-container input[type=text]').type('cookies');
    cy.get('.wishlist-add-container form').submit();
  });
});

describe('Non-Profit Login', function() {
  it('Edit Wishlist Item', function() {
    cy.visit('https://www.food-connect.net');
    cy.get('.landing_login_button').click();
    cy.get('input[name=username]').type('joe');
    cy.get('input[type=password]').type('test');
    cy.get('button[type=submit]').click();
    cy.get('.wishlist-items-container button')
      .contains('Edit')
      .click();
    cy.get('.editable-wishlist-input input').type('bananas');
    cy.get('.editable-wishlist-input form').submit();
  });
});

describe('Non-Profit Login', function() {
  it('Delete Wishlist Item', function() {
    cy.visit('https://www.food-connect.net');
    cy.get('.landing_login_button').click();
    cy.get('input[name=username]').type('joe');
    cy.get('input[type=password]').type('test');
    cy.get('button[type=submit]').click();
    cy.get('.wishlist-items-container button')
      .contains('Delete')
      .click();
  });
});

// add two baskets, manually
describe('Non-Profit Login', function() {
  it('Cancel Basket', function() {
    cy.visit('https://www.food-connect.net');
    cy.get('.landing_login_button').click();
    cy.get('input[name=username]').type('joe');
    cy.get('input[type=password]').type('test');
    cy.get('button[type=submit]').click();
    cy.get('.schedule-basket-btns button')
      .contains('Remove')
      .click();
  });
});

describe('Non-Profit Login', function() {
  it('Confirm Basket', function() {
    cy.visit('https://www.food-connect.net');
    cy.get('.landing_login_button').click();
    cy.get('input[name=username]').type('joe');
    cy.get('input[type=password]').type('test');
    cy.get('button[type=submit]').click();
    cy.get('.confirm-pickup-btn button')
      .contains('Confirm Pickup')
      .click();
  });
});
