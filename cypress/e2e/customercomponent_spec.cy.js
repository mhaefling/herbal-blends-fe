describe('Customer Component Spec', () => {
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
		cy.get('button').eq(1).click()
  })

	it('Customer Component Layout', () => {
		cy.get('h2').should('contain', 'Customers').should('be.visible')
		cy.get('td.customerType').should('contain', 'Type:').should('be.visible')
		cy.get('td.customerFirstName').should('contain', 'First Name:').should('be.visible')
		cy.get('td.customerLastName').should('contain', 'Last Name:').should('be.visible')
		cy.get('td.customerEmail').should('contain', 'Email:').should('be.visible')
		cy.get('td.customerAddress').should('contain', 'Address:').should('be.visible')
  })
})