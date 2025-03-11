import customerIcon from '../assets/customericon.png'
import './CustomersComponent.css'

function CustomersComponent({ customers }) {

	const all_customers = customers.map(customer => {
		return (
			<tbody key={customer.id}>
				<tr>
					<td className="customerIcon">
						<img src={customerIcon} alt="Little Customer Icon for reach customer." />
					</td>
					<td alt="customerName">
							<p>{customer.attributes.first_name}</p>
					</td>
					<td alt="customerName">
							<p>{customer.attributes.last_name}</p>
					</td>
					<td alt="customerEmail">
						<p>{customer.attributes.email}</p>
					</td>
					<td>
						<p>{customer.attributes.address}</p>
					</td>
				</tr>
		</tbody>
		)
	})

	return (
		<section className="HBCustomerList">
		<h2>Customers</h2>
		<table>
			<thead className="SubSections">
				<tr>
					<td>
						<p>Type:</p>
					</td>
					<td>
						<p>First Name:</p>
					</td>
					<td>
						<p>Last Name:</p>
					</td>
					<td>
						<p>Email:</p>
					</td>
					<td>
						<p>Address:</p>
					</td>
				</tr>
			</thead>
			{all_customers}
		</table>
	</section>
	)
}

export default CustomersComponent