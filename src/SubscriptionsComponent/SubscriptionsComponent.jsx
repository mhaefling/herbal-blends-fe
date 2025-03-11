import { Link } from 'react-router-dom'
import teaIcon from '../assets/teaIcon.png'
import './SubscriptionsComponent.css'

function SubscriptionsComponent({ subscriptions }) {
	
	const all_subs = subscriptions.map(sub => {
		console.log(sub)
		return (
			<tbody key={sub.id}>
				<tr>
					<td className="teaIcon">
						<img src={teaIcon} alt="Little tea icon for each subscription" />
					</td>
					<td alt="Subscription Title">
						<Link to={`/subscriptions/${sub.id}`}>
							{sub.attributes.title}
						</Link>
					</td>
					<td alt="Total Customers Subscribed">
						<p>{sub.attributes.total_active_customers}</p>
					</td>
				</tr>
		</tbody>
		)
	})
	return (
		<section className="HBSubList">
			<h2>Subscriptions</h2>
			<table>
				{all_subs}
			</table>
		</section>
	)
}

export default SubscriptionsComponent