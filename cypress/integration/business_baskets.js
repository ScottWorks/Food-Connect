it('test business baskets get, put, post and delete', () => {
  //login business view
  cy.visit('http://localhost:3000/#/login')
  cy.get('input[name="username"]')
    .type('Sim')
  cy.get('input[type="password"]')
    .type('test')
  cy.get('button')
    .click()

  //test baskets
  cy.get('input[placeholder="Item Name"]')
    .type('Bagel')
  cy.get('input[placeholder="Weight in Pounds"]')
    .type('150')
  cy.get('input[placeholder="Fair Market Value"]')
    .type('32.50')
  cy.get('DatePicker')
    .click()
  cy.get('TimePicker')
    .click()
})