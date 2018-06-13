/*
 * Test Registration Page
 */

//  Can Visit Registration Page and continue on to the next Registration form Panel
it('Test Registration Page', ()=> {
    cy.visit('http://localhost:3000/#/register');
    cy.get('.registration-form').get('#non-profit').check().get('input').contains('Continue').click();

});

// //  Can Visit Registration Page and continue on to the next Registration form Panel
it('Test Registration Page', ()=> {
    cy.visit('http://localhost:3000/#/register');
    cy.get('.registration-form').get('#non-profit').check().get('input').contains('Continue').click();
})

/*
 * Test Login Page
 * Can login to Non-Profit View
 */

it('Test Login', ()=> {
    cy.visit('http://localhost:3000/#/login');
    cy.get('.login-form').get('input[name="username"]').type('Al')
    cy.get('.login-form').get('input[name="username"]').next().next().type('test');
    cy.get('.login-form').get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:3000/#/nonprofit');
});

// Test Add to Wishlist
it('Test Adding to Wishlist', ()=> {
    cy.get('.wishlist-add-container').get('form').get('input[placeholder="Add Items..."]').type('Bread').type('{enter}')
})

/*
 * Test Login Page
 * Can login to Business View
 */
it('Test Login', ()=> {
    cy.visit('http://localhost:3000/#/login');
    cy.get('.login-form').get('input[name="username"]').type('Mark')
    cy.get('.login-form').get('input[name="username"]').next().next().type('test');
    cy.get('.login-form').get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:3000/#/business', {timeout: 10000});
});

/*
 * Test Login Page
 * Can login to Business View
 * And Click on Make a Basket
 */

 it('Test Make a Basket Click', ()=> {
    cy.visit('http://localhost:3000/#/login');
    cy.get('.login-form').get('input[name="username"]').type('Mark')
    cy.get('.login-form').get('input[name="username"]').next().next().type('test');
    cy.get('.login-form').get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:3000/#/business', {timeout: 10000});
    cy.get('.BaksetTable')
 })