describe('Non-Profit Login', function() {
  it('Visit food-connect and login', function() {
    cy.visit('https://www.food-connect.net');
    cy.get('.landing_login_button')
      .click()
      .get('input[name=username]')
      .type('joe')
      .get('input[type=password]')
      .type('test')
      .get('button[type=submit]')
      .click()
      .wait(2000)
      .get('.wishlist-add-container input[type=text]')
      .type('cookies')
      .get('form')
      .trigger('onSubmit');
  });
});
