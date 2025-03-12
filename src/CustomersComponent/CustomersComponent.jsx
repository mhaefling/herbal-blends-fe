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
			<thead>
				<tr>
					<td className="customerType"><p>Type:</p></td>
					<td className="customerFirstName"><p>First Name:</p></td>
					<td className="customerLastName"><p>Last Name:</p></td>
					<td className="customerEmail"><p>Email:</p></td>
					<td className="customerAddress"><p>Address:</p></td>
				</tr>
			</thead>
		</table>
			{all_customers}
	</section>
	)
}

export default CustomersComponent