import customerIcon from '../assets/customericon.png'
import './CustomerCard.css'

function CustomerCard({ customer }) {

	return (
		<section className="HBCustomerCard">
			<table>
				<tbody>
					<tr>
						<td className="customerIcon"><img src={customerIcon} alt="Customer Icon" /></td>
						<td className="customerFirstName"><p>{customer.attributes.first_name}</p></td>
						<td className="customerLastName"><p>{customer.attributes.last_name}</p></td>
						<td className="customerEmail">
							<a href={`mailto:${customer.attributes.email}`} alt="Contact the admin of this site">{customer.attributes.email}</a>
						</td>
						<td className="customerAddress"><p>{customer.attributes.address}</p></td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default CustomerCard
