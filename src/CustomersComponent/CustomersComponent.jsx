import CustomerCard from '../CustomerCard/CustomerCard'
import './CustomersComponent.css'

function CustomersComponent({ customers }) {

	const all_customers = customers.map(customer => {
		return (
			<CustomerCard className="customerCard" key={customer.id} customer={customer} />
		)
	})

	return (
		<section className="HBCustomerList">
		<h2>Customers</h2>
		<table>
			<thead className="SubSections">
				<tr>
					<td><p>Type:</p></td>
					<td><p>First Name:</p></td>
					<td><p>Last Name:</p></td>
					<td><p>Email:</p></td>
					<td><p>Address:</p></td>
				</tr>
			</thead>
		</table>
			{all_customers}
	</section>
	)
}

export default CustomersComponent