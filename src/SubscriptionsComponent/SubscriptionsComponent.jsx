import SubscriberCard from '../SubscriberCard/SubscriberCard';
import './SubscriptionsComponent.css'

function SubscriptionsComponent({ subscriptions, setSubscriptions }) {

	var status = ""
	const all_subs = subscriptions.map(sub => {
		if (sub.attributes.status === true) {
			status = "Active"
		} else { 
			status = "Deactive"
		}

		return (
			<SubscriberCard className="subCard" key={sub.id} sub={sub} status={status} setSubscriptions={setSubscriptions} />
		)
	})
	
	return (
		<section className="HBSubList">
			<h2>Subscriptions</h2>
			<table>
				<thead>
					<tr>
						<td className="subType"><p>Type:</p></td>
						<td className="subName"><p>Subscription Name:</p></td>
						<td className="subTotal"><p>Total Customers:</p></td>
						<td className="subStatus"><p>Status:</p></td>
						<td className="subUpdate"><p>Update:</p></td>
					</tr>
				</thead>
			</table>
			{all_subs}
		</section>
	)
}

export default SubscriptionsComponent