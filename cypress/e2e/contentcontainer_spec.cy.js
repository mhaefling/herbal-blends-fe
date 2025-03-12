describe('Content Container Spec', () => {
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
		cy.get('main.HBContent').should('be.visible');
		cy.get('nav.HBNavigation').should('be.visible');
		cy.get('section.HBMainContent').should('be.visible');
  })
})