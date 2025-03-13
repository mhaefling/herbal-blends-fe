describe('Customer Card Spec', () => {
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

	it('Customer Card Layout', () => {
		cy.get('img[alt="Customer Icon"]').should('be.visible')
		cy.get('td.customerFirstName').should('contain', 'Matt').should('be.visible')
		cy.get('td.customerLastName').should('contain', 'Haefling').should('be.visible')
		cy.get('td.customerEmail').should('contain', 'mhaefling@protonmail.com').should('be.visible')
		cy.get('td.customerAddress').should('contain', '123 main st.').should('be.visible')
  })
})