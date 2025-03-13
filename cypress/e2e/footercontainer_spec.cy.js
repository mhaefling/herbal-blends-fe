describe('Footer Container Spec', () => {
	beforeEach(() => {
		cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions', {
      statusCode: 200,
      fixture: 'all_subscriptions.json'
    })
    .as('fetchAllSubscriptions');

		cy.intercept('GET', 'http://localhost:3000/api/v1/customers', {
      statusCode: 200,
      fixture: 'all_customers.json'
    })
    .as('fetchAllCustomers');

		cy.intercept('GET', 'http://localhost:3000/api/v1/teas', {
      statusCode: 200,
      fixture: 'all_teas.json'
    })
    .as('fetchAllTeas');
		
    cy.visit('http://localhost:5173')
		cy.wait('@fetchAllSubscriptions')
		cy.wait('@fetchAllCustomers')
		cy.wait('@fetchAllTeas')
  })

	it('Footer Layout', () => {
		cy.get('a').should('contain', 'About').should('be.visible');
		cy.get('a').should('contain', 'Submit Support Ticket').should('be.visible');
		cy.get('a').should('contain', 'Contact Admin').should('be.visible');
		cy.get('p').should('contain', '2025 Herbal Blends - All Rights Reserved.').should('be.visible')
  })
})