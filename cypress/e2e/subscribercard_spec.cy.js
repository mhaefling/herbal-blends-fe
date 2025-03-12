describe('Subscriber Cards Spec', () => {
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

	describe('Subscription Card Layout', () => {
		it('Confirms all elements are displayed', () => {
	
			cy.get('img[alt="Subscription icon"]').should('exist').should('be.visible');
			cy.get('td.subName').should('contain', 'Green Tea Lovers').should('be.visible');
			cy.get('td.subTotal').should('contain', '2').should('be.visible');
			cy.get('td.subStatus').should('contain', 'Active').should('be.visible');
			cy.get('button').should('contain', 'Update Status').should('be.visible')
		})
	})

	describe('Subscription Card Funtionality', () => {
		it('Subscription Card Status Update', () => {
			cy.intercept('PATCH', 'http://localhost:3000/api/v1/subscriptions/1', {
				statusCode: 200,
				fixture: 'update_sub_status.json'
			})
			.as('updateSubStatus');

			cy.intercept('GET', 'http://localhost:3000/api/v1/subscriptions', {
				statusCode: 200,
				fixture: 'all_subs_after_update.json'
			})
			.as('updateAllSubs');

			cy.get('button').last().click()
			cy.wait('@updateSubStatus')
			cy.wait('@updateAllSubs')
			cy.get('td.subStatus').should('contain', 'Deactive').should('be.visible');
		})
	})
})