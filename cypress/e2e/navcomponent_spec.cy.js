describe('Nav Component Spec', () => {
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

	it('Nav Component Layout', () => {
		cy.get('p').should('contain', 'Categories:').should('be.visible')
		cy.get('button').should('contain', 'Subscriptions').should('be.visible')
		cy.get('button').should('contain', 'Customers').should('be.visible')
		cy.get('button').should('contain', 'Teas').should('be.visible')


  })
})