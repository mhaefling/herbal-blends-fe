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
				</tr>
		</tbody>
		)
	})

	return (
		<section className="HBCustomerList">
		<h2>Customers</h2>
		<table>
			{all_customers}
		</table>
	</section>
	)
}

export default CustomersComponent