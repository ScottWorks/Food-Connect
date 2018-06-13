//Runs through the signup process, and creates a business acount

describe('Testing functionality of creating an account',()=>{
    it('Signup as a business',()=>{
        cy.visit('http://localhost:3000')

        cy.get('.landing_signup_button')
            .click();
        
        cy.get('#business')
            .click();

        cy.get('#button1')
            .click();
        
        cy.get('#input1')
            .click()
            .type('Bob\'s Burgers');

        cy.get('#input2')
            .click()
            .type('Restaurant');

        cy.get('#input3')
            .click()
            .type(8675309);

        cy.get('#button2')
            .click();
        
        cy.get('.location-search-input')
            .click()
            .type('530 E 500 N Provo UT');

        cy.get('.suggestion-item')
            .click();
        
        cy.get('#button3')
            .click();

        cy.get('#input4')
            .click()
            .type('Bob');

        cy.get('#input5')
            .click()
            .type('Belcher');

        cy.get('#input6')
            .click()
            .type('8675309');

        cy.get('#input7')
            .click()
            .type('Bob\'s Burgers');

        cy.get('#input8')
            .click()
            .type('Bob');

        cy.get('#input9')
            .click()
            .type('test');

        cy.get('#input10')
            .click()
            .type('test');

        //cy.get('#button4')
            // .click();
    })
})